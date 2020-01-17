<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    private $usuario;

    public function __construct(Usuario $usuario)
    {
        $this->usuario = $usuario;
    }

    public function index(Request $request){
    $users = $this->usuario->where('email', 'like', "%{$request->email}%")->get();

    return response()->json($users, 200);
}
}
