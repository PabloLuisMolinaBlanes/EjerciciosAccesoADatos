function Vehicle() {
	this.totalkm = 0;
}

function Car() {
	this.odometer = 0;
}

function Bicycle() {
	this.odometer = 0;
}
var vehicle = new Vehicle;
Car.prototype = vehicle;
Car.prototype = {
	constructor: Car,
	getKm: function() {return this.odometer},
	run: function(x) { this.odometer += x;
			   vehicle.totalkm += x;
			   return true},
	burnWheel: function() {console.log("I am burning the wheels!!!");
			       return true}
};
Bicycle.prototype = vehicle;
Bicycle.prototype = {
	constructor: Bicycle,
	getKm: function() {return this.odometer},
	run: function(x) { this.odometer += x; 
			   vehicle.totalkm += x;
			   return true},
	doTheWheelie: function() {console.log("I am doing the wheelie!!!"); 
				  return true}
};
car1 = new Car();
bicycle1 = new Bicycle();
car1.burnWheel();
bicycle1.doTheWheelie();
car1.run(500);
bicycle1.run(40);
console.log("Car odometer: " + car1.getKm());
console.log("Bicycle odometer: " + bicycle1.getKm());
console.log("Total km: " + vehicle.totalkm);
