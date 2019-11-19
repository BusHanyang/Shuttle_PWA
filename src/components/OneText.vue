<template>
  <div>
    <bigname :val="this.where"></bigname>
    <target :val="this.where" :buslist="this.buslst"></target>
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
      buslst: "hello"
    };
  },
  created() {
    fetch("https://shuttle.jaram.net/semester/week/" + this.where)
      .then(res => res.json())
      .then(res => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let buslst = [];
        for (let i = 0; i < res.length; i++) {
          let temp = res[i].time.split(":");
          if (
            parseInt(temp[0]) * 60 +
              parseInt(temp[1]) -
              parseInt(hour) * 60 -
              parseInt(min) >
            0
          ) {
            let tmpstr = year + "/" + month + "/" + day + "/" + temp[0] + ":" + temp[1] + ":" + sec
            let tmpdate = Math.floor(Date.parse(tmpstr) / 1000)
            buslst.push(tmpdate);
          }
          if (buslst.length > 4) {
            break;
          }
        }
        this.buslst = buslst;
        // console.log(hour + ":" + min + ":" + sec)
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style scoped></style>
