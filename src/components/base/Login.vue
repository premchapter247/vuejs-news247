<template>
  <v-container fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6" sm="8">
        <div
          class="
            v-card--material
            pa-5
            my-md-16
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
                Account Login
              </div>
            </div>
          </div>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="onSubmit">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                    type="email"
                    prepend-icon="mdi-account-circle"
                    required
                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{
                    required: true,
                    min: 8,
                    regex:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                </ValidationProvider>
                <v-divide>
                  <v-card-actions class="d-flex justify-space-between">
                    <v-btn class="success" @click="onSubmit" :disabled="invalid"
                      >Login</v-btn
                    >
                    <a href="#" target="_blank" class="display-1"> Forget Password? </a>
                  </v-card-actions>
                </v-divide>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { required, email, min, regex } from "vee-validate/dist/rules";
import axios from "axios";
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
  message: "{_field_} must be {length} characters",
});

extend("regex", {
  ...regex,
  message:
    "Password is invalid",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    showPassword: false,
    email: "",
    password: null,
  }),

  methods: {
    onSubmit() {
      axios
        .post(
          "http://127.0.0.1:8000/api/auth/login",
          { email: this.email ,password:this.password},
        )
        .then((response) => {
          if (response.data.token_type == "bearer") {
          const token = response.data.access_token
          localStorage.setItem('user-token', token)
          this.$router.push({ path: "/admin" });
          }
        });
      this.$refs.observer.validate();
    },
    clear() {
      this.$refs.observer.reset();
    },
  },
};
</script>
