<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="{{asset('images/coracao.png')}}" />

        <title>Termômetro da Intensidade Sexual Feminina</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,900&display=swap" rel="stylesheet">
    </head>
    <body style="background-color: #FF7463;">
        <div id="app" class="container div-app">
            <preloader></preloader>
            <router-view></router-view>
        </div>
        <footer class="text-center my-4">
            <img src="{{asset('images/logo.svg')}}" alt="">
        </footer>
        <script src="{{asset('js/app.js')}}"></script>
        <link href="{{asset('css/style.css')}}" rel="stylesheet">
        <!-- Styles -->
        <style>
            @font-face {
                font-family: "Bw Beto Black";
                src: url({{ asset('fonts/Bw.otf') }});
            }
        </style>
    </body>
</html>
