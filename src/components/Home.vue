<template>
  <div class="hello">
    <title-component></title-component>
    <box-component
      v-for="item in name"
      :key="item.id"
      :val="item"
    ></box-component>
    <!--    <box-component :val="name[1]"></box-component>-->
    <!--    <box-component :val="name[2]"></box-component>-->
    <!--    <box-component :val="name[3]"></box-component>-->
  </div>
</template>

<script>
import BoxComponent from "./Box.vue";
import TitleComponent from "./Title.vue";

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
        { type: "TAC", parameter: ["left", "right"] },
        { type: "OTC", parameter: ["subway"] },
        { type: "OTC", parameter: ["giksa"] },
        { type: "OTC", parameter: ["yesulin"] },
        { type: "OTC", parameter: ["shuttlecock_o"] },
        { type: "OTC", parameter: ["shuttlecock_i"] }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
