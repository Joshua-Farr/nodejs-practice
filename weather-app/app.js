const request = require("postman-request");
require("dotenv").config();

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

const locationURL = `https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=${geocodeKey}&limit=1`;

request({ url: locationURL, json: true }, (error, response) => {
  if (error) {
    console.log("ERROR: Unable to connect to gecoding service");
  } else {
    const { longitude, latitude } =
      response.body.features[0].properties.coordinates;

    console.log("Longitude: ", longitude);
    console.log("Latitude: ", latitude);
  }
});
