#!/usr/bin/env node.
import readlineSync from "readline-sync";
import * as greetingTheUser from "../bin/brain-games.js";
import { getTheUserName } from "../src/cli.js";

greetingTheUser;
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const getRandomInteger = () => {
  const integer = -100 + Math.random() * (100 + 1 - -100);
  return Math.floor(integer);
};

const isTheNumberEven = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const randomInteger = getRandomInteger();
    const question = `Question: ${randomInteger}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");
    if (randomInteger % 2 === 0 && answer === "yes") {
      console.log("Correct!");
      i += 1;
    } else if (randomInteger % 2 !== 0 && answer === "no") {
      console.log("Correct!");
      i += 1;
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${getTheUserName()}!`
      );
      i = 0;
    }
  }
  console.log(`Congratulations, ${getTheUserName()}!`);
};

console.log(isTheNumberEven());