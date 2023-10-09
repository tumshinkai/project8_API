<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { Travel_listStore } from '../stores/counter.js';

const All_travel = Travel_listStore();
const All_travel_list = ref(All_travel.travel_list);



const items = ref([])
const url = ref('{{i.ip}}')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>
  <div class="card mb-3" v-for="(i, index) in All_travel_list" :key="index">
    <img :src="i.img" class="card-img-top" alt="...">
    <div class="card-body "> <!-- เพิ่ม 'd-flex flex-column align-items-end' -->
      <h5 class="card-title">{{ i.name }}</h5>
      <p class="card-text">เพราะอากาศเปลี่ยนแปลงบ่อย เป็นเพราะมีคนคิดถึง หรือเพราะอากาศเปลี่ยนกันแน่นะ ?</p>
      <div class=" d-flex flex-column align-items-end">
        <RouterLink :to="`/WeatherCard/${index}`">
        <button class="btn btn-primary d-flex flex-column align-items-end" type="submit">รายละเอียด</button>
      </RouterLink>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card {
  border: 2px solid #ccc;
  border-radius: 10px;
  margin: 50px; 
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff; 
}

.card-img-top {
  max-width: 100%;
  height: auto;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.btn {
  margin-top: 1rem;
  background-color: #6aa708; 
  color: #fff;
  border: none;
  border-radius: 5px; 
  padding: 0.5rem 1rem; 
  cursor: pointer; 
}

.btn:hover {
  background-color: #199201; 
}
</style>