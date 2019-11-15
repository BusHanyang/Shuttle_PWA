<template>
  <p>{{ this.target }}</p>
</template>

<script>
export default {
  name: "Target",
  props: ["val"],
  data() {
    return {
      target: this.val
    };
  }
};
</script>

<style scoped></style>
