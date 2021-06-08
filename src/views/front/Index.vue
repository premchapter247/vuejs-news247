<template>
  <v-app>    
    <header>
      <FrontTopBar />
      <LogoTopWrap />
      <MenuDrawer />
    </header>
    <LatestNews />
    <FrontFooter />
  </v-app>
</template>
<script>
  export default {
    name: 'Index',

    components: {      
      FrontTopBar:  () => import('./component/TopBar'),
      LogoTopWrap:  () => import('./component/LogoWrap'),
      MenuDrawer: () => import('./component/Menu'),
      LatestNews: () => import('./component/LatestNews'),
      FrontFooter: () => import('./component/Footer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
<style>
@import '/assets/css/fonts.min.css';
a{
  text-decoration: none;
}
.theme--light.v-application{
  background-color: #fcfcfc;
  color: #17222b;
}
.container{
  padding-bottom: 0;
  padding-top: 0;
  max-width: 1140px;
}
.white_bg {
    background: #fff!important;
}
.row{
  margin-top: 0;
  margin-bottom: 0;
}
.col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
  padding-top: 0;
  padding-bottom: 0;
}
.section{
  padding: 40px 0;
}
.slick-arrow-top .slick-prev, .slick-arrow-top .slick-next,.slick-arrow-top .slick-prev:before,.slick-arrow-top .slick-next:before{
    height: 30px;
    width: 30px;
    line-height: 30px;
}
.slick-arrow-top .slick-prev {
    left: auto;
    right: 35px;
    top: -35px;
}
.slick-arrow-top .slick-next {
    right: 0;
    top: -35px;
}
.slick-thumb-arrow .slick-prev, .slick-thumb-arrow .slick-next,.slick-thumb-arrow .slick-prev:before,.slick-thumb-arrow .slick-next:before{
  height: calc(100% - 2px);
  line-height: 1;
  top: 46%;
  width: 25px;
}
.slick-thumb-arrow .slick-prev{
  left: 0;
  z-index: 9;
}
.slick-thumb-arrow .slick-next{
  right: 0;
}
.widget-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 500;
  line-height: 1.2;
}
.img-responsive{
  width: 100%;
  height: 100%;
  transition: all .3s;
  object-fit: cover;
  overflow: hidden;
}
</style>
