<template>
<div class="wrapHome">
    <div class="summary">
        <CartSummary></CartSummary>
    </div>
    <AppProducts></AppProducts>
</div>
</template>

<script>
    
    import CartSummary from './CartSummary.vue'
    import AppProducts from './AppProducts.vue'
    export default{
        components:{
            CartSummary,
            AppProducts
        }
    }
</script>

<style scoped>
    .wrapHome{
        display:flex;
        margin-top:20px;
    }
    .summary{
        flex-basis:30%;
        height:calc(100vh - 111px);
        display:flex;
        justify-content:center;
    }

</style>
