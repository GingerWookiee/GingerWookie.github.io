window.onload = whatUp();

var $ = function (id) 
{ 
    return document.getElementById(id); 
}

function allDown()
{
    $("what").style.display = "none";
    $("who").style.display = "none";
    $("where").style.display = "none";
    $("when").style.display = "none";
    $("why").style.display = "none";
    $("how").style.display = "none";
}

function whatUp()
{
    allDown();
    $("what").style.display = "block";
}

function whoUp()
{
    allDown();
    $("who").style.display = "block";
}

function whenUp()
{
    allDown();
    $("when").style.display = "block";
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