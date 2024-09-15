/*1.Write a JavaScript code to implement a basic calculator using Promises that performs addition, 
subtraction, multiplication, and division using promises. The calculator should accept two numbers and an 
operation and return the result as a promise. In case of invalid operation (wrong operator or divide by zero)
 let it reject with an error message*/
function calculate(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        // Validate that inputs are numbers
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject('Both inputs must be numbers.');
            return;
        }

        switch (operation) {
            case '+':
                resolve(num1 + num2);
                break;
            case '-':
                resolve(num1 - num2);
                break;
            case '*':
                resolve(num1 * num2);
                break;
            case '/':
                if (num2 === 0) {
                    reject('Error: Division by zero.');
                } else {
                    resolve(num1 / num2);
                }
                break;
            default:
                reject('Error: Invalid operation. Please use +, -, *, or /.');
        }
    });
}

// Example usage:
calculate(20, 21, '+')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(41, 0, '/')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));

calculate(41, 5, '%')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error));



