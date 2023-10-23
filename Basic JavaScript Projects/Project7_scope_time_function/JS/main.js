//Assigning local and global variables
var x = 15; //global variable
function Add_numbers_1() {
    var x = 35; //local variable
    document.write(25 + x + "<br>"); //using local variable
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>"); //using global variable
    console.log(x); //using console.log to debug which variable is being used
}
Add_numbers_1();
Add_numbers_2();

// a function that includes an if statement
function get_Date() {
    if(new Date().getHours() < 16) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//if statement
if (15 > 14) {
    document.write("The left number is bigger than the right number!");
}

// a function with if and else statement
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age>= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote
}

//a function with if, else if and else statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
