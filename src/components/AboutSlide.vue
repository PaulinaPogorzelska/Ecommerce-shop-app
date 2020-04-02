<template>
<div class="wrapSlide">
    <div class="aboutHeader">
    <h1>{{slide.title}}</h1>
    </div>
    <div class="aboutDescription" v-scrollanimation>
    <img :src="'./src/assets/' + slide.image">
    <p>{{slide.text}}</p>
    </div>
</div>
</template>

<script>
export default{
    props:['slide']
}
</script>

<style>
    .wrapSlide{
        display:flex;
        flex-direction:column;
    }

    .wrapSlide:nth-child(even){
        align-items:flex-end;
    }

    .wrapSlide:nth-child(even) .aboutDescription{
        display:flex;
        flex-direction:row-reverse;
    }

    .aboutHeader{
        width:80%;
        height:100px;
        background-color:#164fac;
        color:white;
        font-family: 'Lato', sans-serif;
        line-height:100px;
        padding:0 100px;
    }

    .aboutDescription{
        display:flex;
        animation:slideRight 3s;
        width:90%;
        padding:20px;
        margin:10px 10px;
        border:1px solid black;
        border-radius:10px;
    }

    .aboutDescription img{
        height:180px;
        display:block;
        margin-top:calc((220px - 180px - 40px)/2);
    }

    .aboutDescription p{
        margin:10px 10px 10px 20px;
        line-height:28px;
    }

    .before-enter{
        opacity:0.5;
        transform:translateX(100px);
        transition:all 2s ease-out;
    }
    .enter{
        transform:translateX(0px);
        opacity:1;
    }

    .wrapSlide:nth-child(even) .before-enter{
        opacity:0.5;
        transform:translateX(-100px);
        transition:all 2s ease-out;
    }

    .wrapSlide:nth-child(even) .enter{
        transform:translateX(0px);
        opacity:1;
    }
    
   @media(max-width:1025px){
       
       .aboutHeader{
        width:90%;
        height:60px;
        line-height:60px;
        padding:0 30px;
        }

        .aboutDescription,
        .wrapSlide:nth-child(even) .aboutDescription{
            display:block;
        }

        .aboutDescription img{
            height:30vw;
            float:left;
            margin:15px;
        }

        .wrapSlide:nth-child(even) .aboutDescription img{
                float:right;
        }

        .wrapSlide h1{
            font-size:28px;
        }

        .before-enter{
            opacity:0.5;
            transform:translateX(10px);
            transition:all 2s ease-out;
        }
        .enter{
            transform:translateX(0px);
            opacity:1;
        }

        .wrapSlide:nth-child(even) .before-enter{
            opacity:0.5;
            transform:translateX(-10px);
            transition:all 2s ease-out;
        }

        .wrapSlide:nth-child(even) .enter{
            transform:translateX(0px);
            opacity:1;
        }
    }

    @media(max-width:600px){
        .wrapSlide{
            margin-top:60px;
        }
    }

</style>