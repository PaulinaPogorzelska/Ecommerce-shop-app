<template>
<div class="wrapNav">
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

    .wrapNav{
        font-family: 'Oswald', sans-serif;
        display:flex;
        justify-content:flex-end;
        height:90px;
        border-bottom: 1px solid grey;
    }

    .logo{
        flex-basis:30%;
    }

    .logo p{
        font-family: 'Lato', sans-serif;
        font-size:30px;
        line-height:90px;
        margin-left: 15%;
    }

    .nav{
        flex-basis:70%;
        display:flex;
        justify-content:flex-end;
        font-size:18px;
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
    @media(max-width:1024px) and (min-height:1024px){
        .logo p{
        font-size:40px;
        line-height:90px;
        margin-left: 15%;
        }
        .nav{
            font-size:24px;
        }
    }

    @media(max-width:600px){
        .wrapNav{
        position:fixed;
        z-index:1;
        top:0;
        left:0;
        width:100%;
        background-color:white;
        height:60px;
        }

        .logo p{
            font-size:25px;
            line-height:60px;
            margin-left: 15%;
        }

        .button{
            line-height:60px;
            margin-right:30px;
        }

    .fas{
        width:60px;
        margin-right:10px;
    }
}
    @media(max-width:360px){
        .logo p{
            font-size:20px;
        }

        .nav{
            font-size:15px;
        }

        .button{
            margin-right:20px;
        }

        .fas{
        margin-right:5px;
        }
    }
    
</style>
