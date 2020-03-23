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
</div>
</template>

<script>
        import {mapGetters} from 'vuex';
        export default {
            computed:{
                ...mapGetters(['getCardProducts']),
                summaryPrice(){
                    return this.getCardProducts.reduce((a,b)=> a + b.price, 0)
                }
            },
        }
</script>

<style scoped>
    .wrap{
        color:white;
        font-family: 'Lato', sans-serif;
        display:flex;
        flex-direction:column;
        height:440px;
        width:280px;
        background-color:#164fac;
        padding:20px;
    }

    .wrap .card{
        margin:auto;
        min-width:250px;
        max-width:270px;
        min-height:230px;
        border:2px dashed white;
        margin-top:10px;
    }

    p{
        margin:10px;
    }
</style>


