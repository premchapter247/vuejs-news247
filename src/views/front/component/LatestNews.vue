<template>
  <div>
      <VueSlickCarousel
        ref="c1"
        :asNavFor="$refs.c2"
        :focusOnSelect="true">
        <div>
            <div v-for="item in list"
                :key="item.id">
                <h3>{{ item.title }}</h3>
            </div> 
        </div>

        </VueSlickCarousel>
        <VueSlickCarousel
        ref="c2"
        :asNavFor="$refs.c1"
        :slidesToShow="4"
        :focusOnSelect="true">
        <div>
            <div v-for="item in list"
                :key="item.id">
                <h3>{{ item.title }}</h3>
            </div>    
        </div>
        </VueSlickCarousel>
  </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  /* import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' */

  import axios from 'axios'

  export default {
    name: 'LatestNews',
    components: { VueSlickCarousel },
    data () {
      return { list: undefined }
    },
    mounted () {
      axios.get('http://127.0.0.1:8000/api/category/index')
        .then((resp) => {
          this.list = resp.data.data.data
          console.warn(resp.data.data.data)
        })
    },

  }
</script>