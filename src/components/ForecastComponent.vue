<template>
 
   <div v-if="typeof forecastAll.city != 'undefined'">
   {{ getCurrentForecast() }}
   <div class="full-container-forecast">
   
   <div class="container-forecast">
   <div class="title">5-day forecast</div>
   <div class="">{{  forecastAll.city.name}}, {{  forecastAll.city.country}}</div>
   <div class="day-week">{{ day_one }}: H {{ maxTempFirst }}°C, L {{minTempFirst}} °C</div>
   <div class="day-week">{{ day_two }}: H {{ maxTempSecond }}°C, L {{minTempSecond}} °C</div>
   <div class="day-week">{{ day_three }} : H {{ maxTempThird }}°C, L {{minTempThird}} °C</div>
   <div class="day-week">{{ day_four }} : H {{ maxTempFourth }}°C, L {{minTempFourth}} °C</div>
   <div class="day-week">{{ day_five }} : H {{ maxTempFive }}°C, L {{minTempFive}} °C</div>
   <div class="day-week">{{ day_six }}  : H {{ maxTempSix }}°C, L {{minTempSix}} °C</div>
   
     
   </div>
  </div>
  </div>
      
  

   

</template>

<script>

export default {
  props :{
    forecastAll: Object

  },
  data() {
    return {
      day_one: "",
      day_two: "",
      day_three: "",
      day_four: "",
      day_five: "",
      day_six: "",
      first_day :[],
      second_day : [],
      third_day : [],
      fourth_day : [],
      five_day : [],
      six_day : [],
      maxTempFirst : "",
      minTempFirst : "",
      maxTempSecond : "",
      minTempSecond : "",
      maxTempThird : "",
      minTempThird : "",
      maxTempFourth : "",
      minTempFourth : "",
      maxTempFive : "",
      minTempFive : "",
      maxTempSix : "",
      minTempSix : "",
    }
  },
  methods: {
    getCurrentForecast(){
      const data = new Date()
      let currentTime = data.getHours()

if((currentTime >=0)&&(currentTime < 3)){

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])
this.first_day.push(this.forecastAll.list[3])
this.first_day.push(this.forecastAll.list[4])
this.first_day.push(this.forecastAll.list[5])
this.first_day.push(this.forecastAll.list[6])
this.first_day.push(this.forecastAll.list[7])

this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])
this.second_day.push(this.forecastAll.list[11])
this.second_day.push(this.forecastAll.list[12])
this.second_day.push(this.forecastAll.list[13])
this.second_day.push(this.forecastAll.list[14])
this.second_day.push(this.forecastAll.list[15])

this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])
this.third_day.push(this.forecastAll.list[19])
this.third_day.push(this.forecastAll.list[20])
this.third_day.push(this.forecastAll.list[21])
this.third_day.push(this.forecastAll.list[22])
this.third_day.push(this.forecastAll.list[23])
 
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])
this.fourth_day.push(this.forecastAll.list[27])
this.fourth_day.push(this.forecastAll.list[28])
this.fourth_day.push(this.forecastAll.list[29])
this.fourth_day.push(this.forecastAll.list[30])
this.fourth_day.push(this.forecastAll.list[31])

this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])
this.five_day.push(this.forecastAll.list[35])
this.five_day.push(this.forecastAll.list[36])
this.five_day.push(this.forecastAll.list[37])
this.five_day.push(this.forecastAll.list[38])
this.five_day.push(this.forecastAll.list[39])

}
if((currentTime >=3)&&(currentTime < 6)){

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

  this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])
this.first_day.push(this.forecastAll.list[3])
this.first_day.push(this.forecastAll.list[4])
this.first_day.push(this.forecastAll.list[5])
this.first_day.push(this.forecastAll.list[6])

this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])
this.second_day.push(this.forecastAll.list[11])
this.second_day.push(this.forecastAll.list[12])
this.second_day.push(this.forecastAll.list[13])
this.second_day.push(this.forecastAll.list[14])

this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])
this.third_day.push(this.forecastAll.list[19])
this.third_day.push(this.forecastAll.list[20])
this.third_day.push(this.forecastAll.list[21])
this.third_day.push(this.forecastAll.list[22])

