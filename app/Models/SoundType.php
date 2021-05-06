<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoundType extends Model
{
    use HasFactory;

    $guarded = [];

    public function sounds() {
    	return $this->hasMany(Sound::class);
    }
}
