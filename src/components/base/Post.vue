<template>
  <v-container fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <div
          class="
            v-card--material
            pa-5
            elevation-10
            v-card v-sheet
            v-card--material--has-heading
          "
        >
          <div class="d-flex grow flex-wrap">
            <div
              class="
                text-start
                v-card--material__heading
                mb-n6
                v-sheet
                elevation-6
                success
                pa-7
              "
              style="width: 100%"
            >
              <div class="text-h3 white--text font-weight-light">
                Edit Profile
              </div>
            </div>
          </div>

          <ValidationObserver ref="observer" v-slot="{ invalid }">
            <v-form class="px-3 py-1" @submit.prevent="onSubmit">
              <ValidationProvider
                v-slot="{ errors }"
                name="Title"
                rules="required"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.title"
                    label="Title"
                    :error-messages="errors"
                    required
                  />
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="category"
                rules="required"
              >
                <v-col cols="12">
                  <v-select
                    v-model="formData.select"
                    :items="formData.items"
                    :error-messages="errors"
                    label="Category"
                    dense
                    required
                  />
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Short discription"
                rules="required"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="formData.short_description"
                    label="Short Description"
                    :error-messages="errors"
                  />
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Discription"
                rules="required"
              >
                <v-col cols="12">
                  <v-textarea
                    v-model="formData.description"
                    :error-messages="errors"
                    label="Description"
                  />
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Image"
                rules="required"
              >
                <v-col cols="12">
                  <v-file-input
                    v-model="formData.image"
                    accept="image/*"
                    :error-messages="errors"
                    label="Image"
                    truncate-length="50"
                  />
                </v-col>
              </ValidationProvider>

              <v-col cols="12">
                <v-btn
                  class="success mr-5"
                  @click="onSubmit"
                  :disabled="invalid"
                >
                  Click Me!
                </v-btn>
                <v-btn class="success" @click="clear"> clear </v-btn>
              </v-col>
            </v-form>
          </ValidationObserver>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("min", {
  ...min,
  message: "{_field_} may not be greater than {length} characters",
});

export default {
  name: "Post",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      formData: {
        title: "",
        items: ["item-1", "item-2", "item-3", "item-4"],
        short_description: "",
        description: "",
        select: null,
        image: null,
      },
    };
  },
  methods: {
    onSubmit() {
      alert("Form has been submitted.");
      console.log(this.formData);
      this.$refs.observer.validate();
      this.clear();
    },
    clear() {
      this.formData.title = "";
      this.formData.short_description = "";
      this.formData.description = "";
      this.formData.select = null;
      this.formData.image = null;
      this.$refs.observer.reset();
    },
  },
};
</script>
