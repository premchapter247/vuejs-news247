<template>
  <div>
    <div class="post_img gradient1">
      <a href="#"><v-img :src="'http://127.0.0.1:8000/image/' + src" alt="thumb" /></a>
    </div>
    <div class="single_post_text">
      <div class="meta5">
        <a href="#">{{ category }}</a><a href="#">{{ date }}</a>
      </div>
      <h4>
        <a href="#">{{ title }}</a>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "src", "category", "date", "short_desc", "description"],
};
</script>

<style scoped>
.post_img {
  position: relative;
  z-index: 2;
}

.gradient1:after {
  position: absolute;
  content: "";
  height: 60%;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), transparent);
  left: 0;
  bottom: 0;
}

.single_post_text {
  position: absolute;
  bottom: 0;
  z-index: 9;
  padding: 40px 20px 20px 20px;
}

.single_post_text .meta5 {
  margin-bottom: 0;
}

.single_post_text .meta5 a {
  font-size: 12px;
  position: relative;
  z-index: 2;
  line-height: 17px;
  margin-bottom: 5px;
  color: #fff;
}

a {
  text-decoration: none;
}

a:hover {
  transition: all 0.4s;
  color: #1091ff !important;
}

.single_post_text .meta5 a:last-child:before {
  position: absolute;
  content: "/";
  height: 20px;
  width: 10px;
  left: -18px;
  top: 50%;
  margin-top: -10px;
  line-height: 20px;
  color: #fff;
  text-align: center;
}

.single_post_text .meta5 a:last-child {
  margin-left: 20px;
  font-weight: 400;
}

.single_post_text .meta5 a {
  font-size: 12px;
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  line-height: 17px;
  margin-bottom: 5px;
  color: #fff;
}

.single_post_text h4 {
  font-size: 16px;
  line-height: 21px;
}
.single_post_text a,
.single_post_text h4 {
  color: #17222b;
  font-weight: 500;
}

.single_post_text a {
  color: #fff;
  font-size: 16px;
  line-height: 21px;
  font-weight: 700;
}
</style>
