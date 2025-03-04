function CalculateARR() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    const output = arr;
    document.getElementById("Arroutput").innerHTML = output;
}


function CalculateARRSUM() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    let arraysum = 0
    for (let i = 0; i < arr.length; i++) {
        arraysum += parseInt(arr[i]);
    }
    document.getElementById("Arroutput").innerHTML = arraysum;
}



function addarraystart() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.unshift("ABCD")
    document.getElementById("Arroutput").innerHTML = arr;
}



function addarrayend() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.push("ABCD")
    document.getElementById("Arroutput").innerHTML = arr;
}

function Rfirst() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.shift()
    document.getElementById("Arroutput").innerHTML = arr;
}

function RLast() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.pop()
    document.getElementById("Arroutput").innerHTML = arr;
}


function sortdece() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.sort((a, b) => b - a);
    document.getElementById("Arroutput").innerHTML = arr;
}

function sortacen() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];
    arr.sort((a, b) => a - b);
    document.getElementById("Arroutput").innerHTML = arr;
}


function FindLargNo() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];

    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    document.getElementById("Arroutput").innerHTML = largest;
}

function ReverseArr() {
    let ip1 = document.getElementById("ArrInput1").value;
    let ip2 = document.getElementById("ArrInput2").value;
    let ip3 = document.getElementById("ArrInput3").value;
    let ip4 = document.getElementById("ArrInput4").value;
    let ip5 = document.getElementById("ArrInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];

    let Rarry = [];

    for (let i = arr.length; i >= 0; i--) {
        Rarry.push(arr[i])
    }
    document.getElementById("Arroutput").innerHTML = Rarry;
}

///// Arrays Strings ///

function CheckSpell() {
    let ip11 = document.getElementById("ArrInput11").value;
    let ip21 = document.getElementById("ArrInput21").value;
    let ip31 = document.getElementById("ArrInput31").value;
    let ip41 = document.getElementById("ArrInput41").value;
    let ip51 = document.getElementById("ArrInput51").value;
    const arr = [ip11, ip21, ip31, ip41, ip51];

    exists = arr.includes("John")

    let checker = "";

    if (exists) {
        checker = "John exists in the array.";
    } else {
        checker = "John does not exist in the array.";
    }
    document.getElementById("Arroutput1").innerHTML = checker;
}






