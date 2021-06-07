<template>
  <div>
    <div>
      <h2 class="widget-title">Feature News</h2>
    </div>

    <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting">
      <div v-for="card in cards" :key="card.id">
        <CardImage
          :src_path="card.src"
          :category="card.category"
          :date="card.date"
          :description="card.description"
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
import CardImage from "./CardImage";

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    CardImage,
  },
  data() {
    return {
      cards: [
        {
          id: 101,
          src: "./NewsPrk_files/feature2.be97b50f.jpg",
          category: "TECHNOLOGY",
          date: "March 26, 2021",
          description: "Best garden wing supplies for the horticu ltural",
        },
        {
          id: 102,
          src: "./NewsPrk_files/feature3.3f5ab883.jpg",
          category: "TRADDING",
          date: "March 26, 2021",
          description: "Copa America: Luis Suarez from devastated US",
        },
        {
          id: 103,
          src: "./NewsPrk_files/feature4.e2e49bfc.jpg",
          category: "SPORTS",
          date: "March 26, 2021",
          description: "Best garden wing supplies for the horticu ltural",
        },
        {
          id: 104,
          src: "./NewsPrk_files/feature3.3f5ab883.jpg",
          category: "ARTICLE",
          date: "March 26, 2021",
          description: "Copa America: Luis Suarez from devastated US",
        },
        {
          id: 105,
          src: "./NewsPrk_files/feature4.e2e49bfc.jpg",
          category: "SPORTS",
          date: "March 26, 2021",
          description: "Best garden wing supplies for the horticu ltural",
        },
      ],

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
              dots: false,
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
