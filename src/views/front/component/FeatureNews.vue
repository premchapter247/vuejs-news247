<template>

      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
          :sm="card.sm"
          :md="card.md"
          :lg="card.lg"
        >
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="255px"
              width="320px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
        </v-col>
      </v-row>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 3, sm: 12, md: 6, lg: 4 },
      ],
    }),
  }
</script>



