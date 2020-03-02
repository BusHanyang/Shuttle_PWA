<template>
  <div class="hybus" :class="(theme == 'dark') ? 'dark' : 'light'">
    <title-component></title-component>
    <toggle-component :theme="theme" @toggle="toggle"></toggle-component>
    <carousel
      :per-page="1"
      :pagination-enabled="false"
      :autoplay="true"
      :autoplay-timeout="5000"
      :loop="true"
      :touch-drag="true"
    >
      <slide class="slide">
        <banner-component :imgName="img[0]"></banner-component>
      </slide>
      <slide class="slide">
        <banner-component :imgName="img[1]"></banner-component>
      </slide>
    </carousel>
    <transition-group v-on:after-enter="animateNextBox" name="animatedbox" tag="div" class="boxes">
      <box-component v-for="(item,idx) in name" :key="idx*2" :val="item" v-show="animated >= idx"></box-component>
      <footer-component :key="name.length*2" v-show="animated >= name.length"></footer-component>
    </transition-group>
  </div>
</template>

<script>
import BoxComponent from "./Box.vue";
import TitleComponent from "./Title.vue";
import Toggle from "./Toggle.vue";
import Banner from "./Banner.vue";
import PullToRefresh from "pulltorefreshjs";
import Footer from "./Footer.vue";

export default {
  name: "Home",
  components: {
    "box-component": BoxComponent,
    "title-component": TitleComponent,
    "toggle-component": Toggle,
    "banner-component": Banner,
    "footer-component": Footer
  },
  created() {
    var current_theme = this.$cookie.get("darkmode_setting");
    if (current_theme == null) {
      this.$cookie.set("darkmode_setting", this.theme, { expires: "1Y" });
    } else {
      this.theme = current_theme;
    }
  },
  data() {
    return {
      name: [
        { type: "OTC", parameter: ["shuttlecock_o"] },
        { type: "OTC", parameter: ["subway"] },
        { type: "OTC", parameter: ["giksa"] },
        { type: "OTC", parameter: ["yesulin"] },
        { type: "OTC", parameter: ["shuttlecock_i"] }
      ],
      animated: 0,
      img: ["banner1.png", "banner2.png"],
      theme: "light"
    };
  },
  mounted() {
    setTimeout(this.animateNextBox, 100);
    const ptr = PullToRefresh.init({
      mainElement: ".hybus",
      instructionsPullToRefresh: "아래로 당겨서 새로고침",
      instructionsReleaseToRefresh: "새로고침을 하려면 화면을 놓아주세요",
      instructionsRefreshing: "시간표를 불러오는 중",
      refresh() {
        this.$router.go();
      }
    });
  },
  methods: {
    animateNextBox: function() {
      this.animated++;
    },
    toggle() {
      if (this.theme === "light") {
        this.theme = "dark";
        this.$cookie.set("darkmode_setting", "dark", { expires: "1Y" });
      } else {
        this.theme = "light";
        this.$cookie.set("darkmode_setting", "light", { expires: "1Y" });
      }
    }
  }
};
</script>

<style scoped>
* {
  transition: background 0.5s ease-in-out;
}
.refresher {
  position: absolute;
  top: 50px;
  right: 30px;
  height: 40px;
  width: 40px;
  text-align: center;
  border-radius: 50%;
  background: #ffffff;
}
.hybus {
  width: 100vw;
  min-height: 100vh;
}
.light {
  background: #ffffff;
}
.dark {
  background: #303030;
  color: #ffffff;
}
.title-span {
  margin: 15px;
}
.animatedbox-enter {
  opacity: 0;
}
.animatedbox-enter-active {
  transition: opacity 0.15s;
}
.boxes {
  padding-bottom: 1.071rem;
}
.carousel {
  padding-top: 5px;
}
.slide {
  box-shadow: 0 0 2.142rem 0.142rem rgba(0, 0, 0, 0.15);
}
</style>
