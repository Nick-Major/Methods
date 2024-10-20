import { Character } from "./index";

export class Zombie extends Character {
	constructor(name) {
		super(name, "Zombie", 100, 1, 40, 10)
	}
}

// let zombie = new Zombie("Зомби");
// console.log(zombie);
