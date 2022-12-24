var nameRegex = /^[A-Z][a-z]{2,10}/;
var surnameRegex = /^[A-Z][a-z]{3,15}/;
var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var numberRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{3}/;

var emailMsg = document.getElementById("emailMessage");
var nameMsg = document.getElementById("nameMessage");
var surnameMsg = document.getElementById("surnameMessage");
var ageMsg = document.getElementById("ageMessage");
var numberMsg = document.getElementById("numberMessage");
var cityMsg = document.getElementById("cityMessage");
var trajnimiMsg = document.getElementById("trajnimiMessage");
var orariMsg = document.getElementById("orariMessage");

var regjistrohuButton = document.getElementById("regjistrohu");

regjistrohuButton.addEventListener("click", function(event){
    var name = document.getElementById("nameField").value;
    var surname = document.getElementById("surnameField").value;
    var email = document.getElementById("emailField").value;
    var number = document.getElementById("numberField").value;
    var age = document.getElementById("ageField").value;
    var selectCity = document.getElementById("selectCity").value;
    var selectTrajnimi = document.getElementById("trajnimi").value;
    var selectOrari = document.getElementById("orari").value;

    if(selectCity == "--"){
        cityMsg.innerText="*You have to choose one option";
        event.preventDefault();
    }else{
        cityMsg.innerText="";
    }

    if(selectTrajnimi == "--"){
        trajnimiMsg.innerText="*You have to choose one option";
        event.preventDefault();
    }else{
        trajnimiMsg.innerText="";
    }

    if(selectOrari == "--"){
        orariMsg.innerText="*You have to choose one option";
        event.preventDefault();
    }else{
        orariMsg.innerText="";
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
    if(number == ""){
        numberMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(numberRegex.test(number)){
            numberMsg.innerText="";
        }else{
            numberMsg.innerText = "*This phone number is not valid!The format: xxx-xxx-xxx";
            event.preventDefault();
        }
    }
    if(age == ""){
        ageMsg.innerText="*Please fill out this field!";
        event.preventDefault();
    }else{
        if(age < 7 || age > 18){
            ageMsg.innerText="*Age must be between 7 and 18!";
        }else{
            ageMsg.innerText="";
        }
    }
    




});



