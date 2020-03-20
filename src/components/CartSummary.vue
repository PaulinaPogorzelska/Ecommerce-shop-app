<template>
<div class="wrap">
        <h2><i class="far fa-address-book"></i> Contact</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident facilis rerum harum consequatur eveniet qui labore debitis at similique.</p>
        <h2><i class="fas fa-cart-plus"></i> Cart</h2>
        <div>
            <p>{{list}}</p>
        </div>
</div>
</template>

<script>
        export default{
            props:['ecomerce','winning','mentoring','road','tailor','prepare'],
            computed:{
                list(){
<<<<<<< HEAD
                    return this.$store.state.cardProducts
=======
                    return this.$store.state.CardProducts
>>>>>>> 268ae8fe766d6b312a10fc7f4e8b048a4dfa836a
                }
            }
        }
</script>

<style scoped>
    .wrap{
        display:flex;
        flex-direction:column;
        color:white;
        font-family: 'Lato', sans-serif;
        width:250px;
        height:380px;
        background-color:#164fac;
        padding:20px;
    }

    .wrap div{
        margin:auto;
        width:220px;
        height:180px;
        border:2px dashed white;
        margin-top:10px;
    }

    p{
        margin:10px;
    }
</style>


