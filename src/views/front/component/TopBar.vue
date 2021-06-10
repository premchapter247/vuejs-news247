<template>
    <div class="topbar white_bg">
        <v-container>
            <div class="topbar-inner">
                <div class="trand">
                    Tranding
                </div>
                <div class="topbar-slick-wrap">
                    <div>
                        <VueSlickCarousel :arrows="true">
                            <div v-for="trandinglist in trandinglists" :key="trandinglist.id">
                                <a href="" draggable="false">{{ trandinglist.title }}</a>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
                <div class="topbar-right">
                    <div class="top-date-wrap">
                        Thursday, June 03, 2021
                    </div>
                    <div class="socialicons-wrap">
                        <a href="" class="d-block ml-1">
                            <v-icon>
                                mdi-facebook
                            </v-icon>
                        </a>
                        <a href="" class="d-block ml-1">
                            <v-icon>
                                mdi-twitter
                            </v-icon>
                        </a>
                        <a href="" class="d-block ml-1">
                            <v-icon>
                                mdi-instagram
                            </v-icon>
                        </a>
                        <a href="" class="d-block ml-1">
                            <v-icon>
                                mdi-youtube
                            </v-icon>
                        </a>
                        <a href="" class="d-block ml-1">
                            <v-icon>
                                mdi-vimeo
                            </v-icon>
                        </a>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import axios from 'axios'

export default {
    name: 'TopBar',
    components: { VueSlickCarousel },
    data () {
      return {
          trandinglists: 'undefined',
          }
    },
    mounted () {
      axios.get('http://127.0.0.1:8000/api/tranding-list')
        .then((resp) => {
          this.trandinglists = resp.data.data
          console.warn(resp.data.data)
        })
    },
}
</script>

<style>
    .topbar{
        border-bottom: 1px dashed #dcdedf;
    }
    .topbar-inner{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }
    .trand{
        margin-right: 10px;
        padding: 12px 20px;
        background: #f55;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 17px;
        display: inline-block;
    }
    .topbar-slick-wrap{
        width: 100%;
        display: block;
        max-width: 600px;
        margin-right: auto;
        padding: 12px;
        font-size: 14px;
        line-height: 14px;
        padding-right: 60px;
    }
    .topbar-slick-wrap a{
        color: #17222b;
        opacity: .85;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-decoration: none;
    }
    .slick-prev, .slick-next,.slick-prev:before,.slick-next:before{
        height: 23px;
        width: 23px;
        line-height: 23px;
        opacity: 1;
    }
    .slick-prev:hover, .slick-next:hover,.slick-prev:hover:before,.slick-next:hover:before{
        background-color: #1091ff;
        border-color: #1091ff;
        color: #fff;
    }
    .slick-prev:before, .slick-next:before{
        padding: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #c1c4c6;
        color: #c1c4c6;
        background: #fff;
        transition: all .3s;
        font: normal normal normal 24px/1 "Material Design Icons";
        font-size: 16px;
        text-rendering: auto;
        line-height: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-prev:before{
        content: "\F0141";
    }
    .slick-next:before{
        content: "\F0142";
    }
    .topbar-inner .slick-prev {
        right: -25px;
        left: auto;
    }
    .topbar-inner .slick-next {
        right: -55px;
    }
    .topbar-right{
        display: flex;
        flex-wrap: wrap;
    }
    .topbar .top-date-wrap{
        font-size: 14px;
        font-weight: 400;
        opacity: .85;
        color: #17222b;
        text-transform: capitalize;
    }
    .topbar .socialicons-wrap{
        padding-left: 25px;
        margin-left: 10px;
        position: relative;
        z-index: 2;
    }
    .socialicons-wrap{
        display: flex;
    }
    .topbar .socialicons-wrap:before{
        position: absolute;
        content: "";
        height: 15px;
        width: 2px;
        background: #17222b;
        opacity: .3;
        left: 7.5px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>