<template>
  <div class="box" :class="(this.val.parameter[0] === 'shuttlecock_i') ? 'last' : ''">
    <div class="topbox" v-if="this.val.type === 'TAC'">
      <animation-component
        :left="this.val.parameter[0]"
        :right="this.val.parameter[1]"
      ></animation-component>
    </div>
    <div class="listbox" v-else-if="this.val.type === 'OTC'">
      <OneText :where="this.val.parameter[0]"></OneText>
    </div>
  </div>
</template>

<script>
import TwoAnimationComponent from "./TwoAnimation.vue";
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

<style lang="css">
.box {
  /*1rem == 14px*/
  list-style-type: none;
  padding: 0.357rem;
  border: 0 white;
  border-radius: 0.571rem;
  box-shadow:0 0 2.142rem 0.142rem rgba(0, 0, 0, 0.15);
  margin: 0 0.357rem 1.071rem;
}
.last {
  margin-bottom: 0;
}
</style>
