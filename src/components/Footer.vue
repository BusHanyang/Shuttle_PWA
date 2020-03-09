<template>
  <footer>
    <span>
      <span>
        <a href="mailto:admin@hybus.app" class="contact">
          <span>&nbsp;✉️문의하기&nbsp;</span>
        </a>
      </span>

      <span>
        <a :href="this.dlink" class="usage">
          <span>&nbsp;📋사용법 &nbsp;</span>
        </a>
      </span>

      <!-- <span>
        <a v-on:click="modal('coffee')" class="coffee">
          <span>&nbsp;☕개발자에게 커피사기&nbsp;</span>
        </a>
      </span> -->

      <span>
        <a v-on:click="modal('changelog')" class="coffee">
          <span>&nbsp;📜변경사항&nbsp;</span>
        </a>
      </span>

      <br />
      <br />
      COPYRIGHT © 2020 BusHanyang. All rights reserved
    </span>
  </footer>
</template>

<script>
import { EventBus } from "../event-bus";
import { isIOS } from 'mobile-device-detect';

export default {
  methods: {
    modal(which) {
      EventBus.$emit("modal", which);
    }
  },
  created() {
    this.dlink = isIOS ? this.ios : this.android
  },
  data() {
    return {
      android: "https://drive.google.com/file/d/1OG2B9gU2qZhsTz8dHdPXMWjhCrjNW0MC/view",
      ios: "https://drive.google.com/file/d/1OcwMw3aUB7q6leZyWP8g6Piaxscl4rgC/view",
      dlink: ""
    }
  }
};
</script>

<style lang="css" scoped>
footer {
  /*1rem == 14px*/
  list-style-type: none;
  padding: 0.357rem;
  border: 0 white;
  border-radius: 0.571rem;
  margin: 0 0.357rem 0;
}
.contact {
  text-decoration: none;
  white-space:nowrap;
  color: inherit;
}
.coffee {
  text-decoration: none;
  white-space:nowrap;
}
.usage {
  text-decoration: none;
  white-space:nowrap;
  color: inherit;
}
/* .usage{
  color: inherit;
} */
</style>
