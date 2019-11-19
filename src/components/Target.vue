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
    getCurrentTime: (x) => {x.now = Math.floor(new Date().getTime() / 1000)}
  },

  props: ["val", "buslist"],

  data() {
    return {
      now: Math.floor(new Date().getTime() / 1000)
    }
  },

  computed: {
    hours() {
      return Math.floor((this.buslist[0] - this.now) / 60 / 60) % 24;
    },
    minutes() {
      return Math.floor((this.buslist[0] - this.now) / 60) % 60;
    },
    seconds() {
      return (this.buslist[0] - this.now) % 60;
    }
  }
};
</script>

<style scoped></style>
