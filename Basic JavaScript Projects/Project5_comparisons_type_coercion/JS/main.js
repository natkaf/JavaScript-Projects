document.write(typeof "word");//printing the data type
document.write("<br>");

document.write("33" + 4);//expression containing a string and a number
document.write("<br>");

document.write(2 == 2);//using the == operator
document.write("<br>");

document.write(2 == 3);//using the == operator
document.write("<br>");

x = 2;//variables with the boolean data
y = 2;
a = "two";
b = 3;
document.write(x === y);//using the === operator
document.write("<br>");

document.write(a === b);//using the === operator
document.write("<br>");

document.write(x === a);//using the === operator
document.write("<br>");

document.write(x === b);//using the === operator
document.write("<br>");

document.write(10 > 5 && 8 > 2);//using > and && operators
document.write("<br>");

document.write(10 > 5 && 8 > 9);//using > and && operators
document.write("<br>");

document.write(10 > 8 || 10 < 8);//using > and || operators
document.write("<br>");

document.write(6 < 5 || 10 > 11);//using > and || operators
document.write("<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);//using the ! operator
}
function not2_Function() {
    document.getElementById("not").innerHTML = !(5 > 10);//using the ! operator
}
function NaN_function() {
    document.getElementById("Test").innerHTML = 0/0;//NaN 
}
function my1() {
    document.getElementById("Test2").innerHTML = isNaN('This is a word');//isNaN function
}
function my2() {
    document.getElementById("Test3").innerHTML = isNaN('345');//isNaN function
}
function my3() {
    document.getElementById("Test4").innerHTML = 2E310;//positive infinity
}
function my4() {
    document.getElementById("Test5").innerHTML = -3E310;//negative infinity
}
function boolean() {
    document.getElementById("bool").innerHTML = Boolean(10>9);
}
function boolean2() {
    document.getElementById("bool2").innerHTML = Boolean(9<8);
}
console.log(20 + 32);//printing in console
console.log(24 > 30);//printing in console