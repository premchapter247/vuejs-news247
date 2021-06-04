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
/* @import '../assets/css/style.css'; */
.theme--light.v-application{
  background-color: #fcfcfc;
  color: #17222b;
}
.container{
  padding-bottom: 0;
  padding-top: 0;
}
.white_bg {
    background: #fff!important;
}
.row{
  margin-top: 0;
}
</style>
