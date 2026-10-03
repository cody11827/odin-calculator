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

function calculate(){
    let numbers = calculatorInput.split(/[+*/-]/)
    if (numbers.length <= 1){
        console.log("numbers <= 1")
        return Number(numbers[0]);
    }

    if (operator == null){
        console.log("opperater == null")
        return Number(numbers[0]);
    }
    return operate(operator,Number(numbers[0]),Number(numbers[1]));
}

function onCalculatorButtonClicked(e){
    let target = e.target;

    let newInput = e.target.textContent;

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
        calculatorInput = calculate()
        console.log(calculatorInput);
        operator = null;
        return;
    }
    calculatorInput += newInput;
    console.log(calculatorInput);

}


let buttons = document.querySelector(".buttons");


buttons.addEventListener("click",onCalculatorButtonClicked)