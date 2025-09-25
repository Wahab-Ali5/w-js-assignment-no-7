// ch=36-38 functions

// 4)

function calculate(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '%':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero is not allowed.";
            }
            result = num1 / num2;
            break;
        default:
            return "Error: Invalid operator.";
    }

    return result;
}
 console.log( calculate(+prompt("Enter num1"),+prompt("Enter num2"),prompt("Enter operator")));
 
// 5)

function square(number) {
  number*number
}
console.log(square(+prompt("Enter number"))); 
// 6)

function factorial(n) {
  if (n < 0) {
    return "Factorial for negative numbers is not defined.";
  }
  if (n === 0 || n === 1) {
    return 1; 
  } else {
    return n * factorial(n - 1); 
  }
}
console.log(factorial(+prompt("Enter number"))); 

// 7)

function displayCounting(startNumber, endNumber) {
  if (startNumber <= endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      console.log(i);
    }
  } else {
    for (let i = startNumber; i >= endNumber; i--) {
      console.log(i);
    }
  }
}
console.log(displayCounting(+prompt("Enter start number"), +prompt("Enter last number")));

// 8)

