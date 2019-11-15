<template>
  <p>
    {{ this.val }}
    {{
      this.buslist !== "hello"
        ? this.buslist[0].hour - new Date().getHours() + "시"
        : ""
    }}
    {{
      this.buslist !== "hello"
        ? this.buslist[0].min - new Date().getMinutes() + "분"
        : ""
    }}
      {{
      this.buslist !== "hello"
      ? this.buslist[0].sec - new Date().getSeconds() + "초"
      : ""
      }}
  </p>
</template>

<script>
export default {
  name: "Target",
  props: ["val", "buslist"]
};
</script>

<style scoped></style>
