export class Daemon extends Character {
	constructor(name) {
		super(name, "Daemon", 100, 1, 10, 40)
	}
}

let daemon = new Daemon("Демон");
console.log(daemon);
