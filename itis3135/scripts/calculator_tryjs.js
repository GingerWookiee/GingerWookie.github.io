function add() 
{
    var a;
    var b;
    var x;
    var y;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    b = parseFloat(prompt("What is the second number?"));
    while(y == 0)
    {
        if(validateInput(b)){ y = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = a + b;
    document.getElementById("result").innerHTML = "The answer is: " + resultValue; 
}

function subtract()
{
    var a;
    var b;
    var x;
    var y;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    b = parseFloat(prompt("What is the second number?"));
    while(y == 0)
    {
        if(validateInput(b)){ y = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = a - b;    
    document.getElementById("result").innerHTML = "The answer is: " + resultValue; 
}

function multiply()
{
    var a;
    var b;
    var x;
    var y;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    b = parseFloat(prompt("What is the second number?"));
    while(y == 0)
    {
        if(validateInput(b)){ y = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = a * b;
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function divide()
{
    var a;
    var b;
    var x;
    var y;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    b = parseFloat(prompt("What is the second number?"));
    while(y == 0)
    {
        if(validateInput(b)){ y = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = a / b;
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function square()
{
    var a;
    var x;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = Math.pow(a,2);
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function exponent()
{
    var a;
    var b;
    var x;
    var y;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    b = parseFloat(prompt("What is the second number?"));
    while(y == 0)
    {
        if(validateInput(b)){ y = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = Math.pow(a,b);
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}

function root()
{
    var a;
    var x;

    a = parseFloat(prompt("What is the first number?"));
    while(x == 0)
    {
        if(validateInput(a)){ x = 1; }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number:"));
        }
    }

    var resultValue = Math.sqrt(a);
    document.getElementById("result").innerHTML = "The answer is: " + resultValue;
}


function validateInput(value) 
{
    if (typeof value == 'number') 
    {
        return (value == value);
    }
}