<template>
  <div>
    <section class="section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="8">
            <div>
              <VueSlickCarousel
                class="mb-3"
                :arrows="false"
                :fade="true"
                ref="c1"
                :asNavFor="$refs.c2"
                :focusOnSelect="true"
              >
                <div
                  v-for="item in list"
                  :key="item.id"
                  class="latest-news-carousel post-dark-overlay"
                >
                  <img
                    :src="'http://127.0.0.1:8000/image/' + item.image"
                    class="img-responsive"
                    draggable="false"
                  />
                  <div class="post-content-wrap">
                    <div class="post-card-metas">
                      <a href="" class="post-card-category">{{
                        item.category.title
                      }}</a>
                      <a href="" class="post-card-date"
                        >{{ moment(item.created_at).format("MMMM D, YYYY") }}
                      </a>
                    </div>
                    <a href="" class="post-card-title">
                      {{ item.title }}
                    </a>
                    <p class="post-p">{{ item.shortDesc }}</p>
                  </div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel
                class="slick-thumb-arrow"
                :centerMode="true"
                :arrows="true"
                ref="c2"
                :asNavFor="$refs.c1"
                :slidesToShow="8"
                :focusOnSelect="true"
              >
                <div
                  v-for="item in list"
                  :key="item.id"
                  class="latest-news-thumb"
                >
                  <img
                    :src="'http://127.0.0.1:8000/image/' + item.thumbnail"
                    class="img-responsive"
                    draggable="false"
                  />
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
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import PostListView from "./PostListView";
import axios from "axios";
import moment from "moment";

export default {
  name: "LatestNews",
  components: {
    VueSlickCarousel,
    PostListView,
  },
  data() {
    return {
      list: "undefined",
      topposts: "undefined",
      moment: moment,
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
.latest-news-carousel {
  height: 500px;
  position: relative;
}
.latest-news-thumb {
  height: 60px;
}
</style>
