function scriptTest()
{
    alert("Hey my script is running");
}

/*
 * from here to the next big comment is about the welcome message 
*/

//global variables for name and feeling
var name;
var feeling;

function welcomeWords()
{
    setName(prompt("What is your name", ""))
    setFeeling(prompt("How are you feeling today?", ""))
    
    document.getElementById("words").innerHTML = "Welcomes to the Dusty Turtle, "
    + getName() + "!  We're glad to hear you are feeling " + getFeeling() + "!";
}

//setter and getter for name
function setName(name)
{ 
    this.name = name;
}
function getName() 
{
    return name;
}

//setter and getter for feeling
function setFeeling(feeling) 
{
    this.feeling = feeling;
}
function getFeeling() 
{
    return feeling;
}

/*
 * from here to the next big comment is about the date 
*/
function showDateTime()
{
    document.getElementById('date').innerHTML = 'It is ' + getCurrentTime() + ' on ' + getCurrentDate();
}

function getCurrentDate() 
{
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() 
{
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}


/*
 * from here to the next big comment is about the Days Until Weekend
*/

function daysToWeekend()
{
    let date= new Date();
    switch(date.getDay()){
        case 1:
            document.getElementById("weekendDays").innerHTML = "There are 5 days until the weekend.";
            break;
        case 2:
            document.getElementById("weekendDays").innerHTML = "There are 4 days until the weekend.";
            break;
        case 3:
            document.getElementById("weekendDays").innerHTML = "There are 3 days until the weekend.";
            break;
        case 4:
            document.getElementById("weekendDays").innerHTML = "There are 2 days until the weekend.";
            break;
        case 5:
            document.getElementById("weekendDays").innerHTML = "The weekend is tomorrow!";
            break;
        default:
            document.getElementById("weekendDays").innerHTML = "it is the weekend!";

    }
}

/*
 * from here to the end is about the Days Left in the Month
*/

function daysLeftInMonth() {
    let date = new Date();
    var days;
    switch(date.getMonth()){
        case(3):
        case(5):
        case(8):
        case(10):
            days = 30;
            break;
        case(1):
            days = 28;
            break;
        default:
            days = 31;
    }
    var daysLeft = days - date.getDay();
    document.getElementById("monthDays").innerHTML = "There are " + daysLeft + " days left in the month.";
}