var name;
var now = new Date();
var hour = now.getHours();

name = window.prompt("Please enter your name");

if(hour<12)
document.writeln("<h1>Good morning ");

if(hour>=12)
{
    hour =  hour - 12;

    if(hour<6)
    document.writeln("<h1>Good afternoon ");

    if (hour>=6)
    document.writeln("<h1>Good evening ");
}

document.writeln(name + "<h1>");