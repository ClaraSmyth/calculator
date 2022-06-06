const buttons = document.querySelectorAll('button')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
let currentValue = 0;
let previousValue = 0;
let finalValue = null;
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'number') {
            finalValue = null;
            currentValue = Number(currentValue + button.innerText);
        } else if (button.id === 'operator') {
            finalValue == null ? previousValue = currentValue : previousValue = finalValue;
            currentValue = 0;
            operator = button.innerText;
        } else if (button.id === 'decimal'){
            currentValue.toString().includes('.') ? currentValue : currentValue += '.';
        }else if (button.id === 'equals') {
            finalValue = operate(previousValue, currentValue, operator);
            previousValue = 0;
            currentValue = 0;
            operator = '';
        } else if (button.id === 'delete') {
            currentValue = Number(currentValue.toString().slice(0, -1));
        } else if (button.id === 'clear') {
            currentValue = 0;
            previousValue = 0;
            finalValue = null;
            operator = '';
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

// let test = /\+/.test(previous.innerText);

// console.log(operate(3, 3, '÷'))


// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log()
//         if (button.id === 'number') {
//             previous.innerText = current.innerText;
//             current.innerText = '';
//             current.innerText += `${button.innerText}`;
//             currentValue = Number(current.innerText);
//         } else if (button.id === 'operator') {
//             previousValue = currentValue;
//             currentValue = 0;
//             previous.innerText = current.innerText + `${button.innerText}`;
//             current.innerText = '';
//             operator = button.innerText;
//         } else if (button.id === 'equals') {
//             currentValue = operate(currentValue, previousValue, operator);
//             current.innerText = currentValue;
//             previousValue = 0;
//             previous.innerText = '';
//             console.log(currentValue)
//         }
//         console.log(currentValue, previousValue, operator)
//     })
// })