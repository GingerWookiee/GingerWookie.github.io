window.onload = whatUp();

var $ = function (id) 
{ 
    return document.getElementById(id); 
}

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
    $("where").style.display = "block";
}

function howUp()
{
    allDown();
    $("how").style.display = "block";
}

function whyUp()
{
    allDown();
    $("why").style.display = "block";
}