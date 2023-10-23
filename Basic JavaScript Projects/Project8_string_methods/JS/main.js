function full_Sentence() { //using the .concat() method
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() { //using the. slice method
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
function to_Uppercase() { //using Uppercase method
    let text = "hello world!";
    let result = text.toUpperCase();
    document.getElementById("Uppercase").innerHTML = result;
}
function search() { //using search method
    let text = "What a wonderful day.";
    let position = text.search("day");
    document.getElementById("Search").innerHTML = position;
}
function string_Method() { //using tostring method
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
function precision_Method() { //using toprecision method
    var x = 12938.3012987376112
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}
function tofixed_Method() { //using tofixed method
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("Fixed").innerHTML = n;
}
function valueOf_Method() { //using valueof method
    let text = "Hello World!";
    let result = text.valueOf();
    document.getElementById("valueof").innerHTML = result;
}