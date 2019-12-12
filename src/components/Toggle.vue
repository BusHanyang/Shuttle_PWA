<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input type="checkbox"
      :checked="(this.theme == 'dark') ? 'checked' : false"
      @change="$emit('toggle')">
      <span>{{ mode }} Mode</span>
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
.toggle-wrapper {
  display: flex;
  transition: background 0.3s ease-in-out;
}
</style>