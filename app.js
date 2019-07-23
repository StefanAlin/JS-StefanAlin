var prime = function(num) {
  if (num >= 0 && num < 2) {
    return num + " is  not prime";
  }
  if (num === 2) {
    return num + " is prime";
  }

  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return num + " is not prime";
    }
  }
  return num + " is prime";
};

// console.log(prime(-1));
// for (var i = 0; i < 101; i++) {
//   console.log(prime(i));
// }

var repeatString = function(str, num) {
  var finalStr = "";
  for (var i = 1; i <= num; i++) {
    finalStr += str;
  }
  return finalStr;
};

console.log(repeatString("stefaN", 4));

function returnPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;

  for (var i = 3; i <= n / 2; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(returnPrime(99));

function calculateTax(salariu, tax) {
  return "Taxa este " + tax + " % la anaf s-a dus " + (salariu * tax) / 100;
}

var taxCalucator = function(salary) {
  var smSal = 30000;
  var medSal = 50000;
  var hSal = 100000;
  var tax = 0;
  if (salary <= smSal - 1) {
    return tax;
  } else if (salary >= smSal && salary <= medSal - 1) {
    return calculateTax(salary, 15);
  } else if (salary >= medSal && salary <= hSal - 1) {
    tax = salary * (35 / 100);
    return (
      "calculated tax for a salary of " + "$" + salary + " is " + " $" + tax
    );
  } else if (salary >= hSal) {
    tax = salary * (40 / 100);
    return (
      "calculated tax for a salary of " + "$" + salary + " is " + " $" + tax
    );
  }
};
taxCalucator(100000);

// var myArray = [
//   { name: "Vasile Seicaru" },
//   { name: "Gabriel Dorobantu" },
//   { name: "Gabriel Cotabita" },
//   { name: "AASOON" },
//   { name: "Gabriel Cotabita" }
// ];

// const result = myArray.findIndex(function(element) {
//   console.log("*->", element);
// });
// console.log(result);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function myFilter(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
}

result3 = myFilter(numbers);
console.log(result3);
