const request = require("postman-request");
require("dotenv").config();

const weatherKey = process.env.WEATHER_API_KEY;

const forecast = (latitude, longitude, callback) => {
  const weatherURL = `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${latitude},${longitude}&aqi=no`;

  request({ url: weatherURL, json: true }, (error, { body }) => {
    if (error) {
      callback("ERROR: Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("ERROR: Unable to locate, please try again", undefined);
    } else {
      const { temp_f, condition } = body.current;

      callback(
        undefined,
        `It is currently ${temp_f} degrees out and ${condition.text}!`
      );
    }
  });
};

module.exports = forecast;
