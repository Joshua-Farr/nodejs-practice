import fs from "fs";
import chalk from "chalk";

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log(chalk.red.inverse("Note " + title + " taken!"));
  }
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse("Title: "));
    console.log(note.title);
    console.log(chalk.inverse("Body: "));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("Note:", title, "was not found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Here are your notes: "));

  notes.forEach((note) => {
    console.log(`- ${note.title}`);
  });
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

export default { getNotes, addNote, removeNote, listNotes, readNote };
