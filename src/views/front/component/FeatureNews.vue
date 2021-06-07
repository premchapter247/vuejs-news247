<template>
  <div>
    <div>
      <h2 class="widget-title">Feature News</h2>
    </div>

    <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting">
      <div>
        <CardImage></CardImage>
      </div>
      <div>
        <CardImage></CardImage>
      </div>
      <div>
        <CardImage></CardImage>
      </div>
      <div>
        <CardImage></CardImage>
      </div>
      <div>
        <CardImage></CardImage>
      </div>

    </VueSlickCarousel>
    <div class="border_black"></div>
    <div class="space-30"></div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import CardImage from "./CardImage.vue";

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    CardImage,
  },
  data() {
    return {
      setting: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.widget-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
}
</style>
