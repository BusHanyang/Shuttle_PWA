<template>
  <div class="banner">
      <template v-if="this.imgName == 'banner1.png'">
        <a href="https://forms.gle/eHJ3pzvyA6BM9qhD6" target="_blank">	
          <img class="newyear" :src="`/static/banner/${this.imgName}`" />	
        </a>
      </template>
      <template v-if="this.imgName == 'banner.png'">
        <a href="https://blog.naver.com/hyerica4473/222208208766" target="_blank">	
          <img class="newyear" :src="`/static/banner/${this.imgName}`" />	
        </a>
      </template>
  </div>
</template>
<script>
export default {
  name: "BannerComponent",
  props: ["imgName"]
};

</script>
<style lang="css">
.banner {
  /*1rem == 14px*/
  list-style-type: none;
  border: 0 white;
  border-radius: 0.571rem;
  margin: 0 0.357rem 1.071rem;
}
.newyear {
  display: block;
  width: 100%;
  border: 0 rgb(231, 223, 223);
  border-radius: 0.571rem;
}
</style>