<template>
<div class="wrap">
    <div class="logo">
        <p>LOGO</p>
    </div>
    <div class="nav">
        <router-link to="/" class="button">Home</router-link>
        <router-link to="/about" class="button">About</router-link>
        <router-link to="/contact" class="button">Contact</router-link>
        <i class="fas fa-search button"></i>
    </div>
</div>
</template>

<script>

</script>

<style scoped>

    div.wrap{
        font-family: 'Oswald', sans-serif;
        display:flex;
        justify-content:flex-end;
        height:90px;
        border-bottom: 1px solid grey;
    }

    div.logo{
        flex-basis:30%;
    }

    div.logo p{
        font-family: 'Lato', sans-serif;
        font-size:30px;
        line-height:90px;
        margin-left: 15%;
    }

    div.nav{
        flex-basis:70%;
        display:flex;
        justify-content:flex-end;
    }

    .button{
        line-height:90px;
        text-decoration:none;
        text-align:center;
        color:black;
        margin-right:50px;
    }

    .fas{
        width:90px;
        margin-right:80px;
        background-color:#eee;

    }

</style>
