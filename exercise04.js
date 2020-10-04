var figura1 = "💓";
var figura2 = "⚓";
var figura3 = "💎";
var figura4 = "🍋";
var figura5 = "🔔";
var figuras = [figura1, figura2, figura3, figura4, figura5];
var eleccion1 = figuras[Math.round(Math.random()*4)];
var eleccion2 = figuras[Math.round(Math.random()*4)];
var eleccion3 = figuras[Math.round(Math.random()*4)];
var figuradinero = "💰";
var figuracalavera = "💀";
console.log("" + eleccion1 + " " + eleccion2 + " " + eleccion3);
if (eleccion1 === eleccion2 && eleccion2 === eleccion3) {
	console.log("Enhorabuena, ha ganado 10 monedas " + figuradinero);
} else if (eleccion1 === eleccion2 || eleccion2 === eleccion3 || eleccion3 === eleccion1) {
	console.log("Bien, ha recuperado su moneda " + figuradinero);
} else {
	console.log("Lo siento, ha perdido " + figuracalavera);
}
