import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [{ name: 'Top 10 ecomerce', price: '19.99', id: 1, counter: 0 }, { name: 'Winning strategy', price: '99.99', id: 2, counter: 0 }, { name: 'Mentoring Program', price: '649.99', id: 3, counter: 0 }, { name: 'Road Show Warsaw', price: '199.00', id: 4, counter: 0 }, { name: 'Tailor made business', price: '300.00', id: 5, counter: 0 }, { name: 'How to prepare for 2021', price: '14.49', id: 6, counter: 0 }],
        cardProducts: []
    },
    getters: {
        getProducts: state => {
            return state.products
        },
        getCardProducts: state => {
            return state.cardProducts
        }
    },
    mutations: {
        AddProductToCard(state, productId) {
            let product = state.Products.find(el => el.id == productId)
            console.log(product)
            //state.CardProducts.push(product)
        }
    }
})
