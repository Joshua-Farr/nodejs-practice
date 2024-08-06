const request = require("postman-request");

const URL = "http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no";

request({ url: URL, json: true }, (error, response) => {
  const data = response.body.current;
  console.log(
    `It is currently ${data.temp_f} degrees out and ${data.condition.text}!`
  );
});
