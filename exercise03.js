const prompt = require('prompt-sync')();

var m = prompt('Introduzca la altura de la pirámide numérica: ');

var counter = 1;

var count = 1;

var countsecond = 1;

var x = "";

var espacio = m;

	do {
	do {
		if (countsecond === 1 || count === countsecond || m == counter) {
			x += "*";
		} else {
			x += " ";
		}
		countsecond++;
	} while (count >= countsecond)
	console.log(x.padStart(Number(x.length)+Number(espacio)));
	counter++;
	count += 2;
	countsecond = 1;
	espacio--;
	x = "";
	} while (m >= counter); 


