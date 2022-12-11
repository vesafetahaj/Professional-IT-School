function contactValidation(){
    let nameField = document.forms["myForm"]["name"].value;
    if(nameField =="" || nameField == null){
        alert("Ju lutem plotesoni fushen e emrit");
        return false;
    }
    let phoneField = document.forms["myForm"]["phone"].value;
    if(phoneField =="" || phoneField == null){
        alert("Ju lutem plotesoni fushen e numrit te telefonit");
        return false;
    }
    let emailField = document.forms["myForm"]["email"].value;
    if(emailField =="" || emailField == null){
        alert("Ju lutem plotesoni fushen e emailit");
        return false;
    }
    let zipcodeField = document.forms["myForm"]["zipcode"].value;
    if(zipcodeField =="" || zipcodeField == null){
        alert("Ju lutem plotesoni fushen e zip code");
        return false;
    }else{
        alert("Te dhenat e juaja jane derguar per procesim");
    }
}


