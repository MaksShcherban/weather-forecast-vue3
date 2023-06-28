<template>
  <div class="full-container">.
    <div class="container">

      <div class="title">Weather App</div>
      <div class="style-text date">{{ getData }}</div>
      <div class="style-text date">{{ getTime }}</div>
      <input v-model="inputCity" @keypress="fetchWeather" placeholder="Search..." type="text" class="inputCity" />

      <div v-if="typeof weatherAll.main != 'undefined'">
        <div class="style-text location">
          {{ weatherAll.name }}, {{ weatherAll.sys.country }}
        </div>
        <div class="style-text temperature">
          {{ (weatherAll.main.temp).toFixed(0) }}°C
        </div>
        <div class="style-text weather">{{ weatherAll.weather[0].main }}</div>
        <div class="icon">
          <img :src="weatherIMG" />
        </div>

        <div class="style-text">Speed wind: {{ weatherAll.wind.speed }} m/s</div>
      </div>

      <div class="style-text" v-else-if="weatherAll.cod == '404'">
        This City not exist 😭
      </div>

      <div v-else>
        <div class="style-text">Input city 👆</div>
      </div>

    </div>
  </div>
</template>

<script>
import weatherService from "@/services/weatherService";
export default {
  props: {
    weatherAll: Object,
    weatherIMG: String
  },
  data() {
    return {
      inputCity: "",
      getData: "",
      getTime: "",
    };
  },
  methods: {
    fetchWeather(e) {
      if (e.key == "Enter") {
        this.$emit('data-updated', this.inputCity);
      }
    }
  },
  created() {
    this.getData = weatherService.getCurrentData();
    this.getTime = weatherService.getCurrentTime();
  },
};
</script>

<style scoped>
.icon img {
  height: 150px;
}

.style-text {
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
}

.temperature {
  font-size: 50px;
  background: rgba(32, 43, 61, 0.6);
  max-width: 200px;
  height: 70px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
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
</style>
