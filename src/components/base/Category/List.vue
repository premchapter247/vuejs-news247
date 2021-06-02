<template>
  <v-container
    id="post-category"
    fluid
    tag="section"
  >
    <base-material-card
      icon="mdi-clipboard-text"
      title="list"
      class="px-5 py-3"
    >
      <v-btn
        color="secondary"
        elevation="2"
        to="/admin/category/add"
      >
        Add post
      </v-btn>
      <v-simple-table>
        <thead>
          <tr>
            <th class="primary--text">
              ID
            </th>
            <th class="primary--text">
              Name
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in list"
            :key="item.id"
          >
            <td> {{ item.id }} </td>
            <td> {{ item.title }} </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
    <div class="py-3" />
  </v-container>
</template>
<script>

  import axios from 'axios'

  export default {
    name: 'Category',
    data () {
      return { list: undefined }
    },
    mounted () {
      axios.get('http://127.0.0.1:8000/api/category/index')
        .then((resp) => {
          this.list = resp.data.data.data
          console.warn(resp.data.data.data)
        })
    },
  }
</script>
