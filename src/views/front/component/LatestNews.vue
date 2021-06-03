<template>
  <div>
      <VueSlickCarousel
  ref="c1"
  :asNavFor="$refs.c2"
  :focusOnSelect="true">
  <div><h3>1</h3></div>
  /*...*/
</VueSlickCarousel>
    <VueSlickCarousel
  ref="c2"
  :asNavFor="$refs.c1"
  :slidesToShow="4"
  :focusOnSelect="true">
  <div><h3>1</h3></div>
  /*...*/
</VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'LatestNews',
    components: { VueSlickCarousel },
  }
</script>