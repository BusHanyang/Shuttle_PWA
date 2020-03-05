<template>
  <footer>
    <span>
      <span>
        <a href="mailto:admin@hybus.app" class="contact">
          <span>&nbsp;✉️문의하기&nbsp;</span>
        </a>
      </span>

      <span>
        <a v-on:click="modal('usage')" class="usage">
          <span>&nbsp;📋사용법 &nbsp;</span>
        </a>
      </span>

      <span>
        <a v-on:click="modal('coffee')" class="coffee">
          <span>&nbsp;☕개발자에게 커피사기&nbsp;</span>
        </a>
      </span>

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

export default {
  methods: {
    modal(which) {
      EventBus.$emit("modal", which);
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
  margin: 0 0.357rem 1.071rem;
}
.contact {
  text-decoration: none;
  color: #2c3e50;
  white-space:nowrap;
}
.coffee {
  text-decoration: none;
  color: #2c3e50;
  white-space:nowrap;
}
.usage {
  text-decoration: none;
  color: #2c3e50;
  white-space:nowrap;
}
</style>
