<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
<div class="container">
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <RouterLink :to="`/`">
          <img src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-2.png" alt="Image Alt Text" class="custom-img">
        </RouterLink>
        สภาพอากาศช่วงนี้
      </a>
    </div>
  </nav><hr>

  <RouterView />
  
</div>
</template>

<style scoped>
.custom-img {
  width: 65px; 
  height: auto; 
  width: 20pt;
}

/* เพิ่มการใช้งานฟอนต์ */
body {
  font-family: 'Your Font Name', sans-serif;
}

.navbar {
  color: #fff; 
  padding: 10px; 
}

.navbar-brand {
  font-size: 24px; 
  text-decoration: none;
  color: #1f057d;
}

a.navbar-brand:hover {
  color: #cb1922; 
}
</style>