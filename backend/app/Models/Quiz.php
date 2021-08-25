<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    public function log()
    {
        return $this->belongsTo(Log::class);
    }

    public function word()
    {
        return $this->hasMany(Word::class);
    }
}
