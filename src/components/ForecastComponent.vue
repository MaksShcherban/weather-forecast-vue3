<template>
  <div v-if="forecastAll.firstDay != undefined">
    {{ getDataWeek() }}
    <div class="full-container-forecast">
      <div class="container-forecast">
        <div class="title">5-day forecast</div>
        <item-forecast
          v-for="item in dayWeek"
          :key="item.id"
          :day="item.currentDay"
          :min="item.minTemp"
          :max="item.maxTemp"
          :img="item.img"
        ></item-forecast>
      </div>
    </div>
  </div>
</template>

<script>
import weatherService from "@/services/weatherService";
import util from "../utils/util";
import ItemForecast from "@/components/ItemForecast.vue";
export default {
  props: {
    forecastAll: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      dayWeek: [
        { id: 1, currentDay: "", minTemp: "", maxTemp: "", img: "" },
        { id: 2, currentDay: "", minTemp: "", maxTemp: "", img: "" },
        { id: 3, currentDay: "", minTemp: "", maxTemp: "", img: "" },
        { id: 4, currentDay: "", minTemp: "", maxTemp: "", img: "" },
        { id: 5, currentDay: "", minTemp: "", maxTemp: "", img: "" },
        { id: 6, currentDay: "", minTemp: "", maxTemp: "", img: "" },
      ],
    };
  },
  methods: {
    getDataWeek() {
      // Max temperature
      let maxTempFirstArray = [];
      let maxTempSecondArray = [];
      let maxTempThirdArray = [];
      let maxTempFourthArray = [];
      let maxTempFifthArray = [];
      let maxTempSixthArray = [];

      this.forecastAll.firstDay.forEach((elem) => {
        maxTempFirstArray.push(elem.main.temp_max);
      });
      this.forecastAll.secondDay.forEach((elem) => {
        maxTempSecondArray.push(elem.main.temp_max);
      });
      this.forecastAll.thirdDay.forEach((elem) => {
        maxTempThirdArray.push(elem.main.temp_max);
      });
      this.forecastAll.fourDay.forEach((elem) => {
        maxTempFourthArray.push(elem.main.temp_max);
      });
      this.forecastAll.fifthDay.forEach((elem) => {
        maxTempFifthArray.push(elem.main.temp_max);
      });
      this.forecastAll.sixthDay.forEach((elem) => {
        maxTempSixthArray.push(elem.main.temp_max);
      });

      this.dayWeek[0].maxTemp = Math.max(...maxTempFirstArray);
      this.dayWeek[1].maxTemp = Math.max(...maxTempSecondArray);
      this.dayWeek[2].maxTemp = Math.max(...maxTempThirdArray);
      this.dayWeek[3].maxTemp = Math.max(...maxTempFourthArray);
      this.dayWeek[4].maxTemp = Math.max(...maxTempFifthArray);
      this.dayWeek[5].maxTemp = Math.max(...maxTempSixthArray);

      // Min temperature

      let minTempFirstArray = [];
      let minTempSecondArray = [];
      let minTempThirdArray = [];
      let minTempFourthArray = [];
      let minTempFifthArray = [];
      let minTempSixthArray = [];

      this.forecastAll.firstDay.forEach((elem) => {
        minTempFirstArray.push(elem.main.temp_min);
      });
      this.forecastAll.secondDay.forEach((elem) => {
        minTempSecondArray.push(elem.main.temp_min);
      });
      this.forecastAll.thirdDay.forEach((elem) => {
        minTempThirdArray.push(elem.main.temp_min);
      });
      this.forecastAll.fourDay.forEach((elem) => {
        minTempFourthArray.push(elem.main.temp_min);
      });
      this.forecastAll.fifthDay.forEach((elem) => {
        minTempFifthArray.push(elem.main.temp_min);
      });
      this.forecastAll.sixthDay.forEach((elem) => {
        minTempSixthArray.push(elem.main.temp_min);
      });

      this.dayWeek[0].minTemp = Math.min(...minTempFirstArray);
      this.dayWeek[1].minTemp = Math.min(...minTempSecondArray);
      this.dayWeek[2].minTemp = Math.min(...minTempThirdArray);
      this.dayWeek[3].minTemp = Math.min(...minTempFourthArray);
      this.dayWeek[4].minTemp = Math.min(...minTempFifthArray);
      this.dayWeek[5].minTemp = Math.min(...minTempSixthArray);

      // Random IMG
      let imgOne = [];
      let imgTwo = [];
      let imgThree = [];
      let imgFour = [];
      let imgFive = [];
      let imgSix = [];

      this.forecastAll.firstDay.forEach((elem) => {
        imgOne.push(elem.weather[0].icon);
      });

      this.forecastAll.secondDay.forEach((elem) => {
        imgTwo.push(elem.weather[0].icon);
      });
      this.forecastAll.thirdDay.forEach((elem) => {
        imgThree.push(elem.weather[0].icon);
      });
      this.forecastAll.fourDay.forEach((elem) => {
        imgFour.push(elem.weather[0].icon);
      });
      this.forecastAll.fifthDay.forEach((elem) => {
        imgFive.push(elem.weather[0].icon);
      });
      this.forecastAll.sixthDay.forEach((elem) => {
        imgSix.push(elem.weather[0].icon);
      });

      let randomOne = Math.floor(Math.random() * imgOne.length);
      let randomTwo = Math.floor(Math.random() * imgTwo.length);
      let randomThree = Math.floor(Math.random() * imgThree.length);
      let randomFour = Math.floor(Math.random() * imgFour.length);
      let randomFive = Math.floor(Math.random() * imgFive.length);
      let randomSix = Math.floor(Math.random() * imgSix.length);

      this.dayWeek[0].img = weatherService.getIMGWeather(imgOne[randomOne]);
      this.dayWeek[1].img = weatherService.getIMGWeather(imgTwo[randomTwo]);
      this.dayWeek[2].img = weatherService.getIMGWeather(imgThree[randomThree]);
      this.dayWeek[3].img = weatherService.getIMGWeather(imgFour[randomFour]);
      this.dayWeek[4].img = weatherService.getIMGWeather(imgFive[randomFive]);
      this.dayWeek[5].img = weatherService.getIMGWeather(imgSix[randomSix]);
    },
  },
  mounted() {
    this.dayWeek[0].currentDay = util.getWeeksForForecast(0);
    this.dayWeek[1].currentDay = util.getWeeksForForecast(1);
    this.dayWeek[2].currentDay = util.getWeeksForForecast(2);
    this.dayWeek[3].currentDay = util.getWeeksForForecast(3);
    this.dayWeek[4].currentDay = util.getWeeksForForecast(4);
    this.dayWeek[5].currentDay = util.getWeeksForForecast(5);
  },
  components: {
    ItemForecast,
    util,
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
  margin: $margin-center;
  margin-top: 20px;
  color: white;
  @extend %for-container;
}

