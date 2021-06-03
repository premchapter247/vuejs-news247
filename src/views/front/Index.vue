<template>
  <v-app>
    <FrontTopBar />
    <MenuDrawer />
    <LatestNews />
    <FrontFooter />

  </v-app>
</template>

<script>
  export default {
    name: 'Index',

    components: {      
      FrontTopBar:  () => import('./component/TopBar'),
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
.container{
  padding-bottom: 0;
  padding-top: 0;
}
.white_bg {
    background: #fff!important;
}
</style>
