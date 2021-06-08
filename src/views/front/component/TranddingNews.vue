<template>
  <div>
    <div>
      <h2 class="widget-title">Trending News</h2>
    </div>

    <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting" class="slick-arrow-top slick-gap-row">
      <div v-for="card in cards" :key="card.id" class="slick-gap-col">
        <Card
          :title="card.title"
          :src="card.image"
          :category="card.category.title"
          :date="card.created_at"
          :short_desc="card.shortDesc"
          :description="card.description"
        ></Card>
      </div>
    </VueSlickCarousel>
    <div class="border_black"></div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Card from "./Card";

import axios from "axios";

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    Card,
  },
  data() {
    return {
      cards: "undefined",

      setting: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
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
        this.cards = resp.data.data;
        console.warn(resp.data.data);
      });
  },
};
</script>

<style scoped>
.widget-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
}

.border_black {
  border-top: 1px dashed black;
}

.space-30 {
  height: 30px;
}
</style>

