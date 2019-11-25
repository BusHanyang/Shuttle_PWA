<template>
  <p>
    {{ this.val }}
    {{ this.buslist !== "hello" ? hours + "시" : "" }}
    {{ this.buslist !== "hello" ? minutes + ":" : "" }}
    {{ this.buslist !== "hello" ? seconds + "후 도착예정" : "" }}
  </p>
</template>

<script>
export default {
  name: "Target",
  created() {
    setInterval(() => {
      this.getCurrentTime(this);
    }, 1000);
  },

  methods: {
    getCurrentTime: (x) => {x.now = Math.floor(new Date().getTime() / 1000)}
  },

  props: ["buslist"],

  data() {
    return {
      now: Math.floor(new Date().getTime() / 1000),
      i: 0
    }
  },

  computed: {
    hours() {
      let j = this.buslist.length;
      if (j == 0) { return 0 }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j-1){
          this.i++;
          return 0;
        }
        else { return 0; }
      }
      else {
        return Math.floor((this.buslist[this.i] - this.now) / 60 / 60) % 24;
      }
    },
    minutes() {
      let j = this.buslist.length;
      if (j == 0) { return 0 }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j-1){
          this.i++;
          return 0;
        }
        else { return 0; }
      }
      else {
        return Math.floor((this.buslist[this.i] - this.now) / 60) % 60;
      }
    },
    seconds() {
      let j = this.buslist.length;
      if (j == 0) { return 0 }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j-1){
          this.i++;
          return 0;
        }
        else { return 0; }
      }
      else{
        return (this.buslist[this.i] - this.now) % 60;
      }
    }
  }
};
</script>

<style scoped></style>
