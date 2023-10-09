function my_dictionary() {
    var animal = {
        Species:"Cat",
        Color:"Tabby",
        Breed:"Ragdoll",
        Age: 7,
        Sound:"Meow!"
    };
    delete animal.Color; //this removes color KVP from the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = animal.Color;
}