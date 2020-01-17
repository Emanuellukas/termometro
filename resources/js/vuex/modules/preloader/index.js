export default {
    state: {
        loading: false,
    },
    mutations: {
        CHANGE_PRELOADER(state, status){
            state.loading = status
        }
    },
    actions: {
        mudaEstado(context, value){
            console.log('teste', value)
            context.commit('CHANGE_PRELOADER', value);
        }
    }
}
