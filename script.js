console.log("Calculator loaded");

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");
const operatorButtons = document.querySelectorAll(".operator"); 
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const numberButtons = document.querySelectorAll(".number");

let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = false;

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b === 0){
        alert("Cannot divide by zero");
        return null;
    }
    return a/b;
}

function operate(operator, a , b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return null;
    }
}
//Show the numbers on the screen
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (shouldResetDisplay) {
            display.textContent = button.textContent;
            shouldResetDisplay = false;
        }
        else if (display.textContent === "0") {
            display.textContent = button.textContent;
        }
        else {
            display.textContent += button.textContent;
        }

    });
});
clearButton.addEventListener("click", () => {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = "";
});
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        firstNumber = display.textContent;
        currentOperator = button.textContent;
        shouldResetDisplay = true;
    });
})
equalsButton.addEventListener("click", () => {
    secondNumber = display.textContent;
    let result = operate(currentOperator, firstNumber, secondNumber);
    display.textContent = result;
    firstNumber = result;
    shouldResetDisplay = true;
});
deleteButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent === ""){
        display.textContent = "0";
    }
});     
