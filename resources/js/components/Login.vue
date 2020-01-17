<template>
    <div>
        <div class="titulo text-center">
            <h1>Termômetro <br> da Intensidade <br> Sexual Feminina</h1>
        </div>
        <div class="form">
            <div class="row text-center justify-content-center">
                <div class="col-12 mb-4">
                    <p>Informe seu e-mail <br> para começar</p>
                </div>
                <form class="col-lg-9 col-12" @submit="logando">
                    <div class="form-group" :class="{'has-error': errors.email}">
                        <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Seu e-mail aqui.">
                        <div class="invalid-feedback d-block" v-if="errors.email">
                            {{errors.email[0]}}
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-action" type="submit" :disabled="!email" style="display: inline-block;">INICIAR TESTE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props: [],
        data() {
            return {
                email: '',
                error: 0,
                errors: {}
            }
        },
        methods: {
            logando(e) {
                e.preventDefault();
                const formData = new FormData();
                formData.append('email', this.email);

                console.log(this.email)
                //this.$store.dispatch('logar', formData).then(() => this.$router.push({name: 'home'}))
                this.$store.dispatch('storeEmail', this.email).then(() => this.$router.push({name: 'home'}))
            }
        },
        computed: {
            dadosUser() {
                return this.$store.state.login.items.data
            },
            loading() {
                return this.$store.state.preloader.loading
            }
        }
    }
</script>

<style scoped>
    input:focus, button:focus {
        outline: none;
        border: 2px solid #e96d5e;
        box-shadow: unset !important;
    }
</style>
