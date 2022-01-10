function calculator(){

    this.solving_function = (input) => {
        var input_split = input.split(" ");
       
        input_split.forEach(function(value){

            if(!isNaN(value) &&  value != "") {
                stack.push(value);

            } else if (value == "+" && stack.length > 1) {
                var firstPop = stack.pop();
                var secondPop = stack.pop();
                stack.push((firstPop*1000 + secondPop*1000)/1000)

            } else if (value == "-" && stack.length > 1) {
                firstPop = stack.pop();
                secondPop = stack.pop();
                stack.push((secondPop*1000 - firstPop*1000)/1000)

            } else if (value == "*" && stack.length > 1) {
                firstPop = stack.pop();
                secondPop = stack.pop();
                stack.push(firstPop * secondPop)
            }
            else if (value == "/" && stack.length > 1) {
                firstPop = stack.pop();
                if(firstPop == 0) {
                    console.log("you are dividing by 0 which gives an error \n please insert a valid number to divide by \n")
                } 
                else {
                    secondPop = stack.pop();
                    stack.push(secondPop / firstPop)
                }
            }
            
        });

        if(stack.length > 0) {
            return stack[stack.length - 1];
        }
        else {
            return "Calculator has a clean screen, please input valid numbers to calculate"
        }
    }
}




String.prototype.Number = function() {
    console.log("we are here")
    return !isNaN(parseFloat(this)) && isFinite(this);
}

var ms = new calculator;
var stack = []

console.log ('\n',"Welcome to the calculator.",'\n',"In order to use it, please insert two numbers and then the operator '+,-,*,/'", '\n', "To exit, type either one of these commandes: 'q' 'exit' '^c' '^d'", '\n')

while(true){
   
    const prompt = require('prompt-sync')({sigint:true});
    user_input = prompt("> ");

    const mixedInputs = user_input.search();
    const letters = user_input.search();

    if(user_input.toUpperCase() === "Q" || user_input.toUpperCase() === "EXIT" || user_input.toUpperCase() === "CLEAR"){
        console.log("Exited Calculator")
        break;
    }

    else if(user_input === "") {
        console.log("You have not inputted anything \n\ please input a number")
    }

    else if(mixedInputs) {
        console.log("Please insert numbers first than mathmatical signs (+ - * /) at the end")
    }

    else if(letters) {
        console.log("Please do not insert any letters at all")
    }

    else {
        console.log(ms.solving_function(user_input))
    }
}
















