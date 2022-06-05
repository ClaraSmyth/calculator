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

console.log(operate(3, 3, 'add'))