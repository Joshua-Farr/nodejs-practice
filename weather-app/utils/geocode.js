const request = require("postman-request");
require("dotenv").config();

const geocodeKey = process.env.GEOCODE_API_KEY;

const geocode = (address, callback) => {
  const locationURL = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=${geocodeKey}&limit=1`;
  request({ url: locationURL, json: true }, (error, response) => {
    if (error) {
      callback(
        "ERROR: Unable to connect to gecoding location service",
        undefined
      );
    } else if (response.body.features.length === 0) {
      callback("Error: Unable to find locaiton, try another search", undefined);
    } else {
      const { longitude, latitude } =
        response.body.features[0].properties.coordinates;

      callback(undefined, {
        location: response.body.features[0].properties.name,
        longitute: longitude,
        latitude: latitude,
      });
    }
  });
};

module.exports = geocode;
