
<template>
  <div>
    <div class="tabs-wrap">
        <div
          class="tab-btns"
          :class="active_1 ? 'blue' : 'white'"
          @click="first"
        >
          RELATED
        </div>
        <div
          class="tab-btns"
          :class="active_2 ? 'blue' : 'white'"
          @click="second"
        >
          RELATED
        </div>
        <div
          class="tab-btns"
          :class="active_3 ? 'blue' : 'white'"
          @click="third"
        >
          POPULAR
        </div>
    </div>

    <div>
      <div v-if="active_1">
        <ul class="post-list-view mt-3">
          <!-- loop -->
          <li v-for="item in lists" :key="item.id" >
            <a href="#" class="post-list-view-link">
              <div class="list-img-wrap">
                <img
                  :src="'http://127.0.0.1:8000/image/' + item.image"
                />
              </div>
              <div class="list-content-wrap">
                <div class="list-metas">
                  <a href="" class="list-meta-category">TECHNOLOGY</a>
                  <a href="" class="list-meta-date">{{ moment(item.created_at).format("MMMM D, YYYY") }} </a>
                </div>
                <h4 class="list-content-title">
                  {{ item.title }}
                </h4>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div v-if="active_2">
        <ul class="post-list-view mt-3">
          <!-- loop -->
          <li v-for="related in relateds" :key="related.id" >
            <a href="" class="post-list-view-link">
              <div class="list-img-wrap">
                <img
                  :src="'http://127.0.0.1:8000/image/' + related.image"
                />
              </div>
              <div class="list-content-wrap">
                <div class="list-metas">
                  <a href="" class="list-meta-category">TECHNOLOGY</a>
                  <a href="" class="list-meta-date"> {{ moment(related.created_at).format("MMMM D, YYYY") }} </a>
                </div>
                <h4 class="list-content-title">
                  {{ related.title }}
                </h4>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div v-if="active_3">
        <ul class="post-list-view mt-3">
          <!-- loop -->
          <li v-for="popular in populars" :key="popular.id" >
            <a href="" class="post-list-view-link">
              <div class="list-img-wrap">
                <img
                  :src="'http://127.0.0.1:8000/image/' + popular.image"
                />
              </div>
              <div class="list-content-wrap">
                <div class="list-metas">
                  <a href="" class="list-meta-category">TECHNOLOGY</a>
                  <a href="" class="list-meta-date"> {{ moment(popular.created_at).format("MMMM D, YYYY") }}</a>
                </div>
                <h4 class="list-content-title">
                  {{ popular.title }}
                </h4>
              </div>
            </a>
          </li>      
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import moment from 'moment';

export default {
  name: "PostListView",
  data() {
    return {
      moment: moment,
      list: "undefined",
      relateds: "undefined",
      populars: "undefined",
      active_1: true,
      active_2: false,
      active_3: false,
    };
  },
  mounted() {
    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 10, total: 5 })
      .then((resp) => {
        this.lists = resp.data.data;
        console.warn(resp.data.data);
      });

    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 5, total: 5 })
      .then((resp) => {
        this.relateds = resp.data.data;
        console.warn(resp.data.data);
      });

    axios
      .post("http://127.0.0.1:8000/api/post/list", { start: 0, total: 5 })
      .then((resp) => {
        this.populars = resp.data.data;
        console.warn(resp.data.data);
      });
  },
  methods: {
    first() {
      this.active_1 = true;
      this.active_2 = false;
      this.active_3 = false;
    },
    second() {
      this.active_1 = false;
      this.active_2 = true;
      this.active_3 = false;
    },
    third() {
      this.active_1 = false;
      this.active_2 = false;
      this.active_3 = true;
    },
  },
};
</script>

<style>
.post-list-view {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
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

/* Tab Styling */
.tabs-wrap{
  display: flex;
  justify-content: space-between;
}
.tabs-wrap .tab-btns{
  width: 100%;
  background: #fff;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  box-shadow: 0 10px 40px rgb(0 0 0 / 15%);
  line-height: 12px;
  padding: 12px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.tabs-wrap .tab-btns.blue{
  color:#fff;
}
.tabs-wrap .tab-btns:not(:last-child){
  margin-right: 8px;
}
.blue {
  padding: 1rem;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  text-align: center;
}
.white {
  padding: 1rem;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  color: black;
  text-align: center;
}
</style>


