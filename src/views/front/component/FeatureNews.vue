<template>

  <!-- <div>
    <h2>Trending News</h2>
  </div> -->

  <VueSlickCarousel :arrows="true" :dots="false" v-bind="setting">
      <div>
        <Card_1></Card_1>
      </div>
      <div>
        <Card_1></Card_1>
      </div>
      <div>
        <Card_1></Card_1>
      </div>
      <div>
        <Card_1></Card_1>
      </div>
  </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  // optional style for arrows & dots
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  import Card_1 from './Card_1'

  export default {
    name: "MyComponent",
    components: {
      VueSlickCarousel,
      Card_1
    },
    data() {
      return {
        setting: {

          "dots": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "initialSlide": 2,
          "responsive": [{
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "infinite": true,
              "dots": false
            }
          }, ]
        }
      };
    },
  };

</script>

<!-- <template>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          :sm="card.sm"
          :md="card.md"
          :lg="card.lg"
        >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="255px"
              width="320px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
        </v-col>
      </v-row>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
      ],
    }),
  }
</script>
-->
