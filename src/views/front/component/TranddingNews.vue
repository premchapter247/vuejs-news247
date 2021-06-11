<template>
  <div>
    <section class="section">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <div>
              <h2 class="widget-title">Trending News</h2>
            </div>

            <VueSlickCarousel
              :arrows="true"
              :dots="false"
              v-bind="setting"
              class="slick-arrow-top slick-gap-row"
            >
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
            <div class="trending-list-view">
              <ul class="post-list-view mt-3">
                <!-- loop -->
                <li v-for="toppost in topposts" :key="toppost.id">
                  <a href="#" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        :src="
                          'http://127.0.0.1:8000/image/' + toppost.thumbnail
                        "
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">{{
                          moment(toppost.created_at).format("MMMM D, YYYY")
                        }}</a>
                      </div>
                      <h4 class="list-content-title">
                        {{ toppost.title }}
                      </h4>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <MostView> </MostView>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Card from "./Card";
import MostView from "./MostView";


import axios from "axios";
import moment from "moment";

export default {
  name: "MyComponent",
  components: {
    VueSlickCarousel,
    MostView,
    Card,
  },
  data() {
    return {
      cards: "undefined",
      list: "undefined",
      topposts: "undefined",
      moment: moment,

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
    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 6, total: 6 })
      .then((resp) => {
        this.topposts = resp.data.data;
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

.latest-news-thumb {
  height: 60px;
}

.trending-list-view .post-list-view {
  padding: 0;
  margin: 0;
}
.trending-list-view .post-list-view li {
  width: 100%;
  border-color: #dcdedf;
}
@media (min-width: 768px) {
  .trending-list-view .post-list-view li {
    width: calc(50% - 12px);
    box-sizing: border-box;
  }
  .trending-list-view .post-list-view li:nth-child(odd) {
    margin-right: 12px;
  }
  .trending-list-view .post-list-view li:nth-child(even) {
    margin-left: 12px;
  }
}
</style>
