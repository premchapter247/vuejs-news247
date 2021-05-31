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
      to='/category/add'
    >Add post
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
          <tr>
            <td>1</td>
            <td>Dakota Rice</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Minverva Hooper</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

  </v-container>
</template>
<script>
  export default {
    name: 'Category',
  }
</script>
