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
                <div v-for="item in list" :key="item.id" class="latest-news-carousel post-dark-overlay">
                  <img
                    :src="'http://127.0.0.1:8000/image/' + item.image" class="img-responsive" draggable="false"
                  >
                  <div class="post-content-wrap">
                    <div class="post-card-metas">
                      <a href="" class="post-card-category">{{ item.category.title}}</a>
                      <a href="" class="post-card-date">{{ moment(item.created_at).format("MMMM D, YYYY") }} </a>
                    </div>
                    <a href="" class="post-card-title">
                      {{ item.title}}
                    </a>
                    <p class="post-p">{{ item.shortDesc}}</p>
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

    <section class="section">
      <div class="container">
        <FeatureNews> </FeatureNews>
      </div>
    </section>

    <section class="section">
        <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <TranddingNews> </TranddingNews>
            <div class="trending-list-view">
              <ul class="post-list-view mt-3">
                <!-- loop -->
                <li  v-for="toppost in topposts" :key="toppost.id">
                  <a href="#" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                         :src="'http://127.0.0.1:8000/image/' + toppost.thumbnail"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">{{ moment(toppost.created_at).format("MMMM D, YYYY") }}</a>
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
import PostListView from "./PostListView";
import TranddingNews from "./TranddingNews";
import FeatureNews from "./FeatureNews";
import TranddingListViewLeft from "./TranddingListViewLeft";
import TranddingListViewRight from "./TranddingListViewRight";
import MostView from "./MostView";
import axios from "axios";
import moment from 'moment';

export default {
  name: "LatestNews",
  components: {
    VueSlickCarousel,
    PostListView,
    TranddingNews,
    FeatureNews,
    TranddingListViewLeft,
    TranddingListViewRight,
    MostView,
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
.latest-news-carousel {
  height: 500px;
  position: relative;
}
.latest-news-thumb {
  height: 60px;
}
.trending-list-view .post-list-view{
  padding: 0;
  margin: 0;
}
.trending-list-view .post-list-view li{
  width: 100%;
  border-color: #dcdedf;
}
@media (min-width:768px){
  .trending-list-view .post-list-view li{
    width: calc(50% - 12px);
    box-sizing: border-box;
  }
  .trending-list-view .post-list-view li:nth-child(odd){
    margin-right: 12px;
  }
  .trending-list-view .post-list-view li:nth-child(even){
    margin-left: 12px;
  }
}
</style>
