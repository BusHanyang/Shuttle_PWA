<template>
  <table>
    <tr>
      <td class="bus_stop" rowspan="2">
        <bigname :val="this.left"></bigname>
      </td>
      <td class="bus_image">
        <bus :val="this.left" :buslist="this.buslstLeft"></bus>
      </td>
      <td class="bus_stop" rowspan="2">
        <bigname :val="this.right"></bigname>
      </td>
    </tr>
    <tr>
      <td class="bus_image">
        <bus :val="this.right" :buslist="this.buslstRight"></bus>
      </td>
    </tr>
  </table>
</template>

<script>
import BigName from "./BigName";
import Bus from "./Bus";
export default {
  name: "TwoAnimation",
  components: {
    bigname: BigName,
    Bus: Bus
  },
  props: ["left", "right"],
  data() {
    return {
      today: new Date(),
      buslstLeft: "hello",
      buslstRight: "hello"
    };
  },
  created() {
    this.parseBusList(this.left, this.today, "left");
    if (this.buslstLeft.length == 0) {
      this.today.setDate(this.today.getDate() + 1);
      this.today.setHours(0, 0, 0, 0);
      this.parseBusList(this.left, this.today, "left");
    }
    this.parseBusList(this.right, this.today, "right");
    if (this.buslstRight.length == 0) {
      this.today.setDate(this.today.getDate() + 1);
      this.today.setHours(0, 0, 0, 0);
      this.parseBusList(this.right, this.today, "right");
    }
  },
  methods: {
    parseBusList(stn, tdate, direc) {
      fetch("https://dev.jaram.net/" + stn)
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
          for (let i = 0; i < res.length; i++) {
            let temp = res[i].time.split(":");
            if (
              parseInt(temp[0]) * 60 +
                parseInt(temp[1]) -
                parseInt(hour) * 60 -
                parseInt(min) >
              0
            ) {
              let tmpstr =
                year +
                "-" +
                month +
                "-" +
                day +
                "T" +
                temp[0] +
                ":" +
                temp[1] +
                ":" +
                sec;
              let tmpdate = Math.floor(Date.parse(tmpstr) / 1000);
              buslst.push(tmpdate);
            }
            // if (buslst.length > 4) {
            //   break;
            // }
          }
          if (direc == "left") {
            this.buslstLeft = buslst;
          } else {
            this.buslstRight = buslst;
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style scoped>
.bus_image {
  width: 50%;
}

.bus_stop {
  text-align: center;
}
</style>
