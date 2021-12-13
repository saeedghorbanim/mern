console.log(magicalUnicorns);

var magicalUnicorns = "Rapidash";
var robsFavPokemon = "Charmander";


//javascript reads the above lines like this because oof 

// var magicalUnicorns;
//var robsFavPokemon;
// console.log(magicalUnicorns);
// magicalUnicorns= "Rapidash";
//robsFavPokemon = "Charmander"




var foo;                  // 'foo' is a declaration, it's global and gets hoisted
function magic(){         // 'magic()' also gets hoisted to the top
    // var foo;              // here 'foo' is declared within 'magic()' and gets hoisted to the top of its scope
    foo = "hello world";  // we assign a value to our function scoped 'foo'
    console.log(foo);     // we log it as 'hello world'
}                       
// foo = "bar";              // here, we assign a value to the global 'foo'
magic();                  // magic is called, the first console.log runs
console.log(foo);         // finally we log the global foo


anotherFunctionHere()


console.log(name)
console.log(favSport)

var name = "rob"
var favSport = "basketball"

console.log(name)
console.log(favSport)
// console.log(lastName)


function anotherFunctionHere(){
    console.log("last name is this---> ", lastName)  
    var lastName = "Dahal"
}

anotherFunctionHere()

// someFunction()

// var someFunction = function(){
//     console.log("this is some function tho")
// }