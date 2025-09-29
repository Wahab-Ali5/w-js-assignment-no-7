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



function convertDistance(kilometers, unit) {
  var result;

  switch (unit.toLowerCase()) {
    case 'meters':
      result = kilometers * 1000;
      console.log(kilometers,"km is ",result ,"meters.");
      break;
    case 'feet':
      result = kilometers * 3280.84;
      console.log(kilometers,"km is ",result ,"feet.");
      break;
    case 'inches':
      result = kilometers * 39370.1;
      console.log(kilometers,"km is ",result ,"inches.");
      break;
    case 'centimeters':
      result = kilometers * 100000;
       console.log(kilometers,"km is ",result ,"centimeters.");
      break;
    default:
      console.log("Invalid unit. Please choose from 'meters', 'feet', 'inches', or 'centimeters'.");
  }
  return result;
}
console.log( convertDistance(kprompt("Enter the distance between two cities in kilometers:"), prompt("Enter the distance between two cities in units:")));

// 9)

function calculateOvertimePay(hoursWorked) {
  var regularHours = 40;
  var overtimeRate = 12.00;
  var overtimePay = 0;

  hoursWorked = Math.floor(hoursWorked); 

  var overtimeHours = hoursWorked > regularHours ? hoursWorked - regularHours : 0;

  switch (true) {
    case (overtimeHours > 0):
      overtimePay = overtimeHours * overtimeRate;
      console.log("Employee worked", hoursWorked, hours);
      console.log("Overtime hours: ",overtimeHours);
      console.log("Overtime pay: Rs. ",overtimePay.toFixed(2));
      break;
    case (overtimeHours === 0):
      console.log("Employee worked ",hoursWorked, "hours. No overtime worked.");
      break;
    default:
      console.log("Invalid hours worked. Please enter a non-negative number.");
  }

  return overtimePay;
}
calculateOvertimePay(45);

// 10)

function calculateNotes(withdrawalAmount) {
  var amount = withdrawalAmount; 

  var notes100 = Math.floor(amount / 100);
  amount %= 100;

  var notes50 = Math.floor(amount / 50);
  amount %= 50;

  var notes10 = Math.floor(amount / 10);

  console.log("Amount: ",withdrawalAmount);
  console.log("Notes of Rs. 100: ",notes100);
  console.log("Notes of Rs. 50: ",notes50);
  console.log("Notes of Rs. 10: ",notes10);
}
calculateNotes(480); 

// ch=43-46 EVENTS

// 1) done 
// 2) done
// 3)
// 4) done

// END