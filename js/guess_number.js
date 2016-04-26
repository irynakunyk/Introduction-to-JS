var n = 1;
num = Math.ceil(Math.random(n)*100);
a = prompt("Guess number","");
if (a == num) {
alert("You are right, the number is"+a);
}
else if (a < num){
alert("Our number is higher, try again");
}
else
{
alert("Our number is lower, try again");
}