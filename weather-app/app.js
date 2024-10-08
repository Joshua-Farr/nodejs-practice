const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

if (!location) {
  console.log("No location entered as an argument!");
} else {
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    const { latitude, longitute } = data;
    forecast(latitude, longitute, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    });
  });
}
