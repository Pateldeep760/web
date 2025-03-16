function Calculate() {
    let X = document.getElementById("Input1").value;
    let Y = document.getElementById("Input2").value;
    let Z = parseInt(X) + parseInt(Y)
    document.getElementById("Output").innerHTML = Z;
    
    console.log("Value of x: ", X);
    console.log("Value of y: ", Z);
}




function CalculateSq() {
    let num = document.getElementById("Input3").value;
    const result = num * num;
    document.getElementById("SqOutput").innerText = `The square of ${num} is:` + result;
}


// Create the fruits array

function CreatArr() {
    let fruits = ["Apple", "Banana", "Mango"];
    fruits.push("Orange");
    fruits.unshift("Pineapple");
    document.getElementById("ArrOutput").innerText = fruits;
}


function RunLoop(){
    let num1 = 0
    for (let i = 1; i <= 10; i++) {
        console.log(i);
        num1 += i + " ";
    }
    document.getElementById("ForOutput").innerText = num1;
}


function RunCar(){
    
    make1 = document.getElementById("Input4").value;
    model1 = document.getElementById("Input5").value;
    year1 = document.getElementById("Input6").value;

    let car = {
        make: make1,
        model: model1,
        year: year1
    };

    document.getElementById("CarOutput").innerText = `Make: ${car.make}` + `Model: ${car.model}` + `Car Make Yr: ${car.year}`;
    
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Car Make Yr: ${car.year}`);
}

function RunSqArry(){
    
    let numbers = [1, 2, 3, 4, 5];
    
    let squaredNumbers = numbers.map((num) => num ** 2);
    console.log(squaredNumbers);
    
    document.getElementById("SqArrOutput").innerText = squaredNumbers;
}


function RunSttoInt(){

    let str = document.getElementById("Input7").value;
    
    try {
        let num = parseInt(str);
        
        if (isNaN(num)) {
            document.getElementById("StringtoInterror").innerText = "Unable to parse string to number.";
            throw new Error("Error: Unable to parse string to number.");
        }
        console.log(`Parsed number: ${num}`);
        document.getElementById("StringtoInterror").innerText = `Parsed number: ${num}`;
        
    } 
    catch (error) {
        console.error(error.message);
    }
    
}

function Calculatearr(){
    // Define the array of numbers
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    // Use .filter() to filter the array
    let filteredNumbers = numbers.filter((num) => num > 5);
    
    // Print the result
    console.log(filteredNumbers);
    document.getElementById("OutputArr5").innerText = filteredNumbers;
}