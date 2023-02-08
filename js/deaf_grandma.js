/**
 * Use the readline module in the node.js standard library to 
 * create a function to get user input.
 */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/**
 * Here is an example of how to use readline to prompt for user input from the command line
 * and then do something with it.
 * 
 * We will learn more about `await` (and promises in JS later). For now, use this guide code
 * to solve the problem.
 * 
 * Guide code borrowed from: https://nodejs.org/api/readline.html#readline
 */
const rl = readline.createInterface({ input, output });
let answer = await rl.question('What do you think of Node.js? ');
console.log(`Thank you for your valuable feedback: ${answer}`);
answer = await rl.question(`Why do you think Node.js ${answer}?`)


// TODO: Using the above code as a reference and a guide, implement the deaf grandma problem!
// Then comment out the above code once you have your program working.