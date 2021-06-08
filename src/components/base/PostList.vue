<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
    <!-- <base-v-component
      heading="Post List"
      link="components/simple-tables"
    /> -->

    <base-material-card
      icon="mdi-clipboard-text"
      title="Posts"
      class="px-5 py-3"
    >
    <!-- adding button with tooltips -->
     <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary add-post-button"
          dark
          v-bind="attrs"
          v-on="on"
          to="/admin/post/add"
        >
          Add Post
        </v-btn>
      </template>
      <span>Add post</span>
    </v-tooltip>

      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Post Title
            </th>
            <th class="primary--text">
              Category
            </th>
            <th class="primary--text">
              Short Description
            </th>
            <th class="text-right primary--text">
              Description
            </th>
             <th class="text-right primary--text">
              Created
            </th>
          </tr>
        </thead>
        <tbody v-if="items">
            <tr v-for="(item, index) in items" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.title}}</td>
                <td>{{item.category.title}}</td>
                <td>{{item.shortDesc.substring(0,30)+".." }}</td>
                <td class="text-right">{{item.description.substring(0,50)+".." }}</td>
                <td class="text-right">{{format_date(item.created_at)}}</td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="6" style="text-align:center">No Post found.</td>
            </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />
</v-container>
</template>
<script>
import axios from "axios";
import moment from 'moment';
export default {
  name: "PostList",
  data(){
      return{
          items:''
      }
  },
  methods:{
    format_date(value){
        if (value) {
          return moment(String(value)).format('DD-MM-YYYY')
        }
      },
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/post/index')
        .then((resp) => {
          this.items = resp.data.data.data
            console.log( this.items);
        })
  }
}
</script>
<style scoped>
.add-post-button{
    float: right;
    position: absolute;
    top: 14px;
    right: 30px;
}
</style>