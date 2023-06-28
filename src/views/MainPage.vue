<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap" rel="stylesheet" />

  <weather-component @data-updated="handleDataUpdate" :weatherAll="weathers" :weatherIMG="IMG"></weather-component>
  <forecast-component :forecastAll="forecast"></forecast-component>
</template>
<script >
import WeatherComponent from "@/components/WeatherComponent.vue";
import ForecastComponent from "@/components/ForecastComponent.vue";
import weatherService from "@/services/weatherService";
export default {
  components: {
    WeatherComponent,
    ForecastComponent,
    weatherService,
  },
  data() {
    return {
      weathers: {},
      IMG: "",
      forecast: {},
      receivedData: ''
    };
  },
  methods: {
    handleDataUpdate(data) {
      this.receivedData = data;
      weatherService.getWeatherData(this.receivedData).then((json) => {
        this.weathers = json;
        this.IMG = weatherService.getIMGWeather(
          this.weathers.weather[0].icon
        );
      });

      weatherService.getForecastWeather(this.receivedData).then((json) => {
        this.forecast = json;
      });
    }
  },
}
</script>
<style lang="scss" > body {
   margin: 0;
   padding: 0;
 }

 #app {
   margin: 0;
 }
</style>
