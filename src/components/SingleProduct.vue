<template>
<div class="wrap">
        <div class="image"><img src="../assets/product123.png"></div>
        <div class="description">
            <h3>{{product.name}}</h3>
            <p>{{product.price.toFixed(2)}}</p>
            <button @click="addProduct">Add</button>
        </div>
</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default{
        props:['product'],
        computed:{
        ...mapGetters(['getCardActive','getshowCardMobile'])
        },
        methods:{
            addProduct(){
                this.$store.commit('addProductToCard', this.product.id)
                this.$store.commit('showCardMobile')
            }
        },

    }
</script>

<style scoped>

    .wrap{
        color:black;
        display:flex;
        flex-direction:column;
        font-family: 'Lato', sans-serif;
    }

    .image{
        margin:0 30px;
    }

    img{
        width:240px;
        height:240px;
        display:block;
    }

    .wrap div+div{
        width:240px;
        height:80px;
        margin:0 30px;
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

    @media(max-width:1000px) and (min-height:1000px){
        .wrap{
            font-size:30px;
            width:50%;
            height:calc(50vw + 150px)
        }
        .image{
            width:80%;
            height:calc(0.8 * 50vw);
            margin:0 auto;
        }
        img{
            width:100%;
            height:100%;
        }
        .wrap div+div{
            width:80%;
            height:150px;
            margin:0 auto;
        }

        p{
        top:60px;
        }

        button{
            font-size:30px;
            padding:15px 60px;
        }
        }

    @media(min-width:1024px) and (min-height:1366px){
        .wrap{
            font-size:22px;
            width:50%;
        }
        img{
            width:290px;
            height:290px;
        }

        .wrap div+div{
            width:290px;
            height:110px;
            margin:0 auto;
        }

        button{
            font-size:20px;
            padding:10px 50px;
        }

        p{
        top:40px;
        }
    }
</style>

