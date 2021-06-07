<template>
  <div>
    <div>
      <h2 class="widget-title">Trending News</h2>
    </div>

    <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting" class="slick-arrow-top">
      <div v-for="card in cards" :key="card.id">
        <Card
          :title="card.title"
          :src="card.src"
          :category="card.category"
          :date="card.date"
          :single_post="card.single_post"
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

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    Card,
  },
  data() {
    return {
      cards: [
        {
          id: 101,
          title: "Pre-fab homes",
          src: "./NewsPrk_files/trendbig1.cef620c6.jpg",
          category: "TECHNOLOGY",
          date: "March 26, 2021",
          single_post:
            "Japan’s virus success has puzzled the world. Is its luck running out?",
          description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
        },
        {
          id: 102,
          title: "Pre-fab homes",
          src: "./NewsPrk_files/trendbig2.17b0470b.jpg",
          category: "ENTERTAINMENT",
          date: "March 26, 2021",
          single_post: "There may be no consoles in the future ea exec says",
          description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
        },
        {
          id: 103,
          title: "Pre-fab homes",
          src: "./NewsPrk_files/trendbig2.17b0470b.jpg",
          category: "SPORTS",
          date: "March 26, 2021",
          single_post:
            "Japan’s virus success has puzzled the world. Is its luck running out?",
          description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
        },
        {
          id: 104,
          title: "Pre-fab homes",
          src: "./NewsPrk_files/trendbig1.cef620c6.jpg",
          category: "TECHNOLOGY",
          date: "March 26, 2021",
          single_post: "There may be no consoles in the future ea exec says",
          description:
            "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…",
        },
      ],

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

