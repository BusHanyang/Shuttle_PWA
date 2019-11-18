<template>
  <p>
    {{ this.val }}
    {{ this.buslist !== "hello" ? hours + "시" : "" }}
    {{ this.buslist !== "hello" ? minutes + "분" : "" }}
    {{ this.buslist !== "hello" ? seconds + "초" : "" }}
  </p>
</template>

<script>
export default {
  name: "Target",
  created: function() {
    setInterval(() => {
      this.getCurrentTime(this);
    }, 1000);
  },

  methods: {
    getCurrentTime: (x) => {x.now = new Date()}
  },

  props: ["val", "buslist"],

  data() {
    return {
      now: new Date()
    }
  },

  computed: {
    hours() {
      return this.buslist[0].hour - this.now.getHours();
    },
    minutes() {
      return this.buslist[0].min - this.now.getMinutes();
    },
    seconds() {
      return this.buslist[0].min - this.now.getSeconds();
    }
  }
};
</script>

<style scoped></style>
