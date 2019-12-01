<template>
  <div v-on:click="toggle = !toggle" class="time_box">
    <bigname :val="this.where" class="bigName"></bigname>
    <div class="default-target">
      <target :buslist="this.buslst" :a="0" class="target"></target>
    </div>

    <div class="more" :class="{'invisible':toggle}">
      <target :buslist="this.buslst" :a="1" class="target"></target>
      <target :buslist="this.buslst" :a="2" class="target"></target>
      <target :buslist="this.buslst" :a="3" class="target"></target>
      <target :buslist="this.buslst" :a="4" class="target"></target>
    </div>
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
      dest: this.where,
      today: new Date(),
      buslst: "[{time:"+new Date().getTime()+", type:}]",
      toggle: true
    };
  },
  created() {
    this.parseBusList(this.where, this.today);
    if (this.buslst.length === 0) {
      this.today.setDate(this.today.getDate() + 1);
      this.today.setHours(0,0,0,0);
      this.parseBusList(this.where, this.today);
    }
  },
  methods: {
    parseBusList(stn, tdate) {
      fetch("https://shuttle.jaram.net/semester/week/" + stn)
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
              let tmpstr = year + "-" + month + "-" + day + "T" + temp[0] + ":" + temp[1] + ":" + sec
              let tmpdate = Math.floor(Date.parse(tmpstr) / 1000)
              tempstr = {time: tmpdate, type: res[i].type}
              buslst.push(tempstr);
            }
          }
          this.buslst = buslst;
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>

<style scoped>
  .time_box {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .default {
    display: inline;
  }
  .default-target {
    float: flex;
  }
  .more {
    text-align: right;
    float: right;
  }
  .bigName {
    width: 30%;
    text-align: left;
    word-break: keep-all;
  }
  .invisible {
  display: none;
}

</style>
