function addition() { //Defining and naming the addition function
    var addition = 2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition; //Print the result in HTML
}
function substraction() { //Defining and naming the substraction function
    var substraction = 5-2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + substraction; //Print the result in HTML
}
function multiplication() { //Defining and naming the multiplication function
    var multiplication = 5*3;
    document.getElementById("Mult").innerHTML = "5 * 3 = "+ multiplication; //Print the result in HTML
}
function division() { //Defining and naming the division function
    var division = 12/3;
    document.getElementById("Div").innerHTML = "12 / 3 = "+ division; //Print the result in HTML
}
function more () { //Defining and naming the multiple functions
    var multiple  = (1+2)*10/2-5;
    document.getElementById("Multi").innerHTML = "(1 + 2) * 10 / 2 - 5 = " + multiple; //Print the result in HTML
}
function modulus_operator() { //Defining and naming the modulus operator function
    var modulus = 35 % 4;
    document.getElementById("Mod").innerHTML = "Remainder of 35 / 4 = " + modulus; //Print the result in HTML
}
function negation_operator() { //Defining and naming the negation operator function
    var x = 10;
    document.getElementById("negation").innerHTML = -x; //Print the result in HTML
}
function increment() { //Defining and naming the increment function
    var value = document.getElementById("increment text").innerHTML;
    value++;
    document.getElementById("increment text").innerHTML = value; //Print the result in HTML
    
}
function decrement() { //Defining and naming the decrement function
    var value = document.getElementById("decrement text").innerHTML;
    value--;
    document.getElementById("decrement text").innerHTML = value; //Print the result in HTML
}
function random() { //Defining and naming the random function
    document.getElementById("Ran").innerHTML = Math.random()*10; //Print the result in HTML
}

