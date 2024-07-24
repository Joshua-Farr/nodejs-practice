<<<<<<< HEAD
import chalk from "chalk";
import notes from "./notes.js";
=======
const getNotes = require("./notes.js");
const validator = require("validator");
>>>>>>> f46b3d58c8344b8f4f8c3ac2e1f2593c6f4f3b7a

let emailStatus = validator.isEmail("josh@josh.com");
console.log(emailStatus);

const message = getNotes();

<<<<<<< HEAD
console.log(chalk.green.inverse.bold("Success!"));
const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
=======
console.log(message);
>>>>>>> f46b3d58c8344b8f4f8c3ac2e1f2593c6f4f3b7a
