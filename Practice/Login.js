function signupPress(){
    const inputNameFirst = document.getElementById("nameFirst");
    const inputNameLast = document.getElementById("nameLast");
    const inputUsername = document.getElementById("username");
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    const inputRePassword = document.getElementById("repassword");
    const inputGender = document.getElementsByName("gender");
    const inputContact = document.getElementById("contact");
    const inputDOB = document.getElementById("dob");
    const inputCountry = document.getElementById("Country");
    const inputState = document.getElementById("State");
    const inputTerms = document.getElementById("terms");
    const inputNoti = document.getElementById("noti");

    if(((inputPassword.value).length) < 8){
        alert("Length of password is less than 8!!!");
    }
    if((inputPassword.value) != (inputRePassword.value)){
        alert("Both Confirm Password and Password are not same!!!");
    }
    
    console.log("name: " + inputNameFirst.value + " " + inputNameLast.value);
    console.log("Username: " + inputUsername.value);
    console.log("Email: " + inputEmail.value);
    console.log("Password: " + inputPassword.value);
    console.log("Confirm Password: " + inputRePassword.value); 
    if(inputGender[0].checked){
        console.log("Gender: Male");
    }else if(inputGender[1].checked){
        console.log("Gender: Female");
    }else{
        alert("please mention your gender!!!");
    }
    console.log("Contact: " + inputContact.value);
    console.log("DOB: " + inputDOB.value);
    console.log("Country: " + inputCountry.value);
    console.log("Sate: " + inputState.value);
    if(inputTerms.checked){
        console.log("Terms and Condition: Agreed")
    }else{
        alert("please accept terms and conditions");
    }
    if(inputNoti.checked){
        console.log("Notifications: Accepted");
    }else{
        console.log("Notifications: Denied");
    }
}

function refresh(){
    location.reload();
}

function checkerLengthPass(){
    let inputPassword = document.getElementById("password");
    let labelCharCheck = document.getElementById("charCheck");

    if((inputPassword.value).length > 8){
        labelCharCheck.style.color = "green"
    }else{
        labelCharCheck.style.color = "red"
    }
}

function checkerSamePass(){
    let inputPass = document.getElementById("password");
    let inputRePass = document.getElementById("repassword");
    let labelSameCheck = document.getElementById("sameCheck")

    if((inputPass.value) == (inputRePass.value)){
        labelSameCheck.style.color = "green"
    }else{
        labelSameCheck.style.color = "red"
    }
}