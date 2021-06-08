<template>
  <div>
    <div>
      <div class="tending-img-wrap">
        <img :src="'http://127.0.0.1:8000/image/' + src" class="white--text align-end img-responsive" draggable="false">
        <v-badge left color="red" class="tranding"> </v-badge>
      </div>

      <div class="py-5">
        <div class="pb-10px">
          <a href="#" class="post_type1 f-500">{{ category }}</a>
          <a href="#" class="post_type2"> {{ date }}</a>
        </div>

        <div class="pb-0">
          <div class="mb-2">
            <a href="#" class="post_type3"> {{ title }} </a>
          </div>
          <p class="post-p">
            {{ short_desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "src", "category", "date", "short_desc", "description"],
};
</script>

<style scoped>
.pb-10px{
  padding-bottom: 10px;
}

.v-application a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #007aff;
}

.post_type1 {
  color: #007aff !important;
}

.f-500 {
  font-weight: 500;
  margin-bottom: 5px;
  color: #007aff;
}

.post_type2::before {
  content: "/";
  font-weight: 600;
  margin: 5px;
  color: #17222b;
  opacity: 0.3;
}

.post_type2 {
  font-weight: 500 !important;
  color: #00000099 !important;
}

.post_type3 {
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
}

.post-p {
  opacity: 0.85;
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 0px;
}

a,
a:hover {
  transition: all 0.4s;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: ease;
  transition-delay: 0s;
  color: #1091ff;
}

.tranding {
  padding: 20px;
  cursor: pointer;
  position: absolute;
  top: 25px;
  left: 25px;
}
.tending-img-wrap{
  position: relative;
  height: 252px;
}
</style>
