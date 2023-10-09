import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'Seasons Change', img:'https://cdna.artstation.com/p/assets/images/images/027/406/304/large/gavryl-for-inprnt.jpg?1591445929',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},

])

return { travel_list }
})