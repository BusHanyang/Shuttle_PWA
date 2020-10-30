<template>
  <div class="hybus" :class="theme == 'dark' ? 'dark' : 'light'">
    <title-component></title-component>
    <toggle-component :theme="theme" @toggle="toggle"></toggle-component>
    <div class="content">
      <template v-if="this.route == 'home'">
        <carousel
          :per-page="1"
          :pagination-enabled="false"
          :autoplay="true"
          :autoplay-timeout="5000"
          :loop="true"
          :touch-drag="true"
        >
          <slide v-for="(item, idx) in img" :key="idx * 2" class="slide">
            <banner-component :imgName="img[idx]"></banner-component>
          </slide>
        </carousel>
        <transition-group
          v-on:after-enter="animateNextBox"
          name="animatedbox"
          tag="div"
          class="boxes"
        >
          <box-component
            v-for="(item, idx) in name"
            :key="idx * 2"
            :val="item"
            v-show="animated >= idx"
          >
          </box-component>
        </transition-group>
      </template>
      <a v-on:click="modal('home')" v-if="this.route != 'home'">
        돌아가기<br />
      </a>
      <template v-if="this.route == 'usage'">
        This is 사용법
      </template>
      <template v-if="this.route == 'coffee'">
        This is coffee
      </template>
      <template v-if="this.route == 'changelog'">
        <change-log></change-log>
      </template>
    </div>
    <footer-component
      :key="1"
      v-show="animated == name.length"
    ></footer-component>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
import BoxComponent from "./Box.vue";
import TitleComponent from "./Title.vue";
import Toggle from "./Toggle.vue";
import Banner from "./Banner.vue";
import PullToRefresh from "pulltorefreshjs";
import Footer from "./Footer.vue";
import ChangeLog from "./ChangeLog.vue";
import {getPtrStyles} from './styles';

export default {
  name: "Home",
  components: {
    "change-log": ChangeLog,
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
    EventBus.$on("modal", which => {
      this.route = which;
    });
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
      img: ["banner2.png"],
      theme: "light",
      animated: 0,
      route: "home"
    };
  },
  mounted() {
    setTimeout(this.animateNextBox, 100);
    if (this.theme === 'dark') {
      const appElement = document.getElementById('app')
      appElement.style.backgroundColor = '#303030'
    }
    const ptr = PullToRefresh.init({
      mainElement: ".hybus",
      instructionsPullToRefresh: "아래로 당겨서 새로고침",
      instructionsReleaseToRefresh: "새로고침을 하려면 화면을 놓아주세요",
      instructionsRefreshing: "시간표를 불러오는 중...",

      getStyles: () => getPtrStyles(this.theme),

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
    },
    modal(which) {
      EventBus.$emit("modal", which);
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
.content {
  min-height: 52em;
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
