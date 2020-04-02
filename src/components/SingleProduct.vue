<template>
<div class="wrapItem">
        <img src="../assets/product123.png">
        <div class="descriptionItem">
            <h3>{{product.name}}</h3>
            <p>{{product.price.toFixed(2)}}</p>
            <button @click="addProduct">Add</button>
        </div>
</div>
</template>

<script>
    export default{
        props:['product'],
        methods:{
            addProduct(){
                this.$store.commit('addProductToCard', this.product.id)
                this.$store.commit('showCardMobile')
            }
        },

    }
</script>

<style scoped>

    .wrapItem{
        color:black;
        display:flex;
        flex-direction:column;
        font-family: 'Lato', sans-serif;
        margin:0 30px;
    }

    img{
        width:240px;
        height:240px;
        display:block;
    }

    .descriptionItem{
        position:relative;
        width:240px;
        height:80px;
        background-color:whitesmoke;
    }

    .descriptionItem h3{
        position:absolute;
        top:10px;
        left:10px;
    }

    .descriptionItem p{
        position:absolute;
        top:30px;
        left:10px;
    }

    .descriptionItem button{
        position:absolute;
        bottom:10px;
        right:10px;
        padding:5px 30px;
        background-color:whitesmoke;
        border:1.4px solid black;
    }

    @media(max-width:1024px) and (min-height:1024px){
        img{
            width:43vw;
            height:40vw;
        }

        .descriptionItem{
            width:43vw;
            height:100px;
        }

        .wrapItem{
            margin:0 3vw;
        }

        .descriptionItem h3{
            font-size:26px;
        }

        .descriptionItem p{
            font-size:22px;
            top:40px;
        }

        .descriptionItem button{
            font-size:24px;
            padding:5px 45px;
        }
    }

    @media(max-width:600px){
        img{
        width:43vw;
        height:40vw;
        }

        .descriptionItem{
        width:43vw;
        height:70px;
        }

        .wrapItem{
        margin:0 3vw;
        }

        .descriptionItem h3{
        top:5px;
        left:5px;
        font-size:17px;
        }
        
        .descriptionItem p{
        top:25px;
        font-size:15px;
        }

        .descriptionItem button{
        bottom:10px;
        right:5px;
        padding:5px 23px;
        }
    }

    @media(max-width:360px){
        .descriptionItem h3{
        font-size:13px;
        }
        
        .descriptionItem p{
        font-size:12px;
        }

        .descriptionItem button{
        bottom:15px;
        right:5px;
        padding:3px 20px;
        }
    }
</style>

