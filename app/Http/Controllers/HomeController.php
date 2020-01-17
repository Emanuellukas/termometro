<?php

namespace App\Http\Controllers;

use App\Resultado;
use App\Usuario;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function login(Request $request){//Não usada
        /*$validatedData = $request->validate([
            'email' => 'required|unique:usuario|max:255',
        ]);*/

        $retorno = false;//Variável que define se é a primeira vez que a pessoa está logando

        if(Usuario::where('email', $request->input('email'))->get()->isEmpty()){
            $dados = $request->all();
            $usuario = Usuario::create($dados);
        } else {
            $usuario = Usuario::where('email', $request->input('email'))->first();
            $retorno = true;
        }

        return response()->json(['usuario' => $usuario, 'retorno' => $retorno]);
    }

    public function storeResultado(Request $request){
        if(Usuario::where('email', $request->input('email'))->get()->isEmpty()){
            $dados = $request->all();
            $usuario = Usuario::create($dados);
        } else {
            $usuario = Usuario::where('email', $request->input('email'))->first();
            $retorno = true;
        }

        $resultado = $request->input('resultado');

        if(Resultado::where('fk_usuario', $usuario->id)->get()->isEmpty()){
            Resultado::create([
                'valor' => $resultado,
                'fk_usuario' => $usuario->id
            ]);
        } else {
            Resultado::where('fk_usuario', $usuario->id)->update([
                'valor' => $resultado
            ]);
        }

        return response()->json(['usuario' => $usuario, 'resultado' => $resultado]);
    }
}
