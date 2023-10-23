function Ride_Function() { //A function with HTML and JS using a ternary operation with input from the browser
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color) { // A constructor function using "new" and "this" keywords
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //A function to display the results of the constructor in an HTML element
    document.getElementById("New_and_This").innerHTML = 
    "Eric drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function add_Strings() { //A nested function
    var start_string = "Good";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("Day");
    document.getElementById("Nested_Function").innerHTML = start_string;
}