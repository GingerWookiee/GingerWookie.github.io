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
function calculateTime()
{
    var input1 = document.getElementById("time1").value;
    var int1 = parseInt(input1);
    var input2 = document.getElementById("time2").value;
    var int2 = parseInt(input2);
    var input3 = document.getElementById("time3").value;
    var int3 = parseInt(input3);
    var input4 = document.getElementById("time4").value;
    var int4 = parseInt(input4);
    var input5 = document.getElementById("time5").value;
    var int5 = parseInt(input5);
    var input6 = document.getElementById("time6").value;
    var int6 = parseInt(input6);
    var input7 = document.getElementById("time7").value;
    var int7 = parseInt(input7);
    var input8 = document.getElementById("time8").value;
    var int8 = parseInt(input8);

    var sum = int1 + int2 + int3 + int4 + int5 + int6 + int7 + int8;
    var weeksFloat = sum / 7;
    var weeks = parseInt(weeksFloat);
    var weekdays = sum % 7;

    document.getElementById("result").innerHTML = "<p>Your total number of days of work is " + sum.toString() + " days, <br> or " + weeks.toString() + " weeks and " + weekdays.toString() + " days.</p>";
}


//Cost Functionality
function calculateCost()
{
    var input1 = document.getElementById("cost1").value;
    var int1 = parseInt(input1);
    var input2 = document.getElementById("cost2").value;
    var int2 = parseInt(input2);
    var input3 = document.getElementById("cost3").value;
    var int3 = parseInt(input3);
    var input4 = document.getElementById("cost4").value;
    var int4 = parseInt(input4);
    var input5 = document.getElementById("cost5").value;
    var int5 = parseInt(input5);
    var input6 = document.getElementById("cost6").value;
    var int6 = parseInt(input6);
    var input7 = document.getElementById("cost7").value;
    var int7 = parseInt(input7);
    var input8 = document.getElementById("cost8").value;
    var int8 = parseInt(input8);

    var sum = int1 + int2 + int3 + int4 + int5 + int6 + int7 + int8;

    document.getElementById("result").innerHTML = "<p>Your total cost for the planned work is $" + sum.toString() + ".</p>";
}