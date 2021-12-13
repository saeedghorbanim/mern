//one way
function sayHi(name, food){
    console.log('Hello ' + name);
}

//using a variable
var sayHello = function(name, food) {
    console.log('Hello ' + name);
  };



//arrow (anotha one)
const sayWazzzaa = (name, food)=>{
    // console.log('Hello ' + name + "favorite food is this: ", food);
    console.log(`Hello ${name} favorite food is this: ${food}`)
}



var square = function(n) {
    return n * n;
  };

//one way to return in arrow function
var square2 = n =>{
    return n * n
}

var square3 = n => n * n



// square(5)
// console.log(square3(5))


// sayWazzzaa("Patrick", "tacos")

const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}

console.log(returnObjLonghand())