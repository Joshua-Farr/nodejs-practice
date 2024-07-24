import chalk from "chalk";
import notes from "./notes.js";

const myNotes = notes();

console.log(myNotes);

console.log(chalk.green.inverse.bold("Success!"));
const command = process.argv[2];

console.log(process.argv);

if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
