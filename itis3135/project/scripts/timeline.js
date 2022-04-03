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
    var part1 = paresInt(document.getElementById("part1").value);
    var part2 = parseInt(document.getElementById("part2").value);
    var part3 = parseInt(document.getElementById("part3").value);
    var part4 = parseInt(document.getElementById("part4").value);
    var part5 = parseInt(document.getElementById("part5").value);
    var part6 = parseInt(document.getElementById("part6").value);
    var part7 = parseInt(document.getElementById("part7").value);

    var sum = part1 + part2 + part3 + part4 + part5 + part6 + part7;
    var weeks = parseInt(sum / 7);
    var weekdays = sum % 7;

    document.getElementById("result").innerHTML = "<p>Your total number of days of work is " + sum.toString() + " days, <br> or " + weeks.toString() + " weeks and " + weekdays.toString() + " days.</p>";
}


//Cost Functionality