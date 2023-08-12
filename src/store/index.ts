import { defineStore } from "pinia";
import { ref } from "vue";
import { Weather } from "@/types/WeatherTypes.interface";

export const useCitysStore = defineStore("citys", () => {
  const citys = ref(
    localStorage.citys ? JSON.parse(localStorage.citys) : ([] as Weather[])
  );
  function addCity(city: Weather, i?: number) {
    if (citys.value.some((item: Weather) => item.name === city.name)) {
      return;
    }
    if (i===0 && !citys.value.some((item: Weather) => item.name === city.name)) {
      citys.value.unshift(city);
      localStorage.citys = JSON.stringify(citys.value);
      return
    }
    city.index = citys.value.length;
    citys.value.push(city);
    localStorage.citys = JSON.stringify(citys.value);
  }
  function removeCity(index: number) {
    citys.value.splice(index, 1);
    localStorage.citys = JSON.stringify(citys.value);
  }
  function updateCitys(value: Weather[]) {
    citys.value = value;
    localStorage.citys = JSON.stringify(citys.value);
  }
  return { citys, addCity, removeCity, updateCitys };
});
