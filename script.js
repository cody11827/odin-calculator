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
    if (b === 0){
        alert("DIVISION BY 0")
        return 0;
    }
    return a/b;
}


function operate(operator,a,b){
    if (operator === '+'){
        return add(a,b);
    }else if(operator === '-'){
        return subtract(a,b);
    }else if(operator === '*'){
        return multiply(a,b);
    }else{
        return divide(a,b);
    }
}


function isOperator(character){
    if (character === '+' || character === '-' || character === '*' || character === '/'){
        return true;
    }
    return false;
}



let calculatorInput = ""
let operator = null
let number1HasDecimal = false
let number2HasDecimal = false
let inputBox = document.querySelector("input")

function calculate(){
    let numbers = calculatorInput.split(/[+*/-]/)
    let newNumber = NaN;
    if (numbers.length <= 1 || operator == null){
        console.log("numbers <= 1")
        newNumber = Number(numbers[0]);
    }else{
        newNumber = operate(operator,Number(numbers[0]),Number(numbers[1]));
    }

    number1HasDecimal = !Number.isInteger(newNumber);
    number2HasDecimal = false;

    return newNumber
}

function inputToCalculator(newInput){
    if(newInput == "clr"){
        calculatorInput = "";
        operator = null;
        number1HasDecimal = false
        number2HasDecimal = false
        inputBox.placeholder = calculatorInput;
        return;
    }

    let targetIsOperator = isOperator(newInput);
    if (operator !== null && targetIsOperator || targetIsOperator && calculatorInput.length === 0){
        return;
    }

    if (targetIsOperator){
        console.log("set operator");
        operator = newInput;
    }
    if (newInput === '='){
        console.log("calculate: ");
        calculatorInput = calculate();
        console.log(calculatorInput);
        operator = null;
    }else if (newInput === '.'){
        if(operator !== null){
            if(!number2HasDecimal){
                calculatorInput += newInput;
                number2HasDecimal = true;
            }
        }else{
            if(!number1HasDecimal){
                calculatorInput += newInput;
                number1HasDecimal = true;
            }
        }
    }else{
        calculatorInput += newInput;
        console.log(calculatorInput);
    }
    
    inputBox.placeholder = calculatorInput;
}


function onCalculatorButtonClicked(e){
    let target = e.target;

    let newInput = e.target.textContent;

    inputToCalculator(newInput);
}


function onKeyboardPress(event){
    let key = event.key;
    if(key === 'Enter') key = '=';
    if(key === 'Escape' || key === 'Backspace') key = 'clr';

    const validKeys = '0123456789+-*/=clr';

    if(!validKeys.includes(key)){
        return;
    }

    inputToCalculator(key);
} 



let buttons = document.querySelector(".buttons");



buttons.addEventListener("click",onCalculatorButtonClicked)


document.addEventListener('keydown',onKeyboardPress)