<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    public $table = 'usuario';
    public $primaryKey = 'id';
    public $fillable = ['email'];
    protected $timestamp = true;
}
