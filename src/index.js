export class Character {
	constructor(name, type, health, level, attack, defence) {
		this.name = name;
		this.type = type;
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;

		if(typeof this.name !== "string") {
			throw new Error("Имя должно быть строкой!");
			
		};

		if(this.name.length < 2 || this.name.length > 10) {
			throw new Error("Недопустимое количество символов!");
		};

		if(this.type === "Bowman" || this.type === "Swordsman" || this.type === "Magician" || this.type === "Daemon" || this.type === "Undead" || this.type === "Zombie") {
			this.type = type;
		} else {
			throw new Error("Недопустимый тип персонажа!");
		}
		
	}

	levelUp() {
		if (this.health !== 0) {
			this.level += 1;
			this.attack *= 1.2;
			this.defence *= 1.2;
			this.health = 100;
		}
	}

	damage(points) {
		if(this.health >= 0) {
			this.health -= points * (1 - this.defence / 100);
		}
	}
}
