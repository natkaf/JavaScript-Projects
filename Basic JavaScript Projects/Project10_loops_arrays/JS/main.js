function Call_Loop() { //function using a while loop
    var Digit = "";
    var X = 1;
    while(X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //function using a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics() { //function with an array
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
       Cat_Picture[2] + ".";
}
function constant_function() { //a function using a constant
    const Car = {type:"sedan", brand:"Ford", color:"yellow"};
    Car.color = "black";
    Car.price = "$5600";
    Car.type = "hatchback";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
    Car.type + " in " + Car.color + " color was " + Car.price;
}
function my_function() { //creating an object with the let keyword
    let motorcycle = {
        make: "Yamaha",
        year: "2019",
        color: "Green",
    };
    document.getElementById("motorcycle").innerHTML = 
    "I have a " + motorcycle.year + " " + motorcycle.color + " " + motorcycle.make + ".";
}
let car = { //creating an object using the let keyword and adding properties and a method
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description: function(){
        return "The car is a " + this.year  + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

let text = ""; //using the break statement
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("bre").innerHTML = text;