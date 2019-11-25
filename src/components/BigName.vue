<template>
  <div id = "depart">
  <p>{{ this.target }}</p>
  </div>
</template>

<script>
export default {
  name: "BigName",
  props: ["val"],
  data() {
    return {
      target: this.val
    };
  }
};
</script>

<style scoped>
#depart{
  font-size: 24px;
  font-weight: bold;
}
</style>