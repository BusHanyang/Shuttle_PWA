<template>
  <div class="toggle-wrapper">
    <span class="mode-text"> {{ mode }} Mode </span>
    <label class="toggle">
      <input type="checkbox"
      :checked="(this.theme == 'dark') ? 'checked' : false"
      @change="$emit('toggle')">
      <span class="toggler round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  data() {
    return {
      theme_str: ""
    }
  },
  computed: {
    mode() {
      switch (this.theme) {
        case "dark":
          this.theme_str = "Dark";
          return this.theme_str;
        case "light":
          this.theme_str = "Light";
          return this.theme_str;
      }
    }
  }
}
</script>
<style scoped>
.mode-text{
  /* padding: 50vw; */
  position: absolute;
  right: 80px;
}
.toggle-wrapper {
  text-align: center;
  align-items: center;
  padding-bottom: 30px;
  height: 15px;
  display: flex;
  transition: background 0.3s ease-in-out;
}
.toggle {
  width: 50px;
  height: 26px;
  margin-right: 20px;
  position: absolute;
  right: 0;
}
.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}
.toggler {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #dcdce0;
  -webkit-transition: .4s;
  transition: .4s;
}
.toggler:before {
  position: absolute;
  content: "";
  top: 2px;
  height: 22px;
  width: 22px; 
  left: 2px;
  bottom: 2px;
  background: #ffffff;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .toggler {
  background: #ff9500;
}
input:focus + toggler {
  box-shadow: 0 0 2px #ff9500;
}
input:checked + .toggler:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
}
.toggler.round {
  border-radius: 30px;
  border-color: #aeaeb2;
}
.toggler.round:before {
  border-radius: 50%;
}
</style>