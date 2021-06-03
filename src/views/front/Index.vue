<template>
  <v-app>
    <MenuDrawer />
    <LatestNews />
    <FrontFooter />

  </v-app>
</template>

<script>
  export default {
    name: 'Index',

    components: {      
      MenuDrawer: () => import('./component/Menu'),
      LatestNews: () => import('./component/LatestNews'),
      FrontFooter: () => import('./component/Footer'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
