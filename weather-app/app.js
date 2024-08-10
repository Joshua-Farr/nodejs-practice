const request = require("postman-request");
require("dotenv").config();

const geocode = require("./utils/geocode");

const weatherKey = process.env.WEATHER_API_KEY;
const geocodeKey = process.env.GEOCODE_API_KEY;

const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=London&aqi=no`;

request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log("ERROR: Unable to connect to weather service");
  } else {
    const data = response.body.current;

    console.log(
      `It is currently ${data.temp_f} degrees out and ${data.condition.text}!`
    );
  }
});

geocode("San Diego", (error, data) => {
  console.log("Error: ", error);
  console.log("Data:", data);
});
