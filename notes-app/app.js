import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

//add, remove, read, list

console.log(
  "Here are the arguments that are passed:",
  yargs(hideBin(process.argv)).argv
);

// Add command
yargs(hideBin(process.argv))
  .command(
    "add",
    "add a new note",
    () => {},
    function (argv) {
      console.log("Adding a new note...", argv);
    }
  )
  .parse();

// Remove command
yargs(hideBin(process.argv))
  .command("remove", "Removing a note", function () {
    console.log("Removing the note...");
  })
  .parse();

// List command
yargs(hideBin(process.argv))
  .command("list", "Listing all the notes", function () {
    console.log("Listing all the notes...");
  })
  .parse();

// Read command

yargs(hideBin(process.argv))
  .command("read", "reading all the notes", function () {
    console.log("Reading the notes...");
  })
  .parse();

// console.log(process.argv);