this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])
this.fourth_day.push(this.forecastAll.list[27])
this.fourth_day.push(this.forecastAll.list[28])
this.fourth_day.push(this.forecastAll.list[29])
this.fourth_day.push(this.forecastAll.list[30])

this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])
this.five_day.push(this.forecastAll.list[35])
this.five_day.push(this.forecastAll.list[36])
this.five_day.push(this.forecastAll.list[37])
this.five_day.push(this.forecastAll.list[38])

this.six_day.push(this.forecastAll.list[39])
}
if((currentTime >=6)&&(currentTime < 9)){
  

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

  this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])
this.first_day.push(this.forecastAll.list[3])
this.first_day.push(this.forecastAll.list[4])
this.first_day.push(this.forecastAll.list[5])

this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])
this.second_day.push(this.forecastAll.list[11])
this.second_day.push(this.forecastAll.list[12])
this.second_day.push(this.forecastAll.list[13])

this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])
this.third_day.push(this.forecastAll.list[19])
this.third_day.push(this.forecastAll.list[20])
this.third_day.push(this.forecastAll.list[21])

this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])
this.fourth_day.push(this.forecastAll.list[27])
this.fourth_day.push(this.forecastAll.list[28])
this.fourth_day.push(this.forecastAll.list[29])

this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])
this.five_day.push(this.forecastAll.list[35])
this.five_day.push(this.forecastAll.list[36])
this.five_day.push(this.forecastAll.list[37])

this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])
}
if((currentTime >=9)&&(currentTime < 12)){
 

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

  this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])
this.first_day.push(this.forecastAll.list[3])
this.first_day.push(this.forecastAll.list[4])

this.second_day.push(this.forecastAll.list[5])
this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])
this.second_day.push(this.forecastAll.list[11])
this.second_day.push(this.forecastAll.list[12])

this.third_day.push(this.forecastAll.list[13])
this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])
this.third_day.push(this.forecastAll.list[19])
this.third_day.push(this.forecastAll.list[20])

this.fourth_day.push(this.forecastAll.list[21])
this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])
this.fourth_day.push(this.forecastAll.list[27])
this.fourth_day.push(this.forecastAll.list[28])

this.five_day.push(this.forecastAll.list[29])
this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])
this.five_day.push(this.forecastAll.list[35])
this.five_day.push(this.forecastAll.list[36])

this.six_day.push(this.forecastAll.list[37])
this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])
}
if((currentTime >=12)&&(currentTime < 15)){
 

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])
this.first_day.push(this.forecastAll.list[3])

this.second_day.push(this.forecastAll.list[4])
this.second_day.push(this.forecastAll.list[5])
this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])
this.second_day.push(this.forecastAll.list[11])

this.third_day.push(this.forecastAll.list[12])
this.third_day.push(this.forecastAll.list[13])
this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])
this.third_day.push(this.forecastAll.list[19])

this.fourth_day.push(this.forecastAll.list[20])
this.fourth_day.push(this.forecastAll.list[21])
this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])
this.fourth_day.push(this.forecastAll.list[27])

this.five_day.push(this.forecastAll.list[28])
this.five_day.push(this.forecastAll.list[29])
this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])
this.five_day.push(this.forecastAll.list[35])

this.six_day.push(this.forecastAll.list[36])
this.six_day.push(this.forecastAll.list[37])
this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])

}
if((currentTime >=15)&&(currentTime < 18)){
 

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);

this.first_day.push(this.forecastAll.list[0])
this.first_day.push(this.forecastAll.list[1])
this.first_day.push(this.forecastAll.list[2])

this.second_day.push(this.forecastAll.list[3])
this.second_day.push(this.forecastAll.list[4])
this.second_day.push(this.forecastAll.list[5])
this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])
this.second_day.push(this.forecastAll.list[10])


this.third_day.push(this.forecastAll.list[11])
this.third_day.push(this.forecastAll.list[12])
this.third_day.push(this.forecastAll.list[13])
this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])
this.third_day.push(this.forecastAll.list[18])

