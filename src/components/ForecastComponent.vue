<template>
  <div v-if="typeof forecastAll.city != 'undefined'">
    {{ getCurrentForecast() }}
    <div class="full-container-forecast">
      <div class="container-forecast">
        <div class="title">5-day forecast</div>
        <div class="forecast-title">
          {{ forecastAll.city.name }}, {{ forecastAll.city.country }}
        </div>
        <div class="day-week">
          <span>{{ day_one }} :</span> <img :src="imgDayOne" />H:
          {{ maxTempFirst }}°C, L: {{ minTempFirst }} °C
        </div>
        <div class="day-week">
          <span>{{ day_two }}:</span> <img :src="imgDayTwo" /> H:
          {{ maxTempSecond }}°C, L: {{ minTempSecond }} °C
        </div>
        <div class="day-week">
          <span>{{ day_three }}:</span> <img :src="imgDayThree" /> H:
          {{ maxTempThird }}°C, L: {{ minTempThird }} °C
        </div>
        <div class="day-week">
          <span>{{ day_four }} :</span><img :src="imgDayFour" /> H:
          {{ maxTempFourth }}°C, L: {{ minTempFourth }} °C
        </div>
        <div class="day-week">
          <span>{{ day_five }} :</span><img :src="imgDayFive" /> H:
          {{ maxTempFive }}°C, L: {{ minTempFive }} °C
        </div>
        <div class="day-week">
          <span>{{ day_six }} :</span> <img :src="imgDaySix" /> H:
          {{ maxTempSix }}°C, L: {{ minTempSix }} °C
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weatherService from "@/services/weatherService";
export default {
  props: {
    forecastAll: Object,
  },
  data() {
    return {
      day_one: "",
      day_two: "",
      day_three: "",
      day_four: "",
      day_five: "",
      day_six: "",
      first_day: [],
      second_day: [],
      third_day: [],
      fourth_day: [],
      five_day: [],
      six_day: [],
      maxTempFirst: "",
      minTempFirst: "",
      maxTempSecond: "",
      minTempSecond: "",
      maxTempThird: "",
      minTempThird: "",
      maxTempFourth: "",
      minTempFourth: "",
      maxTempFive: "",
      minTempFive: "",
      maxTempSix: "",
      minTempSix: "",
      imgDayOne: "",
      imgDayTwo: "",
      imgDayThree: "",
      imgDayFour: "",
      imgDayFive: "",
      imgDaySix: "",
    };
  },
  methods: {
    getCurrentForecast() {
      const data = new Date();
      let currentTime = data.getHours();

      if (currentTime >= 0 && currentTime < 3) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);
        this.first_day.push(this.forecastAll.list[3]);
        this.first_day.push(this.forecastAll.list[4]);
        this.first_day.push(this.forecastAll.list[5]);
        this.first_day.push(this.forecastAll.list[6]);
        this.first_day.push(this.forecastAll.list[7]);

        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);
        this.second_day.push(this.forecastAll.list[11]);
        this.second_day.push(this.forecastAll.list[12]);
        this.second_day.push(this.forecastAll.list[13]);
        this.second_day.push(this.forecastAll.list[14]);
        this.second_day.push(this.forecastAll.list[15]);

        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);
        this.third_day.push(this.forecastAll.list[19]);
        this.third_day.push(this.forecastAll.list[20]);
        this.third_day.push(this.forecastAll.list[21]);
        this.third_day.push(this.forecastAll.list[22]);
        this.third_day.push(this.forecastAll.list[23]);

        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);
        this.fourth_day.push(this.forecastAll.list[27]);
        this.fourth_day.push(this.forecastAll.list[28]);
        this.fourth_day.push(this.forecastAll.list[29]);
        this.fourth_day.push(this.forecastAll.list[30]);
        this.fourth_day.push(this.forecastAll.list[31]);

        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);
        this.five_day.push(this.forecastAll.list[35]);
        this.five_day.push(this.forecastAll.list[36]);
        this.five_day.push(this.forecastAll.list[37]);
        this.five_day.push(this.forecastAll.list[38]);
        this.five_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 3 && currentTime < 6) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);
        this.first_day.push(this.forecastAll.list[3]);
        this.first_day.push(this.forecastAll.list[4]);
        this.first_day.push(this.forecastAll.list[5]);
        this.first_day.push(this.forecastAll.list[6]);

        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);
        this.second_day.push(this.forecastAll.list[11]);
        this.second_day.push(this.forecastAll.list[12]);
        this.second_day.push(this.forecastAll.list[13]);
        this.second_day.push(this.forecastAll.list[14]);

        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);
        this.third_day.push(this.forecastAll.list[19]);
        this.third_day.push(this.forecastAll.list[20]);
        this.third_day.push(this.forecastAll.list[21]);
        this.third_day.push(this.forecastAll.list[22]);

        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);
        this.fourth_day.push(this.forecastAll.list[27]);
        this.fourth_day.push(this.forecastAll.list[28]);
        this.fourth_day.push(this.forecastAll.list[29]);
        this.fourth_day.push(this.forecastAll.list[30]);

        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);
        this.five_day.push(this.forecastAll.list[35]);
        this.five_day.push(this.forecastAll.list[36]);
        this.five_day.push(this.forecastAll.list[37]);
        this.five_day.push(this.forecastAll.list[38]);

        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 6 && currentTime < 9) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);
        this.first_day.push(this.forecastAll.list[3]);
        this.first_day.push(this.forecastAll.list[4]);
        this.first_day.push(this.forecastAll.list[5]);

        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);
        this.second_day.push(this.forecastAll.list[11]);
        this.second_day.push(this.forecastAll.list[12]);
        this.second_day.push(this.forecastAll.list[13]);

        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);
        this.third_day.push(this.forecastAll.list[19]);
        this.third_day.push(this.forecastAll.list[20]);
        this.third_day.push(this.forecastAll.list[21]);

        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);
        this.fourth_day.push(this.forecastAll.list[27]);
        this.fourth_day.push(this.forecastAll.list[28]);
        this.fourth_day.push(this.forecastAll.list[29]);

        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);
        this.five_day.push(this.forecastAll.list[35]);
        this.five_day.push(this.forecastAll.list[36]);
        this.five_day.push(this.forecastAll.list[37]);

        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 9 && currentTime < 12) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);
        this.first_day.push(this.forecastAll.list[3]);
        this.first_day.push(this.forecastAll.list[4]);

        this.second_day.push(this.forecastAll.list[5]);
        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);
        this.second_day.push(this.forecastAll.list[11]);
        this.second_day.push(this.forecastAll.list[12]);

        this.third_day.push(this.forecastAll.list[13]);
        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);
        this.third_day.push(this.forecastAll.list[19]);
        this.third_day.push(this.forecastAll.list[20]);

        this.fourth_day.push(this.forecastAll.list[21]);
        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);
        this.fourth_day.push(this.forecastAll.list[27]);
        this.fourth_day.push(this.forecastAll.list[28]);

        this.five_day.push(this.forecastAll.list[29]);
        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);
        this.five_day.push(this.forecastAll.list[35]);
        this.five_day.push(this.forecastAll.list[36]);

        this.six_day.push(this.forecastAll.list[37]);
        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 12 && currentTime < 15) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);
        this.first_day.push(this.forecastAll.list[3]);

        this.second_day.push(this.forecastAll.list[4]);
        this.second_day.push(this.forecastAll.list[5]);
        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);
        this.second_day.push(this.forecastAll.list[11]);

        this.third_day.push(this.forecastAll.list[12]);
        this.third_day.push(this.forecastAll.list[13]);
        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);
        this.third_day.push(this.forecastAll.list[19]);

        this.fourth_day.push(this.forecastAll.list[20]);
        this.fourth_day.push(this.forecastAll.list[21]);
        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);
        this.fourth_day.push(this.forecastAll.list[27]);

        this.five_day.push(this.forecastAll.list[28]);
        this.five_day.push(this.forecastAll.list[29]);
        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);
        this.five_day.push(this.forecastAll.list[35]);

        this.six_day.push(this.forecastAll.list[36]);
        this.six_day.push(this.forecastAll.list[37]);
        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 15 && currentTime < 18) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);
        this.first_day.push(this.forecastAll.list[2]);

        this.second_day.push(this.forecastAll.list[3]);
        this.second_day.push(this.forecastAll.list[4]);
        this.second_day.push(this.forecastAll.list[5]);
        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);
        this.second_day.push(this.forecastAll.list[10]);

        this.third_day.push(this.forecastAll.list[11]);
        this.third_day.push(this.forecastAll.list[12]);
        this.third_day.push(this.forecastAll.list[13]);
        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);
        this.third_day.push(this.forecastAll.list[18]);

        this.fourth_day.push(this.forecastAll.list[19]);
        this.fourth_day.push(this.forecastAll.list[20]);
        this.fourth_day.push(this.forecastAll.list[21]);
        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);
        this.fourth_day.push(this.forecastAll.list[26]);

        this.five_day.push(this.forecastAll.list[27]);
        this.five_day.push(this.forecastAll.list[28]);
        this.five_day.push(this.forecastAll.list[29]);
        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);
        this.five_day.push(this.forecastAll.list[34]);

        this.six_day.push(this.forecastAll.list[35]);
        this.six_day.push(this.forecastAll.list[36]);
        this.six_day.push(this.forecastAll.list[37]);
        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 18 && currentTime < 21) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);
        this.first_day.push(this.forecastAll.list[1]);

        this.second_day.push(this.forecastAll.list[2]);
        this.second_day.push(this.forecastAll.list[3]);
        this.second_day.push(this.forecastAll.list[4]);
        this.second_day.push(this.forecastAll.list[5]);
        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);
        this.second_day.push(this.forecastAll.list[9]);

        this.third_day.push(this.forecastAll.list[10]);
        this.third_day.push(this.forecastAll.list[11]);
        this.third_day.push(this.forecastAll.list[12]);
        this.third_day.push(this.forecastAll.list[13]);
        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);
        this.third_day.push(this.forecastAll.list[17]);

        this.fourth_day.push(this.forecastAll.list[18]);
        this.fourth_day.push(this.forecastAll.list[19]);
        this.fourth_day.push(this.forecastAll.list[20]);
        this.fourth_day.push(this.forecastAll.list[21]);
        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);
        this.fourth_day.push(this.forecastAll.list[25]);

        this.five_day.push(this.forecastAll.list[26]);
        this.five_day.push(this.forecastAll.list[27]);
        this.five_day.push(this.forecastAll.list[28]);
        this.five_day.push(this.forecastAll.list[29]);
        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);
        this.five_day.push(this.forecastAll.list[33]);

        this.six_day.push(this.forecastAll.list[34]);
        this.six_day.push(this.forecastAll.list[35]);
        this.six_day.push(this.forecastAll.list[36]);
        this.six_day.push(this.forecastAll.list[37]);
        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      if (currentTime >= 21 && currentTime < 24) {
        this.first_day.splice(0, this.first_day.length);
        this.second_day.splice(0, this.second_day.length);
        this.third_day.splice(0, this.third_day.length);
        this.fourth_day.splice(0, this.fourth_day.length);
        this.five_day.splice(0, this.five_day.length);
        this.six_day.splice(0, this.six_day.length);

        this.first_day.push(this.forecastAll.list[0]);

        this.second_day.push(this.forecastAll.list[1]);
        this.second_day.push(this.forecastAll.list[2]);
        this.second_day.push(this.forecastAll.list[3]);
        this.second_day.push(this.forecastAll.list[4]);
        this.second_day.push(this.forecastAll.list[5]);
        this.second_day.push(this.forecastAll.list[6]);
        this.second_day.push(this.forecastAll.list[7]);
        this.second_day.push(this.forecastAll.list[8]);

        this.third_day.push(this.forecastAll.list[9]);
        this.third_day.push(this.forecastAll.list[10]);
        this.third_day.push(this.forecastAll.list[11]);
        this.third_day.push(this.forecastAll.list[12]);
        this.third_day.push(this.forecastAll.list[13]);
        this.third_day.push(this.forecastAll.list[14]);
        this.third_day.push(this.forecastAll.list[15]);
        this.third_day.push(this.forecastAll.list[16]);

        this.fourth_day.push(this.forecastAll.list[17]);
        this.fourth_day.push(this.forecastAll.list[18]);
        this.fourth_day.push(this.forecastAll.list[19]);
        this.fourth_day.push(this.forecastAll.list[20]);
        this.fourth_day.push(this.forecastAll.list[21]);
        this.fourth_day.push(this.forecastAll.list[22]);
        this.fourth_day.push(this.forecastAll.list[23]);
        this.fourth_day.push(this.forecastAll.list[24]);

        this.five_day.push(this.forecastAll.list[25]);
        this.five_day.push(this.forecastAll.list[26]);
        this.five_day.push(this.forecastAll.list[27]);
        this.five_day.push(this.forecastAll.list[28]);
        this.five_day.push(this.forecastAll.list[29]);
        this.five_day.push(this.forecastAll.list[30]);
        this.five_day.push(this.forecastAll.list[31]);
        this.five_day.push(this.forecastAll.list[32]);

        this.six_day.push(this.forecastAll.list[33]);
        this.six_day.push(this.forecastAll.list[34]);
        this.six_day.push(this.forecastAll.list[35]);
        this.six_day.push(this.forecastAll.list[36]);
        this.six_day.push(this.forecastAll.list[37]);
        this.six_day.push(this.forecastAll.list[38]);
        this.six_day.push(this.forecastAll.list[39]);
      }
      let maxTempFirst = [];
      let minTempFirst = [];
      let maxTempSecond = [];
      let minTempSecond = [];
      let maxTempThird = [];
      let minTempThird = [];
      let maxTempFourth = [];
      let minTempFourth = [];
      let maxTempFive = [];
      let minTempFive = [];
      let maxTempSix = [];
      let minTempSix = [];

      let imgOne = [];

      let imgTwo = [];
      let imgThree = [];
      let imgFour = [];
      let imgFive = [];
      let imgSix = [];

      let randomOne = Math.floor(Math.random() * imgOne.length);
      let randomTwo = Math.floor(Math.random() * imgTwo.length);
      let randomThree = Math.floor(Math.random() * imgThree.length);
      let randomFour = Math.floor(Math.random() * imgFour.length);
      let randomFive = Math.floor(Math.random() * imgFive.length);
      let randomSix = Math.floor(Math.random() * imgSix.length);

      this.first_day.forEach((elem) => {
        maxTempFirst.push(elem.main.temp_max);
      });
      this.first_day.forEach((elem) => {
        minTempFirst.push(elem.main.temp_min);
      });

      this.second_day.forEach((elem) => {
        maxTempSecond.push(elem.main.temp_max);
      });
      this.second_day.forEach((elem) => {
        minTempSecond.push(elem.main.temp_min);
      });

      this.third_day.forEach((elem) => {
        maxTempThird.push(elem.main.temp_max);
      });
      this.third_day.forEach((elem) => {
        minTempThird.push(elem.main.temp_min);
      });

      this.fourth_day.forEach((elem) => {
        maxTempFourth.push(elem.main.temp_max);
      });
      this.fourth_day.forEach((elem) => {
        minTempFourth.push(elem.main.temp_min);
      });

      this.five_day.forEach((elem) => {
        maxTempFive.push(elem.main.temp_max);
      });
      this.five_day.forEach((elem) => {
        minTempFive.push(elem.main.temp_min);
      });

      this.six_day.forEach((elem) => {
        maxTempSix.push(elem.main.temp_max);
      });
      this.six_day.forEach((elem) => {
        minTempSix.push(elem.main.temp_min);
      });

      this.first_day.forEach((elem) => {
        imgOne.push(elem.weather[0].icon);
      });

      this.second_day.forEach((elem) => {
        imgTwo.push(elem.weather[0].icon);
      });
      this.third_day.forEach((elem) => {
        imgThree.push(elem.weather[0].icon);
      });
      this.fourth_day.forEach((elem) => {
        imgFour.push(elem.weather[0].icon);
      });
      this.five_day.forEach((elem) => {
        imgFive.push(elem.weather[0].icon);
      });
      this.six_day.forEach((elem) => {
        imgSix.push(elem.weather[0].icon);
      });

      this.maxTempFirst = Math.max(...maxTempFirst).toFixed(0);
      this.minTempFirst = Math.min(...maxTempFirst).toFixed(0);

      this.maxTempSecond = Math.max(...maxTempSecond).toFixed(0);
      this.minTempSecond = Math.min(...maxTempSecond).toFixed(0);

      this.maxTempThird = Math.max(...maxTempThird).toFixed(0);
      this.minTempThird = Math.min(...maxTempThird).toFixed(0);

      this.maxTempFourth = Math.max(...maxTempFourth).toFixed(0);
      this.minTempFourth = Math.min(...maxTempFourth).toFixed(0);

      this.maxTempFive = Math.max(...maxTempFive).toFixed(0);
      this.minTempFive = Math.min(...maxTempFive).toFixed(0);

      this.maxTempSix = Math.max(...maxTempSix).toFixed(0);
      this.minTempSix = Math.min(...maxTempSix).toFixed(0);

      this.imgDayOne = weatherService.getIMGWeather(imgOne[randomOne]);
      this.imgDayTwo = weatherService.getIMGWeather(imgTwo[randomTwo]);
      this.imgDayThree = weatherService.getIMGWeather(imgThree[randomThree]);
      this.imgDayFour = weatherService.getIMGWeather(imgFour[randomFour]);
      this.imgDayFive = weatherService.getIMGWeather(imgFive[randomFive]);
      this.imgDaySix = weatherService.getIMGWeather(imgSix[randomSix]);
    },
  },
  created() {
    const data = new Date();
    const dayWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
    ];
    let currentData = data.getDay();
    this.day_one = dayWeek[currentData - 1];
    this.day_two = dayWeek[currentData - 1 + 1];
    this.day_three = dayWeek[currentData - 1 + 2];
    this.day_four = dayWeek[currentData - 1 + 3];
    this.day_five = dayWeek[currentData - 1 + 4];
    this.day_six = dayWeek[currentData - 1 + 5];
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/extend.scss";

.full-container-forecast {
  @extend %for-background;
  background-image: url("/public/bg-forecast.png");
  padding-top: 20px;
}

.container-forecast {
  backdrop-filter: $standard-blur;
  text-align: center;
  font-family: $main-font-family;
  max-width: 800px;
  margin: $margin-center;
  margin-top: 20px;
  color: white;
  @extend %for-container;
}

.title {
  font-weight: 900;
  font-size: 30px;
  padding-top: 30px;
}

.forecast-title {
  font-size: 25px;
  font-weight: $main-font-width;
  margin-top: 10px;
}

.day-week {
  margin-top: 15px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 800;
  }

  img {
    width: 70px;
    margin-right: 20px;
    margin-left: 20px;
  }
}
</style>
