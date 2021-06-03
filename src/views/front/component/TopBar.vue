<template>
    <div class="topbar white_bg">
        <v-container>
            <div class="topbar-inner">
                <div class="trand">
                    Tranding
                </div>
            </div>
            <div>
                <VueSlickCarousel :arrows="true" :dots="true">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                </VueSlickCarousel>
            </div>
        </v-container>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'TopBar',
    components: { VueSlickCarousel },
}
</script>

<style>
    .topbar{
        border-bottom: 1px dashed #dcdedf;
    }
    .topbar-inner{
        display: flex;
    }
    .trand{
        margin-right: 10px;
        padding: 12px 20px;
        background: #f55;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 17px;
    }
</style>