this.fourth_day.push(this.forecastAll.list[19])
this.fourth_day.push(this.forecastAll.list[20])
this.fourth_day.push(this.forecastAll.list[21])
this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])
this.fourth_day.push(this.forecastAll.list[26])

this.five_day.push(this.forecastAll.list[27])
this.five_day.push(this.forecastAll.list[28])
this.five_day.push(this.forecastAll.list[29])
this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])
this.five_day.push(this.forecastAll.list[34])

this.six_day.push(this.forecastAll.list[35])
this.six_day.push(this.forecastAll.list[36])
this.six_day.push(this.forecastAll.list[37])
this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])
}
if((currentTime >=18)&&(currentTime < 21)){
 

  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);


  this.first_day.push(this.forecastAll.list[0])
  this.first_day.push(this.forecastAll.list[1])

 this.second_day.push(this.forecastAll.list[2])
this.second_day.push(this.forecastAll.list[3])
this.second_day.push(this.forecastAll.list[4])
this.second_day.push(this.forecastAll.list[5])
this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])
this.second_day.push(this.forecastAll.list[9])

this.third_day.push(this.forecastAll.list[10])
this.third_day.push(this.forecastAll.list[11])
this.third_day.push(this.forecastAll.list[12])
this.third_day.push(this.forecastAll.list[13])
this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])
this.third_day.push(this.forecastAll.list[17])

this.fourth_day.push(this.forecastAll.list[18])
this.fourth_day.push(this.forecastAll.list[19])
this.fourth_day.push(this.forecastAll.list[20])
this.fourth_day.push(this.forecastAll.list[21])
this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])
this.fourth_day.push(this.forecastAll.list[25])

this.five_day.push(this.forecastAll.list[26])
this.five_day.push(this.forecastAll.list[27])
this.five_day.push(this.forecastAll.list[28])
this.five_day.push(this.forecastAll.list[29])
this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])
this.five_day.push(this.forecastAll.list[33])

this.six_day.push(this.forecastAll.list[34])
this.six_day.push(this.forecastAll.list[35])
this.six_day.push(this.forecastAll.list[36])
this.six_day.push(this.forecastAll.list[37])
this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])

}
if((currentTime >=21)&&(currentTime < 24)){


  this.first_day.splice(0, this.first_day.length);
  this.second_day.splice(0, this.second_day.length);
  this.third_day.splice(0, this.third_day.length);
  this.fourth_day.splice(0, this.fourth_day.length);
  this.five_day.splice(0, this.five_day.length);
  this.six_day.splice(0, this.six_day.length);


  this.first_day.push(this.forecastAll.list[0])
  
this.second_day.push(this.forecastAll.list[1])
this.second_day.push(this.forecastAll.list[2])
this.second_day.push(this.forecastAll.list[3])
this.second_day.push(this.forecastAll.list[4])
this.second_day.push(this.forecastAll.list[5])
this.second_day.push(this.forecastAll.list[6])
this.second_day.push(this.forecastAll.list[7])
this.second_day.push(this.forecastAll.list[8])


this.third_day.push(this.forecastAll.list[9])
this.third_day.push(this.forecastAll.list[10])
this.third_day.push(this.forecastAll.list[11])
this.third_day.push(this.forecastAll.list[12])
this.third_day.push(this.forecastAll.list[13])
this.third_day.push(this.forecastAll.list[14])
this.third_day.push(this.forecastAll.list[15])
this.third_day.push(this.forecastAll.list[16])

this.fourth_day.push(this.forecastAll.list[17])
this.fourth_day.push(this.forecastAll.list[18])
this.fourth_day.push(this.forecastAll.list[19])
this.fourth_day.push(this.forecastAll.list[20])
this.fourth_day.push(this.forecastAll.list[21])
this.fourth_day.push(this.forecastAll.list[22])
this.fourth_day.push(this.forecastAll.list[23])
this.fourth_day.push(this.forecastAll.list[24])

this.five_day.push(this.forecastAll.list[25])
this.five_day.push(this.forecastAll.list[26])
this.five_day.push(this.forecastAll.list[27])
this.five_day.push(this.forecastAll.list[28])
this.five_day.push(this.forecastAll.list[29])
this.five_day.push(this.forecastAll.list[30])
this.five_day.push(this.forecastAll.list[31])
this.five_day.push(this.forecastAll.list[32])

this.six_day.push(this.forecastAll.list[33])
this.six_day.push(this.forecastAll.list[34])
this.six_day.push(this.forecastAll.list[35])
this.six_day.push(this.forecastAll.list[36])
this.six_day.push(this.forecastAll.list[37])
this.six_day.push(this.forecastAll.list[38])
this.six_day.push(this.forecastAll.list[39])

}
let maxTempFirst = []
let minTempFirst = []
let maxTempSecond = []
let minTempSecond = []
let maxTempThird = []
let minTempThird = []
let maxTempFourth = []
let minTempFourth= []
let maxTempFive = []
let minTempFive = []
let maxTempSix = []
let minTempSix = []

