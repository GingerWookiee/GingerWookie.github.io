var x = 0;
var sideCount;
var shapeName;

function findShapeName()
{
    setSides(parseFloat(prompt("Enter your number between 0 and 10:")));

    while(i == 0)
    {
        if(validateInput(getSides()))
        {
            setShape(getSides());
            i = 1;
        }
        else
        {
            setSides(parseFloat(prompt("You did not enter a number, please enter a number between 0 and 10:")));
        }
    }
    
    document.getElementById("polygons").innerHTML = "A shap with " + getSides() + " sides is called a(n) " + getShape() + "."; 
}

function setSides(newSides)
{
    this.sideCount = newSides;
}
function getSides()
{
    return sideCount;
}

function setShape(sides)
{
    switch (sides) 
    {
        case 0:
            shapeName = "nonexistant shape";
            break;
        case 1:
            shapeName = "monogon";
            break;
        case 2:
            shapeName = "digon";
            break;
        case 3:
            shapeName = "triangle";
            break;
        case 4:
            shapeName = "quadrilateral";
            break;
        case 5:
            shapeName = "pentagon";
            break;
        case 6:
            shapeName = "hexagon";
            break;
        case 7:
            shapeName = "septagon";
            break;
        case 8:
            shapeName = "octagon";
            break;
        case 9:
            shapeName = "nonagon";
            break;
        case 10:
            shapeName = "decagon";
            break;
    }
}

function getShape()
{
    return shape;
}

function validateInput(sides) 
{
    if (typeof sides == 'number') 
    {
        if (Math.abs(sides) >= 0 && Math.abs(sides) <= 10) 
        {
            return (sides == sides));
        }
    }
}