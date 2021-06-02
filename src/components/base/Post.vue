// eslint-disable-next-line /* eslint-disable */
<template>
  <v-container
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="10"
      >
        <div class="v-card--material pa-5 v-card v-sheet theme--light v-card--material--has-heading">
          <div class="d-flex grow flex-wrap">
            <div
              class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 success pa-7"
              style="width: 100%"
            >
              <div class="text-h3 font-weight-light">
                Edit Profile
              </div>
            </div>
          </div>

          <ValidationObserver v-slot="{ handleSubmit }">
            <v-form
              class="px-3 py-1"
              @submit.prevent="handleSubmit(onSubmit)"
            >
              <ValidationProvider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.email"
                    label="Email"
                  />
                  <span class="red--text"> {{ errors[0] }} </span>
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Title"
                rules="required"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.title"
                    label="Title"
                  />
                  <span class="red--text"> {{ errors[0] }} </span>
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="category"
                rules="required"
              >
                <v-col cols="12">
                  <v-select
                    :items="formData.items"
                    label="Category"
                    v-model="formData.select"
                    dense

                  />
                  <span class="red--text"> {{ errors[0] }} </span>
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Short discription"
                rules="required|min:20|max:100"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.short_description"
                    label="Short Description"
                  />
                  <span class="red--text"> {{ errors[0] }} </span>
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Discription"
                rules="required|min:50"
              >
                <v-col cols="12">
                  <v-textarea
                    v-model="formData.description"
                    label="Description"
                  />
                  <span class="red--text">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Image"
                rules="required|image|mimes:image/*|size:10240"
              >
                <v-col cols="12">
                  <v-file-input
                    v-model="formData.image"
                    label="Image"
                  />
                  <span class="red--text">{{ errors[0] }}</span>
                </v-col>
              </ValidationProvider>

              <v-col cols="12">
                <v-btn
                  class="success"
                  @click="handleSubmit(onSubmit)"
                >
                  Click Me!
                </v-btn>
              </v-col>
            </v-form>
          </ValidationObserver>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      formData: {
        title: '',
        items: ['item-1', 'item-2', 'item-3', 'item-4'],
        select: '',
        short_description: '',
        description: '',
        image: '',
        email: '',
      },
    }
  },
  methods: {
    onSubmit() {
      alert('Form has been submitted.')
      console.log(this.formData)
      this.title = ''
    },
  },
}
</script>
