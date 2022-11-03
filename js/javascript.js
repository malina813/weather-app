function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-current-city");
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#city-search");
form.addEventListener("submit", searchCity);

function displayWeatherCondition(response) {
  document.querySelector("#currentCity").innerHTML = response.data.name;
  document.querySelector("#currentDeg").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
}

function currentCity(city) {
  let apiKey = "814a326566b24af74a80eee2336b984c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-current-city").value;
  currentCity(city);
}

function searchLocation(position) {
  let apiKey = "814a326566b24af74a80eee2336b984c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#city-search");
searchForm.addEventListener("submit", handleSubmit);

currentCity("Kyiv");

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector(".currentDay");
currentDay.innerHTML = `${day}`;
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${hours}:${minutes}`;
