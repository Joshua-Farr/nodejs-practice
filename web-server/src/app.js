const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebar engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Josh Farr",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Josh Farr",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Josh Farr",
    message: "This is the message!!!",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ errorMessage: "Error: No address provided" });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({ errorMessage: "Error: Unable to find location" });
    }
    const { latitude, longitute } = data;
    forecast(latitude, longitute, (error, forecastData) => {
      if (error) {
        return res.send({ errorMessage: "Error: Unable to find forecast" });
      }
      res.send({
        location: data.location,
        forecast: forecastData,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      errorMessage: "You must provide a search term",
    });
  }
  res.send({ products: [] });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    name: "Josh Farr",
    title: "404",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    name: "Josh Farr",
    title: "404",
    errorMessage: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is live on port 3000");
});
