const buttons = document.querySelectorAll('button')
const current = document.querySelector('.current')
const previous = document.querySelector('.previous')
let currentValue = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log()
        if (button.id === 'number') {
            current.innerText = current.innerText + `${button.innerText}`;
            currentValue = current.innerText + `${button.innerText}`;
            console.log(currentValue)
        }
    })
})

function operate(a, b, operator) {
    switch (operator) {
        case 'add':
            return a + b;
            break;
        case 'subtract':
            return a - b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'divide':
            return a / b;
            break;
    }
}


// console.log()