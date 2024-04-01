// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
//* var example;
// *console.log(example); // logs undefined
// *example = "I'm the example!";

console.log(example);    //* Erreur;
let example = "I'm the example!";    //* "I'm the example!";


console.log(hello);        //*undefined
var hello = 'world';                                 


var needle = 'haystack';
test();                    //*undefined
function test(){
    var needle = 'magnet';
    console.log(needle);
}

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);    //*super cool

var food = 'chicken';
console.log(food);  //*chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);     //*half-chicken
    var food = 'gone';
}

mean();               //!mean is not a function
console.log(food);           //*Undefined
var mean = function() {
    food = "chicken";
    console.log(food); //*chicken
    var food = "fish";
    console.log(food); //*fish
}
console.log(food); //*Undefined



console.log(genre);   //*Undefined
var genre = "disco";
rewind(); 
function rewind() {
    genre = "rock";
    console.log(genre); //*rock
    var genre = "r&b";
    console.log(genre);  //*r&b
}
console.log(genre); //*disco


dojo = "san jose";
console.log(dojo);  //*san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //*seattle
    var dojo = "burbank";
    console.log(dojo);//*burbank
}
console.log(dojo);//*san jose


console.log(makeDojo("Chicago", 65)); 
console.log(makeDojo("Berkeley", 0)); 
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//!{ name: 'Chicago', students: 65, hiring: true }
//!dojo = "closed for now";
