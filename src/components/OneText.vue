<template>
  <div>
    <bigname :val="this.dest"></bigname>
    <target :val="this.dest"></target>
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
  props: ["val"],
  data() {
    return {
      dest: this.val
    };
  }
};
</script>

<style scoped></style>
