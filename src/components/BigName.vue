<template>
  <span>{{ this.target }}</span>
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

<style scoped></style>