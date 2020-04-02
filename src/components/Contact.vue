<template>
<div class="wrapContact">
    <div class="infoContact">
        <div class="boxContact">
            <h2>Let's talk</h2>
            <h3>We are here for you...</h3>
            <p><i class="fas fa-phone-alt"></i> 897 654 321</p>
            <p><i class="fas fa-envelope"></i> contact@fabrykakursów.com</p>
        </div>
        <div class="questContact">
            <p>name</p>
            <input v-model="message.username">
            <p>email</p>
            <input v-model="message.email">
            <p>massage</p>
            <textarea rows="10" cols="40" v-model="message.text"></textarea>
            <button @click="submit">SEND <i class="fas fa-sign-out-alt"></i></button>
        </div>
    </div>
    <div class="thanksAlert" v-if="thanksAlert">
        <i class="far fa-times-circle" @click="thanksAlert=false"></i>
        <h3>Thanks for contact with us !</h3>
        <p>We are here for you and we appreciate your interest.<br>We will contact you soon!</p>
    </div>
</div>
</template>

<script>
    export default{
        data(){
            return { 
                message:{username:'', email:'', text:''},
                thanksAlert:false
                }
        },
        methods:{
            submit() {
                this.$http.post('https://shopapp-50efe.firebaseio.com/messages.json', this.message)
                .then(response => {this.thanksAlert=true});
            }
        }
    }
</script>

<style>
.wrapContact{
    display:flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:calc(100vh - 90px);
    background-color:#045cd0;
    color:white;
    font-family: 'Lato', sans-serif;
}

.infoContact{
    display:flex;
    flex-wrap:wrap;
    width:65%;
    background-color:#045cd0;
    border-radius:10px;
    box-shadow:0 0 20px 10px #053dac
}

.boxContact{
    flex-basis:40%;
    padding:50px 0 50px 80px;
}

.boxContact h2{
    margin-top:20%;
    font-size:40px;
    letter-spacing:2px;
    line-height:60px;
}

.boxContact p:first-of-type{
    margin-top:25%;
}

.boxContact p{
    margin-top:15px;
}

.questContact{
    position:relative;
    flex-basis:60%;
    margin-top:30px;
    padding:50px 0 50px 80px;
}

.questContact p{
    font-size:14px;
    text-transform:uppercase;
    letter-spacing:1px;
    margin-bottom:5px;
}

.questContact input{
    width:60%;
    height:25px;
    background-color:transparent;
    border:0;
    border-bottom: 2px solid white;
    margin-bottom:50px;
}

.questContact textarea{
    resize: none;
    border-radius:3px;
    margin-bottom:20px;
}

.questContact button{
    position:absolute;
    bottom:20px;
    right:40px;
    color:white;
    font-size:15px;
    padding:7px 17px;
    background-color:#045cd0;;
    border: 2px solid #053dac;
    box-shadow: 0 0 3px 3px #053dac;
}

.thanksAlert{
    position:absolute;
    background-color:whitesmoke;
    border:1px solid darkgray;
    border-radius:4px;
    width:400px;
    height:150px;
    top:calc(50% - 75px);
    left:calc(50% - 200px);
    color:#555;
    text-align:center;
}

.thanksAlert h3{
    line-height:70px;
    letter-spacing:1px;
}

.thanksAlert p{
    line-height:30px;
}

.fa-times-circle{
    font-size:20px;
    position:absolute;
    top:15px;
    right:15px;
}

@media(max-width:1100px){
    .questContact{
        padding:50px 0 50px 50px;
    }
    .boxContact{
        padding:50px 0 50px 50px;
    }
}

@media(max-width:1025px){

    .infoContact{
        display:block;
        width:70%;
    }

    .boxContact{
        padding:20px 10%;
    }

    .boxContact h2,
    .boxContact h3{
    text-align:center;
    margin-top:0;
    }

    .boxContact p:first-of-type{
    margin-top:30px;
    }

    .boxContact p{
    margin-top:10px;
    }

    .questContact{
    margin-top:0px;
    padding:20px 10%;
    }

    .questContact input{
    height:20px;
    margin-bottom:30px;
    }

    .questContact textarea{
        width:65%;
    }

    .questContact button{
        right:7%;
    }
}

@media(max-width:1025px) and (max-height:600px){
    .wrapContact{
        height:auto;
        padding:20px 0;
    }
}

@media(max-width:600px){
        .wrapContact{
        height:auto;
        margin-top: 60px;
        padding:20px 0;
    }
    .infoContact{
        display:block;
        width:90%;
    }

    .questContact textarea{
        margin-bottom:30px;
        width:100%;
    }

    .questContact button{
        bottom:7px;
        right:calc(90% - 100px);
    }

    .questContact input{
        width:90%;
    }
}
</style>