this.first_day.forEach(elem => { 
  maxTempFirst.push(elem.main.temp_max)  
});
this.first_day.forEach(elem => { 
  minTempFirst.push(elem.main.temp_min)  
});

this.second_day.forEach(elem => { 
  maxTempSecond.push(elem.main.temp_max)  
});
this.second_day.forEach(elem => { 
  minTempSecond.push(elem.main.temp_min)  
});

this.third_day.forEach(elem => { 
  maxTempThird.push(elem.main.temp_max)  
});
this.third_day.forEach(elem => { 
  minTempThird.push(elem.main.temp_min)  
});

this.fourth_day.forEach(elem => { 
  maxTempFourth.push(elem.main.temp_max)  
});
this.fourth_day.forEach(elem => { 
  minTempFourth.push(elem.main.temp_min)  
});

this.five_day.forEach(elem => { 
  maxTempFive.push(elem.main.temp_max)  
});
this.five_day.forEach(elem => { 
  minTempFive.push(elem.main.temp_min)  
});

this.six_day.forEach(elem => { 
  maxTempSix.push(elem.main.temp_max)  
});
this.six_day.forEach(elem => { 
  minTempSix.push(elem.main.temp_min)  
});

  this.maxTempFirst = Math.max(...maxTempFirst)
  this.minTempFirst =  Math.min(...maxTempFirst)

  this.maxTempSecond = Math.max(...maxTempSecond)
  this.minTempSecond =  Math.min(...maxTempSecond)

  this.maxTempThird = Math.max(...maxTempThird)
  this.minTempThird =  Math.min(...maxTempThird)

  this.maxTempFourth = Math.max(...maxTempFourth)
  this.minTempFourth =  Math.min(...maxTempFourth)

  this.maxTempFive = Math.max(...maxTempFive)
  this.minTempFive =  Math.min(...maxTempFive)

  this.maxTempSix = Math.max(...maxTempSix)
  this.minTempSix =  Math.min(...maxTempSix)

    }
  },
  created() {
      const data = new Date()
      const dayWeek = [ "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday", "Monday",
    "Tuesday",
    "Wednesday",
    ]
    let currentData = data.getDay()
   this.day_one =  dayWeek[currentData-1]
   this.day_two =  dayWeek[currentData-1+1]
   this.day_three =  dayWeek[currentData-1+2]
   this.day_four =  dayWeek[currentData-1+3]
   this.day_five =  dayWeek[currentData-1+4]
   this.day_six =  dayWeek[currentData-1+5]
    
  
  },
};
</script>

<style  scoped>
.full-container-forecast{
  background: url("../../public/bg-forecast.png") no-repeat;
  background-size: cover;
  background-position: center;
padding-top: 20px;
  height: 100vh;
}
.container-forecast{
  backdrop-filter: blur(10px);
  text-align: center;
  font-family: "Roboto Mono", monospace;
  max-width: 1200px;
  height: 650px;
  border-radius: 100px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 20px;
  color: black;
}
.title{
  font-weight: 900;
  font-size: 30px;
  padding-top: 50px;
}
</style>
