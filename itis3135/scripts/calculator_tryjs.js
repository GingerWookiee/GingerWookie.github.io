function add() 
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = a + b;

    document.getElementById("result").innerHTML = "The answer is: " + resultValue; 
}

function subtract()
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = a - b;
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue; 
}

function multiply()
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = a * b;
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function divide()
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = a / b;
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function square()
{
    var a;
    a = parseFloat(prompt("What is the number you want to square?"));

    var resultValue = a^2;
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function exponent()
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = a^b;
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function root()
{
    var a;
    var b;
    a = parseFloat(prompt("What is the first number?"));
    b = parseFloat(prompt("What is the second number?"));

    var resultValue = Math.sqrt(a);
    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}