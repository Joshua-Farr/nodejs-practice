const getNotes = require("./notes.js");
const add = require("./utils.js");

const message = getNotes();

console.log(message);

const sum = add(1, 3);
console.log(sum);
