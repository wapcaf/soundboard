<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoundscapeSound extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function sound() {
    	return $this->hasOne(Sound::class)
    }

    public function soundscape() {
    	return $this->hasOne(Soundscape::class);
    }
}
