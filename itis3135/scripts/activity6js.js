var x = 0;
var sides;
var shape;

function findShapeName()
{
    sides = parseFloat(prompt("Enter your number between 0 and 10:"));

    while(i == 0)
    {
        if(validateInput(sides))
        {
            document.getElementById("polygons").innerHTML = "A shap with " + sides +
            " sides is called a(n) " + shape + ".";
            i = 1;
        }
        else
        {
            sides = parseFloat(prompt("You did not enter a number, please enter a number between 0 and 10:"));
        }
    }
}

function validateInput(sides) 
{
    if (typeof sides == 'number') 
    {
        if (Math.abs(sides) >= 0 && Math.abs(sides) <= 10) 
        {
            return true;
        }
    }
}

function getShape(sides) 
{
    switch (sides) 
    {
        case 0:
            shape = "nonexistant shape";
            break;
        case 1:
            return "monogon";
            break;
        case 2:
            return "digon";
            break;
        case 3:
            return "triangle";
            break;
        case 4:
            return "quadrilateral";
            break;
        case 5:
            return "pentagon";
            break;
        case 6:
            return "hexagon";
            break;
        case 7:
            return "septagon";
            break;
        case 8:
            return "octagon";
            break;
        case 9:
            return "nonagon";
            break;
        case 10:
            return "decagon";
            break;
    }
}