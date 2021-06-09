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
                      rules="url"
                    >
                      <v-text-field
                        v-model="facebook"
                        :error-messages="errors"
                        label="Facebook"
                        type="url"
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Youtube url"
                      rules="url"
                    >
                      <v-text-field
                        v-model="youtube"
                        :error-messages="errors"
                        label="Youtube"
                        type="url"
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Twitter url"
                    >
                      <v-text-field
                        v-model="twitter"
                        :error-messages="errors"
                        label="Twitter"
                        type="url"
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="Instagram url"
                      rules="url"
                    >
                      <v-text-field
                        v-model="instagram"
                        :error-messages="errors"
                        label="Instagram"
                        type="url"
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="vimeo url"
                    >
                      <v-text-field
                        v-model="vimeo"
                        :error-messages="errors"
                        label="Vimeo"
                        type="url"
                      >
                      </v-text-field>
                    </ValidationProvider>
                  </v-col>

                  <v-col cols="12">
                    <v-btn class="success" @click="onSubmit" :disabled="invalid"
                      >Save!</v-btn
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
import axios from "axios";
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
    items:"",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: "",
    vimeo: "",
  }),
  created(){
     // Check admin user logged In
    let userLoggedIn = localStorage.getItem('user-token');
    if(!userLoggedIn){
      this.$router.push({ path: "/auth/login" });
    }
    // calling get api for showing the seting data
    axios.get('http://127.0.0.1:8000/api/setting/index')
        .then((resp) => {
          this.facebook = resp.data.data[0].facebook_url;
          this.youtube = resp.data.data[0].youtube_url;
          this.twitter = resp.data.data[0].twitter_url;
          this.instagram = resp.data.data[0].instagram_url;
          this.vimeo = resp.data.data[0].vimo_url;
        })
  },
  methods: {
     onSubmit() {
      let formData = new FormData();

      formData.append('facebook_url', this.facebook);
      formData.append('twitter_url', this.twitter);
      formData.append('youtube_url', this.youtube);
      formData.append('instagram_url', this.instagram);
      formData.append('vimo_url', this.vimeo);
      axios.post('http://localhost:8000/api/setting/store',
        formData
      )
      .then((resp) => {
        if(resp.data.status==200 && resp.data.data){
          this.$swal(
            'Good job!',
            resp.data.message,
            'success'
          )
        }
      })
      this.$refs.observer.validate();
    }
  },
};
</script>
