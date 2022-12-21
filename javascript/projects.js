
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pswRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

var loginButton = document.getElementById("login");
var emailMsg = document.getElementById("emailMessage");
var passwordMsg = document.getElementById("passwordMessage");

loginButton.addEventListener("click", function(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == ""){
        emailMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(emailRegex.test(email)){
            emailMsg.innerText="";
        }else{
            emailMsg.innerText = "*This email is not valid!";
            event.preventDefault();
        }
    }

    if(password == ""){
        passwordMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(pswRegex.test(password)){
            passwordMsg.innerText="";
        }else{
            passwordMsg.innerText = "*Min. 8 characters, 1 lowercase, 1 uppercase, 1 number";
            event.preventDefault();
        }
    }

})