let loginform = document.forms.login;
loginform.addEventListener("submit", checkLogin);
let users = [];
let pwords = [];
users = ["Administrator", "Manager", "Cleric", "Scribe"];
pwords = ["Password01", "Password", "Admin", "P@ssword"];

//*** NOTE: the password for each username is specific. Use the the alignment of the data in the table above (i.e. the password for the Administrator account is Password01, etc.). ***




//*** NOTE: the password for each username is specific. Use the the alignment of the data in the table above (i.e. the password for the Administrator account is Password01, etc.). ***


function checkLogin() {
    var usernameInput = loginform.getElementById("Username").value;
    var pwInput = loginform.getElementById("Password").value;
  
    //.includes is what we need for the array checking if statements
  
    //For Loop 1
    for (usernameInput in users) {
      if (!users.includes(usernameInput)) {
        window.event.preventDefault();
        alert("Your username is incorrect. Please try again.")
        loginform.user.focus();
        return false;
      } else {
        //For Loop 2
        for (pwInput in pwords) {
          if (!pwords.includes(pwInput)) {
            window.event.preventDefault();
            alert("Your password is incorrect. Please try again.")
            loginform.pword.focus();
            return false;
          }
        }
      }
    }
  }