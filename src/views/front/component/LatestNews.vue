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
                <li>
                  <a href="#" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab1.81e238f1.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                      </h4>
                    </div>
                  </a>
                </li>
                <!-- loop -->
                <li>
                  <a href="" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab2.4a35178d.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                      </h4>
                    </div>
                  </a>
                </li>
                <!-- loop -->
                <li>
                  <a href="" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab3.1470a81a.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                      </h4>
                    </div>
                  </a>
                </li>
                <!-- loop -->
                <li>
                  <a href="" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab1.81e238f1.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                      </h4>
                    </div>
                  </a>
                </li>
                <!-- loop -->
                <li>
                  <a href="" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab2.4a35178d.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
                      </h4>
                    </div>
                  </a>
                </li>
                <!-- loop -->
                <li>
                  <a href="" class="post-list-view-link">
                    <div class="list-img-wrap">
                      <img
                        src="https://newsprk.quomodosoft.com/static/media/tab3.1470a81a.jpg"
                      />
                    </div>
                    <div class="list-content-wrap">
                      <div class="list-metas">
                        <a href="" class="list-meta-category">technology</a>
                        <a href="" class="list-meta-date">March 26, 2020</a>
                      </div>
                      <h4 class="list-content-title">
                        Copa America: Luis Suarez from devastated US
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