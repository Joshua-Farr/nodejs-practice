console.log("Client side JS is loaded!");

// const weatherData = fetch("http://localhost:3000/weather?address=boston").then(
//   (response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   }
// );

const weatherForm = document.querySelector("form");
const searchTerm = document.querySelector("input");
const message1 = document.querySelector("#message-1");
const message2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchTerm.value;

  message2.textContent = "Fetching Data...";
  message1.textContent = null;
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.errorMessage) {
          message2.textContent = null;
          message1.textContent = data.errorMessage;
        } else {
          message1.textContent = data.location;
          message2.textContent = data.forecast;
        }
      });
    }
  );
});
