<template>
<div class="wrap">
        <div><img src="../assets/product123.png"></div>
        <div class="description">
            <h3>{{product.name}}</h3>
            <p>{{product.price.toFixed(2)}}</p>
            <button @click="addProduct">Add</button>
        </div>
</div>
</template>

<script>
    export default{
        props:['product'],
        methods:{

            addProduct(){
                this.$store.commit('addProductToCard', this.product.id)
            },
        },

    }
</script>

<style scoped>

    img{
        width:240px;
        height:240px;
        margin:0 30px;
        display:block;
    }

    .wrap{
        color:black;
        display:flex;
        flex-direction:column;
        font-family: 'Lato', sans-serif;
    }

    .wrap div+div{
        width:240px;
        margin:0 30px;
        height:80px;
        background-color:whitesmoke;
    }

    .description{
        position:relative
    }

    h3{
        position:absolute;
        top:10px;
        left:10px;
    }

    p{
        position:absolute;
        top:30px;
        left:10px;
    }

    button{
        position:absolute;
        bottom:10px;
        right:10px;
        padding:5px 30px;
        background-color:whitesmoke;
        border:1.4px solid black;
    }
</style>

