<template>
<div>
    <AboutSlide v-for="(slide,key) in getAboutInfo" :key="key" :slide="slide"></AboutSlide>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import AboutSlide from './AboutSlide.vue'
     export default{
        computed:{
        ...mapGetters(['getAboutInfo'])
        },
         components:{
             AboutSlide
         }
     }
</script>

<style>
</style>
