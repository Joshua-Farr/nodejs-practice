const request = require("postman-request");
require("dotenv").config();

const weatherKey = process.env.WEATHER_API_KEY;

const forecast = (latitude, longitude, callback) => {
  const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${latitude},${longitude}&aqi=no`;

  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("ERROR: Unable to connect to weather service", undefined);
    } else if (response.body.error) {
      callback("ERROR: Unable to locate, please try again", undefined);
    } else {
      const data = response.body.current;

      callback(
        undefined,
        `It is currently ${data.temp_f} degrees out and ${data.condition.text}!`
      );
    }
  });
};

module.exports = forecast;
