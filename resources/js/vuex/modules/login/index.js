export default {
    state: {
        items: {
            data: []
        },
        email: ''
    },
    mutations: {//As mutations armazenam as funções que tratam os dados, tornando-os globais
        LOAD_INFO(state, dados) {
            state.items = dados
        },
        SET_EMAIL(state, email){
            state.email = email;
        }
    },
    actions: {//Nas actions ficam as funções de conexão com o banco
        logar(context, formData) {
            context.commit('CHANGE_PRELOADER', true);
            console.log(formData)
            axios.post('/login', formData).then(response => {
                console.log('response', response)
                context.commit('LOAD_INFO', response)
            }).catch(errors => {
                console.log(errors)
                this.error = 1;
                this.errors = errors.response.data.errors;
                console.log(this.errors);
            }).finally(() => context.commit('CHANGE_PRELOADER', false));
        },
        storeEmail(context, email){
            console.log(email)
            context.commit('SET_EMAIL', email)
        }
    },
    getters: {}
}
