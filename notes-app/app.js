import chalk from "chalk";
import notes from "./notes.js";

let emailStatus = validator.isEmail("josh@josh.com");
console.log(emailStatus);

const message = getNotes();

console.log(chalk.green.inverse.bold("Success!"));
const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
