import Vue from 'vue';
import Vuex from 'vuex'

import Questionario from './modules/questionario/index'
import Login from './modules/login/index'
import Preloader from "./modules/preloader/index";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        questionario: Questionario,
        login: Login,
        preloader: Preloader
    }
})


export default store
