function calculator(){
    //function obtaining the input
    this.solving_function = (input) => {
        //splits inputs by space to go through
        var input_split = input.split(" ");

        //going through a function for each input
        input_split.forEach((value) => {
            //checks if the input is a number or not and if it is not a white space
            if(!isNaN(value) &&  value != "") {
                //pushes the number to the stack array
                stack.push(value);
            } 
            //checks if the stack array has more than 1 input in it 
            //to apply add calculations to the last two number inputs
            else if (value == "+" && stack.length > 1) {
                var firstPop = stack.pop();
                var secondPop = stack.pop();
                stack.push((firstPop*1000 + secondPop*1000)/1000)

            } 
            //checks if the stack array has more than 1 input in it 
            //to apply subtract calculations to the last two number inputs
            else if (value == "-" && stack.length > 1) {
                firstPop = stack.pop();
                secondPop = stack.pop();
                stack.push((secondPop - firstPop))

            } 
            //checks if the stack array has more than 1 input in it 
            //to apply times calculations to the last two number inputs
            else if (value == "*" && stack.length > 1) {
                firstPop = stack.pop();
                secondPop = stack.pop();
                stack.push(firstPop * secondPop)
            }
            //checks if the stack array has more than 1 input in it 
            //to apply division calculations to the last two number inputs
            //if trying to divide by 0, returns message to input another number instead
            else if (value == "/" && stack.length > 1) {
                firstPop = stack.pop();
                if(firstPop == 0) {
                    console.log("\nyou are dividing by 0 which gives an error \n please insert a valid number to divide by\n");
                } 
                //does the division if buttom number is not 0
                else {
                    secondPop = stack.pop();
                    stack.push(secondPop / firstPop)
                }
            } 
            //if all cases fail it means the input either contained more than just numbers
            //or there was less or equal to 1 number which calculations can not be done on
            else {
                console.log("Make sure to have at least 2 numbers to make calculations with. \n Please do not insert any letters or symbols besides + - * /\n");
            }
            
        });
        //stack length gets reduced by one do to calculations between last two numbers
        if(stack.length > 0) {
            return stack[stack.length - 1];
        }
        //final error check if all goes wrong
        return "Error, Something went wrong. Please exit or empty calculator to try again\n"
    }
}



//creating an object of the function to use in while loop
var ms = new calculator;
var stack = []

console.log ('\n',"Welcome to the calculator.",'\n',"In order to use it, please insert two numbers and then the operator '+,-,*,/'", '\n', "To exit, type either one of these commandes: 'q' 'exit' '^c' 'clear'", '\n')

//while loop for continues input until we use one of the exit words
while(true){
   
    //obtaining input from prompt and exiting program with control+c
    const prompt = require('prompt-sync')({sigint:true});
    user_input = prompt("> ");

    //if case for exiting calculator
    if(user_input.toUpperCase() === "Q" || user_input.toUpperCase() === "EXIT" || user_input.toUpperCase() === "CLEAR"){
        console.log("Exited Calculator")
        break;
    }
    //else if case to empty the stack array for new inputs
    else if(user_input.toUpperCase() === "EMPTY" ) {
        stack = [];
        console.log("the calculator has been cleared. Please insert numbers")
    }
    //else if case to return message if user enters while nothing has been inputted
    else if(user_input === "") {
        console.log("You have not inputted anything \n\ please input a number")
    }
    //enters the function in the object with the user's given input
    else {
        console.log(ms.solving_function(user_input))
    }
}
















