<template>
  <div class="weather__page">
    <router-link to="/option" class="weather__page-link"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><g id="Setting"><path d="M58.3936,26.0391l-5.56-1.1153A20.82,20.82,0,0,0,51.73,22.2705l3.1455-4.7222a1.9994,1.9994,0,0,0-.251-2.5224l-5.65-5.65a2,2,0,0,0-2.5224-.25L41.73,12.2705a20.8325,20.8325,0,0,0-2.6533-1.1045L37.9609,5.6069A2,2,0,0,0,36,4H28a2,2,0,0,0-1.9609,1.6069L24.9238,11.166a20.8325,20.8325,0,0,0-2.6533,1.1045l-4.7217-3.145a1.9987,1.9987,0,0,0-2.5224.25l-5.65,5.65a1.9994,1.9994,0,0,0-.251,2.5224l3.1455,4.7222a20.82,20.82,0,0,0-1.1045,2.6533l-5.56,1.1153A2,2,0,0,0,4,28v8a2,2,0,0,0,1.6064,1.9609l5.56,1.1153A20.82,20.82,0,0,0,12.2705,41.73L9.125,46.4517a1.9994,1.9994,0,0,0,.251,2.5224l5.65,5.65a1.999,1.999,0,0,0,2.5224.25l4.7217-3.145a20.8325,20.8325,0,0,0,2.6533,1.1045l1.1153,5.5591A2,2,0,0,0,28,60h8a2,2,0,0,0,1.9609-1.6069l1.1153-5.5591A20.8325,20.8325,0,0,0,41.73,51.73l4.7217,3.145a2,2,0,0,0,2.5224-.25l5.65-5.65a1.9994,1.9994,0,0,0,.251-2.5224L51.73,41.73a20.82,20.82,0,0,0,1.1045-2.6533l5.56-1.1153A2,2,0,0,0,60,36V28A2,2,0,0,0,58.3936,26.0391ZM56,34.3613l-5.124,1.0279a2,2,0,0,0-1.5362,1.436,16.8337,16.8337,0,0,1-1.6709,4.0132,2.002,2.002,0,0,0,.0665,2.11l2.9013,4.3565-3.332,3.332-4.3565-2.9013a2.0029,2.0029,0,0,0-2.11-.0665A16.8493,16.8493,0,0,1,36.8242,49.34a2,2,0,0,0-1.4355,1.5367L34.3613,56H29.6387l-1.0274-5.123A2,2,0,0,0,27.1758,49.34a16.8493,16.8493,0,0,1-4.0137-1.6714,1.9986,1.9986,0,0,0-2.11.0665l-4.3565,2.9013-3.332-3.332,2.9013-4.3565a2.002,2.002,0,0,0,.0665-2.11A16.8337,16.8337,0,0,1,14.66,36.8252a2,2,0,0,0-1.5362-1.436L8,34.3613V29.6387l5.124-1.0279a2,2,0,0,0,1.5362-1.436,16.8337,16.8337,0,0,1,1.6709-4.0132,2.002,2.002,0,0,0-.0665-2.11l-2.9013-4.3565,3.332-3.332,4.3565,2.9013a1.9988,1.9988,0,0,0,2.11.0665A16.8493,16.8493,0,0,1,27.1758,14.66a2,2,0,0,0,1.4355-1.5367L29.6387,8h4.7226l1.0274,5.123A2,2,0,0,0,36.8242,14.66a16.8493,16.8493,0,0,1,4.0137,1.6714,2.003,2.003,0,0,0,2.11-.0665l4.3565-2.9013,3.332,3.332-2.9013,4.3565a2.002,2.002,0,0,0-.0665,2.11A16.8337,16.8337,0,0,1,49.34,27.1748a2,2,0,0,0,1.5362,1.436L56,29.6387Z"/><path d="M32,22A10,10,0,1,0,42,32,10.0114,10.0114,0,0,0,32,22Zm0,16a6,6,0,1,1,6-6A6.0066,6.0066,0,0,1,32,38Z"/></g></svg></router-link>
    <WeatherItemApp v-for="(city, i) in citys" :key="i" :city="city" />
  </div>
</template>

<script setup lang="ts">
import { defineComponent,computed } from "vue";
import { useCitysStore } from "@/store";
import WeatherItemApp from "@/components/WeatherItemApp.vue";

defineComponent({
  name: "WeatherPage",
  components: { WeatherItemApp },
});

const store = useCitysStore()
const citys = computed(() =>
  {
    return store.citys
  })
</script>

<style scoped lang="scss">
.weather__page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-link {
    position: absolute;
    top: 10px;
    right: 10px;
    & img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>