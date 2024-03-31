let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("currentUser")).Id
  : false;

if (currentUser) {
  window.location.href = "index.html";
} else {
  function validateEmail(email) {
    // Regular expression pattern for email validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log('sign in hitted')
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (!validateEmail(email.value)) {
      alert("Invalid Email Address");
      //email verification (first criteria to login)
    } else {
      var userData = JSON.parse(localStorage.getItem("userData"));
      if (!userData) {
        alert(`Looks like you are not registered with ASOS.`);
        window.location.href='join.html'
        // console.log("no user data present");
      } else {
        // console.log(userData)
        var timer;
        userData.forEach((element) => {
          if (
            element.email == email.value &&
            element.password == password.value
          ) {
            localStorage.setItem("currentUser", JSON.stringify(element));
            window.location.href = "index.html";
          } else {
            // console.log('here')
            clearTimeout(timer);
            timer = setTimeout(() => {
              alert(`Incorrect Login Info, Please recheck & try again `);
            }, 1000);
          }
        });
      }
    }
  });
}
