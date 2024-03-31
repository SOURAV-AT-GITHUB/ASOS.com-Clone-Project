let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  ? JSON.parse(localStorage.getItem("currentUser")).Id
  : false;

if (currentUser) {
  window.location.href = "index.html";
} else {
  var userData = [];
  var userIdCount = 0;
  var intrest1 = document.getElementById("intrest-Women");
  var intrest2 = document.getElementById("intrest-Men");

  intrest1.addEventListener("click", () => {
    if (intrest2.checked) {
      intrest2.checked = false;
    }
  });
  intrest2.addEventListener("click", () => {
    if (intrest1.checked) {
      intrest1.checked = false;
    }
  });

  function validateEmail(email) {
    // Regular expression pattern for email validation
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("email").value;

    if (!validateEmail(email)) {
      alert("Invalid email address");
    } else {
      let firstName = document.getElementById("firstName").value;
      let lastName = document.getElementById("lastName").value;
      let password = document.getElementById("password").value;

      let date = document.getElementById("dd").value;
      let month = document.getElementById("mm").value;
      let year = document.getElementById("yyyy").value;

      let consent = document.getElementById("consent").checked;

      let obj = {
        Id: ++userIdCount,
        email,
        firstName,
        lastName,
        password,
        dob: `${date}/${month}/${year}`,
        intrestedIn: intrest1.checked ? "Womensware" : "Mensware",
        optedForEmails: consent,
      };
      userData.push(obj);
      localStorage.setItem("userData", JSON.stringify(userData));

      alert(
        "Registration Successful, Please Use the same email & password to login"
      );
      document.getElementById("email").value = "";
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("password").value = "";
      document.getElementById("dd").value = "";
      document.getElementById("mm").value = "";
      document.getElementById("yyyy").value = "";
      window.location.href='Sign-in.html'
    }
  });
}
