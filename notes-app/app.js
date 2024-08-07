import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import notes from "./notes.js";

//add, remove, read, list

// console.log(
//   "Here are the arguments that are passed:",
//   yargs(hideBin(process.argv)).argv
// );

// Add command
yargs(hideBin(process.argv))
  .command(
    "add",
    "add a new note",
    (yargs) => {
      return yargs.options({
        title: {
          describe: "Title of the note to add",
          type: "string",
          demandOption: true,
        },
        body: {
          describe: "Body of the node to add",
          type: "string",
          demandOption: true,
        },
      });
    },
    function (argv) {
      notes.addNote(argv.title, argv.body);
    }
  )
  .parse();

// Remove command
yargs(hideBin(process.argv))
  .command(
    "remove",
    "Removing a note",
    (yargs) => {
      return yargs.options({
        title: {
          describe: "Title of the note to remove",
          type: "string",
          demandOption: true,
        },
      });
    },
    function (argv) {
      notes.removeNote(argv.title);
    }
  )
  .parse();

// List command
yargs(hideBin(process.argv))
  .command(
    "list",
    "Listing all the notes",
    () => {},
    function (argv) {
      // console.log("Listing all the notes...", argv);
      notes.listNotes();
    }
  )
  .parse();

// Read command
yargs(hideBin(process.argv))
  .command(
    "read",
    "reading all the notes",
    (yargs) => {
      return yargs.options({
        title: {
          describe: "Title of the note to read",
          type: "string",
          demandOption: true,
        },
      });
    },
    function (argv) {
      notes.readNote(argv.title);
    }
  )
  .parse();

// console.log(process.argv);
