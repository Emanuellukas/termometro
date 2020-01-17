<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resultado extends Model
{
    public $table = 'resultado';
    public $primaryKey = 'id';
    public $fillable = ['valor', 'fk_usuario'];
    protected $timestamp = true;
}
