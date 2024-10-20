export class Swordsman extends Character {
	constructor(name) {
		super(name, "Swordsman", 100, 1, 40, 10)
	}
}

let swordsman = new Swordsman("Мечник");
console.log(swordsman);

