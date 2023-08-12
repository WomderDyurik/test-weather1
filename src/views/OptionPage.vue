<template>
  <div class="option__page">
    <h2 class="option__page-title">Settings</h2>
    <router-link to="/" class="option__page-close">
      <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>
    </router-link>
    <draggable
      v-model="citys"
      :animation="300"
      item-key="i"
      class="option__page-items"
    >
      <template #item="{ element: city, index: i }">
        <OptionItemApp
          :city-name="city.name"
          :city-country="city.sys.country"
          @delete-item="deleteCity(i)"
        />
      </template>
    </draggable>
    <div class="option__page-footer footer">
      <div class="footer-input">
        <form @submit.prevent="addCity(inputValue)">
          <label>Add Location:</label>
          <input type="text" v-model="inputValue" placeholder="Type city" />
        </form>
      </div>
      <div class="footer-image" @click="addCity(inputValue)">
        <svg enable-background="new 0 0 128 128" height="128px" id="Слой_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><polygon fill="#373737" points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125     16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594     112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125   "/></g></svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, computed } from "vue";
import draggable from "vuedraggable";
import OptionItemApp from "@/components/OptionItemApp.vue";
import { searchGeoLocation, searchWeatherOnCity } from "@/services/weatherAPI";
import { useCitysStore } from "@/store";
defineComponent({
  name: "OptionPage",
  components: {
    OptionItemApp,
  },
});
const store = useCitysStore();
const citys = computed({
  get() {
    return store.citys;
  },
  set(value) {
    store.updateCitys(value);
  },
});
const inputValue = ref("" as string);
const deleteCity = (i: number) => {
  store.removeCity(i);
};
function addCity(value: string) {
  searchGeoLocation(value)
    .then((data) => searchWeatherOnCity(data[0].name, data[0].country))
    .then((data) => store.addCity(data));
  inputValue.value = "";
}
</script>

<style scoped lang="scss">
.option__page {
  padding: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  & img {
    width: 20px;
    height: 20px;
  }
  &-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0;
  }
  &-close {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
  }
  &-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0 40px;
  }
}
.footer {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 16px;
  &-input {
    margin: 0 10px 0 0;
    & label {
      font-weight: 600;
    }
    & input {
      width: 140px;
      padding: 5px 10px;
    }
  }
  &-image {
    display: flex;
    align-items: end;
    cursor: pointer;
    & img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
