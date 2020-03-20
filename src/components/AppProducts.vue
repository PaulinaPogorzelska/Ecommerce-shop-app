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
<<<<<<< HEAD
                return this.$store.getters.getProducts
=======
                return this.$store.getters.GetProducts
>>>>>>> 268ae8fe766d6b312a10fc7f4e8b048a4dfa836a
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
