// comentariile vor fi in engleza pentru ca romgleza.
// The commentaries will be in english because romglish

// Function expression declaration

var lg = ["es", "en", "de", "pt", "it", "ro"];
var dictLang = {
	es: "Hola Mundo!",
	en: "Hello World!",
	de: "Hallo Welt!",
	pt: "Ola Mundo!",
	it: "Ciao Mondo!",
	ro: "Salut Lume!"
};
var helloWorldInLang = function(lang) {
	// firslty done with if/else if/else statements
	// if(lang === "es"){
	//     // console.log('Hola Mundo!')
	//     console.log(dictLang["es"]);
	// } else if (lang === "de"){
	//     console.log(dictLang["de"]);
	// } else if (lang === "pt"){
	//     console.log(dictLang["pt"]);
	// } else {
	//     console.log(dictLang["en"]);
	//     /* I can add another else if for the en language
	//     but if you type "en" in the console.log function
	//     it goes on the else block anyway.
	//     */
	// }

	// Doing the same stuff with switch statements.
	// also using the lg array created above
	// and the dictionary

	switch (lang) {
		case lg[0]:
			console.log(dictLang["es"]);
			break;
		case lg[1]:
			console.log(dictLang["en"]);
			break;
		case lg[2]:
			console.log(dictLang["de"]);
			break;
		case lg[3]:
			console.log(dictLang["pt"]);
			break;
		case lg[4]:
			console.log(dictLang["it"]);
			break;
		case lg[5]:
			console.log(dictLang["ro"]);
			break;
		default:
			console.log("Hello World");
	}
};

helloWorldInLang("ro");

// Create a function that logs the smallest number from an array
var smArray = [2, 4, 10, 5, 1, 16, 7, 0, 8, 9, 11, -3, 12, 14, 17, 18, 19];
var minimum = smArray[0];

function smallestNumber(numArray, min) {
	// itterate thru the array with a for loop
	for (var i = 0; i < numArray.length; i++) {
		// check if the current number is smallest than minimum
		if (numArray[i] < min) {
			// if the condition is true, assign the value found at index i to the minimum variable
			min = numArray[i];
		}
	}
	console.log("smallest number in smArray is: " + min);
}

smallestNumber(smArray, minimum);

// Create a function to display if a number is prime
// a prime numer is a number that divides by 1 and itself
// 0,1 are not prime numbers
// 2 is a prime number but all the other even numbers are not prime

var displayPrimeNumber = function(num) {
	// create a loop starting starting with 2
	// create cases for 0,1 and 2
	if (num <= 0 || num === 1) {
		console.log(num + " Is not prime");
	}
	if (num === 2) {
		console.log(num + " is prime");
	}

	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			console.log(num + " Is not prime");
		}
		if(num % i !== 0){
			console.log(num + " is prime");
		}
	}
	

};
displayPrimeNumber(99);




// Dau push asa si mai vedem maine....