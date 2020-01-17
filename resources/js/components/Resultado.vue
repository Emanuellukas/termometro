<template>
    <div>
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="row">
                    <div class="col-12 text-left my-3">
                        <p class="enunciado">SEU RESULTADO FOI:</p>
                    </div>
                    <div class="col-lg-4 col-6 d-flex justify-content-center" style="flex-direction: column">
                        <p class="resultado text-center">{{resultado}}</p>
                    </div>
                    <div class="col-6 d-flex d-lg-none justify-content-center">
                        <img :src="'images/resultado-'+ termometro +'.svg'" width="100%">
                    </div>
                    <div class="col-lg-8 col-12">
                        <div class="row">
                            <div class="col-lg-4 d-none d-lg-block justify-content-center">
                                <img :src="'images/resultado-'+ termometro +'.svg'" width="120%">
                            </div>
                            <div class="col-lg-8 col-12">
                                <p class="resumo p-4" v-html="resumo"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="caixa-alerta">
                        <img src="images/sino.svg" alt="" class="sino">
                        <p class="m-0" v-html="alerta"></p>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-6 col-12">
                        <router-link :to="{name: 'perguntas'}" class="btn btn-action col-12 w-100 d-flex">FAZER NOVAMENTE</router-link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <p class="m-0">
                            Não subestime esse teste! <br> <router-link :to="{name: 'sobreTeste'}" style="color: white"><b>Clique aqui</b></router-link> e saiba por quê.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12 text-center d-none d-lg-block">
                <div :class="'content-termometro-' + termometro"></div>
                <img src="images/termometro-home.svg" alt="" width="75%">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resultado",
        data() {
            return {
                resumo: '',
                alerta: '',
                termometro: ''
            }
        },
        created() {
            this.tratamento();
        },
        computed: {
            resultado() {
                return this.$store.state.questionario.resultado;
            }
        },
        methods: {
            tratamento() {
                if (this.resultado <= 32) {
                    this.resumo = 'Você provavelmente está com <b>baixo grau</b> de intensidade sexual.';
                    this.alerta = "<b>Atenção: </b>Sua energia e intensidade sexual estão <b>baixas</b>. A falta de descarga orgástica dificulta a  liberação da tensão sexual acumulada e torna a mulher mais irritada e o " +
                        "relacionamento interpessoal mais difícil. Isso pode refletir em todas as áreas da sua vida e minar o seu relacionamento.";
                    this.termometro = 'baixo'
                } else if (this.resultado > 32 && this.resultado <= 44) {
                    this.resumo = 'Você provavelmente está com intensidade sexual <b>moderada</b>.';
                    this.alerta = "<b>Atenção: </b>Sua intensidade sexual está <b>moderada</b>. A boa notícia é que geralmente é simples e rápido conseguir aumentar o grau de intensidade e satisfação da sua vida sexual." +
                        " Mas fique atenta! Se você não der atenção à sua vida sexual, você corre o risco de deixar essa intensidade abaixar drasticamente.";
                    this.termometro = 'medio'
                } else {
                    this.resumo = 'Você provavelmente está com <b>alto grau</b> de intensidade sexual.';
                    this.alerta = "<b>Muito bom!</b> Parabéns, você é uma mulher especial, o grau de intensidade da sua vida sexual está nas <b>alturas</b>. Você está pronta para viver experiências extraordinárias. " +
                        "De qualquer forma é sempre bom se cuidar para manter essa energia sexual intensa.";
                    this.termometro = 'alto'
                }
            }
        }
    }
</script>

<style scoped>

</style>
