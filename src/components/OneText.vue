<template>
  <div>
    <bigname :val="this.where"></bigname>
    <target :val="this.where"></target>
  </div>
</template>

<script>
import BigName from "./BigName";
import Target from "./Target";
export default {
  name: "OneText",
  components: {
    bigname: BigName,
    target: Target
  },
  props: ["where"],
  data() {
    return {
      dest: this.where
    };
  }
};
</script>

<style scoped></style>
