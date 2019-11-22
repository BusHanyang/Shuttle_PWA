<template>
  <div id="box">
    <div class="topbox" v-if="this.val.type === 'TAC'">
      <animation-component class="TAC" :left="this.val.parameter[0]" :right="this.val.parameter[1]"></animation-component>
    </div>
    <div class="listbox" v-else-if="this.val.type === 'OTC'">
      <OneText class="OTC" :where="this.val.parameter[0]"></OneText>
    </div>
  </div>
</template>

<script>
import TwoAnimationComponent from "./Twoanimation.vue";
import OneText from "./OneText";

export default {
  name: "BoxComponent",
  components: {
    "animation-component": TwoAnimationComponent,
    OneText: OneText
  },
  props: ["val"],

  data() {
    return {
      dest: this.val
    };
  }
};
</script>

<style lang="css" scoped>
#box {
  margin: 10px;
  list-style-type: none;
  padding: 0;
  border: 0 white;
  border-radius: 8px;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.15);
}

.topbox {
  text-align: -webkit-center;
}

.TAC {
  width: 100%;
}
</style>
