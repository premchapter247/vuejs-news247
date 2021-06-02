<template>
  <v-app>
    <MenuDrawer />
      <FrontFooter />

  </v-app>
</template>

<script>
  export default {
    name: 'Index',

    components: {
      FrontFooter: () => import('./component/Footer'),
      MenuDrawer: () => import('./components/Menu'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
