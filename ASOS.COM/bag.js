//import section(import parts of DOM)
import { navEventListners, searchFunction, topBar, navBar } from "./Importable_JS_Files/top-navbar.js";
import {
  eliteDelivery,
  thirtyOff,
} from "./Importable_JS_Files/elite-thirtyoff(notForIndex).js";

import {
  socialPayment,
  bottom,
  footer,
} from "./Importable_JS_Files/bottomSection.js";

import {
  mensCategory,
  womensCategory,
} from "./Importable_JS_Files/category(both).js";

var currentePreference = JSON.parse(localStorage.getItem("currentPreference"))
  ? JSON.parse(localStorage.getItem("currentPreference")).currentePreference
  : false; //taking the preferences for condiotional appending

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
  var firstName=currentUser.firstName
} //extracting the current use name

document.getElementById("top").innerHTML = topBar(); //appending navbar
document.getElementById("navbar").innerHTML = navBar(firstName); //appending navbar with sending the current logged in users name for greeting him
localStorage.setItem('search',JSON.stringify({})) //clearing local storage of search
searchFunction() //Enabling search function

//conditional appending of caterogy section based on preference
if (currentePreference == "men") {
  document.getElementById("category").innerHTML = mensCategory();
  document.querySelector("#leftnav>div:nth-child(3)").style.backgroundColor =
  "#525050";
} else if (currentePreference == "women") {
  document.getElementById("category").innerHTML = womensCategory();
  document.querySelector("#leftnav>div:nth-child(2)").style.backgroundColor =
  "#525050";
} else if (!currentePreference) {
  document.getElementById("category").innerHTML = mensCategory();
  document.querySelector("#leftnav>div:nth-child(3)").style.backgroundColor =
  "#525050";
}

document.getElementById("elite-delivery").innerHTML = eliteDelivery(); //appending 30% section
// document.getElementById("thirtyoff").innerHTML = thirtyOff(); //this part was remove from the original site so I also removed it for my site

document.getElementById("social-payment").innerHTML = socialPayment(); //appending social media links and payments that accepts by the original site
document.getElementById("bottom").innerHTML = bottom(); //apppending bottom section
document.getElementById("footer").innerHTML = footer(); //apppendig footer section


//function to extract the color from product title
function getLastWord(str) {
  // Trim any trailing white spaces
  str = str.trim();

  // Split the string into an array of words
  let words = str.split(/\s+/);

  // Return the last word
  return words[words.length - 1].toUpperCase();
}
//function to append bag data
function appendInBag(data) {
  return ` <div class="products">
    <div class="image">
        <img src="${data.onHover}" alt="">
    </div>
    <div class="details">
        <div class="price-cross-title">
            <div><p>${data.price}</p>
            <p>${data.title}</p>
        </div>
            <h1 id=${data.id} class='cross'>×</h1>
        </div>    
            
            <div class="variant">
                <p class="color">${getLastWord(data.title)}</p>
                <select name="" class="">
                    <option value="">XS</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">2XL</option>
                </select>
                <select id=${data.id}  name="" class="count">
                    <option selected="selected" value="1">1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                    <option value=5>5</option>
                    <option value=6>6</option>
                    <option value=7>7</option>
                    <option value=8>8</option>
                    <option value=9>9</option>
                    <option value=10>10</option>
                </select>
            </div>
            <div class="save-for-later">
                <div class="heart"> <!--<img src="MEN_images/heart-empty.png" alt=""> --></div>
                <p>Save for later</p>
            </div>
        <hr>
    </div>
    
</div>`;
}
//function to get the price as number(removing the £ sign)
function removeFirstLetter(str) {
  // Check if the string is not empty and has more than one character
  if (str.length > 1) {
    // Return the substring starting from the second character (index 1)
    return +str.substring(1);
  } else {
    // If the string is empty or has only one character, return an empty string
    return "";
  }
}
//function to get quantity of the item( filtering the duplicate)
function filterUniqueByIdWithCount(data) {
  let uniqueData = [];
  let idCounts = {};

  data.forEach((obj) => {
    if (!idCounts.hasOwnProperty(obj.id)) {
      // If the ID is encountered for the first time, initialize count to 1
      idCounts[obj.id] = 1;
      uniqueData.push(obj);
    } else {
      // If the ID is encountered again, increment count
      idCounts[obj.id]++;
    }
  });

  // Add count property to each object in uniqueData array
  uniqueData.forEach((obj) => {
    obj.duplicateCount = idCounts[obj.id]; // Subtract 1 to exclude the original occurrence(optional)
  });

  return uniqueData;
}
//function to update the total in bag
function updateTotal() {
  let total = cleanData.reduce(function (acc, ele) {
    return acc + removeFirstLetter(ele.price) * ele.duplicateCount;
  }, 0);
  document.getElementById("total").textContent = `£ ${parseFloat(total).toFixed(
    2
  )}`;
}

let bagData = JSON.parse(localStorage.getItem("bagData"))
  ? JSON.parse(localStorage.getItem("bagData"))
  : false;      //getting the raw data from local storage for bag/cart
  if(bagData){
    var cleanData = filterUniqueByIdWithCount(bagData); //filtering the data to get duplicate data(multiple time added in cart)
  }



//showing cart data only if user is logged in
if(currentUser){
  if (bagData.length) {
    // console.log('here')
    document.getElementById("appendSection").innerHTML = "";
    cleanData.forEach(
      (element) =>
        (document.getElementById("appendSection").innerHTML +=
          appendInBag(element))
    );
    updateTotal();

    //Changing(Increase/Decrease) in product quantitiy & Updating the total ammount
    var quantity = document.querySelectorAll(".count");
    quantity.forEach(
      (element, i) => (element.value = cleanData[i].duplicateCount)
    );
    quantity.forEach((DOMElements) => {
      DOMElements.addEventListener("change", (event) => {
        cleanData.forEach((dataElement) => {
          if (DOMElements.id == dataElement.id) {
            dataElement.duplicateCount = DOMElements.value;
            updateTotal();
          }
        });
      });
    });
    
      //____________Removing items from cart/bag________________________
      var cross = document.querySelectorAll(".cross");
      if (cross) {
        cross.forEach((crossElements) => {
          crossElements.addEventListener("click", () => {
            let cartData = JSON.parse(localStorage.getItem("bagData"));
            let updatecart = cartData.filter((ele) => {
              return ele.id != crossElements.id;
            });
            localStorage.setItem("bagData", JSON.stringify(updatecart));
            window.location.href = "bag.html";
          });
        });
      }
      //______________________Checkout Button______________________________
      
      document.getElementById("checkout").addEventListener("click", () => {
        alert("Feature is not live yet");
      });
  }
  else{
document.getElementById("emptyBag").src='index images/blank cart.png'
document.getElementById("rightside").style.display='none'
  }
}
else{
  document.getElementById("rightside").style.display='none'
}


//---------------navbar redirects and other event listners--------------

navEventListners()