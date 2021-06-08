<template>
  <div>
    <div>
      <h2 class="widget-title">Feature News</h2>
    </div>
    <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting" class="slick-arrow-top slick-gap-row">
      <div v-for="list in lists" :key="list.id" class="slick-gap-col">
        <CardImage
          :title="list.title"
          :src="list.image"
          :category="list.category_id"
          :date="list.created_at"
          :short_desc="list.shortDesc"
          :description="list.description"
        ></CardImage>
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

import axios from "axios";

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    CardImage,
  },
  data() {
    return {
      lists: "undefined",

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
  mounted() {
    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 0, total: 10 })
      .then((resp) => {
        this.lists = resp.data.data;
        console.warn(resp.data.data);
      });
  },
};
</script>

<style scoped>

</style>
