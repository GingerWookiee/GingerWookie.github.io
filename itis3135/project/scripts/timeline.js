window.onload = function()
{
    bothDown();
};

function bothDown()
{
    document.getElementById("time").style.display = "none";
    document.getElementById("cost").style.display = "none";
}

function timeUp()
{
    bothDown();
    document.getElementById("time").style.display = "block";
}

function costUp()
{
    bothDown();
    document.getElementById("cost").style.display = "block";
}