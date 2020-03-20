<template>
<div>
    <app-nav></app-nav>
    <router-view></router-view>
</div>
</template>

<script>
    import Nav from './components/Nav.vue'

    export default{
        components:{
            appNav: Nav
        }
    }
</script>

<style>
</style>
