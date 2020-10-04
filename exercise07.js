var pais = ["Espana", "Rusia", "Japon", "Australia"];
var sortedArray = [];
var sortingCounter = 0;
for (var p in pais) {
	sortedArray.push(Number(pais[sortingCounter].length));
	sortingCounter++;
}
sortedArray.sort();
var maximumSpacing = sortedArray[sortedArray.length-1];
var array = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
var maximoLinea = 4;
var counterLinea = 0;
var counterColumna = 0;
var maximoColumna = 10;
var spaceCounter = 0;
var palabra = "";
var arrayCounter = 0;
var media = 0;
var maximo = 0;
var minimo = 900;
var maximos = [];
var minimos = [];
for (counterLinea = 0; counterLinea < maximoLinea; counterLinea++) {
	for (counterColumna = 0; counterColumna < maximoColumna; counterColumna++) {
		randomNum = Number(Math.round((Math.random() * 70)))+Number(140);
		array[counterLinea][counterColumna] = randomNum;
		if (Number(randomNum) > Number(maximo)) {
			maximo = randomNum;
			maximos[arrayCounter] = randomNum;
		} 
		if (Number(randomNum) < Number(minimo)) {
			minimo = randomNum;
			minimos[arrayCounter] = randomNum;
		}
	}
	arrayCounter++;
	maximo = 0;
	minimo = 900;
}
arrayCounter = 0;
console.log("						     MED MIN MAX");
for (counterLinea = 0; counterLinea < maximoLinea; counterLinea++) {
	spaceCounter = pais[arrayCounter].length;
	for (spaceCounter = spaceCounter; maximumSpacing-spaceCounter > 0; spaceCounter++) {
		palabra += " ";
	}
	palabra += pais[counterLinea] + ": "
	for (counterColumna = 0; counterColumna < maximoColumna; counterColumna++) {	
		palabra += "" + array[counterLinea][counterColumna] + " ";
		media += array[counterLinea][counterColumna];
	}
	palabra += "| "
	media = media / maximoColumna;
	palabra += "" + media.toFixed(0) + " " + minimos[arrayCounter] + " " + maximos[arrayCounter];
	console.log(palabra);
	palabra = "";
	arrayCounter++;
	media = 0;
}

