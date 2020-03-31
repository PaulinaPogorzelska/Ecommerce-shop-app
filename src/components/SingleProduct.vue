<template>
<div class="wrapItem">
        <div class="imageItem"><img src="../assets/product123.png"></div>
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

    .imageItem img{
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

    @media(max-width:1000px) and (min-height:1000px){
        .wrapItem{
            font-size:30px;
            width:50%;
            height:calc(50vw + 150px);
            margin:0;
        }
        .imageItem {
            width:80%;
            height:calc(0.8 * 50vw);
            margin:0 auto;
        }
        .imageItem img{
            width:100%;
            height:100%;
        }
        .descriptionItem{
            width:80%;
            height:150px;
            margin:0 auto;
        }

        .descriptionItem p{
            top:60px;
        }

        .descriptionItem button{
            font-size:30px;
            padding:15px 60px;
        }
        }

    @media(min-width:1024px) and (min-height:1366px){
        .wrapItem{
            font-size:22px;
            width:50%;
            margin:0;
        }

        .imageItem img{
            width:290px;
            height:290px;
            margin:0 auto;
        }

        .descriptionItem{
            width:290px;
            height:110px;
            margin:0 auto;
        }

        .descriptionItem button{
            font-size:20px;
            padding:10px 50px;
        }

        .descriptionItem p{
        top:40px;
        }
    }
</style>

