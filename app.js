// Calcul n!
var total = 1;
for (var i = 1; i <= 10; i++) {
	total *= i;
	console.log(total);
}

// Cel mai mare divizor comun folosind algoritmul lui euclid
/* numarul1 = numarul2 * (numarul1/numarul2) + reminder(numarul1%numarul2)
   numarul2 = reminder * (numarul2 / reminder) + reminder(numarul2%reminder)
*/
var num1 =  9;
var num2 = 12;




while (num2 > 0) {
    var reminder = num1 % num2;
	num1 = num2;
	num2 = reminder;
}

console.log("al mai mare divizor " + Number(num1));


