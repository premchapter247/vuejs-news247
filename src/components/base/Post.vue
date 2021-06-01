<template>
  <v-container class="container--fluid">
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
      >
        <v-col class="v-card--material pa-5 v-card v-sheet theme--light v-card--material--has-heading">
          <v-row class="d-flex grow flex-wrap">
            <div
              class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 success pa-7"
              style="width: 100%;"
            >
              <div class="font-weight-light">
                Edit Profile
              </div>
            </div>
          </v-row>

          <v-form class="px-3 py-1">
            <v-text-field label="Title" />
            <v-select
              v-model="category_id"
              :items="items"
              label="Category"
              dense
            />
            <v-text-field
              v-model="short_description"
              label="Short Description"
            />
            <v-textarea
              label="Description"
            />
            <v-file-input label="Image" />
            <v-row
              justify="end"
              class="my-1 mr-1"
            >
              <v-btn
                text
                class="success"
              >
                Click Me!
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default { name: 'Post' }
</script>
