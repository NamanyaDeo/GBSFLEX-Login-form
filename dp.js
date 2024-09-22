document.getElementById('survey-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
//get form elements
let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let age = document.getElementById("age");

//errorMessages
errorMessages = [];

//Validating name
if(name ==='') {
    errorMessages.push("name is required.");
}
//Validating email with regx
let emailPattern=/^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})([a-z]{2,8})?$/;
if(email===''){
    errorMessages.push('email is required');
} 
else if(!emailPattern.test(email)){errorMessages.push('email is invalid');
}