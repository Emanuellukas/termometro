require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import router from "./routes/routers";
import store from './vuex/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.component('inicio', require('./components/Inicio').default);
Vue.component('preloader', require('./components/layout/Preloader').default);

Vue.filter('alternativa', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
})

const app = new Vue({
    router,
    store,
    el: '#app',
});
