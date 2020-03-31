import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [{ name: 'Top 10 ecomerce', price: 19.99, id: 1, counter: 0 }, { name: 'Winning strategy', price: 99.99, id: 2, counter: 0 }, { name: 'Mentoring Program', price: 649.99, id: 3, counter: 0 }, { name: 'Road Show Warsaw', price: 199.00, id: 4, counter: 0 }, { name: 'Tailor made business', price: 300.00, id: 5, counter: 0 }, { name: 'Prepare for 2021', price: 14.49, id: 6, counter: 0 }],
        cardProducts: [],
        ifShowCardMobile: false,
        aboutInfo: [{ title: 'Zaangażowanie', image: 'heart.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat ab nemo sint iure. Qui fuga obcaecati eius eum? Nostrum tempore vel quia harum numquam ducimus facilis nemo aut beatae quasi voluptas, dolore hic culpa ipsa, quidem accusantium perspiciatis unde iste commodi deserunt nulla magnam repudiandae. Magni cupiditate sed tenetur voluptatibus aperiam quos sit fuga provident, maxime quibusdam deleniti libero velit qui, natus eos earum laudantium harum amet! Quisquam alias minima odio deserunt exercitationem saepe recusandae beatae quae, ducimus, tempore nam repellendus explicabo suscipit fugiat, ex eos excepturi esse molestias quas commodi eaque cum harum laboriosam? Voluptas impedit ab nemo.' }, { title: 'Doświadczenie', image: 'world2.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat ab nemo sint iure. Qui fuga obcaecati eius eum? Nostrum tempore vel quia harum numquam ducimus facilis nemo aut beatae quasi voluptas, dolore hic culpa ipsa, quidem accusantium perspiciatis unde iste commodi deserunt nulla magnam repudiandae. Magni cupiditate sed tenetur voluptatibus aperiam quos sit fuga provident, maxime quibusdam deleniti libero velit qui, natus eos earum laudantium harum amet! Quisquam alias minima odio deserunt exercitationem saepe recusandae beatae quae, ducimus, tempore nam repellendus explicabo suscipit fugiat, ex eos excepturi esse molestias quas commodi eaque cum harum laboriosam? Voluptas impedit ab nemo.' }, { title: 'Rozwój', image: 'tree2.png', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat ab nemo sint iure. Qui fuga obcaecati eius eum? Nostrum tempore vel quia harum numquam ducimus facilis nemo aut beatae quasi voluptas, dolore hic culpa ipsa, quidem accusantium perspiciatis unde iste commodi deserunt nulla magnam repudiandae. Magni cupiditate sed tenetur voluptatibus aperiam quos sit fuga provident, maxime quibusdam deleniti libero velit qui, natus eos earum laudantium harum amet! Quisquam alias minima odio deserunt exercitationem saepe recusandae beatae quae, ducimus, tempore nam repellendus explicabo suscipit fugiat, ex eos excepturi esse molestias quas commodi eaque cum harum laboriosam? Voluptas impedit ab nemo.' }]
    },
    getters: {
        getProducts: state => {
            return state.products
        },
        getCardProducts: state => {
            return state.cardProducts
        },
        getAboutInfo: state => {
            return state.aboutInfo
        }
    },
    mutations: {
        addProductToCard(state, productId) {
            let product = state.cardProducts.find(el => el.id == productId);
            if (!!product) {
                product.counter++;
                //state.cardProducts = [...state.cardProducts.filter(el => el.id != productId), product]
            } else {
                let newProduct = state.products.find(el => el.id == productId);
                newProduct.counter = 1;
                state.cardProducts.push(newProduct);

            }
        },
        showCardMobile(state) {
            state.ifShowCardMobile = true
        },
        hideCardMobile(state) {
            state.ifShowCardMobile = false
        }
    }
})
