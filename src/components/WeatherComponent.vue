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
  color: white;
  margin: $margin-center;
  margin-top: 10px;
  margin-bottom: 30px;
  @extend %for-container;
}

.icon {
  img {
    height: 200px;
  }
}

.style-text {
  font-size: 25px;
  font-weight: $main-font-width;
  margin-top: 25px;
}

.temperature {
  font-size: 60px;
  background: $background-temp;
  max-width: 220px;
  height: 80px;
  border-radius: 20px;
  margin: $margin-center;
  margin-top: 20px;
}

.inputCity {
  width: 400px;
  height: 40px;
  font-size: 28px;
  margin-top: 20px;
  @extend %border-for-input;
}

.title {
  font-weight: 900;
  font-size: 40px;
  padding-top: 50px;
}

// Adaptive

@media (max-width: $breakpoint-xxl) {
  .container {
    max-width: 650px;
    height: 650px;
  }
  .title {
    font-size: 35px;
    padding-top: 30px;
  }
  .inputCity {
    width: 300px;
    height: 30px;
    font-size: 24px;
  }

  .style-text {
    font-size: 20px;
    margin-top: 20px;
  }
  .temperature {
    font-size: 50px;
    max-width: 160px;
    height: 70px;
    border-radius: 15px;
    margin-top: 20px;
  }
  .icon {
    img {
      height: 150px;
    }
  }
}
@media (max-width: $breakpoint-xl) {
  .container {
    max-width: 550px;
    height: 600px;
  }
  .title {
    font-size: 30px;
    padding-top: 25px;
  }
  .inputCity {
    width: 280px;
  }

  .style-text {
    font-size: 18px;
  }
  .temperature {
    font-size: 50px;
    max-width: 160px;
    height: 70px;
  }
  .icon {
    img {
      height: 130px;
    }
  }
}
@media (max-width: $breakpoint-lg) {
  .container {
    max-width: 500px;
  }
  .title {
    font-size: 25px;
  }
  .inputCity {
    width: 250px;
  }

  .temperature {
    font-size: 45px;
    max-width: 140px;
    height: 60px;
  }
  .icon {
    img {
      height: 130px;
    }
  }
}
@media (max-width: $breakpoint-md) {
  .container {
    max-width: 450px;
    height: 550px;
  }
  .title {
    font-size: 22px;
  }
  .inputCity {
    width: 200px;
  }

  .temperature {
    font-size: 40px;
    max-width: 120px;
    height: 52px;
  }
  .icon {
    img {
      height: 120px;
    }
  }
}
@media (max-width: $breakpoint-sm) {
  .container {
    max-width: 350px;
    height: 550px;
  }
  .title {
    font-size: 20px;
  }
  .style-text {
    font-size: 16px;
  }
  .temperature {
    font-size: 40px;
  }
  .icon {
    img {
      height: 110px;
    }
  }
}
</style>
