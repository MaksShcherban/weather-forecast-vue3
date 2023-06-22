<template>
      <div v-if="typeof weatherAll.main != 'undefined'">
        <div class="style-text location">
          {{ weatherAll.name }}, {{ weatherAll.sys.country }}
        </div>
        <div class="style-text temperature">
          {{ (weatherAll.main.temp).toFixed(1) }}°C
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
</template>

<script>
export default {
  props:{
    weatherAll: Object,
    weatherIMG: String
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
</style>
