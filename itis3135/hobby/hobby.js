window.onload = function()
{
    whatUp();
};

function allDown()
{
    document.getElementById("what").style.display = "none";
    document.getElementById("who").style.display = "none";
    document.getElementById("where").style.display = "none";
    document.getElementById("when").style.display = "none";
    document.getElementById("why").style.display = "none";
    document.getElementById("how").style.display = "none";
}

function whatUp()
{
    allDown();
    document.getElementById("what").style.display = "block";
}

function whoUp()
{
    allDown();
    document.getElementById("who").style.display = "block";
}

function whenUp()
{
    allDown();
    document.getElementById("when").style.display = "block";
}

function whereUp()
{
    allDown();
    document.getElementById("where").style.display = "block";
}

function howUp()
{
    allDown();
    document.getElementById("how").style.display = "block";
}

function whyUp()
{
    allDown();
    document.getElementById("why").style.display = "block";
}