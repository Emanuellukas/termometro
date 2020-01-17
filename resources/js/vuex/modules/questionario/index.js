export default {
    state: {
        pergunta_atual: 1,
        resultado: 0
    },
    mutations: {
        PERGUNTA_ATUAL(state, num){
            state.pergunta_atual = num
        },
        RESULTADO(state, num){
            state.resultado = num;
        }
    },
    actions: {
        mudaPergunta(context, num) {
            context.commit('PERGUNTA_ATUAL', num);
        },
        geraResultado(context, [email, respostas]){
            var qtdA = 0;
            var qtdB = 0;
            var qtdC = 0;
            var qtdD = 0;

            respostas.forEach(v => {//Quantificando as respostas. Para cada resposta armazenada ele confere o tipo e soma + 1 a variável que o corresponde
                switch(v){
                    case 'a':
                        qtdA++;
                    break;
                    case 'b':
                        qtdB++;
                    break;
                    case 'c':
                        qtdC++;
                    break;
                    default:
                        qtdD++
                }
            });

            //Atribuindo o valor proporcional para cada resposta (alternativa 'a' vale apenas 1 ponto)
            var totalB = qtdB * 2;
            var totalC = qtdC * 3;
            var totalD = qtdD * 4;

            this.resultado = (qtdA + totalB + totalC + totalD);//Somando tudo
            axios.post('/storeResultado', {email: email, resultado: this.resultado}).finally(() => context.commit('RESULTADO', this.resultado))
        }
    },
    getters: {}
}
