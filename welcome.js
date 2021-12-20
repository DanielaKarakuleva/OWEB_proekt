function welcome()
{
var name;
var now = new Date();
var hour = now.getHours();
var output = document.getElementById("greet")

name = window.prompt("Please enter your name");

if(hour<12)
output.innerHTML = "<div>Good morning " + name + "!</div>"

if(hour>=12)
{
    hour =  hour - 12;

    if(hour<6)
    output.innerHTML = "<div>Good afternoon " + name + "!</div>"

    if (hour>=6)
    output.innerHTML = "<div>Good evening " + name + "!</div>"
}

}
window.addEventListener("load", welcome,false)