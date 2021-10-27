require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

//Routes
import { routes } from './routes';
import AppComponent from './components/AppComponent';
import DraftComponent from './components/DraftComponent';
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)
import storeData from "./store/index";
const store = new Vuex.Store(
   storeData
)

//Register Routes
export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes:[
     { path: "/", name: "home",component: AppComponent },
    { path: "/", name: "draft",component: DraftComponent },
    ]

});

const app = new Vue({
    router,
    store
}).$mount('#app')
