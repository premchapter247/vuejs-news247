<template>
  <v-container fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <div
          class="
            v-card--material
            pa-5
            my-md-6
            elevation-10
            v-card v-sheet
            v-card--material--has-heading
          "
        >
          <div class="d-flex grow flex-wrap">
            <div
              class="v-card--material__heading mb-n5 elevation-6 success pa-5"
              style="width: 100%"
            >
              <div class="text-h3 text-center white--text font-weight-light">
                Social Media
              </div>
            </div>
          </div>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="onSubmit">
                <v-row>
                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Facebook url"
                      rules="required|url"
                    >
                      <v-text-field
                        v-model="facebook"
                        :error-messages="errors"
                        label="Facebook"
                        type="url"
                        required
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Youtube url"
                      rules="required|url"
                    >
                      <v-text-field
                        v-model="youtube"
                        :error-messages="errors"
                        label="Youtube"
                        type="url"
                        required
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Twitter url"
                      rules="required|url"
                    >
                      <v-text-field
                        v-model="twitter"
                        :error-messages="errors"
                        label="Twitter"
                        type="url"
                        required
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Instagram url"
                      rules="required|url"
                    >
                      <v-text-field
                        v-model="instagram"
                        :error-messages="errors"
                        label="Instagram"
                        type="url"
                        required
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Lindin url"
                      rules="required|url"
                    >
                      <v-text-field
                        v-model="linkdin"
                        :error-messages="errors"
                        label="Linkdin"
                        type="url"
                        required
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <v-btn class="success" @click="onSubmit" :disabled="invalid"
                      >Click Me!</v-btn
                    >
                    <v-btn class="success" @click="clear"
                      >Clear</v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required } from "vee-validate/dist/rules";
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

var errorUrl = "requires correct url.";
extend("url", {
  message: (field) => `The ${field} ${errorUrl}`,
  validate: (value) => {
    var mustContainTheseUrl =
      /^(https:\/\/www\.|http:\/\/www\.|www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    var containsRequiredUrl = mustContainTheseUrl.test(value);
    if (containsRequiredUrl) {
        return true;
    } else {
        errorUrl = "is incorrect.";
      return false;
    }
  },
});

export default {
    components: {
        ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
    linkdin: "",
  }),

  methods: {
    onSubmit() {
      console.log(
        this.facebook +
          " " +
          this.youtube +
          " " +
          this.twitter +
          " " +
          this.instagram +
          " " +
          this.linkdin
      );
      this.clear();
      this.$refs.observer.validate();
    },
    clear() {
      this.facebook = "";
      this.youtube = "";
      this.twitter = "";
      this.instagram = "";
      this.linkdin = "";
      this.$refs.observer.reset();
    },
  },
};
</script>
