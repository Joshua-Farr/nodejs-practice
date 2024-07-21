const getNotes = require("./notes.js");
const validator = require("validator");

let emailStatus = validator.isEmail("josh@josh.com");
console.log(emailStatus);

const message = getNotes();

console.log(message);
