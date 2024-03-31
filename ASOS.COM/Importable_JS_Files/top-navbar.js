function searchFunction(){
  document.getElementById('searchButton').addEventListener('click',()=>{
    let input=document.getElementById('searchbox').value
    localStorage.setItem('search',JSON.stringify({input:input}))
    window.location.href='All-products.html'
  })
}

function navEventListners(){
//-------------------navbar scrolling feature
  let lastScrollTop = 0;
  window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {
      // Scroll down
      document.getElementById("navbar").style.top = "-50px"; // Adjust according to navbar height
    } else {
      // Scroll up
      document.getElementById("navbar").style.top = "0";
    }
    lastScrollTop = currentScroll;
  });
//----------------men & women page redirect-----------------
  let insideNav=document.getElementsByClassName('insidenav')
  insideNav[2].addEventListener('click',()=>{
    localStorage.setItem('currentPreference',JSON.stringify({currentPreference:'men'}))
    window.location.href='MEN.html'
  })
  insideNav[1].addEventListener('click',()=>{
    localStorage.setItem('currentPreference',JSON.stringify({currentPreference:'women'}))
    window.location.href='WOMEN.html'
  })
//-----------------------signout functionality--------------------
  let signOut =document.getElementById('signOut')
  if(signOut){
    signOut.addEventListener('click',()=>{
      localStorage.setItem('currentUser',JSON.stringify({}))
      alert('Signed out')
      
    })
  }
//----------------bag/cart page--------------------------
  let buttons =document.getElementsByClassName('category-box')
  buttons[2].addEventListener('click',()=>{
    window.location.href='bag.html'
  })


}

function topBar() {
  return `<div>
    <div class="insidetop">Marketplace</div>
    <div class="insidetop">Help & FAQs</div>
    <div class="insidetop">
      <img id="countrylogo" src="index images/india.png" alt="" />
    </div>
  </div>`;
}

function navBar(firstName) {
  function forLogin(firstName){
    if(firstName){
      return`<p> Hi ${firstName}</p>
      <a href="" id='signOut'>Sign out</a>`
    }
    else{
      return`<a href="Sign-in.html">Sign In | </a>
      <a href="join.html">Join</a>`
    }
  }
  return `<div id="leftnav">
    <div class="insidenav">
    <a href="index.html"><img id="asoslogo" src="index images/asos logo black.png" alt="" /></a>
    </div>
    <div class="insidenav">WOMEN</div>
    <div class="insidenav">MEN</div>
    <div id="searchDiv">
    <input
    id="searchbox"
    type="text"
    placeholder="Search for items and brands"
  />
<button id="searchButton">&#x1F50D</button>
</div>
  </div>

  <div id="rightnav">
    <div class="category-box">
      <img src="index images/my profile img.png" alt="" />    
      <div class="subcategory-overlay">
        <div>
        ${forLogin(firstName)}
        </div>

  <div class="div-inside-overlay"><a href=""><img src="index images/my profile(inside).png" alt="my profile"> <p>My Account</p></a></div>
  <div class="div-inside-overlay"><a href=""><img src="index images/my orders.png" alt="my orders"> <p>My Orders</p></a></div>
  <div class="div-inside-overlay"><a href=""><img src="index images/returns.png" alt="returns"> <p>Returns Information</p></a></div>
  <div class="div-inside-overlay"><a href=""><img src="index images/contact preferences.png" alt="contact preferences"> <p>Contact Preferences</p></a></div>


      </div>
    </div>

<div class="category-box">
  <img src="index images/whishlist img.png" alt="" />
</div>

<div class="category-box">
  <img src="index images/bag img.png" alt="" />
</div>

    
    
  </div>`;
}

export {navEventListners, searchFunction, topBar, navBar };
