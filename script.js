const buttons = document.querySelectorAll('button')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
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
            if (operator === null) {
                previousValue = currentValue + finalValue;
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
        console.log(previousValue, currentValue, finalValue, operator)
    })
})

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
        console.log(e.key)
        if (e.key === button.innerText) {
            button.click();
        } else if ((e.key === 'Enter') && (button.innerText === '=')) {
            button.click();
        } else if ((e.key === 'Backspace') && (button.innerText === 'Del')) {
            button.click();
        }
    });
});