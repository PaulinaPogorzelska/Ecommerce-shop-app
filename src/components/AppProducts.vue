<template>
<div class="products">
        <ProductItem v-for="product in products" :product="product"></ProductItem>
</div>
</template>

<script>
    import ProductItem from './SingleProduct.vue'

    export default{
        computed:{
            products(){
                return this.$store.getters.getProducts
            }
        },
        components:{
            ProductItem
            }
    }
</script>

<style scoped>
    .products{
        flex-basis:70%;
        height:calc(100vh - 111px);
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
        align-items: space-between;
    }
</style>
