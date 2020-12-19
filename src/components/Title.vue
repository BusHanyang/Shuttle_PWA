<template>
  <div>
    <h1>{{(this.isKor == true) ? "버스하냥 ⛄" : "BusHanyang ⛄"}} 
      <!-- <img class="xmas-hy" :src="`static/christmas_hanyang.png`" /> -->
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isKor: (navigator.language.toLowerCase() == "ko" || navigator.language == "ko-kr")
    };
  },
};
</script>

<style lang="css" scoped>

@font-face {
  font-family: 'noto_sans_krbold';
  src: url('../assets/fonts/notosanskr-bold-webfont.woff2') format('woff2'),
  url('../assets/fonts/notosanskr-bold-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

@font-face {
  font-family: 'noto_sans_kr_regular';
  src: url('../assets/fonts/notosanskr-regular-webfont.woff2') format('woff2'),
  url('../assets/fonts/notosanskr-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;

}

h1 {
  position: relative;
  font-size: 32px;
  margin: 0;
  padding-top: 60px;
  padding-bottom: 20px;
  margin-left: 3vw;
  text-align: left;
  font-family: 'noto_sans_kr_regular';
}
/* 
.xmas-hy {
  width: 32px;
  height: inherit;
  object-fit: cover;
} */
</style>
