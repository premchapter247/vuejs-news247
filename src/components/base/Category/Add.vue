<template>
  <v-container
    id="add-post-category"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="text-h3 font-weight-light">Add Category</div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <ValidationProvider
                    v-slot="{ errors }"
                    name="Category"
                    rules="required"
                  >
                    <v-text-field
                      v-model="title"
                      class="purple-input"
                      label="Category Name"
                    />
                    <span class="red--text">{{ errors[0] }}</span>
                  </ValidationProvider>
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    class="mr-0"
                    @click="submit"
                  >
                    Save
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";

export default {
  name: "Add",
  data() {
    return {
      title: null,
    };
  },
  methods: {
    submit() {
      console.log(this.title);
      const token = localStorage.getItem('user-token') || ''
      axios
        .post(
          "http://127.0.0.1:8000/api/category/store",
          { title: this.title },
          { headers: { Authorization: "Bearer" + token } }
        )
        .then((response) => {
          // console.log(response.data)
          if (response.data.status === 200) {
            this.$router.push({ path: "/admin/category/list" });
          }
        });
    },
  },
};
</script>
