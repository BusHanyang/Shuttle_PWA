<template>
  <div class="banner">
    <a href="https://www.instagram.com/p/CAY7V9snILe/" target="_blank">
    <img class="newyear" :src="`/static/banner/${this.imgName}`" />
    </a>
  </div>
</template>
<script>
export default {
  name: "BannerComponent",
  props: ["imgName"],
};
// if(props.imgName=="banner3"){
//   url: "https://www.instagram.com/p/CAY7V9snILe/";
// }
// else if(props.imgName=="banner4"){
//   url: "https://www.instagram.com/p/CAcjlfmHoUM/";
// };
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