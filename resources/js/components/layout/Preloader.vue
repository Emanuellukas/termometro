<template>
    <div class="lds-heart preloader" v-show="loading">
        <div></div>
    </div>
</template>

<script>
    export default {
        computed: {
            loading() {
                return this.$store.state.preloader.loading
            }
        }
    }
</script>

<style scoped>
    .lds-heart {
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 80px;
        transform: rotate(45deg);
        transform-origin: 40px 40px;
        left: 47vw;
        bottom: 50%;
    }

    .lds-heart div {
        top: 32px;
        left: 32px;
        position: absolute;
        width: 32px;
        height: 32px;
        background: #fdd;
        animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .lds-heart div:after,
    .lds-heart div:before {
        content: " ";
        position: absolute;
        display: block;
        width: 32px;
        height: 32px;
        background: #fdd;
    }

    .lds-heart div:before {
        left: -24px;
        border-radius: 50% 0 0 50%;
    }

    .lds-heart div:after {
        top: -24px;
        border-radius: 50% 50% 0 0;
    }

    @keyframes lds-heart {
        0% {
            transform: scale(0.95);
        }
        5% {
            transform: scale(1.1);
        }
        39% {
            transform: scale(0.85);
        }
        45% {
            transform: scale(1);
        }
        60% {
            transform: scale(0.95);
        }
        100% {
            transform: scale(0.9);
        }
    }

    @media (max-width: 770px) {
        .lds-heart {
            left: 40vw;
        }
    }

</style>
