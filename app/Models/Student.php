<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = [
        'user_id',
        'instructor_id',
        'biometric_id',
        'rfid_tag',
        'birth_date',
        'is_defaulter'
    ];
}