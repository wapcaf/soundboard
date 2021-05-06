<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user() {
    	// hasOne, hasMany, belongsTo, belongsToMany
    	return $this->belongsTo(User::class);
    }
}
