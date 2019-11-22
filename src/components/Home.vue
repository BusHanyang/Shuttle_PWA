<template>
  <div class="hello">
    <title-component></title-component>
    <transition-group v-on:after-enter="animateNextBox" name="animatedbox" tag="div">
      <box-component v-for="item in name" :key="item.key" :val="item" v-show="animated[item.key]"></box-component>
    </transition-group>
  </div>
</template>

<script>
import BoxComponent from "./Box.vue";
import TitleComponent from "./Title.vue";

let i = 0;
export default {
  name: "Home",
  components: {
    "box-component": BoxComponent,
    "title-component": TitleComponent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      name: [
        { type: "TAC", parameter: ["shuttlecock_o", "subway"], key: 0 },
        { type: "OTC", parameter: ["subway"], key: 1 },
        { type: "OTC", parameter: ["giksa"], key: 2 },
        { type: "OTC", parameter: ["yesulin"], key: 3 },
        { type: "OTC", parameter: ["shuttlecock_o"], key: 4 },
        { type: "OTC", parameter: ["shuttlecock_i"], key: 5 }
      ],
      animated: [false, false, false, false, false, false]
    };
  },
  methods: {
    animateNextBox: function() {
      this.animated.splice(i++, 1, true);
    }
  },
  mounted() {
    setTimeout(this.animateNextBox, 100);
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  border: 0 white;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.animatedbox-enter {
  opacity: 0;
}
.animatedbox-enter-active {
  transition: opacity 0.15s;
}
</style>
