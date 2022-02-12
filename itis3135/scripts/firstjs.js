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
function setName(name){ 
    this.name = name;
}
function getName() {
    return name;
}

//setter and getter for feeling
function setFeeling(feeling) {
    this.feeling = feeling;
}
function getFeeling() {
    return feeling;
}

/*
 * from here to the next big comment is about the date 
*/
function showDateTime(){
    document.getElementById('date').innerHTML = 'It is ' + getCurrentTime() + ' on ' + getCurrentDate();
}

function getCurrentDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}

function getCurrentTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}


/*
 * from here to the next big comment is about 
*/
