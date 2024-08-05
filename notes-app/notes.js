import fs from "fs";
import chalk from "chalk";

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  console.log("Adding Note...");
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title ? true : false;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("Note " + title + " taken!");
  }
};

const saveNotes = (notes) => {
  console.log("Saving note...");
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = (title) => {
  console.log("Removing the note...", title);
  const notes = loadNotes();

  const newNotes = notes.filter((note) => {
    return note.title === title ? false : true;
  });

  if (newNotes.length === notes.length) {
    console.log(chalk.bgRed("Note does not exist"));
  } else {
    console.log(chalk.bgGreen("Note Removed!"));
    saveNotes(newNotes);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

export default { getNotes, addNote, removeNote };
