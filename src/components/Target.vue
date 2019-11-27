<template>
  <div>
    <span class="bustype">{{ this.bustype !== "N/A" ? type : "" }}</span>
    <span>
      <span class="time_num">{{ this.buslist !== "hello" ? (hours > 0 ? hours+":": "") : "" }}</span>
      <span class="time_num">{{ this.buslist !== "hello" ? minutes + ":" : "" }}</span>
      <span class="time_num">{{ this.buslist !== "hello" ? (seconds < 10 ? "0"+seconds : seconds) : "" }}</span>
    </span>
    <span class="estimate_test"> 후 도착예정</span>
  </div>
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
    getCurrentTime: x => {
      x.now = Math.floor(new Date().getTime() / 1000);
    }
  },

  props: ["bustype", "buslist"],

  data() {
    return {
      now: Math.floor(new Date().getTime() / 1000),
      i: 0
    };
  },

  computed: {
    type() {
      let j = this.buslist.length;
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j - 1) {
          this.i++;
        }
      } else {
        switch (this.bustype[this.i]) {
          case "DH":
            return "한대앞행";
          case "DY":
            return "예술인행";
          case "C":
            return "순환노선";
          default:
            return "셔틀콕행";
        }
      }
    },
    hours() {
      let j = this.buslist.length;
      if (j === 0) {
        return 0;
      }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j - 1) {
          this.i++;
          return 0;
        } else {
          return 0;
        }
      } else {
        return Math.floor((this.buslist[this.i] - this.now) / 60 / 60) % 24;
      }
    },
    minutes() {
      let j = this.buslist.length;
      if (j === 0) {
        return 0;
      }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j - 1) {
          this.i++;
          return 0;
        } else {
          return 0;
        }
      } else {
        return Math.floor((this.buslist[this.i] - this.now) / 60) % 60;
      }
    },
    seconds() {
      let j = this.buslist.length;
      if (j === 0) {
        return 0;
      }
      if (Math.floor(this.buslist[this.i] - this.now) <= 0) {
        if (this.i < j - 1) {
          this.i++;
          return 0;
        } else {
          return 0;
        }
      } else {
        return (this.buslist[this.i] - this.now) % 60;
      }
    }
  }
};
</script>

<style scoped>
.bustype {
  color: #007afa;
  font-size: 11px;
}

.time {
  font-size: 14px;
}

  .time_num {
    font-size: 20px;
    font-weight: bold;
    vertical-align: text-bottom;
  }

  .estimate_test {
    font-size: 14px;
  }
</style>
