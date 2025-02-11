function writedata(){
    document.getElementById('Name').innerHTML= "Name : Deep Kanani"
    document.getElementById('Dob').innerHTML= "DOB : 16/04/1996"
    document.getElementById('Add').innerHTML= "address : Vadodara"
    document.getElementById('Pin').innerHTML= "Pincode : 391740"
    document.getElementById('State').innerHTML= "State : Gujarat"
    document.getElementById('City').innerHTML= "City : Vadodara"
    document.getElementById('Age').innerHTML= "age : 28"
    document.getElementById('Fname').innerHTML= "Father's Name : A R Kanani "
    document.getElementById('Mname').innerHTML= "Mother's Name : D A Kanani"
    document.getElementById('Image1').src="https://m.media-amazon.com/images/I/7121lyno3+L._SY879_.jpg"
}

function lightmode(){
    document.getElementById('body1').style.backgroundColor = "grey"
}

function darkmode(){
    document.getElementById('body1').style.backgroundColor = "black"
    document.getElementById('Name').style.color = "grey"
    document.getElementById('Dob').style.color = "grey"
    document.getElementById('Add').style.color = "grey"
    document.getElementById('Pin').style.color = "grey"
    document.getElementById('State').style.color = "grey"
    document.getElementById('City').style.color = "grey"
    document.getElementById('Age').style.color = "grey"
    document.getElementById('Fname').style.color = "grey"
    document.getElementById('Mname').style.color = "grey"
    document.getElementById('heading').style.color = "grey"
}