'use strict'

const res = document.getElementById("result");
const calculatorClear = document.getElementById("clear-button");
const calculatorButton = document.querySelectorAll(".calculator-button");
const qualButton = document.querySelector('.calculator-result');

function calculator(value) {
    const calculatorValue = eval(value || null);

    if(isNaN(calculatorValue)) {
        res.value = "Неможливо поділити на 0"
        setTimeout(() =>{
            res.value = ""
        }, 1000);
    }

    else {
        res.value = calculatorValue;
    }
};

function liveScreen(enteredValue) {
    if (!res.value){
        res.value = ""
    }

    res.value += enteredValue;
};

calculatorButton.forEach(btn => {
    btn.addEventListener('click', () => {
        liveScreen(btn.value)
    })
});

qualButton.addEventListener('click', () => {
    calculator(res.value);
});


calculatorClear.addEventListener('click', () => {
res.value = ""
});