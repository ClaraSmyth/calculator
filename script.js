const buttons = document.querySelectorAll('button')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
let currentValue = 0;
let previousValue = 0;
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log()
        if (button.id === 'number') {
            currentValue = Number(currentValue + button.innerText);
        } else if (button.id === 'operator') {
            previousValue = currentValue;
            currentValue = 0;
            operator = button.innerText;
        } else if (button.id === 'equals') {
            currentValue = operate(currentValue, previousValue, operator);
            previousValue = 0;
            console.log(currentValue)
        }
        console.log(currentValue, previousValue, operator)
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