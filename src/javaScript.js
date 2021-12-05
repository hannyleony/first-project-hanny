let now = new Date();
let h2 = document.querySelector("h2");

let hours = now.getHours();
let minutes = now.getMinutes();

function formatDate(date) {
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
}
formatDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

h2.innerHTML = `(${day}, ${hours}:${minutes})`;

function text(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#new-city");
  let h1 = document.querySelector("#cities");
  h1.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

let cityForm = document.querySelector("#search-city");
cityForm.addEventListener("submit", text);

function temperatureF(event) {
  event.preventDefault();
  let tempCelcius = 11;
  let fahrenheitTemperature = Math.round((tempCelcius * 9) / 5 + 32);
  let changeTemp = document.querySelector("#show-temperature");
  changeTemp.innerHTML = fahrenheitTemperature;
}

let change2fahrenheit = document.querySelector("#fahrenheit");
change2fahrenheit.addEventListener("click", temperatureF);

function temperature(event) {
  event.preventDefault();
  let tempfahrenheit = 52;
  let celciusTemperature = Math.round((tempfahrenheit - 32) / 1.8);
  let changeTemp = document.querySelector("#show-temperature");
  changeTemp.innerHTML = celciusTemperature;
}

let change2celcius = document.querySelector("#celcius");
change2celcius.addEventListener("click", temperature);

function showWeatherData(response) {
  document.querySelector("#cities").innerHTML = response.data.name;
  document.querySelector("#show-temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeatherData);
}
