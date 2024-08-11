const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Josh",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Josh",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "This is the message!!!",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Sunny",
    location: "San Diego",
  });
});

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
