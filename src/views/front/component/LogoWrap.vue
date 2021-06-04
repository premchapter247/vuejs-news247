<template>  
    <section class="logo-wrap white_bg">
        <v-container>
            <a href="" class="logo">
                <v-img
                 src="https://jkcs.000webhostapp.com/news247.png"
                ></v-img>
            </a>
        </v-container>
    </section>
</template>
<script>
export default {
    name: 'LogoBar',
}
</script>
<style scoped>
.logo{
    max-width: 250px;
    display: block;
}
.logo-wrap{
    padding: 20px 0;
}
</style>