///Write a function findMax(num1, num2, num3) that returns the largest number among three.


function calcmax() {
    var val1 = document.getElementById('ip1').value;
    var val2 = document.getElementById('ip2').value;
    var val3 = document.getElementById('ip3').value;
    maxval = Math.max(val1, val2, val3)
    document.getElementById('op1').innerHTML = maxval;
}

/// Temp Converter 

function calctemp() {
    var Tval1 = document.getElementById('TCip1').value;
    var result = 0

    if (document.getElementById('DegC').checked == true) {
        result = Tval1 + ' DegF is Equal to ' + ((Tval1 - 32) * 5 / 9) + ' DegC'
    } else if (document.getElementById('DegF').checked == true) {
        result = Tval1 + ' DegC is Equal to ' + ((Tval1 * 9 / 5) + 32) + ' DegF'
    } else {
        result = "select Temp Unit"
    }
    document.getElementById('TCop1').innerHTML = result;
}

/// greeting msg

function greetUser(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// Function to display the greeting message
function displayGreeting() {
    const nameInput = document.getElementById("nameInput").value;
    const greetingInput = "Hellow";
    const message = greetUser(nameInput, greetingInput);
    document.getElementById("greetingMessage").innerText = message;
}

// Function to Perfom Task to Upper Case

function uc() {
    let UPCInput = document.getElementById("UCInput").value;
    let UPCOutput = UPCInput.toUpperCase();
    document.getElementById("uppercase").innerHTML = UPCOutput
}

// Function to Perfom Task to calculate Input Strings.


function SL() {
    let SInput = document.getElementById("StringInput").value;
    let SLOutput = SInput.length;
    document.getElementById("stringlength").innerHTML = SLOutput

}

function Subscalc() {
    let SInput1 = document.getElementById("StringInput1").value;
    const SNInput1 = document.getElementById("noinput1").value;
    const SNInput2 = document.getElementById("noinput2").value;
    document.getElementById("substringoutput").innerHTML = SInput1.substring(SNInput1, SNInput2);


}


function Replace() {

    let Maininput = document.getElementById("WRInput1").value;
    const WRinput1 = document.getElementById("Wordinput1").value;
    const WRinput2 = document.getElementById("Wordinput2").value;

    document.getElementById("WRoutput").innerHTML = Maininput.replace(WRinput1, WRinput2)


}

///// string to Array


function ConArray() {

    let MainStringinput = document.getElementById("ArrayInput1").value;
    let splittoarray = MainStringinput.split(",")
    document.getElementById("Arrayoutput").innerHTML = `Array = [${splittoarray}]`
}

// capitalise each word
function Capital() {

    const letters = document.getElementById("LetterInput1").value;
    const capital = letters.replace(/\b\w/g, char => char.toUpperCase());
    document.getElementById("LetterOutput").innerHTML = capital
}

// find word in a sentence

function findword() {

    const sen = document.getElementById('SentenceInput1').value;
    const wor = document.getElementById('WInput1').value;

    const op = sen.match(wor);

    if (wor == op) {
        document.getElementById('wordOutput').innerHTML = `The sentence contains the word "${wor}".`;
    } else {
        document.getElementById('wordOutput').innerHTML = `The sentence does not contain the word "${wor}".`;
    }
}


//Number of Words in a Sentence

function findnumber() {

    const Seninput = document.getElementById('SentenceInput10').value;
    const Sensplit = Seninput.split(" ")
    let splitlen = Sensplit.length
    document.getElementById('NOWOutput').innerHTML = splitlen
}

///Reverse the Input String

function Reverse() {

    const RSinput = document.getElementById('RSInput1').value;
    const RSsplit = RSinput.split('')
    const RSreverse = RSsplit.reverse('')
    const RSjoin = RSreverse.join('')

    document.getElementById('RSOutput').innerHTML = RSjoin
}

// Remove Extra Spaces from Input

function Removespace() {
    const RESinput = document.getElementById('RESInput1').value;
    document.getElementById('RESOutput').innerHTML = RESinput.trim()
}

//  Extract File Extension from a Filename

function Extractfile() {
    const EXTinput = document.getElementById('EXTInput1').value;
    const EXTString = EXTinput.split(".")
    document.getElementById('EXTOutput').innerHTML = "." + EXTString[1]
}

//  Repeat a String Multiple Times

function Repeatstring() {
    const STinput = document.getElementById('STInput1').value;
    const Count = document.getElementById('STInput2').value;
    document.getElementById('STOutput').innerHTML = STinput.repeat(Count);
}
//  Mask Part of an Input

function maskit() {
    const Minput = document.getElementById('maskInput1').value;
    const lengthofmask = Minput.length - 3;
    const masked = '*'.repeat(lengthofmask) + Minput.slice(-3);
    document.getElementById('MaskOutput').innerHTML = masked;
}

// First and Last Character of a String

function findFLC() {
    const word = document.getElementById('FLCInput1').value;
    const firstChar = word.charAt(0); // Get the first character
    const lastChar = word.charAt(word.length - 1); // Get the last character
    document.getElementById('FLCOutput').innerText = `First Character: "${firstChar}", Last Character: "${lastChar}"`;
}
