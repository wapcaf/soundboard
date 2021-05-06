<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sound extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function type() {
    	return $this->belongsTo(SoundType::class);
    }

    public function soundscape_sounds() {
    	return $this->belongsToMany(Soundscape::class);
    }
}
