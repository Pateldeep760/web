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


/// Array Merge & Remove Duplicates.


function MergeRemove() {

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [3, 4, 5, 6, 7, 8, 9];

    let mergedArray = [...new Set([...arr1, ...arr2])]

    document.getElementById("MROP").innerHTML = mergedArray;
    document.getElementById("MR1").innerHTML = arr1 + " This is array 1";
    document.getElementById("MR2").innerHTML = arr2 + " This is array 2";
}


function FindEven() {
    let ip1 = document.getElementById("ArrEInput1").value;
    let ip2 = document.getElementById("ArrEInput2").value;
    let ip3 = document.getElementById("ArrEInput3").value;
    let ip4 = document.getElementById("ArrEInput4").value;
    let ip5 = document.getElementById("ArrEInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];

    const findout = arr.filter(a => a % 2 === 0)

    document.getElementById("ArrEven").innerHTML = findout;
}


function CalculateARRPRODUCT() {
    let ip1 = document.getElementById("ArrEInput1").value;
    let ip2 = document.getElementById("ArrEInput2").value;
    let ip3 = document.getElementById("ArrEInput3").value;
    let ip4 = document.getElementById("ArrEInput4").value;
    let ip5 = document.getElementById("ArrEInput5").value;
    const arr = [ip1, ip2, ip3, ip4, ip5];

    const product = arr.reduce((a, b) => a * b, 0);

    document.getElementById("ArrEven").innerHTML = product;
}


//// Date 


function FindToday() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;

    const Cyear = Cdate.getFullYear().toString().slice(-2);
    const Cmonth = (Cdate.getMonth() + 1).toString().padStart(2, '0');
    const Cday = (Cdate.getDay() + 1).toString().padStart(2, '0');

    document.getElementById("DOP1").innerHTML = Cyear + "-" + Cmonth + "-" + Cday;
}

///


function FindTime() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;

    const hours = Cdate.getHours();
    const min = Cdate.getMinutes();
    const sec = Cdate.getSeconds();
    const AMPM = hours >= 12 ? 'PM' : 'AM';

    const formatedTime = `${(hours % 12 || 12).toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')} ${AMPM}`;


    document.getElementById("DOP2").innerHTML = formatedTime;
}


///


function FindWeek() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;

    const FirstDay = new Date(Cdate.getFullYear(), 0, 1);

    const PastDays = (Cdate - FirstDay) / 86400000;

    const WeekNum = Math.ceil((PastDays + FirstDay.getDay() + 1) / 7);


    document.getElementById("DOP3").innerHTML = "Week No." + " : " + WeekNum;
}

///


function FindDleft() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;

    const YearEnd = new Date(Cdate.getFullYear(), 11, 31);

    const DaysLeft = Math.round((YearEnd - Cdate) / (1000 * 3600 * 24));


    document.getElementById("DOP4").innerHTML = "Days Left." + " : " + DaysLeft;
}



///


function Findleap() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;


    const Cyear = Cdate.getFullYear();


    if (((Cyear % 4 === 0) && (Cyear % 100 !== 0)) || (Cyear % 400 === 0)) {

        document.getElementById("DOP5").innerHTML = Cyear + " is Leap Year";
    }

    else {
        document.getElementById("DOP5").innerHTML = Cyear + " is not Leap Year";
    }

}

///
function Find5Date() {

    const Cdate = new Date();
    document.getElementById("CurrentDate").innerHTML = Cdate;

    fiveDaysLater = new Date(Cdate.getTime() + 5 * 24 * 60 * 60 * 1000)

    document.getElementById("DOP6").innerHTML = fiveDaysLater;


}


function FindDiff() {

    const date1Timestamp = new Date(document.getElementById("Date1").value).getTime();
    const date2Timestamp = new Date(document.getElementById("Date2").value).getTime();
    const differenceInMilliseconds = Math.abs(date2Timestamp - date1Timestamp);
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 3600 * 24));
    document.getElementById("DOP7").innerHTML = differenceInDays;

}

/// if else Statment



function Findnumber1() {
    const num = document.getElementById("IFELSEinput1").value;

    if (num > 0) {
        document.getElementById("IFELSE1").innerHTML = `${num} is a positive number`;
    } else if (num < 0) {
        document.getElementById("IFELSE1").innerHTML = `${num} is a negative number`;
    } else {
        document.getElementById("IFELSE1").innerHTML = `${num} is zero`;
    }
}



