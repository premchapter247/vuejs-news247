
<template>
  <div>
    <v-row class="mb-3">
      <v-col cols="12">
        <v-row>
          <v-col>
            <div
              class="btn"
              :class="active_1 ? 'blue' : 'white'"
              @click="first"
            >
              RELATED
            </div>
          </v-col>
          <v-col>
            <div
              class="btn"
              :class="active_2 ? 'blue' : 'white'"
              @click="second"
            >
              RELATED
            </div>
          </v-col>
          <v-col>
            <div
              class="btn"
              :class="active_3 ? 'blue' : 'white'"
              @click="third"
            >
              POPULAR
            </div>
          </v-col>
        </v-row>

        <div>
          <div v-if="active_1">
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
            </ul>
          </div>

          <div v-if="active_2">
            <ul class="post-list-view">
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

          <div v-if="active_3">
            <ul class="post-list-view">
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
            </ul>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "PostListView",
  data() {
    return {
      active_1: true,
      active_2: false,
      active_3: false,
    };
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

<style scoped>
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

/* Tab Styling */

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


