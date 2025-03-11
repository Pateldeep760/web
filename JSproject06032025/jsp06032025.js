
function validateForm() {
    var user = document.getElementById('emailp').value;
    var pass = document.getElementById('passwordm').value;
    var phonenumber = document.getElementById('phoneno').value;
    var CCnumber = document.getElementById('cardno').value;
    var date = document.getElementById('dateinput').value;
    var zipCode = document.getElementById('zipi').value
    var url = document.getElementById('websitein').value

    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneNumberRegex = /^\d{10}$/;
    const stringRegex = /^[a-zA-Z0-9]{5,15}$/;
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    const zipCodeRegex = /^\d{5}(?:\d{1})?$/;


    if (user == "") {
        document.getElementById("emaili").innerHTML = "** Please Fill The Username";
        return false;
    }

    if (!emailRegex.test(user)) {
        document.getElementById("emaili").innerHTML = "** Invalid Email Format";
        return false;
    }

    if (pass == "") {
        document.getElementById("passwordi").innerHTML = "** Please Fill The Password";
        return false;
    }

    if (!passwordRegex.test(passwordm)) {
        document.getElementById("passwordi").innerHTML = "** Ensure a password is at least 8 characters long, contains uppercase and lowercase letters, a number, and a special character.";
        return false;
    } 

    if (!phoneNumberRegex.test(phonenumber)) {
        document.getElementById("Phonei").innerHTML = "** Please Fill the Phone Number";;
        return false;
    }


    if (!stringRegex.test(CCnumber)) {
        document.getElementById("cardnoi").innerHTML = "** alphanumeric characters (letters and numbers) for Cerdit card number";
        return false;
    }

    if (!dateRegex.test(date)) {
    document.getElementById("dateid").innerHTML = "** Improper Date";
      return false;
    }

    if (!zipCodeRegex.test(zipCode)) {
        document.getElementById("zipid").innerHTML = "**Invalid Zip Code"
        return false;
    }
    const urlRegex = /^((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?)$/;

    if (!urlRegex.test(url)) {
        document.getElementById("webid").innerHTML = "**Invalid Website input"
        return false;
    }



}


function myFunction() {
    var x = document.getElementById("passwordm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}