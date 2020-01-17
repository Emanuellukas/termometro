import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Home from '../components/Home'
import Perguntas from "../components/Perguntas";
import Resultado from "../components/Resultado";
import SobreTeste from "../components/SobreTeste";

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Login, name: 'login'},
    {path: '/home', component: Home, name: 'home'},
    {path: '/perguntas', component: Perguntas, name: 'perguntas'},
    {path: '/resultado', component: Resultado, name: 'resultado'},
    {path: '/sobre-o-teste', component: SobreTeste, name: 'sobreTeste'}
];

const router = new VueRouter({
    routes
});

export default router
