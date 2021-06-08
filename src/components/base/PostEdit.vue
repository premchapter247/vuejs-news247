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
            <div class="text-h3 white--text font-weight-light">Edit Post</div>
            </div>
            <!-- adding button with tooltips -->
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="post-list"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  to="/admin/post/list"
                >
                  Post List
                </v-btn>
              </template>
              <span>Navigate to Post List</span>
            </v-tooltip>
          </div>

          <ValidationObserver ref="observer" v-slot="{ invalid }">
            <v-form class="px-3 py-1" enctype="multipart/form-data" id="frm">
              <ValidationProvider
                v-slot="{ errors }"
                name="Title"
                rules="required"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="title"
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
                    v-model="select"
                    :items="items"
                    item-text='catName'
                    item-value="value"
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
                rules="required|min:5"
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="short_description"
                    label="Short Description"
                    :error-messages="errors"
                    :counter="20"
                  />
                </v-col>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="Discription"
                rules="required|min:5"
              >
                <v-col cols="12">
                  <v-textarea
                    v-model="description"
                    :error-messages="errors"
                    label="Description"
                    :counter="50"
                  />
                </v-col>
              </ValidationProvider>

               <ValidationProvider
                v-slot="{ errors }"
                name="Image"
                rules="required"
              >
               <input type="file" class="custom-file-input" :error-messages="errors" id="customFile"
                        ref="file" @change="handleFileObject()">
              </ValidationProvider>
              <!--
                <v-col co ls="12">
                  <v-file-input
                    accept="image/*"
                    type="file"
                    ref="file"
                    :error-messages="errors"
                    label="Image"
                    truncate-length="50"
                    @change="fileSelected($event)"
                  />
                </v-col>
              </ValidationProvider> -->
              <v-col cols="12">
                <v-btn class="success mr-5" @click="onSubmit" :disabled="invalid">
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
import axios from "axios";
import { required, email, min } from "vee-validate/dist/rules";
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

extend("email", {
  ...email,
  message: "Email must be valid",
});
export default {
  name: "PostEdit",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      title: "",
      email: "",
      items: [],
      short_description: "",
      description: "",
      select: [],
      image: '',
    };
  },
  methods: {
    handleFileObject() {
      this.image = this.$refs.file.files[0];
    },
    onSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append('image', this.image);

      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      formData.append('title', this.title);
      formData.append('post_slug', this.title.split(' ').join('_').toLowerCase());
      formData.append('category_id', this.select);
      formData.append('shortDesc', this.short_description);
      formData.append('description', this.description);
      console.log('Submitted form data',formData);
      axios.post('http://localhost:8000/api/post/store',
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
      this.clear();
    },
    clear() {
      this.title = "";
      this.short_description = "";
      this.description = "";
      this.select = null;
      this.email = "";
      this.image = null;
      this.$refs.observer.reset();
    },
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/post/edit/'+this.$route.params.id)
        .then((resp) => {
          this.items = resp.data.data;
          this.title = this.items.title;
          this.category_id = this.items.category_id;
          this.description = this.items.description;
          this.short_description = this.items.shortDesc;
          this.image = this.items.image;
          console.log('Item',this.items);
        })
    // Calling Category API for shwoing data
    axios.get('http://127.0.0.1:8000/api/category/index')
        .then((resp) => {
          this.items = resp.data.data.data
          for(let i=0;i < this.items.length; i++){
            this.items[i]['catName'] = this.items[i].title;
            this.items[i]['value'] = this.items[i].id;
          }
        })

  }
};
</script>
<style scoped>
.post-list{
    position: absolute;
    z-index: 1;
    right: 28px;
    top: 11px;

}
</style>