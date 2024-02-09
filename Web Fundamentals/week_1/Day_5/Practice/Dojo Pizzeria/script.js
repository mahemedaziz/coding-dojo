var sandwich = {
  bread:    "sourdough",
  protein:  "london broil",
  cheese:   "lacey swiss cheese",
  toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
  
console.log(sandwich);
// --------------------------//
function sandwichFactory(bread, protein, cheese, toppings) {
  var sandwich = {};
  sandwich.bread = bread;
  sandwich.protein = protein;
  sandwich.cheese = cheese;
  sandwich.toppings = toppings;
  return sandwich;
}
  
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);
// --------------------------//
function pizzaOven(crustType, sauceType, cheese, toppings) {
  var pizza = {};
  pizza.crustType= crustType ;
  pizza.sauceType = sauceType;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var  pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var  pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var  pizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta","roquefort"], ["mushrooms", "olives","pesto"]);
console.log(pizza3);

var crustType = ["deep dish","hand tossed"];
var sauceType = ["traditional","marinara"];
var cheese = ["mozzarella", "feta"]
var topping = ["mushrooms", "olives","pesto"];