<template>

  <div class="mx-2" min-width="250">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" class="white--text align-end" min-height="350">
      <v-badge left color='red' class="tranding">
      </v-badge>
      <v-card-title>
        Top western road trips
      </v-card-title>
    </v-img>

    <v-card-subtitle>
      <a href="#">TECHNOLOGY</a>
      <a href="#" class="child muted">March 26, 2020</a>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div class="my-3"> <a href="#" class="single_post_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eius, suscipit.</a> </div>
      <p class="post-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis facere doloribus iusto
        expedita ex quos rerum quam aliquam dolorem eaque...</p>
    </v-card-text>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  a:hover {
    color: #007aff;

  }

  .child::before {
    content: "/";
    margin-right: 5px;
    color: #17222b;
    opacity: 0.3;
  }

  .muted {
    color: #00000099;
  }

  .post-p {
    opacity: .85;
    font-size: 15px;
    line-height: 22px;
  }

  .single_post_text {
    line-height: 21px;
  }

  .tranding {
    padding: 20px;
    cursor: pointer;
    position: absolute;
    top: 25px;
    left: 25px;
  }

</style>