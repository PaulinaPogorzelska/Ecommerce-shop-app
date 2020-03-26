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
        height:calc(100vh - 111px);
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
        align-items: space-between;
    }
        @media(max-width:1000px) and (min-height:1000px){
        .products{
            min-height:105vh;
            margin-top:121px;
        }
        }
</style>
