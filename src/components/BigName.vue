<template>
  <span id = "depart">
  <p>{{ this.target }}</p>
  </span>
</template>

<script>
export default {
  name: "BigName",
  props: ["val"],
  data() {
    return {
      target: this.getStationName(this.val)
    };
  },
  methods: {
    getStationName: (stn) => {
      var station = stn;
      switch (station) {
        case "subway":
          return "한대앞역"
        case "giksa":
          return "기숙사"
        case "yesulin":
          return "예술인APT"
        case "shuttlecock_o":
          return "셔틀콕"
        case "shuttlecock_i":
          return "셔틀콕-기숙사행"
        default:
          return "???"
      }
    }
  }
};
</script>

<style scoped>
#depart{
  font-size: 24px;
  font-weight: bold;
}
</style>