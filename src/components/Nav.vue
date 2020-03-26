<template>
<div class="wrap">
    <div class="logo bigger">
        <p>LOGO</p>
    </div>
    <div class="nav">
        <router-link to="/" class="button bigger">Home</router-link>
        <router-link to="/about" class="button bigger">About</router-link>
        <router-link to="/contact" class="button bigger">Contact</router-link>
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

    @media(max-width:1000px) and (min-height:1000px){
        div.wrap{
            position:fixed;
            z-index:1;
            top:0;
            left:0;
            width:100%;
            height:120px;
            background-color:white;
        }
        div.logo p,
        .button{
            line-height:120px;
        }
        .bigger{
            font-size:50px;
        }
    }

     @media(max-width:615px){
        .fas{
        margin-right:20px;
        }
        .button{
        margin-right:35px;
    }
    }

    @media(min-width:1024px) and (min-height:1366px){
        .wrap{
            font-size:25px;
        }

        .button{
        margin-right:60px;
        }
    }
</style>
