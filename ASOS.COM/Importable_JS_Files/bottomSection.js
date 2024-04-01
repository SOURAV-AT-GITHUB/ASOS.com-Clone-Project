function socialPayment(){
    return `      <div id="social">
    <a target="_blank" href="https://www.facebook.com/ASOS/"><img src="index images/facebook icon.svg" alt="facebook icon"></a>
    <a target="_blank" href="https://www.instagram.com/asos/"><img src="index images/instagram logo.jpg" alt="instagram icon"></a>
    <a target="_blank" href="https://www.snapchat.com/add/asosfashion"><img src="index images/spanchat logo.png" alt="snapchat icon"></a>
  </div>
<hr>
  <div id="payment">
    <img src="index images/visa-png.webp" alt="visa-png">
    <img src="index images/mastercard-png.webp" alt="mastercard-png">
    <img src="index images/pay-pal-png.webp" alt="pay-pal-png">
    <img src="index images/american-express-png.webp" alt="american-express-png">
    <img src="index images/visa-electron-png.webp" alt="visa-electron-png">
  </div>`
}

function bottom(){
    return `<div>
    <h4>HELP & INFORMATION</h4>
    <a href=""><p>Help</p></a>
    <a href=""><p>Track Order</p></a>
    <a href=""><p>Delivery</p></a>
    <a href=""><p>Sitemap</p></a>
  </div>

  <div>
    <h4>ABOUT ASOS</h4>
    <a href=""><p>About us</p></a>
    <a href=""><p>Careers at ASOS</p></a>
    <a href=""><p>Corporate Responsibility</p></a>
    <a href=""><p>Investors' site</p></a>

    
  </div>

  <div>
    <h4>MORE FROM ASOS</h4>
<a href=""><p>Mobile and ASOS apps</p></a>
<a href=""><p>ASOS Marketplace</p></a>
<a href=""><p>Gift vouchers</p></a>
<a href=""><p>Black Friday</p></a>
<a href=""><p>ASOS x Thrift+</p></a>
<a href=""><p>Discover the ASOS Credit Card</p></a>
<a href=""><p>Help Improve the ASOS Website</p></a>
  </div>

  <div>
    <h4>SHOPPING FROM:</h4>
    <div id='you-are-in'><p>Yore're in</p><img src="index images/india.png" alt=""><h3>| CHANGE</h3></div>
    <p>Some of our international sites:</p>
    <div id='flags'>
      <img src="index images/spain-flag.png" alt="spain">
      <img src="index images/germany-flag.png" alt="germany">
      <img src="index images/australia-flag.png" alt="australia">
      <img src="index images/france-flag.png" alt="france">
      <img src="index images/us-flag.png" alt="us">
      <img src="index images/denmark-flag.png" alt="denmark">
      <img src="index images/italy-flag.png" alt="italy">
      <img src="index images/france-flag.png" alt="france">
      <img src="index images/poland-flag.png" alt="poland">
      <img src="index images/sweden-flag.png" alt="sweden">
    </div>
  </div>`
}


function footer(){
return `<p>©2024 ASOS</p>
<a href=""><p>Privacy & Cookies |</p></a>
<a href=""><p>Ts&Cs  |</p></a>
<a href=""><p>Accessibility</p></a>`
}

export{socialPayment,bottom,footer}