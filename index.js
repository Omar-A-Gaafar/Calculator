const display=document.getElementById('display');

function appendToDisplay(input){
    display.value=input;
}

function clearDisplay(){
    display.value='';
}

function add(){
    try{
        const expression = display.value;
        const [a, b] = expression.split('+').map(Number);
        display.value = a + b;
    }
    catch(error){
        display.value = "Error";
    }
}

function subtract() {
    try{
        const expression = display.value;
        const [a, b] = expression.split('-').map(Number);
        display.value = a - b;
    } catch (error){
        display.value = "Error";
    }
}

function multiply() {
    try{
        const expression = display.value;
        const [a, b] = expression.split('*').map(Number);
        display.value = a * b;
    } catch (error){
        display.value = "Error";
    }
}

function divide() {
    try{
        const expression = display.value;
        const [a, b] = expression.split('/').map(Number);
        if (b === 0) {
            display.value = "Error";
    }   else {
            display.value = a / b;
    }
    }   catch (error){
            display.value = "Error";
    } 
}

function calculate(){
    if (display.value.includes('+')) {
        add();
    } else if (display.value.includes('-')) {
        subtract();
    } else if (display.value.includes('*')) {
        multiply();
    } else if (display.value.includes('/')) {
        divide();
    } else {
        display.value = "Error";
    }
}