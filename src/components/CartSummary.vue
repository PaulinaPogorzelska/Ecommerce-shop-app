<template>
<div class="wrapCard">
        <h2><i class="far fa-address-book"></i> Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident facilis rerum harum consequatur eveniet qui.</p>
        <h2><i class="fas fa-cart-plus"></i> Cart</h2>
        <div class="card">
            <div v-for="(product,key) in getCardProducts" :key="key" class="singleProduct">
                <p>{{product.counter}}x {{product.name}} {{(product.price*product.counter).toFixed(2)}}
                <i class="fas fa-plus-square" @click="incrementCounter(product.id)"></i><i class="fas fa-minus-square" @click="decrementCounter(product.id)"></i></p>
            </div>
        </div>
        <p>Total price: {{summaryPrice}}</p>
        <button @click="hideCard" class="continueShopping">Continue shopping</button>
</div>
</template>

<script>
        import {mapGetters} from 'vuex';
        export default {
            computed:{
                ...mapGetters(['getCardProducts']),
                summaryPrice(){
                    return this.getCardProducts.reduce((a,b)=> a + b.counter*b.price, 0).toFixed(2)
                },
            },
            methods:{
            hideCard(){
                this.$store.commit('hideCardMobile')
            },
            decrementCounter(productId){
                this.$store.commit('decrementProductCounter',productId)
            },
            incrementCounter(productId){
                this.$store.commit('incrementProductCounter',productId)
            },
            }
        }
</script>

<style scoped>
    .wrapCard{
        color:white;
        font-family: 'Lato', sans-serif;
        display:flex;
        flex-direction:column;
        height:460px;
        width:320px;
        background-color:#164fac;
        padding:20px;
    }

    .wrapCard .card{
        margin:auto;
        width:285px;
        height:230px;
        border:2px dashed white;
        margin-top:10px;
    }

    .wrapCard p{
        margin:10px 35px 10px 5px;
    }

    .continueShopping{
        display:none;
    }
    .singleProduct{
        position:relative;
    }
    .fa-plus-square,
    .fa-minus-square{
        position:absolute;
        right:0;
        bottom:0;
        font-size:16px;
    }
    .fa-plus-square{
        right:20px;
    }
     @media(max-width:1025px){
        .wrapCard{
            height:600px;
            width:70vw;
            padding:30px;
        }
        .wrapCard .card{
            width:60vw;
            height:350px;
        }
        .wrapCard p{
            font-size:16px;
        }

        .continueShopping{
            color:white;
            font-size:17px;
            display:block;
            position:absolute;
            bottom:30px;
            right:40px;
            padding:10px 7px;
            background-color:#053dac;
            border:1px solid darkgrey;
        }

    }

    @media(max-width:600px){
        .wrapCard{
                height:450px;
                width:90vw;
                padding:15px;
            }
        .wrapCard .card{
                width:76vw;
                height:300px;
            }
        .wrapCard p{
                font-size:14px;
        }

        .continueShopping{
                font-size:13px;
                bottom:10px;
                right:7px;
                padding:10px 7px;
                border:1px solid darkgrey;
        }
    }
    @media(max-height:600px) and (orientation:landscape){
        .wrapCard{
            height:98vh;
            width:80vw;
            padding:15px;
        }
        .wrapCard h2{
            font-size:16px;
        }
        .wrapCard p{
            font-size:13px;
            margin:7px 10px;
        }
        .continueShopping{
            padding:8px 15px;
            bottom:5px;
            right:10px;
        }
    }

</style>


