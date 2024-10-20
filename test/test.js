import { Character } from "../src/index";
import { Bowerman } from "../src/bowerman";
import { Swordsman } from "../src/swordsman";
import { Magician } from "../src/magician";
import { Daemon } from "../src/daemon";
import { Undead } from "../src/undead";
import { Zombie } from "../src/zombie";

// test ("character class name test", () => {
//     let expectedError = "Имя должно быть строкой!";
//     function myFunction () {
//         let player = new Character(1, "Bowman", 100, 1, 25, 25);
//         return player;
//     }
//     expect(() => myFunction()).toThrow(expectedError);
// })

test ("character class name test", () => {
    let result = 2 + 2;
    expect(result).toBe(3);
})