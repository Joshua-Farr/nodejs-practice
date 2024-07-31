// const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

//Turns it into string
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// Turns it back into a JSON object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log("Author: " + data.title);
// console.log("Title: " + data.author);

/// Challenge Code:

const fs = require("fs");

const dataJSON = fs.readFileSync("1-json.json").toString();
let dataJSONObject = { ...JSON.parse(dataJSON) };
dataJSONObject.name = "josh";
dataJSONObject.age = "old";

const stringifiedJSONData = JSON.stringify(dataJSONObject);

fs.writeFileSync("1-json.json", stringifiedJSONData);

console.log("Data overriden");
