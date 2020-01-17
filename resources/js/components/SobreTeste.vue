<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="titulo text-center">
                    <h1>Termômetro <br> da Intensidade <br> Sexual Feminina</h1>
                </div>
            </div>
        </div>
        <div class="row mb-4 pb-4">
            <div class="col-lg-6 col-12 mx-auto">
                <div class="row">
                    <div class="col-12 text-center my-4">
                        <p class="enunciado">NÃO SUBESTIME ESTE TESTE!</p>
                    </div>
                    <div class="mx-auto caixa text-center w-100 my-4">
                        <p class="mb-2">
                            Ele foi escrito baseado em diversos <br> artigos e pesquisas científicas.
                        </p>
                        <p class="m-0">
                            Se você percebeu que a sua intensidade sexual está baixa ou moderada, basta reler cada uma das perguntas e trabalhar o seu corpo e a sua mente para que a maioria das suas respostas
                            estejam entre as letras c) e d).
                        </p>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-lg-8 col-12 mx-auto">
                        <router-link :to="{name: 'perguntas'}" class="btn btn-action col-12 w-100 mb-2">FAZER NOVAMENTE</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SobreTeste"
    }
</script>

<style scoped>

</style>
