//1. Define prompt so we can respond from our IDE
const prompt = require('prompt-sync')();

//2. Create a prompt for user to select what kind of operation to perform
let operator = prompt ('select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ').toLowerCase();

//3. Create a function that checks the users selection of operator if the operator is correct proceed else ask the user to input a correct operator and start again
function checkOperator(){
    if (operator === 'a' || operator === 'b' || operator === 'c' || operator === 'd' && operator !='') {
        performOperation();
    } else {    
      console.log('Please insert a valid input or operator!');
    } 

    resetOperatorSelection();
  }

checkOperator();


//4. Ask a function to perform a calculation based on the operator selected by the user
function performOperation(){
//  a. Ask the user for first number or input
    let firstInput = parseInt(prompt('Please insert your first number: '));

    //  b. Ask the user for the second number or input
    let secondInput = parseInt(prompt('Please insert your second number: '));

    //  c. Perform the operation selected on the first and second numbers inputed

  if (operator === 'a'){
      let addition = firstInput + secondInput
      console.log(`The sum is ${addition}`);
      return addition;
  } else (operator === 'b'){
      let subtraction = firstInput - secondInput
      console.log(`The Difference is ${subtraction}`);
      return subtraction;
  } else if (operator === 'c'){
      let division = firstInput / secondInput
      console.log(`The Quotient is ${division}`);
      return division;
  } else if (operator === 'd'){
      let multiplication = firstInput * secondInput
      console.log(`The product is ${multiplication}`);
      return multiplication;
  } else {
    console.log('Please insert a valid input or number!')
  }
  performOperation();
}

//5. Create a function to reset the input of operator selection and restart the process when there is a wrong selection of operator
function resetOperatorSelection() {
  prompt ('select an operator, a. Addition, b. Subtraction, c. Division, d. Multiplication: ');
  checkOperator();
}