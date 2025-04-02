/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

//const result = s1.concat(s2, s3, s4, s5); try noticed then Im missing spaces
const result = s1.concat(" ", s2, " ", s3, " ", s5, " ", s4);

// Print out the concatenated string
console.log(result);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

//const lastLetter (part1.length - 1 + part2.toUpperCase); 1st attempt
const lastLetter1 = part1 [part1.length -1].toUpperCase();
const lastLetter2 = part2 [part2.length -1].toUpperCase();
//I cant think of any method out of my own head


// Print the cameLtaiL-formatted string
console.log(part1 + part2);


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

//I hate math LOL
//const perBill = (15 * 84) / 100;
//then I checked why its wrong, and I noticed - that I cant use straight the 84 I must
// 'always' the name of the box where its stored in. I still forget at times.
//so if I rewrite it correctly
const perBill = (15 * billTotal) / 100;


// Print out the tipAmount
console.log(perBill);


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
//1st attempt
//const randomNumber = Math.floor( + 1);
//checked the syntax, Im missing the randomness
const randomNumber = Math.floor(Math.random() *10 + 1);

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
//FALSY

const expression2 = a || b;
//TRUTHY

const expression3 = !a && b;
//! = "not a"
//does that mean that a is not an a?

const expression4 = !(a && b);
// TRUTHY

const expression5 = !a || !b;
//TRUTHY

const expression6 = !(a || b);
//FALSY

const expression7 = a && a;
//TRUTHY

