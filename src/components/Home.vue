<template>
<div class="wrapHome">
    <div class="summary" v-if="!isMobile">
        <CartSummary></CartSummary>
    </div>
    <div class="summaryMobile" v-else >
        <CartSummary v-if="viewCard"></CartSummary>
    </div>
        <AppProducts class="productsInHome"></AppProducts>
</div>
</template>

<script>
    
    import CartSummary from './CartSummary.vue'
    import AppProducts from './AppProducts.vue'
    export default{
        data() {
            return {
                windowWidth: window.innerWidth
            }
        },
        mounted() {
            window.onresize = () => {
                this.windowWidth = window.innerWidth
            }
        },
        computed:{
            isMobile(){
                if(this.windowWidth < 1000 ){
                    return true
                }
                else{
                    return false
                }
            },
            viewCard(){
                return this.$store.state.ifShowCardMobile
            }
        },
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

    .productsInHome{
        flex-basis:70%;
    }

    .summaryMobile{
        position:fixed;
        z-index:2;
        top:280px;
        left:calc(50% - 400px);
    }

        @media(max-width:1000px){
        .productsInHome{
        flex-basis:100%;
        }
        }

        @media(max-width:1000px) and (max-height:1000px){
        .summaryMobile{
        top:20%;
        left:calc(50% - 200px);
    }
        }
</style>
