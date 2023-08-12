import { createRouter, createWebHistory } from "vue-router";
import WeatherPage from "@/views/WeatherPage.vue";
import OptionPage from "@/views/OptionPage.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: WeatherPage,
  },
  {
    path: "/option",
    component: OptionPage,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: WeatherPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

export default router;
