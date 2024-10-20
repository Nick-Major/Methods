export class Undead extends Character {
	constructor(name) {
		super(name, "Undead", 100, 1, 25, 25)
	}
}

let undead = new Undead("Нежить");
console.log(undead);
