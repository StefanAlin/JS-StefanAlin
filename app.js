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

console.log("al mai mare divizor " + (num1));

// Converise celsius Fahrenheit si viceversa


var temp = Number(prompt("Temperatura este de?: "));
var unit = prompt("Unitatea de masura C sau F: ");

// if(unit === "C"){
// 	//calcul Fahrenheit
// 	var fahrenheit = (temp * 1.8) + 32;
// 	alert("Afara sunt " + fahrenheit + " grade Fahrenheit");
// }else if(unit === "F"){
// 	//calcul celsius
// 	var celsius = (temp - 32) / 1.8;
// 	alert("Afara sunt " + celsius + " grade Celsius");
// }else{
// 	alert("Temperatura sau unitatea de masura folosita nu este valabila");
// }


switch (unit) {
	case "C":
		var fahrenheit = (temp * 1.8) + 32;
		alert("Afara sunt " + fahrenheit + " grade Fahrenheit");
		break;
	case "F":
		var celsius = (temp - 32) / 1.8;
		alert("Afara sunt " + celsius + " grade Celsius");
		break;
	default:
		alert(unit + " Nu este o unitate de masura valabila");
}