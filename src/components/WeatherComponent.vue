<template>
  <div class="full-container">
    .
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

      <div v-if="typeof weatherAll.main != 'undefined'">
        <div class="style-text location">
          {{ weatherAll.name }}, {{ weatherAll.sys.country }}
        </div>
        <div class="style-text temperature">
          {{ weatherAll.main.temp.toFixed(0) }}°C
        </div>
        <div class="style-text weather">{{ weatherAll.weather[0].main }}</div>
        <div class="icon">
          <img :src="weatherIMG" />
        </div>

        <div class="style-text">
          Speed wind: {{ weatherAll.wind.speed }} m/s
        </div>
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
    weatherIMG: String,
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
        this.$emit("data-updated", this.inputCity);
      }
    },
  },
  created() {
    this.getData = weatherService.getCurrentData();
    this.getTime = weatherService.getCurrentTime();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/extend.scss";

.full-container {
  @extend %for-background;
  background-image: url("/public/bg-img.png");
}

.container {
  backdrop-filter: $standard-blur;
  text-align: center;
  font-family: $main-font-family;
  max-width: 600px;
  color: white;
  margin: $margin-center;
  margin-top: 10px;
  margin-bottom: 30px;
  @extend %for-container;
}

.icon {
  img {
    height: 150px;
  }
}

.style-text {
  font-size: 20px;
  font-weight: $main-font-width;
  margin-top: 20px;
}

.temperature {
  font-size: 50px;
  background: $background-temp;
  max-width: 200px;
  height: 70px;
  border-radius: 10px;
  margin: $margin-center;
  margin-top: 10px;
}

.inputCity {
  width: 300px;
  height: 30px;
  font-size: 22px;
  margin-top: 20px;
  @extend %border-for-input;
}

.title {
  font-weight: 900;
  font-size: 35px;
  padding-top: 50px;
}
</style>
