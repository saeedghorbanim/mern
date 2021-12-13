const groceryList = Object.freeze([
    { item: "carrots", haveIngredient: false},
    { item: "onions", haveIngredient: true},
    { item: "celery", haveIngredient: false},
    { item: "cremini mushrooms", haveIngredient: false},
    { item: "butter", haveIngredient: true}
]);

const addedTumeric = [...groceryList, {item:"tumeric", haveIngredient:true }]


const animals = ['ant', 'eagle', 'bison', 'camel'];

const addExtraAnimal = [...animals, 'dragon'];

console.log(addExtraAnimal)


//in this case “map” is a function which replaces the “for” loop function
//and item is a variable which does the iteration (like “i” in a for loop)
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
