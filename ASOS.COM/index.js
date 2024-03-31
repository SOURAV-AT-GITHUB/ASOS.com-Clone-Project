import { 
  navEventListners,
  searchFunction,
  topBar,
  navBar,
} from "./Importable_JS_Files/top-navbar.js";
import {
  socialPayment,
  bottom,
  footer,
} from "./Importable_JS_Files/bottomSection.js";

localStorage.setItem('currentPreference',JSON.stringify({currentPreference:'men'}))

let currentUser=JSON.parse(localStorage.getItem('currentUser'))
if(currentUser){
  var firstName=currentUser.firstName
}


document.getElementById("top").innerHTML = topBar();
document.getElementById("navbar").innerHTML = navBar(firstName);
localStorage.setItem('search',JSON.stringify({}))

// document.getElementById("thirtyoff").innerHTML = thirtyOff();


document.getElementById("social-payment").innerHTML = socialPayment();
document.getElementById("bottom").innerHTML = bottom();
document.getElementById("footer").innerHTML = footer();

//------------------Eventlistner section---------------------

navEventListners()
searchFunction()

let butttons= document.querySelectorAll('#thirtyoff>div,#mid-bottom>button')
butttons[0].addEventListener('click',()=>{
  window.location.href='WOMEN.html'
})
butttons[2].addEventListener('click',()=>{
  window.location.href='MEN.html'
})
butttons[3].addEventListener('click',()=>{
  window.location.href='WOMEN.html'
})
butttons[4].addEventListener('click',()=>{
  window.location.href='MEN.html'
})
