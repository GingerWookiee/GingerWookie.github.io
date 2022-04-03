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

//Time Functionality
function calculate()
{
    var part1 = document.getElementById("part1");
    var part2 = document.getElementById("part2");
    var part3 = document.getElementById("part3");
    var part4 = document.getElementById("part4");
    var part5 = document.getElementById("part5");
    var part6 = document.getElementById("part6");
    var part7 = document.getElementById("part7");

    var sum = part1 + part2 + part3 + part4 + part5 + part6 + part7;
    var weeks = sum / 7;
    var weekdays = sum % 7;

    document.getElementById("result").innerHTML = "<p>Your total number of days of work is " + sum.toString() + " days, <br> or " + weeks.toString() + " weeks and " + weekdays.toString() + " days.</p>";
}


//Cost Functionality