import { navEventListners, searchFunction, topBar,navBar} from "./Importable_JS_Files/top-navbar.js";
import { eliteDelivery,thirtyOff } from "./Importable_JS_Files/elite-thirtyoff(notForIndex).js";
import {
  socialPayment,
  bottom,
  footer,
} from "./Importable_JS_Files/bottomSection.js";

import { womensCategory } from "./Importable_JS_Files/category(both).js";

let currentUser=JSON.parse(localStorage.getItem('currentUser'))
if(currentUser){
  var firstName=currentUser.firstName
}

document.getElementById('top').innerHTML=topBar()
document.getElementById('navbar').innerHTML=navBar(firstName)
document.getElementById('category').innerHTML=womensCategory()

localStorage.setItem('search',JSON.stringify({})) //clearing local storage of search


document.getElementById("elite-delivery").innerHTML = eliteDelivery()
document.getElementById('thirtyoff').innerHTML=thirtyOff()


document.getElementById("social-payment").innerHTML = socialPayment();
document.getElementById("bottom").innerHTML = bottom();
document.getElementById("footer").innerHTML = footer();


//------------redirects and event listners--------------
navEventListners()
searchFunction() //Enabling search function

var allRedirects =document.querySelectorAll('#containerOne,#containerTwo>div,#containerFour>div')
allRedirects.forEach(element => {
element.addEventListener('click',()=>{
  localStorage.setItem('currentPreference',JSON.stringify({currentePreference:'women'}))
  window.location.href='All-products.html'
})
});