<template>
  <div>
    <section class="section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="8">
            <div>
              <VueSlickCarousel class="mb-3"
                :arrows="false"
                :fade="true"
                ref="c1"
                :asNavFor="$refs.c2"
                :focusOnSelect="true"
              >
                <div v-for="item in list" :key="item.id" class="latest-news-carousel post-dark-overlay">
                  <img
                    :src="'http://127.0.0.1:8000/image/' + item.image" class="img-responsive" draggable="false"
                  >
                  <div class="post-content-wrap">
                    <div class="post-card-metas">
                      <a href="" class="post-card-category">technology</a>
                      <a href="" class="post-card-date">June 8, 2021</a>
                    </div>
                    <a href="" class="post-card-title">
                      Copa America: Luis Suarez from devastated US America
                    </a>
                    <p class="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                  </div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel class="slick-thumb-arrow"
                :centerMode="true"
                :arrows="true"
                ref="c2"
                :asNavFor="$refs.c1"
                :slidesToShow="8"
                :focusOnSelect="true"
              >
                <div v-for="item in list" :key="item.id" class="latest-news-thumb">
                  <img
                    :src="'http://127.0.0.1:8000/image/' + item.thumbnail" class="img-responsive" draggable="false"
                  >
                </div>
              </VueSlickCarousel>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <PostListView> </PostListView>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section">
      <v-container>
        <v-row>
          <v-col cols="12">
            <FeatureNews> </FeatureNews>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="section">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <TranddingNews> </TranddingNews>
            <v-row>
              <v-col cols="12" md="8" lg="6"> <TranddingListViewLeft> </TranddingListViewLeft> </v-col>
              <v-col cols="12" md="8" lg="6"> <TranddingListViewRight> </TranddingListViewRight> </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="4">
            <h1>Section</h1>
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
import PostListView from "./PostListView";
import TranddingNews from "./TranddingNews";
import FeatureNews from "./FeatureNews";
import TranddingListViewLeft from "./TranddingListViewLeft";
import TranddingListViewRight from "./TranddingListViewRight";

import axios from "axios";

export default {
  name: "LatestNews",
  components: {
    VueSlickCarousel,
    PostListView,
    TranddingNews,
    FeatureNews,
    TranddingListViewLeft,
    TranddingListViewRight

  },
  data() {
    return {
      list: "undefined",
    };
  },
  mounted() {
    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 0, total: 10 })
      .then((resp) => {
        this.list = resp.data.data;
        console.warn(resp.data.data);
      });
  },
};
</script>
<style scoped>
.latest-news-carousel{
  height: 500px;
  position: relative;
}
.latest-news-thumb{
  height: 60px;
}
</style>