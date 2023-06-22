const URLWeatherBase = "https://api.openweathermap.org/data/2.5/weather?q=";
const URLImgBase = "https://openweathermap.org/img/wn/";
const APIkey = "8f6c3d62ba11f71326b7f754193f6185";
const URLForecastBase =
  "https://api.openweathermap.org/data/2.5/forecast?q=";

const getWeatherData = (inputCity) => {
  const weather = fetch(`${URLWeatherBase}${inputCity}&units=metric&appid=${APIkey}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  return weather;
};

const getIMGWeather = (imgCode) => {
  const img_icon = `${URLImgBase}${imgCode}@2x.png`;
  return img_icon;
};

const getForecastWeather = (inputCity) => {
  const forecast = fetch(`${URLForecastBase}${inputCity}&units=metric&appid=${APIkey}`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  return forecast;
};

const data = new Date();
const getCurrentData = () => {
  let day = data.getDate();
  let year = data.getFullYear();

  const mounts = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let mount = mounts[data.getMonth()];
  const dayWeeks = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let currentDay = dayWeeks[data.getDay() - 1];
  let currentData = `${currentDay},${day} ${mount} ${year}`;
  return currentData;
};

const getCurrentTime = () => {
  let hour = data.getHours();
  let minutes = data.getMinutes();
  let currentTime = `${hour}:${minutes}`;
  return currentTime;
};

const SevenDay = () => {

  
}
export default {
  getWeatherData,
  getCurrentData,
  getCurrentTime,
  getIMGWeather,
  getForecastWeather,
};
