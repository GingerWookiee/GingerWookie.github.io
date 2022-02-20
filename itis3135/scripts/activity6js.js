var x = 0;
var sideCount;
var shapeName;

function findShapeName()
{
    sideCount = parseFloat(prompt("Enter your number between 0 and 10:"));

    while(x == 0)
    {
        if(validateInput(sideCount))
        {
            x = 1;
        }
        else
        {
            sideCount = parseFloat(prompt("You did not enter a number, please enter a number between 0 and 10:"));
        }
    }

    shapeName = setShape(sideCount); 
    document.getElementById("polygons").innerHTML = "A shape with " + sideCount + " sides is called a(n) " + shapeName + "."; 
}

function validateInput(sides) 
{
    if (typeof sides == 'number') 
    {
        if (sides >= -10 && sides <= 10) 
        {
            return (sides == sides);
        }
    }
}

function setShape(sides)
{
    sides = Math.round(Math.abs(sides));
    switch (sides) 
    {
        case 0:
            return "A polygon with this many sides does not exist :(";
            break;
        case 1:
            return "A polygon with 1 side is a Henagon";
            break;
        case 2:
            return "A polygon with 2 side is a Digon";
            break;
        case 3:
            return "A polygon with 3 side is a Trigon";
            break;
        case 4:
            return "A polygon with 4 side is a Tetragon";
            break;
        case 5:
            return "A polygon with 5 side is a Pentagon";
            break;
        case 6:
            return "A polygon with 6 side is a Hexagon";
            break;
        case 7:
            return "A polygon with 7 side is a Heptagon";
            break;
        case 8:
            return "A polygon with 8 side is a Octagon";
            break;
        case 9:
            return "A polygon with 9 side is a Nonagon";
            break;
        case 10:
            return "A polygon with 10 side is a Decagon";
            break;
    }
}

