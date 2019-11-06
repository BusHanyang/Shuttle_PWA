<template>
  <div class="hello">
    <title-component></title-component>
    <box-component></box-component>
  </div>
</template>

<script>
import BoxComponent from "./Box.vue";
import TitleComponent from "./Title.vue";

export default {
  name: "Home",
  components: {
    'box-component': BoxComponent, 
    'title-component': TitleComponent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
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
