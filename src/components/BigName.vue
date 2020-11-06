<template>
  <span id="depart">
    <p>{{ this.target }}</p>
  </span>
</template>

<script>
export default {
  name: "BigName",
  props: ["val"],
  data() {
    return {
      target: this.getStationName(this.val),
    };
  },
  methods: {
    getStationName: (stn) => {
      var station = stn;
      if (navigator.language == "ko" || navigator.language == "ko-KR") {
        switch (station) {
          case "subway":
            return "한대앞";
          case "giksa":
            return "기숙사";
          case "yesulin":
            return "예술인";
          case "shuttlecock_o":
            return "셔틀콕";
          case "shuttlecock_i":
            return "셔틀콕 건너편";
          default:
            return "???";
        }
      } else {
        switch (station) {
          case "subway":
            return "HYU @\r\nAnsan Stn.";
          case "giksa":
            return "Dormitory";
          case "yesulin":
            return "Yesulin Apartment";
          case "shuttlecock_o":
            return "Shuttlecoke";
          case "shuttlecock_i":
            return "Shuttlecoke";
          default:
            return "???";
        }
      }
    },
  },
};
</script>

<style scoped>
#depart {
  margin-top: 0;
  font-size: 1.428rem;
  font-weight: bold;
}
</style>