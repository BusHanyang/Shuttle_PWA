<template>
  <div class="hybus">
    <title-component></title-component>
    <transition-group 
      v-on:after-enter="animateNextBox"
      name="animatedbox"
      tag="div" >
      <box-component
        v-for="item in name"
        :key="item.key"
        :val="item"
        v-show="animated[item.key]"
      ></box-component>
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
  created() {
    this.$cookie.set("darkmode_setting", this.darkTheme, { expires: "1Y" });
  },
  data() {
    return {
      name: [
        { type: "OTC", parameter: ["shuttlecock_o"], key: 0 },
        { type: "OTC", parameter: ["subway"], key: 1 },
        { type: "OTC", parameter: ["giksa"], key: 2 },
        { type: "OTC", parameter: ["yesulin"], key: 3 },
        { type: "OTC", parameter: ["shuttlecock_i"], key: 4 }
      ],
      animated: [false, false, false, false, false, false],
      darkTheme: false
    };
  },
    mounted() {
      setTimeout(this.animateNextBox, 100);
    },
  methods: {
    animateNextBox: function() {
      this.animated.splice(i++, 1, true)
    }
  }
};
</script>

<style scoped>
.animatedbox-enter {
  opacity: 0; 
}
.animatedbox-enter-active {
  transition: opacity .15s;
}
</style>
