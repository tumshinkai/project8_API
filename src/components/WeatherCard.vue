<script setup>
import axios from 'axios'
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { Travel_listStore } from '../stores/counter.js';

const route = useRoute();
const index = route.params.dt;

const All_travel = Travel_listStore();
const travelItem = All_travel.travel_list[index]; 

const items = ref([]);
const url = ref(`https://${travelItem.ip}`); 

function fetchPosts() {
    axios
    .get(url.value)
    .then((response) => {
        const uniqueDates = [...new Set(response.data.list.map(item => item.dt_txt.split(" ")[0]))].slice(0, 7);      
        items.value = response.data.list.filter(item => uniqueDates.includes(item.dt_txt.split(" ")[0]));
    })
    .catch((err) => {
        console.log(err);
    });
}


onMounted(fetchPosts);
</script>


<template>
  <section class="vh-100" >
    <div><h1 style="text-align: center;" class="text_box"><strong>{{travelItem.name}} </strong></h1></div>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4" v-for="(i,index) in items" :key="index">
  
        <div class="card" style="color: #082d77; border-radius: 10px;" >
            <div class="card-body p-4" >
              <div class="d-flex">
                <h6 class="flex-grow-1">วันที่ {{ i.dt_txt.split(" ")[0] }}</h6>
                <h6>เวลา {{ i.dt_txt.split(" ")[1].slice(0, 5) }} น</h6>
            </div>
            
            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #2fb748;"> {{ (((i.main.temp - 32) / 1.8) / 6).toFixed(2) }}°C </h6>
              <span class="small" style="color: #ac0900">{{ i.weather[0].main }}</span>
            </div>
            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ความเร็วลม: {{ i.wind.speed }} ms/s </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ระดับความชื้น: {{ i.main.humidity }}% </span></div>
                  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> คำอธิบาย : {{ i.weather[0].description }} </span></div>
              </div>
              <div style="margin-left: 20px">
               <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="Image Alt Text" class="custom-img">
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.card{
  margin-bottom: 20px;
}

.card {
  background-color: #f0f0f0; 
  border: none;
  border-radius: 15px; 
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease; 
}

.card:hover {
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2); 
}

.text_box {
  margin-top: 20px; 
}


.card-body h6 {
  color: #333; 
  font-weight: bold; 
  margin-bottom: 10px; 
}


.card-body .small {
  color: #555; 
  margin-top: 5px; 
}


.card-body .fa-fw {
  font-size: 18px; 
  margin-right: 5px; 
  vertical-align: middle; 
  color: #777;
}


.custom-img {
  width: 120px; 
  height: auto; 
}

</style>
