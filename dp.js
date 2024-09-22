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

//validating age
if(Age ==='' || isNaN(Age)){errorMessages.push('Age is required and must be a number');
}
else if(Age < 18|| Age > 75) {
    errorMessages.push('Age must be between 12 and 74.');
} 
//Validating password
if(Password ===''){
    errorMessages.push('Password is required.');
} else if (Password.length<6) {
    errorMessages.push('Password must be 6 characters long');
}

//disolay error messages or submit the form
if(errorMessages.length>0) {
    alert(errorMessages.join('\n'));
}else {
    alert('Form submitted successfully!');
}

});