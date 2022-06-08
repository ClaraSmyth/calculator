const buttons = document.querySelectorAll('button');
const current = document.querySelector('.current');
const previous = document.querySelector('.previous');
const kbSupport = document.querySelector('.kb-supp-container');
let currentValue = 0;
let previousValue = 0;
let finalValue = null;
let operator = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'number') {
            finalValue = null;
            currentValue = Number(currentValue + button.innerText);
            // Display update below here
            current.innerText = currentValue;
        } 
        
        else if (button.id === 'operator') {
            if ((operator !== null) && (currentValue === 0)) {
                currentValue = 0;
            } else if (operator === null) {
                previousValue = currentValue + finalValue;
                currentValue = 0;
                operator = button.innerText;
                // Display update below here
                previous.innerText += current.innerText + `${button.innerText}`;
                current.innerText = currentValue;
            } else {
                previousValue = operate(previousValue, currentValue, operator);
                currentValue = 0;
                operator = button.innerText;
                // Display update below here
                previous.innerText += current.innerText + `${button.innerText}`;
                current.innerText = currentValue;
            }
        } 
        
        else if (button.id === 'decimal'){
            currentValue.toString().includes('.') ? currentValue : currentValue += '.';
            // Display update below here
            current.innerText = currentValue;
        }
        
        else if (button.id === 'equals') {
            if (operator === null) {
                currentValue;
            } else {
                finalValue = operate(previousValue, currentValue, operator);
                currentValue = 0;
                previousValue = 0;
                operator = null;
                // Display update below here
                current.innerText = finalValue;
                previous.innerText = null;
            }
        } 
        
        else if (button.id === 'delete') {
            currentValue = Number(currentValue.toString().slice(0, -1));
            current.innerText = currentValue;
        } 
        
        else if (button.id === 'clear') {
            currentValue = 0;
            previousValue = 0;
            finalValue = null;
            operator = null;
            // Display update below here
            current.innerText = null;
            previous.innerText = null;
        } 
        
        else if (button.id === 'kb-supp-btn') {
            if (button.innerText === '>') {
                button.innerText = '<';
                kbSupport.classList.add('slide-in')
            } else {
                button.innerText = '>';
                kbSupport.classList.toggle('slide-in')
            }
        }     
        console.log(previousValue, currentValue, finalValue, operator)
    });
});

// Does the calculations 
function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '×':
            return a * b;
            break;
        case '÷':
            return a / b;
            break;
        case '%':
            return a / 100 * b;
            break;
    }
}

// Keyboard support
document.addEventListener('keydown', e => {
    buttons.forEach((button) => {
        if ((e.key === button.innerText)
        || ((e.key === 'Enter') && (button.innerText === '='))
        || ((e.key === 'Backspace') && (button.innerText === 'Del'))
        || ((e.key === 'Escape') && (button.innerText === 'AC'))
        || ((e.key === '*') && (button.innerText === '×'))
        || ((e.key === '/') && (button.innerText === '÷'))) {
                e.preventDefault();
                button.click();
        } 
    });
});