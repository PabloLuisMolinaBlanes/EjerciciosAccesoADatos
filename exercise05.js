const prompt = require('prompt-sync')();
var numerototal = prompt("Introduzca el n�mero total de nombres de reyes");
var arrayReyes = [];
var counter = 0;
console.log("Vaya introduciendo los nombres de los reyes y pulsando INTRO");
do {
	var rey = prompt("");
	arrayReyes.push(rey);
	counter++;
} while (counter < numerototal);
arrayReyes.sort();
counter = 0;
var counterrey = 1;
console.log("Los reyes introducidos son:");
for (counter = 0; counter < arrayReyes.length; counter++) {
	if (counter !== arrayReyes.length) {
	if (arrayReyes[counter] === arrayReyes[counter+1]) {
		arrayReyes[counter] += " " + counterrey + "o";
		counterrey++;
	} else {
		arrayReyes[counter] += " " + counterrey + "o";
		counterrey = 1;
	}
	} else {
		arrayReyes[counter-1] += " " + counterrey + "o";
		counterrey = 1;
	}
	console.log(arrayReyes[counter]);
}