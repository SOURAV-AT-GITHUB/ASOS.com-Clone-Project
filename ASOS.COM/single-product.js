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

import { mensCategory,womensCategory } from "./Importable_JS_Files/category(both).js";


var currentePreference=JSON.parse(localStorage.getItem('currentPreference')) ? JSON.parse(localStorage.getItem('currentPreference')).currentePreference : false

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
  var firstName=currentUser.firstName
}

document.getElementById("top").innerHTML = topBar();
document.getElementById("navbar").innerHTML = navBar(firstName);
setTimeout(() => {
  localStorage.setItem('search',JSON.stringify({})) //clearing local storage of search but after 15 seconds
}, 15000);

if(currentePreference=='men'){
  document.getElementById('category').innerHTML=mensCategory()
}
else if(currentePreference=='women'){
  document.getElementById('category').innerHTML=womensCategory()
}
else if(!currentePreference){
  document.getElementById('category').innerHTML=mensCategory()
}

document.getElementById("elite-delivery").innerHTML = eliteDelivery();
// document.getElementById("thirtyoff").innerHTML = thirtyOff();

document.getElementById("social-payment").innerHTML = socialPayment();
document.getElementById("bottom").innerHTML = bottom();
document.getElementById("footer").innerHTML = footer();


if(currentePreference=="men"){
    document.querySelector('#leftnav>div:nth-child(3)').style.backgroundColor='#525050'
  }
  else if(currentePreference=='women'){
    document.querySelector('#leftnav>div:nth-child(2)').style.backgroundColor='#525050'
  }




  function getLastWord(str) {
    // Trim any trailing white spaces
    str = str.trim();
  
    // Split the string into an array of words
    let words = str.split(/\s+/);
  
    // Return the last word
    return (words[words.length - 1]).toUpperCase()
  }
var currentProduct=JSON.parse(localStorage.getItem('currentProduct'))
document.getElementById("headText").innerText=currentProduct.title
document.getElementById('image').src=currentProduct.onHover
document.getElementById('title').textContent=currentProduct.title
document.getElementById('price').textContent=currentProduct.price
document.getElementById('color').textContent=`COLOR: ${getLastWord(currentProduct.title)}`

document.getElementById('addToBag').addEventListener('click',addToBag)



function addToBag(){
  document.getElementById('addToBag').removeEventListener('click',addToBag)
    let cart=JSON.parse(localStorage.getItem('bagData')) ? JSON.parse(localStorage.getItem('bagData')) : []
    let currentProduct = JSON.parse(localStorage.getItem('currentProduct')) ? JSON.parse(localStorage.getItem('currentProduct')) : false
    if(currentProduct){
      cart.push(currentProduct)
      localStorage.setItem("bagData",JSON.stringify(cart))
      document.querySelector('#addToBag>p').textContent='✔ ADDED'
      setTimeout(() => {
        document.querySelector('#addToBag>p').textContent='ADD TO BAG'
        document.getElementById('addToBag').addEventListener('click',addToBag)
      }, 3000);
    }
}

//-------------------event listners----------
navEventListners()
searchFunction() //Enabling search function
