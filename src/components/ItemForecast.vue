<template>
  <div>
    <div class="day-week">
      <span>{{ day }} :</span> <img :src="img" />H: {{ Math.round(max) }}°C, L:
      {{ Math.round(min) }} °C
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    day: String,
    min: Number,
    max: Number,
    img: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
@import "@/assets/extend.scss";
.day-week {
  margin-top: 20px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 800;
  }

  img {
    width: 80px;
    margin-right: 20px;
    margin-left: 20px;
  }
}

@media (max-width: $breakpoint-xxl) {
  .day-week {
    margin-top: 20px;
    font-size: 18px;
    img {
      width: 70px;
    }
  }
}
@media (max-width: $breakpoint-xl) {
  .day-week {
    margin-top: 15px;
    font-size: 16px;
    img {
      width: 60px;
    }
  }
}
@media (max-width: $breakpoint-lg) {
  .container-forecast {
    max-width: 500px;
    height: 600px;
  }
}

@media (max-width: $breakpoint-md) {
  .day-week {
    margin-top: 12px;
    font-size: 15px;
    img {
      width: 55px;
    }
  }
}

@media (max-width: $breakpoint-sm) {
  .day-week {
    img {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}
</style>
