<template>
  <v-app>
    <FrontTopBar />
    <MenuDrawer />
    <FrontFooter />

  </v-app>
</template>

<script>
  export default {
    name: 'Index',

    components: {
      FrontTopBar:  () => import('./component/TopBar'),
      FrontFooter: () => import('./component/Footer'),
      MenuDrawer: () => import('./component/Menu'),
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
