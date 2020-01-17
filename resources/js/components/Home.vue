<template>
    <div v-show="!loading">
        <div class="row">
            <div class="col-lg-6 col-12 d-flex" style="align-items: flex-end">
                <div class="row">
                    <div class="col-lg-12 mb-lg-4 mb-0">
                        <div class="titulo text-left">
                            <h1>Termômetro <br> da Intensidade <br> Sexual Feminina</h1>
                        </div>
                    </div>
                    <div class="col-12 my-3">
                        <p>
                            O ciclo da resposta sexual da mulher é composto por três fases: desejo, excitação e orgasmo.
                        </p>
                        <p class="mb-0 mb-lg-1">
                            Ao responder as perguntas deste questionário, você vai se conhecer, refletir e descobrir como anda cada uma das fases do seu ciclo.
                        </p>
                    </div>
                    <div class="col-12 caixa my-3 my-lg-4 py-4 px-4">
                        <p>
                            Sinta-se completamente à vontade em responder todas as perguntas com sinceridade, afinal de contas, isso não é uma pesquisa. E eu não vou recolher ou analisar os seus dados.
                            Esse é um assunto íntimo seu e ninguém vai ter acesso às respostas. O objetivo aqui é o autoconhecimento.
                        </p>
                    </div>
                    <div class="col-12 col-lg-8">
                        <router-link class="btn btn-action d-flex" :to="{name: 'perguntas'}">CONTINUAR</router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 d-lg-block d-none text-center">
                <div class="content-termometro"></div>
                <img src="images/termometro-home.svg" alt="" width="50%">
            </div>
        </div>
    </div> <!-- Div padrão -->
</template>

<script>
    export default {
        name: "Home",
        computed: {
            loading(){
                return this.$store.state.preloader.loading
            }
        }
    }
</script>

<style scoped>
</style>
