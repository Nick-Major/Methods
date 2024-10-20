import { Character } from "../src/index";
import { Bowerman } from "../src/bowerman";
import { Swordsman } from "../src/swordsman";
import { Magician } from "../src/magician";
import { Daemon } from "../src/daemon";
import { Undead } from "../src/undead";
import { Zombie } from "../src/zombie";

test ("character class name test", () => {
    let expectedError = "Имя должно быть строкой!";
    function myFunction () {
        let player = new Character(1, "Bowman", 100, 1, 25, 25);
        return player;
    }
    expect(() => myFunction()).toThrow(expectedError);
});

test ("character class name length test", () => {
    let expectedError = "Недопустимое количество символов!";
    function myFunction () {
        let player = new Character("Очень_длинный_ник_нейм", "Bowman", 100, 1, 25, 25);
        return player;
    }
    expect(() => myFunction()).toThrow(expectedError);
});

test ("character class type test", () => {
    let expectedError = "Недопустимый тип персонажа!";
    function myFunction () {
        let player = new Character("Персонаж", "Unknown_type", 100, 1, 25, 25);
        return player;
    }
    expect(() => myFunction()).toThrow(expectedError);
});

test ("character class levelUp test", () => {
    let player = new Character("Игрок", "Bowman", 100, 1, 25, 25);
    player.levelUp();
    expect(player).toEqual({name: 'Игрок', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30});
});

test ("character class damage test", () => {
    let player = new Character("Игрок", "Bowman", 100, 1, 25, 25);
    player.damage(30);
    expect(player).toEqual({name: 'Игрок', type: 'Bowman', health: 77.5, level: 1, attack: 25, defence: 25});
});

test ("bowerman class belong to character test", () => {
    let bowerman = new Bowerman("Лучник");
    expect(bowerman).toBeInstanceOf(Character);
});

test ("daeman class belong to character test", () => {
    let daemon = new Daemon("Демон");
    expect(daemon).toBeInstanceOf(Character);
});

test ("magician class belong to character test", () => {
    let magician = new Magician("Маг");
    expect(magician).toBeInstanceOf(Character);
});

test ("swordsman class belong to character test", () => {
    let swordsman = new Swordsman("Мечник");
    expect(swordsman).toBeInstanceOf(Character);
});

test ("undead class belong to character test", () => {
    let undead = new Undead("Нежить");
    expect(undead).toBeInstanceOf(Character);
});

test ("zombie class belong to character test", () => {
    let zombie = new Zombie("Зомби");
    expect(zombie).toBeInstanceOf(Character);
});
