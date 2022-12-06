//npm init
//npm i cowsay


// var cowsay = require("cowsay");

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));


// function get_cows(error, cow_names) {
//     if (error) {
//         console.log(error)
//     }
//     else if (cow_names) {
//         console.log(`Number of cows available: ${cow_names.length}`);
//     }
// }

// cowsay.list(get_cows);



const Quote = require('inspirational-quotes');

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote