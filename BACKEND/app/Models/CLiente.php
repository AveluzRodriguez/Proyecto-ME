<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CLiente extends Model
{
    use HasFactory;
    protected $filaDatos=['Correo','APaterno','AMaterno','Nombres','Mensaje'];
}
