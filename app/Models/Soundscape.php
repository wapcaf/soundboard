<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soundscape extends Model
{
    use HasFactory;

    $guarded = [];

    public function room() {
    	return $this->belongsTo(Room::class)
    }

    public function soundscape_sounds() {
    	return $this->hasMany(SoundscapeSounds::class);
    }

    public function sounds() {
    	return $this->belongsToMany(Soundscape::class);
    }
}
