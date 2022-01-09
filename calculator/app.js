function calculator(){

    this.solving_function = (input) => {
        
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
                    if(parseInt(pop_second) === 0){
                        console.log("You are trying to divide by 0 which doesn't work")
                    }
                    else{
                        stack.push(parseInt(pop_second) / parseInt(pop_first));
                    }
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
    console.log("we are here")
    return !isNaN(parseFloat(this)) && isFinite(this);
}

var ms = new calculator;

// console.log(ms.solving_function("        6 3 6 5 * - +    "));

while(true){
   
    const prompt = require('prompt-sync')({sigint:true});
    user_input = prompt("> ");

    if(user_input === "q" || user_input === "exit" || user_input === "clear"){
        console.log("Exited Calculator")
        break;
    }

    else if(user_input === "") {
        console.log("You have not inputed anything \n\ please input a number")
    }

    else {
        console.log(ms.solving_function(user_input))
    }
}













// console.log ('\n',"Welcome to the calculator. please input a number",'\n','\n', "to exit, type either one of these commandes: q  exit ^c ^d")

// const prompt = require('prompt-sync')({sigint:true});
// user_input = prompt("> ");


