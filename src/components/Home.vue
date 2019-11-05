<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Box />
    <router-link :to="{ name: 'Box' }">go To box</router-link>
  </div>
</template>

<script>
import Box from "./Box.vue";

export default {
  name: "HelloWorld",
  components: {
    Box
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
