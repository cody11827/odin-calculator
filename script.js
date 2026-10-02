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
    if (operator = '+'){
        return add(a,b);
    }else if(operator = '-'){
        return subtract(a,b);
    }else if(operator ='*'){
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

function calculate(){
    
}

function onCalculatorButtonClicked(e){
    console.log("clicked");
    let target = e.target;

    let newInput = e.target.textContent;
    let lastInput = calculatorInput.at(-1);

    if (isOperator(newInput) && isOperator(lastInput)){
        console.log("both operators");
        return;
    }

    calculatorInput += newInput;

    console.log(calculatorInput);

    if (newInput === '='){
        calculate();
    }

}


let buttons = document.querySelector(".buttons");


buttons.addEventListener("click",onCalculatorButtonClicked)