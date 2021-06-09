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
                    :items="catData"
                    item-text='title'
                    item-value="id"
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
               <div v-if="ImageUrl" id="preview">
                  <img :src="ImageUrl" class="remove-img" />
                </div>
              <div v-else>
                <img :src="getImage()" class="post-image">
              </div>
              </ValidationProvider>
              <v-col cols="12">
                <v-btn class="success mr-5" @click="onSubmit">
                  Update!
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
      catData:'',
      select: '',
      short_description: "",
      description: "",
      image: '',
      postId:''
    };
  },
  methods: {
    handleFileObject() {
      this.image = this.$refs.file.files[0];
      this.ImageUrl = URL.createObjectURL(this.image);
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
      // category id is not getting when we change the categroy dropdown in this.select.id, so use below condition
      let categoryId='';
      if(this.select.id || this.select.id!=undefined)
        categoryId = this.select.id;
      else
        categoryId = this.select;

      formData.append('title', this.title);
      formData.append('post_slug', this.title.split(' ').join('_').toLowerCase());
      formData.append('category_id', categoryId);
      formData.append('shortDesc', this.short_description);
      formData.append('description', this.description);
      console.log('Submitted form data',formData);
      axios.post('http://localhost:8000/api/post/update/'+this.postId,
        formData
      )
      .then((resp) => {
        console.log('Response==',resp);
        if(resp.data.status==200 && resp.data.data){
          this.$swal(
            'Good job!',
            resp.data.message,
            'success'
          )
        }
      })
      this.$refs.observer.validate();
    },
    getImage(){
      return "http://127.0.0.1:8000/image/"+this.image;
    }
  },
  created(){
     // Check admin user logged In
    let userLoggedIn = localStorage.getItem('user-token');
    if(!userLoggedIn){
      this.$router.push({ path: "/auth/login" });
    }
    // calling get api for showing the data of post in edit form
    axios.get('http://127.0.0.1:8000/api/post/edit/'+this.$route.params.id)
        .then((resp) => {
          let postData = resp.data.data;
          this.postId = this.$route.params.id;
          this.title = postData.title;
          this.description = postData.description;
          this.short_description = postData.shortDesc;
          this.image = postData.image;
          // for selecting the categroy
          this.select = {title:postData.category.title,id:postData.category_id}
        })
    // Calling Category API for shwoing data
    axios.get('http://127.0.0.1:8000/api/category/index')
        .then((resp) => {
          // Assign category data, because its needs to show in the category dropdown.
          this.catData = resp.data.data.data
        })
  },
};
</script>
<style scoped>
.post-list{
    position: absolute;
    z-index: 1;
    right: 28px;
    top: 11px;

}
.post-image{
 max-width: 198px;
  margin: 20px 0;
}

#preview {
  display: flex;
}

#preview img {
  max-width: 198px;
  margin: 20px 0;
}
</style>