<template>
  <div
    v-on:click="toggle = !toggle"
    :class="{ align_top: !toggle && this.buslst[1].type != 'F'}"
    class="time_box"
  >
    <bigname :val="this.where" class="bigName"></bigname>
    <div class="timetable">
      <span class="default-target">
        <target :where="this.where" :buslist="this.buslst" :a="0" class="target"></target>
      </span>
      <span v-if="done" class="more" :class="{'invisible':toggle}">
        <target :where="this.where" :buslist="this.buslst" :a="1" class="target"></target>
        <target :where="this.where" :buslist="this.buslst" :a="2" class="target"></target>
        <target :where="this.where" :buslist="this.buslst" :a="3" class="target"></target>
        <target :where="this.where" :buslist="this.buslst" :a="4" class="target"></target>
      </span>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
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
      dest: this.where,
      today: new Date(),
      buslst: "[{time:" + new Date().getTime() + ", type:}]",
      toggle: true,
      done: true
    };
  },
  created() {
    console.log("imdone" + this.where);
    EventBus.$on("imdone" + this.where, wru => {
      console.log("hello" + this.where);
      console.log(wru);
      this.buslst.shift();
      let tempstr = { time: 0, type: "F" };
      this.buslst.push(tempstr);
    });
    this.parseBusList(this.where, this.today);
  },

  beforeUpdate() {
    if (this.buslst[1].type === "F") {
      this.done = false;
    }
  },
  methods: {
    parseBusList(stn, tdate) {
      fetch("https://hyu-shuttlebus.appspot.com/" + stn)
        .then(res => res.json())
        .then(res => {
          let date = tdate;
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          let day = date.getDate();
          let hour = date.getHours();
          let min = date.getMinutes();
          let sec = date.getSeconds();

          let buslst = [];
          let tempstr = {};
          for (let i = 0; i < res.length; i++) {
            let temp = res[i].time.split(":");
            if (
              parseInt(temp[0]) * 60 +
                parseInt(temp[1]) -
                parseInt(hour) * 60 -
                parseInt(min) >
              0
            ) {
              let tmpdate = Math.floor(
                new Date(year, month - 1, day, temp[0], temp[1], sec) / 1000
              );
              tempstr = { time: tmpdate, type: res[i].type };
              buslst.push(tempstr);
            }
          }
          if (buslst.length < 5) {
            while (buslst.length < 5) {
              tempstr = { time: 0, type: "F" };
              buslst.push(tempstr);
            }
          }
          this.buslst = buslst;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.time_box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.align_top {
  align-items: flex-start;
}

.timetable {
  flex-direction: column;
}
.more {
  text-align: right;
  /*float: right;*/
}
.bigName {
  margin-left: 1rem;
  width: 30%;
  text-align: left;
  word-break: keep-all;
}
.invisible {
  display: none;
}
</style>
