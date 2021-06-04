<template>
    <section class="nav-wrap white_bg">
        <v-container>
            <nav class="navbar">
                <ul class="nav-ul">
                    <li class="nav-li">
                        <a href="" class="nav-link">Home</a>
                    </li>
                    <li class="nav-li has-sub">
                        <a href="" class="nav-link">Pages 
                            <v-icon small>
                                mdi-chevron-down
                            </v-icon>
                        </a>
                        <ul class="sub-menu-ul" >
                            <li class="sub-menu-li" v-for="category in categorys"
                                :key="category.id">
                                <a href="" class="sub-menu-link">{{category.title}}</a>
                            </li>
                        </ul>
                    </li>                   
                </ul>
            </nav>
        </v-container>
    </section>
</template>
<script>
import axios from 'axios'

export default {
    name: 'MenuBar',
    data () {
      return { 
          categorys: 'undefined',
          }
    },
    mounted () {
      axios.get('http://127.0.0.1:8000/api/categories')
        .then((resp) => {
          this.categorys = resp.data.data
          console.warn(resp.data.data)
        })
    },
}
</script>
<style scoped>
.nav-ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}
.nav-li{
    position: relative;
}
.nav-link{
    text-decoration: none;
    padding: 0 15px;
    display: block;
    line-height: 60px;
    color: #17222b;
    font-size: 16px;
    font-weight: 400;
    text-transform: capitalize;
    position: relative;
    transition: .35s;
}
.sub-menu-ul{
    list-style: none;
    position: absolute;
    text-align: left;
    background: #fff;
    z-index: 100;
    min-width: 230px;
    padding: 7px;
    border-radius: 3px;
    box-shadow: 0 0 15px rgb(0 0 0 / 6%);
    border: none!important;
    display: block;
    opacity: 0;
    transform: scaleY(0);
    transform-origin: top;
    visibility: hidden;
    transition: all .3s;
    transition-timing-function: cubic-bezier(.25,.1,0,.45);
    margin: 0;
}
.nav-li:hover .sub-menu-ul{
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
}
.sub-menu-link{
    display: block;
    font-size: inherit;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    padding: 10px 25px;
    color: #333;
    background: #fff;
    text-transform: capitalize;
}
.sub-menu-link:hover{
    background: #1091ff;
    color: #fff;
}
@media(min-width: 992px){
    .nav-li:before{
        position: absolute;
        content: "";
        height: 0;
        width: 100%;
        background: #f3f3f4;
        left: 0;
        top: 0;
        transition: all .3s;
    }
    .nav-li:after{
        position: absolute;
        content: "";
        height: 0;
        width: 100%;
        background: #1091ff;
        bottom: 0;
        left: 0;
        z-index: 2;
        transition: all .3s;
    }
    .nav-li:hover:before{
        height: 100%;
    }
    .nav-li:hover:after{
        height: 2px;
    }
}
</style>