<template>
  <v-app>
    <header>
      <FrontTopBar />
      <LogoTopWrap />
      <MenuDrawer />
    </header>
    <LatestNews />
    <FeatureNews />
    <TranddingNews />
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
      FeatureNews: () => import('./component/FeatureNews'),
      TranddingNews: () => import('./component/TranddingNews'),
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
.post-list-view-link{
  color: #17222b !important;
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
  width: 30px;
  border: none;
  box-shadow: 0 10px 40px rgb(0 0 0 / 15%);
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
.post-dark-overlay:after {
    position: absolute;
    content: "";
    height: 60%;
    width: 100%;
    background: linear-gradient(
0deg
,rgba(0,0,0,.7),transparent);
    left: 0;
    bottom: 0;
}
.post-content-wrap{
    position: absolute;
    bottom: 0;
    z-index: 9;
    width: 100%;
}
.latest-news-carousel .post-content-wrap{
  padding: 40px;
}
.post-card-metas{
  display: flex;
  flex-wrap: wrap;
}
.post-card-metas a{
  font-size: 14px;
  text-transform: capitalize;
  position: relative;
  z-index: 2;
  color: #fff;
  display: inline-block;
}
.latest-news-carousel .post-card-metas a{
  line-height: 36px;
  font-weight: 700;
}
.post-card-metas .post-card-category{
  text-transform: uppercase;
}
.post-card-date{
  margin-left: 20px;
  position: relative;
}
.post-card-date:before{
    position: absolute;
    content: "/";
    height: 20px;
    width: 10px;
    left: -16px;
    top: 50%;
    margin-top: -10px;
    line-height: 20px;
    text-align: center;
}
.post-card-title{
  color: #fff !important;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  display: block;
  margin-bottom: 10px;
}
.post-p{
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  color: #fff;
}
.slick-gap-row{
  margin: 0 -12px;
}
.slick-gap-col{
  padding: 0 12px;
}
.slick-gap-row.slick-arrow-top .slick-next{
  right: 12px;
}
.slick-gap-row.slick-arrow-top .slick-prev{
  right: 50px;
}
</style>
