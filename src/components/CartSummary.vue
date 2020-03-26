<template>
<div class="wrap">
        <h2><i class="far fa-address-book"></i> Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident facilis rerum harum consequatur eveniet qui.</p>
        <h2><i class="fas fa-cart-plus"></i> Cart</h2>
        <div class="card">
            <div v-for="(product,key) in getCardProducts" :key="key">
                <p>{{product.counter}}x {{product.name}} {{(product.price*product.counter).toFixed(2)}}</p>
            </div>
        </div>
        <p>Total price: {{summaryPrice}}</p>
        <button @click="hideCard">Continue shopping</button>
</div>
</template>

<script>
        import {mapGetters} from 'vuex';
        export default {
            computed:{
                ...mapGetters(['getCardProducts']),
                summaryPrice(){
                    return this.getCardProducts.reduce((a,b)=> a + b.counter*b.price, 0).toFixed(2)
                }
            },
            methods:{
            hideCard(){
                this.$store.commit('hideCardMobile')
                }
            }
        }
</script>

<style scoped>
    .wrap{
        color:white;
        font-family: 'Lato', sans-serif;
        display:flex;
        flex-direction:column;
        height:460px;
        width:300px;
        background-color:#164fac;
        padding:20px;
    }

    .wrap .card{
        margin:auto;
        width:260px;
        height:230px;
        border:2px dashed white;
        margin-top:10px;
    }

    p{
        margin:10px;
    }

    button{
        display:none;
    }

    @media(max-width:1000px){
        button{
        color:white;
        font-size:35px;
        display:block;
        position:absolute;
        bottom:30px;
        right:50px;
        padding:20px 40px;
        background-color:#053dac;;
        border:3px solid darkgrey;
        }
    }

    @media(max-width:1000px) and (min-height:1000px){
        .wrap{
            width:800px;
            height:1000px;
            padding:40px;
        }
        .wrap .card{
            height:500px;
            width:700px;
            margin-top:30px;
        }

        h2{
            font-size:50px;
        }
        p{
            font-size:35px;
            margin:25px;
        }
    }
    @media(max-width:1000px) and (max-height:1000px){
        .wrap{
            width:400px;
            height:500px;
            padding:30px;
        }
        .wrap .card{
            height:300px;
            width:300px;
            margin-top:20px;
        }

        button{
            font-size:17px;
            padding:10px 20px;
            border:1px solid darkgrey;
            bottom:20px;
            right:20px;
        }
    }

     @media(min-width:1024px) and (min-height:1366px){
            .wrap{
            width:380px;
            height:600px;
            padding:15px;
            }

            .wrap .card{
            height:300px;
            width:340px;
            margin-top:20px;
            }

            .card p {
            margin:15px 10px;
            }

            h2{
            font-size:25px;
            }

            p{
            font-size:21px;
            margin:20px 10px;
            }
     }
</style>


