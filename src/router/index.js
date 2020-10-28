import Vue from "vue";
import Router from "vue-router";
import VueCarousel from 'vue-carousel';

import Home from "@/components/Home";
import Box from "@/components/Box";
import Title from "@/components/Title";

Vue.use(Router);
Vue.use(VueCarousel);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home, Box, Title
    }
  ]
});
