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
}
.slick-arrow-top .slick-prev, .slick-arrow-top .slick-next,.slick-arrow-top .slick-prev:before,.slick-arrow-top .slick-next:before{
    height: 30px;
    width: 30px;
    line-height: 30px;
}
.slick-arrow-top .slick-prev {
    left: auto;
    right: 35px;
    top: -20px;
}
.slick-arrow-top .slick-next {
    right: 0;
    top: -20px;
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
</style>
