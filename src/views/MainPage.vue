<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap"
    rel="stylesheet"
  />
   <div class="full-container">.
    <div class="container">
      <div class="title">Weather App</div>
      <div class="style-text date">{{ getData }}</div>
      <div class="style-text date">{{ getTime }}</div>
      <input
        v-model="inputCity"
        @keypress="fetchWeather"
        placeholder="Search..."
        type="text"
        class="inputCity"
      />
 <weather-component :weatherAll="weathers" :weatherIMG="IMG"></weather-component>

    </div>
   <forecast-component :forecastAll="forecast"></forecast-component>
  </div> 
</template>
<script >
import WeatherComponent from "@/components/WeatherComponent.vue";
import WeatherService from "@/services/WeatherService";
import ForecastComponent from "@/components/ForecastComponent.vue";
export default {
 
  data() {
    return {
      inputCity: "",
      getData: "",
      getTime: "",
      weathers: {},
      IMG: "",
      forecast: {}
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        WeatherService.getWeatherData(this.inputCity).then((json) => {
          this.weathers = json;

          this.IMG = WeatherService.getIMGWeather(
            this.weathers.weather[0].icon
          );
        });

      WeatherService.getForecastWeather(this.inputCity).then((json) => {
      this.forecast = json;
      });

      }
    },
  },
  created() {
    this.getData = WeatherService.getCurrentData();
    this.getTime = WeatherService.getCurrentTime();
  },
  components:{
WeatherComponent,
ForecastComponent
  },
}
</script>
<style > 
body {
  margin: 0;
  padding: 0;
}

#app {
  margin: 0;
}

  .full-container {
  background: url("../../public/bg-img.png") no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
.container {
  backdrop-filter: blur(10px);
  text-align: center;
  font-family: "Roboto Mono", monospace;
  max-width: 600px;
  height: 650px;
  color: white;
  border-radius: 100px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 30px;
}

.inputCity {
  width: 300px;
  height: 30px;
  font-size: 22px;
  border: none;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: rgba(235, 242, 255, 0.8);
  margin-top: 20px;
}
.title {
  font-weight: 900;
  font-size: 35px;
  padding-top: 50px;
}
.style-text {
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
}
</style>
