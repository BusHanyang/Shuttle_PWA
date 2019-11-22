<template>
  <div>
    <img class="dummy" src="@/assets/LtoR.png" />
    <img :style="MyCss1" class="LtoR" src="@/assets/LtoR.png" />
    <img :style="MyCss2" class="LtoR" src="@/assets/LtoR.png" />
    <img :style="MyCss3" class="LtoR" src="@/assets/LtoR.png" />
    <img :style="MyCss4" class="LtoR" src="@/assets/LtoR.png" />
    <img :style="MyCss5" class="LtoR" src="@/assets/LtoR.png" />
    <hr ref="hori" />
    {{ this.buslist !== "hello" ? hours + "시" : "" }}
    {{ this.buslist !== "hello" ? minutes + "분" : "" }}
    {{ this.buslist !== "hello" ? seconds + "초" : "" }}
  </div>
</template>

<script>
export default {
  name: "Bus",
  created() {
    setInterval(() => {
      this.getCurrentTime(this);
    }, 1000);
  },

  mounted() {
    this.width = this.$refs.hori.clientWidth;
    console.log(this.width);
  },

  methods: {
    getCurrentTime: x => {
      x.now = Math.floor(new Date().getTime() / 1000);
    }
  },

  props: ["val", "buslist"],

  data() {
    return {
      now: Math.floor(new Date().getTime() / 1000),
      i: 0,
      width: 0,
      now: 0
    };
  },

  computed: {
    hours() {
      console.log(this.buslist);
      let j = this.buslist.length;
      if (j == 0) {
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
      if (j == 0) {
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
      if (j == 0) {
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
    },
    MyCss1() {
      return {
        transform: `translatex(calc(${
          this.hours * 3600 + this.minutes * 60 + this.seconds > 600
            ? 0
            : this.width -
              ((this.minutes * 60 + this.seconds) / 600) * this.width
        }px - 10px)) translateY(10px)`
      };
    },
    MyCss2() {
      return {
        transform: `translatex(calc(${
          this.hours * 3600 + this.minutes * 60 + this.seconds > 600
            ? 0
            : this.width -
              ((this.minutes * 60 + this.seconds) / 600) * this.width
        }px - 10px)) translateY(10px)`
      };
    },
    MyCss3() {
      return {
        transform: `translatex(calc(${
          this.hours * 3600 + this.minutes * 60 + this.seconds > 600
            ? 0
            : this.width -
              ((this.minutes * 60 + this.seconds) / 600) * this.width
        }px - 10px)) translateY(10px)`
      };
    },
    MyCss4() {
      return {
        transform: `translatex(calc(${
          this.hours * 3600 + this.minutes * 60 + this.seconds > 600
            ? 0
            : this.width -
              ((this.minutes * 60 + this.seconds) / 600) * this.width
        }px - 10px)) translateY(10px)`
      };
    },
    MyCss5() {
      return {
        transform: `translatex(calc(${
          this.hours * 3600 + this.minutes * 60 + this.seconds > 600
            ? 0
            : this.width -
              ((this.minutes * 60 + this.seconds) / 600) * this.width
        }px - 10px)) translateY(10px)`
      };
    }
  }
};
</script>

<style scoped>
.dummy {
  width: 40px;
  height: 20px;
  transform: translateY(10px);
}
.LtoR {
  position: absolute;
  width: 40px;
  height: 20px;
}
</style>
