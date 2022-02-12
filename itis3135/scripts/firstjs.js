function scriptTest()
{
    alert("Hey my script is running");
}

var name;
var feeling;

function welcomeWords()
{
    

    setName(prompt("Please enter your name", "Jessica"))
    setFeeling(prompt("How are you feeling?", "so so"))
    
    document.getElementById("words").innerHTML = "Welcomes to the Dusty Turtle, "
    + getFeeling() + "!  We're glad to hear you are feeling " + getFeeling() + "!";
}

function setName(name){ 
    this.name = name;
}
function getName() {
    return name;
}

function setFeeling(feeling) {
    this.feeling = feeling;
}
function getFeeling() {
    return feeling;
}

document.getElementById('date').innerHTML = "It is " 
+ today.getTime() + " On " + today.getDate();

function getTime() {
    let date = new Date();
    let ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    let mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return date.getHours() % 12 + ':' + mins + ' ' + ampm;
}
function getDate() {
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
}


