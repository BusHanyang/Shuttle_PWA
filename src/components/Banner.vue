<template>
  <div class="banner">
    <a href="https://www.facebook.com/HanyangUniversityErica/posts/2260149640952351" target="_blank">
      <img class="newyear" :src="`/static/banner/${this.imgName}`"/>
    </a>
  </div>
</template>
<script>
export default {
  name: "BannerComponent",
  props: ["imgName"],
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
.newyear{
  display: block;
  width: 100%;
  border: 0 rgb(231, 223, 223);
  border-radius: 0.571rem;
}
</style>