.title {
  font-weight: 900;
  font-size: 40px;
  padding-top: 40px;
}

.forecast-title {
  font-size: 25px;
  font-weight: $main-font-width;
  margin-top: 20px;
}

// Adaptive

@media (max-width: $breakpoint-xxl) {
  .container-forecast {
    max-width: 650px;
    height: 650px;
  }
  .title {
    font-size: 30px;
    padding-top: 20px;
  }
  .forecast-title {
    font-size: 20px;
  }
}
@media (max-width: $breakpoint-xl) {
  .container-forecast {
    max-width: 550px;
    height: 600px;
  }
  .title {
    font-size: 25px;
  }
  .forecast-title {
    font-size: 20px;
  }
}
@media (max-width: $breakpoint-lg) {
  .container-forecast {
    max-width: 500px;
    height: 600px;
  }
}

@media (max-width: $breakpoint-md) {
  .container-forecast {
    max-width: 450px;
    height: 550px;
  }
  .title {
    font-size: 22px;
  }
  .forecast-title {
    font-size: 18px;
  }
}
@media (max-width: $breakpoint-sm) {
  .container-forecast {
    max-width: 350px;
    height: 550px;
  }
  .title {
    font-size: 20px;
  }
  .forecast-title {
    font-size: 16px;
  }
}
</style>
