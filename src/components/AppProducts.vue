<template>
<div class="products">
        <ProductItem v-for="(product,key) in getProducts" :key="key" :product="product"></ProductItem>
</div>
</template>

<script>
    import ProductItem from './SingleProduct.vue'
    import {mapGetters} from 'vuex';

    export default{
        computed:{
            ...mapGetters(['getProducts'])
        },
        components:{
            ProductItem
            }
    }
</script>

<style scoped>
    .products{
        min-height:calc(100vh - 111px);
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
        align-content: space-around;
    }

    @media(max-width:600px){
        .products{
            margin-top:65px;
        }
    }
</style>
