const prompt = require('prompt-sync')();

const height = prompt('Introduzca la altura de la pir�mide num�rica: ');

var espacio = height;

// First part of the line
// lettering(3) returns 12321

var lettering = (contador) => {

		var adder = 1;
		var x = "";
		do {
			x += "" + adder;
			adder++;
		} while (adder <= contador);
		// Second part of the line
		x += x.split('').reverse().join('').slice(1);
		return x; 	 

}

let middleNumber = 1;	
	do {
		var stringi = lettering(middleNumber);
		console.log(stringi.padStart(Number(stringi.length) + Number(espacio)));
		middleNumber++;
		espacio--;	
	} while (espacio > 0); 

