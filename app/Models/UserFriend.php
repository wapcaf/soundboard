<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFriend extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user() {
    	return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function friend() {
    	return $this->hasOne(User::class, 'id', 'friend_id');
    }
}