function Findnumber2() {

    const num2 = document.getElementById("IFELSEinput2").value;

    if (num2 % 2 === 0) {
        document.getElementById("IFELSE2").innerHTML = `${num2} is even`;
    } else {
        document.getElementById("IFELSE2").innerHTML = `${num2} is odd`;
    }
}

function Findnumber3() {

    let num11 = document.getElementById("IFELSEinput3").value;
    let num22 = document.getElementById("IFELSEinput4").value;

    if (num11 > num22) {
        document.getElementById("IFELSE3").innerHTML = num11;
    }
    else if (num22 > num11) {
        document.getElementById("IFELSE3").innerHTML = num22;
    }
    else {
        document.getElementById("IFELSE3").innerHTML = "Both Number are Equal";
    }
}


function CalculateGrade() {

    const marks = document.getElementById("IFELSEinput5").value;

    if (marks >= 90) {
        document.getElementById("IFELSE4").innerHTML = ' A';
    } else if (marks >= 80) {
        document.getElementById("IFELSE4").innerHTML = ' B';
    } else if (marks >= 70) {
        document.getElementById("IFELSE4").innerHTML = ' C';
    } else if (marks >= 60) {
        document.getElementById("IFELSE4").innerHTML = ' D';
    } else {
        document.getElementById("IFELSE4").innerHTML = ' F';
    }

}

function CalculateAge() {
    const age = document.getElementById('IFELSEinput6').value;

    if (age >= 18) {
        document.getElementById("IFELSE5").innerHTML = `Person is eligible to vote age is ${age}`;
    }
    else {
        document.getElementById("IFELSE5").innerHTML = `Person is not eligible to vote age is ${age}`;
    }

}




function CalculateDiscount() {
    const amount = document.getElementById('IFELSEinput7').value;

    if (amount > 500) {
        document.getElementById("IFELSE6").innerHTML = (amount * 0.20) + " " + `Rs. Dicount for ${amount} Rs. Bill`;
    } else if (amount > 200) {
        document.getElementById("IFELSE6").innerHTML = (amount * 0.10) + " " + `Rs. Dicount for ${amount} Rs. Bill`;
    } else {
        document.getElementById("IFELSE6").innerHTML = `No Discount for ${amount} Rs. Bill`;
    }

}

//// Nested IF ELse

function checkLeapYear() {
    const year = document.getElementById('Nestedinput1').value;

    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {

        document.getElementById("Nested1").innerHTML = year + " is Leap Year";
    }

    else {
        document.getElementById("Nested1").innerHTML = year + " is not Leap Year";
    }


}


function login() {
    const username = document.getElementById('Logininput1').value;
    const password = document.getElementById('Logininput2').value;
    const correctUsername = 'admin';
    const correctPassword = 'password';

    if (username !== correctUsername) {
        document.getElementById('LoginResult').textContent = 'Wrong username!';
    } else if (password !== correctPassword) {
        document.getElementById('LoginResult').textContent = 'Password is wrong!';
    } else if ((password !== correctPassword) && (username !== correctUsername)) {
        document.getElementById('LoginResult').textContent = 'Username & Password is Empty/wrong!';
    } else {
        document.getElementById('LoginResult').textContent = 'Login Success!';
    }
}



function findLargest() {
    const a = document.getElementById('comparinput1').value
    const b = document.getElementById('comparinput2').value
    const c = document.getElementById('comparinput3').value

    if (a >= b) {
        if (a >= c) {
            document.getElementById('Nested3').textContent = a;
        } else {
            document.getElementById('Nested3').textContent = c;
        }
    } else {
        if (b >= c) {
            document.getElementById('Nested3').textContent = b;
        } else {
            document.getElementById('Nested3').textContent = c;
        }
    }

}
function signal() {

    document.getElementById('red').value = "red";
    document.getElementById('yellow').value = null;
    document.getElementById('green').value = null;

    const red = document.getElementById('red').value

    if (red === "red") {
        document.getElementById('Trafficlight').textContent = "stop";
    } else {
        document.getElementById('Trafficlight').textContent = "invalid signal"
    }

}


function Red() {
    document.getElementById('Trafficlight').innerHTML = "Stop";
}

function Yellow() {
    
    document.getElementById('Trafficlight').innerHTML = "Get Ready";
}

function Green() {
    
    document.getElementById('Trafficlight').innerHTML = "GO";
}
function Invalid() {
    
    document.getElementById('Trafficlight').innerHTML = "Invalid";
}

