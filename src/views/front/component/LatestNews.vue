<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="11" sm="10" md="10" lg="8">
                <div>
                    <VueSlickCarousel
                    :arrows="true"
                    ref="c1"
                    :asNavFor="$refs.c2"
                    :focusOnSelect="true">

                        <div v-for="item in list"
                            :key="item.id">
                            <v-img
                            :src="'http://127.0.0.1:8000/image/'+ item.image"
                            ></v-img>
                        </div>


                    </VueSlickCarousel>
                    <VueSlickCarousel
                    :arrows="true"
                    ref="c2"
                    :asNavFor="$refs.c1"
                    :slidesToShow="4"
                    :focusOnSelect="true">

                        <div v-for="item in list"
                            :key="item.id">
                            <v-img
                            max-height="150"
                            max-width="250"
                            :src="'http://127.0.0.1:8000/image/'+ item.image"
                            ></v-img>
                        </div>

                    </VueSlickCarousel>
                </div>
            </v-col>
            <v-col cols="11" sm="10" md="10" lg="4">
                <PostListView> </PostListView>
            </v-col>

        </v-row>
            <v-row cols="11" sm="10" md="10" lg="12">
                <FeatureNews> </FeatureNews>
            </v-row>
    </v-container>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import PostListView from './PostListView'
  import FeatureNews from './FeatureNews'

  import axios from 'axios'

  export default {
    name: 'LatestNews',
    components: { VueSlickCarousel, PostListView, FeatureNews },
    data () {
      return {
          list: 'undefined',
          }
    },
    mounted () {
      axios.post('http://127.0.0.1:8000/api/post/list', { start: 0, total: 10 })
        .then((resp) => {
          this.list = resp.data.data
          console.warn(resp.data.data)
        })
    },

  }
</script>