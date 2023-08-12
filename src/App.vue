<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { searchWeatherOnCityByLatLon } from "@/services/weatherAPI";
import { useCitysStore } from "./store";

defineComponent({
  name: "App",
});

const store = useCitysStore();

navigator.geolocation.getCurrentPosition(function (position) {
  searchWeatherOnCityByLatLon(
    position.coords.latitude.toFixed(2),
    position.coords.longitude.toFixed(2)
  ).then((data) => store.addCity(data, 0));
});
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 220px;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}

.fade-leave-to {
  transition: all 0.3s linear;
  opacity: 0;
}
svg {
  width: 20px;
  height: 20px;
}
</style>
