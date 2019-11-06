<template>
  <div id="topbox">
    <h1> Box component </h1>
    <animation-component></animation-component>
  </div>
</template>

<script>
import TwoAnimationComponent from "./Twoanimation.vue";

export default {
  name: "BoxComponent",
  components: {
    'animation-component': TwoAnimationComponent
  },
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>

<style lang="css" scoped>
#topbox {
  list-style-type: none;
  padding: 0;
  border: 0 white;
  border-radius: 8px;
  -webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow:0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow:0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
