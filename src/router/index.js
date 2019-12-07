import Vue from "vue";
import VueCookies from "vue-cookies";
import Router from "vue-router";

import Home from "@/components/Home";
import Box from "@/components/Box";
import Title from "@/components/Title";

Vue.use(Router);
Vue.use(VueCookies);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home, Box, Title
    }
  ]
});
