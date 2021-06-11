<template>
  <div>
    <div>
      <h2 class="widget-title" style="color: black">Most View</h2>
    </div>



    <VueSlickCarousel
      :arrows="true"
      :dots="false"
      v-bind="setting"
      class="slick-arrow-top"
    >
      <div>
        <ul class="post-list-view">
          <!-- loop -->
          <li v-for="item in list" :key="item.id">
            <a href="#" class="post-list-view-link">
              <div class="list-img-wrap">
                <img
                  :src="'http://127.0.0.1:8000/image/' + item.image" 
                />
              </div>
              <div class="list-content-wrap">
                <div class="list-metas">
                  <a href="" class="list-meta-category">{{ item.category.title}}</a>
                  <a href="" class="list-meta-date">{{ moment(item.created_at).format("MMMM D, YYYY") }}</a>
                </div>
                <h4 class="list-content-title">
                  {{ item.title}}
                </h4>
              </div>
              <h2>{{item.id}}</h2>
            </a>
          </li>        
        </ul>
      </div>

      <div>
        <ul class="post-list-view">
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
              <h2>7</h2>
            </a>
          </li>
        </ul>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import axios from "axios";
import moment from 'moment';

export default {
  name: "MostView",
  components: {
    VueSlickCarousel,
  },
  mounted() {
    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 0, total: 6 })
      .then((resp) => {
        this.list = resp.data.data;
        console.log(resp.data.data);
      });
  },
  data() {
    return {
      list: "undefined",
      moment: moment,
      setting: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
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

.post-list-view {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
}
.post-list-view li {
  padding-bottom: 10px;
  padding-top: 15px;
  border-bottom: 1px dashed #3a434b;
}
.post-list-view-link {
  width: 100%;
  display: flex;
  color: #17222b;
  align-items: center;
}

.list-img-wrap {
  height: 77px;
  width: 100px;
  position: relative;
  margin-right: 10px;
  overflow: hidden;
  flex-shrink: 0;
}
.list-img-wrap img {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  object-fit: cover;
  overflow: hidden;
}
.post-list-view-link:hover .list-img-wrap img {
  transform: scale(1.1);
}
.list-content-title {
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
}
.list-metas {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.list-metas a {
  display: block;
  font-size: 12px;
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  line-height: 17px;
  font-weight: 400;
  margin-bottom: 5px;
}
.list-metas .list-meta-category {
  text-transform: uppercase;
  color: #1091ff;
}
.list-metas .list-meta-date {
  margin-left: 20px;
  color: #17222b;
  opacity: 0.75;
}
.list-metas .list-meta-date:before {
  position: absolute;
  content: "/";
  height: 20px;
  width: 10px;
  left: -16px;
  top: 45%;
  transform: translateY(-50%);
  line-height: 20px;
  color: #17222b;
  opacity: 0.3;
  text-align: center;
}

h2{
    line-height: 50px;
    color: #ced0d2;
    font-size: 36px;
    font-weight: 500;
}
.list-content-wrap {
  width: 100%;
}
</style>
