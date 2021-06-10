<template>  
    <section class="logo-wrap white_bg">
        <v-container>
            <div class="d-flex justify-content-between flex-wrap">
                <a href="" class="logo mr-3 mb-2 mb-sm-0">
                    <v-img
                    src="https://jkcs.000webhostapp.com/news247.png"
                    ></v-img>
                </a>
                <a href="" class="weather-wrap d-flex ml-sm-auto">
                    <v-icon large class="mr-3">
                        mdi-white-balance-sunny
                    </v-icon>
                    <div class="">
                        <h3 class="temp_count">13</h3>
                        <p class="mb-0">Indore, Madhya Pradesh</p>
                    </div>
                </a>
            </div>
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
    padding: 15px 0 10px;
}
.logo-wrap .temp_count{
    position: relative;
    z-index: 2;
    color: #17222b;
    display: inline-block;
    font-size: 1.75rem;
}
.logo-wrap .temp_count:after {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAABHNCSVQICAgIfAhkiAAAATlJREFUOE9jZKAQMFKon2G4GCCmqN3EyMhQy8DAsPXnv785Hx7ceEBs2DCKK2k5///PGPfq/tV4MSWtaIb/DJKv7l/rgRnAI6EiysXJngu1gIHh//9JP///64dZwgjW9I+B59WDazPFZTV1GFgYU1/ev5YPMkBcXI+bgfvvyv//Gc79+v933p8ff75ycbLFMzAyRHz79svzy4s7ryEGMDAwvLp3bSm6ASA5RgbGyJf3rvoge0lcSXvLf4b/y0F68LtAUWvi//8M10CuQzFAQcucgYmB5+W9a3vxhoG4kvb//wz/Y0A24QpUcELCFQtEG4DLdMoNICYM8CUYvLHw7/9mUODizUygdPCf+89Bhv8MK759/7UQZBlGOiCUZNFT4v//DM2gRAVPiYQMICQ/XMoDQv7EJz/wYQAAfnq+GZVGxxAAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    right: -35px;
}
.weather-wrap p{
    color: #9199a0;
}
</style>