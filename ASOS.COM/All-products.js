import {navEventListners, searchFunction, topBar, navBar } from "./Importable_JS_Files/top-navbar.js";

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

import mensData from "./Data/Mens-data.js";
import womensData from "./Data/Womens-data.js";




var currentePreference=JSON.parse(localStorage.getItem('currentPreference')).currentePreference

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if(currentUser){
  var firstName=currentUser.firstName
}

document.getElementById("top").innerHTML = topBar();
document.getElementById("navbar").innerHTML = navBar(firstName);
searchFunction()

if(currentePreference=='men'){
  document.getElementById('category').innerHTML=mensCategory()
}
else if(currentePreference=='women'){
  document.getElementById('category').innerHTML=womensCategory()
}

document.getElementById("elite-delivery").innerHTML = eliteDelivery();
// document.getElementById("thirtyoff").innerHTML = thirtyOff();

document.getElementById("social-payment").innerHTML = socialPayment();
document.getElementById("bottom").innerHTML = bottom();
document.getElementById("footer").innerHTML = footer();




function appendProducts(data){
  var productsContainer=document.getElementById('products-section')
  productsContainer.innerHTML=""
  if(data.length<1 || !data){
    productsContainer.innerHTML=`<h1>Product not found, try again<h1>`
    localStorage.setItem('search',JSON.stringify({}))
  }
  else{

    data.forEach(element => {
        let div =document.createElement('div')
        div.className='singleDivs'
  
        div.addEventListener('click',()=>{
          localStorage.setItem('currentProduct',JSON.stringify(element))
          window.location.href='single-product.html'
        })
  
        let imageDiv=document.createElement('div')
        imageDiv.className="imageDiv"
        let image=document.createElement('img')
        image.src=element.onHover
        imageDiv.append(image)
  
        
        let titleDiv=document.createElement('div')
        titleDiv.className="titleDiv"
        let title=document.createElement('p')
        title.innerText=element.title
        titleDiv.append(title)
        
        let priceDiv=document.createElement('div')
        priceDiv.className='priceDiv'
        let price=document.createElement('p')
        price.innerText=element.price
        priceDiv.append(price)
  
        div.append(imageDiv,titleDiv,priceDiv)
      
  
  
        productsContainer.append(div)
    });
    let viewed=document.createElement('p')
    viewed.innerText=`You've viewed ${data.length} of ${data.length} products`
    document.getElementById('viewed').append(viewed)
  }
}

var searchInput=JSON.parse(localStorage.getItem('search'))?JSON.parse(localStorage.getItem('search')) : false
if(searchInput.input){
  let input=searchInput.input
  let search=mensData.filter(ele=>{
    return ele.title.includes(input.toLowerCase()) || ele.title.includes(input.toUpperCase())
  })
  womensData.forEach(ele=>{
    if(ele.title.includes((input.toLowerCase())) || ele.title.includes(input.toUpperCase())){
      search.push(ele)
    }
  })
  appendProducts(search)
  setTimeout(() => {
    localStorage.setItem('search',JSON.stringify({}))
  }, 10000);
}
else{
  if(currentePreference=="men"){
    document.getElementById("headText").innerText=`Men's Clothing, Accessories & Grooming Trend Edit | ASOS`
    document.querySelector('#leftnav>div:nth-child(3)').style.backgroundColor='#525050'
    appendProducts(mensData)

  }
  else if(currentePreference=='women'){
    document.getElementById("headText").innerText=`Women's Clothing, Accessories & Beauty Trend Edit | ASOS`
    document.querySelector('#leftnav>div:nth-child(2)').style.backgroundColor='#525050'
    document.getElementById("category-inside").style.width='75%'
    appendProducts(womensData)
  }
}

//------------------event listners of nav bar
navEventListners()