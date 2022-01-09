function calculator(){

    this.solving_function = function(input) {
        
        let stack = [];
        var input_split = input.split("/ +/").map(function(item) {
            return item.trim();
        });
        input_split = input_split[0].split(" ");
        
        for(var i = 0; i < input_split.length; i++) {
            if(!isNaN(input_split[i])) {
                stack.push(input_split[i]);
            }
            else {
                var pop_first = stack.pop();
                var pop_second = stack.pop();

                if(input_split[i] === "+") {
                    stack.push(parseInt(pop_first) + parseInt(pop_second));
                }

                else if(input_split[i] === "-") {
                    stack.push(parseInt(pop_second) - parseInt(pop_first));
                }

                else if(input_split[i] === "*") {
                    stack.push(parseInt(pop_first) * parseInt(pop_second));
                }

                else if(input_split[i] === "/") {
                    stack.push(parseInt(pop_second) / parseInt(pop_first));
                }

            }
        }

        if(stack.length > 1) {
            return "error"
        }
        else {
            return stack[0];
        }
    }
}


String.prototype.Number = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}

var ms = new calculator;
console.log(ms.solving_function("        6 3 6 * -     "));


















// console.log ('\n',"Welcome to the calculator. please input a number",'\n','\n', "to exit, type either one of these commandes: q  exit ^c ^d")

// //empty array to obtain user numbers and operators in order to carryout the calculations on
// let arr = []
// let stack = []
// let operator = ["/","*","-","+"]

// //in order for the loop to keep going until one of the terminating commands gets typed
// while(true){
   
//     //obtains user input and saves it in var input.
//     //also terminates program with ^c
//     const prompt = require('prompt-sync')({sigint:true});
//     var input = prompt("> ");

//     //terminating commands besides ^c
//     if(input === "q" || input === "exit" || input ==="^D"){
//         break;
//     }
    
//     else{
//         //if number, push into stack array
//         arr.push((input));
//         //print the input so the user sees again what they inserted 
//         console.log(input)
//     }
    
//     for(let i = 2; i < arr.length; i++)
//     {
//         if(operator.includes(arr[i]))
//         {5
//             let second = stack.pop()
//             let first = stack.pop()

//             arr[i] === "*"? stack.push(Number(first * second)):
//             arr[i] === "*"? stack.push(Number(first * second)):
//             arr[i] === "*"? stack.push(Number(first * second)):
//             stack.push(Number(first-second))

//         }
//     }
// }






//psedo code
//  need empty array to obtain user input
//  define math symbols (+ - / *)
//
//      while (need the user to keep inputting until quitting)
//      
//
//   arr.push(Number(input));
//
//
//
//
//
//
//
//
//
//
//
//
//


