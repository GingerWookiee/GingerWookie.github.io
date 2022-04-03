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
    var input1 = document.getElementById("part1").value;
    var int1 = parseInt(input1);
    var input2 = document.getElementById("part2").value;
    var int2 = parseInt(input2);
    var input3 = document.getElementById("part3").value;
    var int3 = parseInt(input3);
    var input4 = document.getElementById("part4").value;
    var int4 = parseInt(input4);
    var input5 = document.getElementById("part5").value;
    var int5 = parseInt(input5);
    var input6 = document.getElementById("part6").value;
    var int6 = parseInt(input6);
    var input7 = document.getElementById("part7").value;
    var int7 = parseInt(input7);

    var sum = int1 + int2 + int3 + int4 + int5 + int6 + int7;
    var weeks = sum / 7;
    var weekdays = sum % 7;

    document.getElementById("result").innerHTML = "<p>Your total number of days of work is " + sum.toString() + " days, <br> or " + weeks.toString() + " weeks and " + weekdays.toString() + " days.</p>";
}


//Cost Functionality