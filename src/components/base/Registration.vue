<template>
  <v-container fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" sm="8">
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
                Registration
              </div>
            </div>
          </div>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="onSubmit">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="First name"
                  rules="required|alpha|max:15"
                >
                  <v-text-field
                    v-model="first_name"
                    :error-messages="errors"
                    label="First Name"
                    :counter="15"
                    type="text"
                    required
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Last name"
                  rules="required|alpha|max:20"
                >
                  <v-text-field
                    v-model="last_name"
                    :error-messages="errors"
                    label="Last Name"
                    :counter="20"
                    type="text"
                    required
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    digits: 10,
                    regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{8}$',
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    :counter="10"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                  ></v-text-field>
                </ValidationProvider>

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
                    required
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{
                    regex:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
                    required: true,
                    min: 8,
                  }"
                >
                  <v-text-field
                    v-model="password"
                    :error-messages="errors"
                    label="Password"
                    :counter="20"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword"
                  >
                  </v-text-field>
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Confirm Password"
                  :rules="{
                    regex:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
                    required: true,
                    min: 8,
                  }"
                >
                  <v-text-field
                    v-model="confirm_password"
                    :error-messages="errors"
                    label="Confirm Password"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    :append-icon="
                      showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    @click:append="showConfirmPassword = !showConfirmPassword"
                  >
                  </v-text-field>
                </ValidationProvider>
                <v-divide>
                  <v-card-actions class="d-flex justify-space-between">
                    <v-btn class="success" @click="onSubmit" :disabled="invalid"
                      >Login</v-btn
                    >
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
import {
  required,
  email,
  min,
  max,
  alpha,
  digits,
  regex,
} from "vee-validate/dist/rules";
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

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("alpha", {
  ...alpha,
  message:
    "{_field_} can not containt any number, space or spacial characters.",
});

extend("min", {
  ...min,
  message: "{_field_} must be {length} characters",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message:
    "Password requires 1 of each of the following: uppercase letter, lowercase letter, number, special character.",
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
    showConfirmPassword: false,
    first_name: "",
    last_name: "",
    email: "",
    password: null,
    phoneNumber: null
  }),

  methods: {
    onSubmit() {
      axios
        .post("http://127.0.0.1:8000/api/auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.data.token_type == "bearer") {
            const token = response.data.access_token;
            localStorage.setItem("user-token", token);
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
