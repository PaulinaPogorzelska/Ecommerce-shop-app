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
                if(this.windowWidth < 1025 ){
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
        display:flex;
        justify-content:center;
        margin-top:20px;
    }

    .productsInHome{
        flex-basis:70%;
    }

    .summaryMobile{
        position:fixed;
        z-index:2;
        top:100px;
        left:calc(50% - 35vw);
    }

    @media(max-width:1025px){
        .productsInHome{
        flex-basis:100%;
        }
    }

    @media(max-width:600px){
        .summaryMobile{
            top:10%;
        }
        .summaryMobile{
            left:calc(50% - 45vw);
        }
    }

    @media(max-height:600px) and (orientation:landscape){
        .summaryMobile{
            top:1%;
        }
        .summaryMobile{
            left:calc(50% - 40vw);
        }
    }

</style>
