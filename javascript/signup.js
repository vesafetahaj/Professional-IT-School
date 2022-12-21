var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var pswRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
var nameRegex = /^[A-Z][a-z]{2,10}/;
var surnameRegex = /^[A-Z][a-z]{3,15}/;

var signupButton = document.getElementById("signup");
var emailMsg = document.getElementById("emailMessage");
var passwordMsg = document.getElementById("passwordMessage");
var nameMsg = document.getElementById("nameMessage");
var surnameMsg = document.getElementById("surnameMessage");
var confirmMsg = document.getElementById("confirmpasswordMessage");


signupButton.addEventListener("click", function(event){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var confirmPassword = document.getElementById("confirmpassword").value;
    

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
    if(name == ""){
        nameMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(nameRegex.test(name)){
            nameMsg.innerText="";
        }else{
            nameMsg.innerText = "*Name is not valid!";
            event.preventDefault();
        }
    }
    if(surname == ""){
        surnameMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(surnameRegex.test(surname)){
            surnameMsg.innerText="";
        }else{
            surnameMsg.innerText = "*Surname is not valid!";
            event.preventDefault();
        }
    }
    if(confirmPassword == ""){
        confirmMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(confirmPassword.match(password)){
            confirmMsg.innerText="";
        }else{
            confirmMsg.innerText = "*The password confirmation is invalid!";
            event.preventDefault();
        }
    }
  
    
   
    
    

});