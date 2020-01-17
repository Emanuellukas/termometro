<template>
    <div>
        <div class="row" v-show="!loading">
            <div class="col-12">
                <div class="titulo text-center">
                    <h1>Termômetro <br> da Intensidade <br> Sexual Feminina</h1>
                </div>
            </div>
        </div>
        <div v-show="loading" style="height: 60vh">
            <div class="row" style="margin-top: 10vh">
                <div class="col-12 text-center">
                    <h1>Carregando resultado...</h1>
                </div>
            </div>
        </div>
        <div v-show="respondendo">
            <div class="row my-4">
                <div class="col-lg-6 col-12 mx-auto">
                    <div class="row align-items-center">
                        <div class="col-4 text-center">
                            <img src="images/hashtag.svg" alt="" id="hashtag">
                            <img src="images/Elipse.svg" alt="" id="circulo">
                            <img :src="'images/' + perguntaAtual + '.svg'" alt="" id="numPergunta">
                        </div>
                        <div class="col-8">
                            <p class="enunciado">
                                {{perguntas[(perguntaAtual - 1)].enunciado}}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 caixa-alternativas px-lg-4">
                            <div class="form-check pb-2">
                                <input class="form-check-input" type="radio" name="respostas" v-model="respostas[(perguntaAtual - 1)]" id="a" value="a" checked>
                                <label class="form-check-label" for="a">
                                    <span>A </span>| {{perguntas[(perguntaAtual - 1)].a | alternativa}}
                                </label>
                            </div>
                            <div class="form-check pb-2">
                                <input class="form-check-input" type="radio" name="respostas" v-model="respostas[(perguntaAtual - 1)]" id="b" value="b">
                                <label class="form-check-label" for="b">
                                    <span>B </span>| {{perguntas[(perguntaAtual - 1)].b | alternativa}}
                                </label>
                            </div>
                            <div class="form-check pb-2">
                                <input class="form-check-input" type="radio" name="respostas" v-model="respostas[(perguntaAtual - 1)]" id="c" value="c">
                                <label class="form-check-label" for="c">
                                    <span>C </span>| {{perguntas[(perguntaAtual - 1)].c | alternativa}}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="respostas" v-model="respostas[(perguntaAtual - 1)]" id="d" value="d">
                                <label class="form-check-label" for="d">
                                    <span>D </span>| {{perguntas[(perguntaAtual - 1)].d | alternativa}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row botoes">
                        <div class="col-lg-6 col-12 text-center">
                            <button @click="anterior" class="btn btn-action-back">Voltar</button>
                        </div>
                        <div class="col-lg-6 col-12 text-center mb-lg-0 mb-3">
                            <button @click="proxima" class="btn btn-action" :disabled="!respostas[(perguntaAtual - 1)]">{{perguntaAtual === 16 ? 'Finalizar' : 'Continuar'}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!loading && !respondendo">
            <div class="row mb-4 pb-4">
                <div class="col-lg-6 col-12 mx-auto">
                    <div class="row">
                        <div class="col-12 text-center my-4">
                            <p class="enunciado">SEU RESULTADO FOI:</p>
                        </div>
                        <div class="mx-auto caixa-resultado">
                            <p class="resultado">{{resultado}}</p>
                        </div>
                    </div>
                    <div class="row my-4">
                        <div class="col-lg-8 col-12 mx-auto">
                            <router-link :to="{name: 'resultado'}" class="btn btn-action col-12 w-100 mb-2 d-flex" id="entenderResultado">ENTENDER O RESULTADO</router-link>
                            <button class="btn btn-action-back col-12 w-100" @click="refazer">FAZER NOVAMENTE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Perguntas",
        created() {
            this.$store.dispatch('mudaPergunta', 1).then(() => console.log('foi'));
            this.gerarPerguntas();
        },
        data() {
            return {
                perguntasarray: [],
                respostasarray: [],
                perguntas: [],
                respostas: [],
                respondendo: true
            }
        },
        computed: {
            perguntaAtual() {//Variável que armazenará a pergunta corrente
                return this.$store.state.questionario.pergunta_atual;
            },
            resultado() {
                return this.$store.state.questionario.resultado;
            },
            loading() {//Variável que controla a aparição do preloader
                return this.$store.state.preloader.loading
            }
        },
        methods: {
            conferir() {
                console.log(this.respostas)
            },
            proxima() {
                if (this.perguntaAtual === this.perguntas.length) {
                    console.log('gerando resultado')
                    this.respondendo = false;
                    this.$store.dispatch('mudaEstado', 1);
                    setTimeout(this.gerarResultado, 2500)
                } else {
                    this.$store.dispatch('mudaPergunta', (this.perguntaAtual + 1))
                }
            },
            anterior() {
                if (this.perguntaAtual === 1)
                    this.$router.push({name: 'home'})
                else
                    this.$store.dispatch('mudaPergunta', this.perguntaAtual - 1)
            },
            gerarPerguntas() {
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA COSTUMA PENSAR OU SE IMAGINAR FAZENDO SEXO?',
                    a: 'RARAMENTE E COM POUCA INTENSIDADE.',
                    b: 'RARAMENTE E COM MUITA INTENSIDADE.',
                    c: 'COM FREQUÊNCIA MODERADA.',
                    d: 'VÁRIAS VEZES AO DIA.'
                });
                this.perguntas.push({
                    enunciado: 'COMO VOCÊ SE SENTE AO FALAR DE SEXO COM O SEU PARCEIRO?',
                    a: 'EU RARAMENTE FALO DE SEXO COM MEU PARCEIRO.',
                    b: 'EU FICO TÍMIDA E POUCO À VONTADE.',
                    c: 'CONVERSO SOBRE O ASSUNTO NORMALMENTE.',
                    d: 'ADORO FALAR DE SEXO E ME SINTO COMPLETAMENTE À VONTADE.'
                });
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA VOCÊ TOMA A INICIATIVA NA HORA DO SEXO?',
                    a: 'NUNCA.',
                    b: 'RARAMENTE.',
                    c: 'COM FREQUÊNCIA MODERADA.',
                    d: 'COM FREQUÊNCIA ALTA.',
                });
                this.perguntas.push({
                    enunciado: 'QUANDO VOCÊ NÃO ESTÁ DISPOSTA A FAZER SEXO, QUAIS DAS ATITUDES A SEGUIR VOCÊ MAIS COSTUMA TOMAR?',
                    a: 'INVENTO UMA DESCULPA.',
                    b: 'FAÇO SEXO ASSIM MESMO PARA “CUMPRIR TABELA“.',
                    c: 'CONVERSO COM ELE E EXPLICO QUE NÃO ESTOU DISPOSTA.',
                    d: 'TENTO ENTRAR NO CLIMA JUNTO COM ELE.',
                });
                this.perguntas.push({
                    enunciado: 'PARA VOCÊ, NO MOMENTO DO SEXO O QUE É MAIS IMPORTANTE: O SEU PRAZER OU O PRAZER DO PARCEIRO?',
                    a: 'FICO PREOCUPADA SE ELE ESTÁ SENTINDO PRAZER E ESQUEÇO DE MIM.',
                    b: 'PRIORIZO O MEU PRAZER, MAS ELE NÃO AJUDA.',
                    c: 'PRIORIZO O MEU PRAZER , MAS SINTO DIFICULDADE.',
                    d: 'CONSIGO ENCONTRAR UM BOM EQUILÍBRIO.',
                });
                this.perguntas.push({
                    enunciado: 'QUAL É O SEU GRAU DE SATISFAÇÃO EM RELAÇÃO AO ENVOLVIMENTO EMOCIONAL ENTRE VOCÊ E SEU PARCEIRO DURANTE A ATIVIDADE SEXUAL?',
                    a: 'NENHUM ENVOLVIMENTO EMOCIONAL.',
                    b: 'POUCO ENVOLVIMENTO EMOCIONAL.',
                    c: 'ENVOLVIMENTO EMOCIONAL HABITUAL.',
                    d: 'FORTE ENVOLVIMENTO EMOCIONAL.',
                });
                this.perguntas.push({
                    enunciado: 'VOCÊ CONSEGUE SE ENVOLVER DURANTE A RELAÇÃO SEXUAL SEM SE DISTRAIR (PERDER A CONCENTRAÇÃO)?',
                    a: 'EU NUNCA CONSIGO ME CONCENTRAR E ME ENVOLVER NA HORA DO SEXO.',
                    b: 'EU TENHO DIFICULDADES EM ME CONCENTRAR E ME ENVOLVER NA HORA DO SEXO.',
                    c: 'SÓ CONSIGO ME CONCENTRAR E ME ENVOLVER QUANDO ESTOU MUITO EXCITADA.',
                    d: 'EU TENHO FACILIDADE DE ME CONCENTRAR E ME ENVOLVER NA HORA DO SEXO.',
                });
                this.perguntas.push({
                    enunciado: 'VOCÊ FICA LUBRIFICADA DURANTE A ATIVIDADE SEXUAL?',
                    a: 'NENHUMA LUBRIFICAÇÃO.',
                    b: 'POUCA LUBRIFICAÇÃO.',
                    c: 'LUBRIFICAÇÃO APENAS NO INÍCIO DA RELAÇÃO.',
                    d: 'LUBRIFICAÇÃO DURANTE TODA A RELAÇÃO.',
                });
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA VOCÊ SENTE DESCONFORTO OU DOR DURANTE A PENETRAÇÃO VAGINAL?',
                    a: 'SEMPRE.',
                    b: 'FREQUENTEMENTE.',
                    c: 'RARAMENTE.',
                    d: 'NUNCA.',
                });
                this.perguntas.push({
                    enunciado: 'DURANTE A RELAÇÃO SEXUAL VOCÊ RELAXA A VAGINA O SUFICIENTE PARA FACILITAR A PENETRAÇÃO DO PÊNIS?',
                    a: 'NÃO CONSIGO PERCEBER (FALTA DE SENSIBILIDADE VAGINAL).',
                    b: 'CONSIGO PERCEBER, MAS NÃO CONSIGO RELAXAR.',
                    c: 'AS VEZES CONSIGO RELAXAR.',
                    d: 'TENHO CONTROLE E CONSIGO RELAXAR.',
                });
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA VOCÊ COSTUMA SE MASTURBAR?',
                    a: 'NUNCA ME MASTURBO.',
                    b: 'RARAMENTE.',
                    c: 'APENAS DURANTE AS RELAÇÕES COM O MEU PARCEIRO.',
                    d: 'COM ALTA FREQUÊNCIA.',
                });
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA VOCÊ ALCANÇA O ORGASMO DURANTE A MASTURBAÇÃO?',
                    a: 'RARAMENTE E COM POUCA INTENSIDADE.',
                    b: 'RARAMENTE E COM MUITA INTENSIDADE.',
                    c: 'COM FREQUÊNCIA MODERADA.',
                    d: 'SEMPRE QUE ME MASTURBO CONSIGO ALCANÇAR O ORGASMO.',
                });
                this.perguntas.push({
                    enunciado: 'COM QUE FREQUÊNCIA VOCÊ ALCANÇA O ORGASMO DURANTE A RELAÇÃO SEXUAL?',
                    a: 'NUNCA ACONTECEU OU NÃO TENHO CERTEZA.',
                    b: 'RARAMENTE E APENAS COM A ESTIMULAÇÃO CLITORIANA.',
                    c: 'COM FREQUÊNCIA MODERADA.',
                    d: 'EM PRATICAMENTE TODAS AS RELAÇÕES.',
                });
                this.perguntas.push({
                    enunciado: 'EM GERAL, COMO VOCÊ CLASSIFICA O GRAU DE INTENSIDADE DO SEU ORGASMO?',
                    a: 'NÃO CONSIGO ALCANÇAR O ORGASMO.',
                    b: 'LEVE.',
                    c: 'MODERADO.',
                    d: 'INTENSO.',
                });
                this.perguntas.push({
                    enunciado: 'EM GERAL, DEPOIS QUE VOCÊ TEM UM ORGASMO, VOCÊ ESTÁ DISPOSTA A FAZER SEXO DE NOVO EM BUSCA DE NOVOS ORGASMOS?',
                    a: 'NÃO CONSIGO ALCANÇAR NEM O PRIMEIRO ORGASMO.',
                    b: 'NÃO TENHO DISPOSIÇÃO.',
                    c: 'AS VEZES EU TENTO.',
                    d: 'TENTO E CONSIGO MAIS DE UM ORGASMO COM FREQUÊNCIA.',
                });
                this.perguntas.push({
                    enunciado: 'DE FORMA GERAL, QUAL É O GRAU DE SATISFAÇÃO COM SUA VIDA SEXUAL?',
                    a: 'INSATISFEITA.',
                    b: 'NEUTRA.',
                    c: 'SATISFEITA.',
                    d: 'MUITO SATISFEITA.',
                });
            },
            gerarResultado() {
                this.$store.dispatch('geraResultado', [this.$store.state.login.email, this.respostas])//Gerando resultado
                this.$store.dispatch('mudaEstado', 0);//Desabilitando preloader
            },
            refazer() {
                this.respondendo = true;
                this.$store.dispatch('mudaPergunta', 1);
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 770px) {
        #entenderResultado {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label {
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #fff;
    }

    [type="radio"]:checked + label:before,
    [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 1px solid #fff;
        border-radius: 3px;
        background: rgba(255, 255, 255, .2);
    }

    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        position: absolute;
        top: 4px;
        left: 4px;
        /* border-radius: 100%; */
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        font-weight: bold;
        background-color: white;
    }

    [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
</style>
