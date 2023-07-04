import util from "../utils/util";
const URLWeatherBase = "https://api.openweathermap.org/data/2.5/weather?q=";
const URLImgBase = "https://openweathermap.org/img/wn/";
const APIkey = "8f6c3d62ba11f71326b7f754193f6185";
const URLForecastBase = "https://api.openweathermap.org/data/2.5/forecast?q=";

const getWeatherData = (inputCity) => {
  const weather = fetch(
    `${URLWeatherBase}${inputCity}&units=metric&appid=${APIkey}`
  )
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
  const forecast = fetch(
    `${URLForecastBase}${inputCity}&units=metric&appid=${APIkey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const lists = Object.values(json.list);
      const objectDay = {
        firstDay: [],
        secondDay: [],
        thirdDay: [],
        fourDay: [],
        fifthDay: [],
        sixthDay: [],
      };
      lists.forEach((element) => {
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(0)) {
          objectDay.firstDay.push(element);
        }
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(1)) {
          objectDay.secondDay.push(element);
        }
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(2)) {
          objectDay.thirdDay.push(element);
        }
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(3)) {
          objectDay.fourDay.push(element);
        }
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(4)) {
          objectDay.fifthDay.push(element);
        }
        if (element.dt_txt.split(" ")[0] === util.getDateForDay(5)) {
          objectDay.sixthDay.push(element);
        }
      });

      return objectDay;
    });
  return forecast;
};

export default {
  getWeatherData,
  getIMGWeather,
  getForecastWeather,
};
