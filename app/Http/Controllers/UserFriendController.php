<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use App\Models\UserFriend;

class UserFriendController extends Controller
{
    //
    public function add(Request $request) {
    	$user = Auth::user();
    	$requestData = $request->input();
    	if ($friend = User::where('username', $requestData['username'])->first()) {
    		if ($friend->id === $user->id) {
    			return redirect()->route('dashboard.index');
    		}
    		$userFriend = new UserFriend([
    			'user_id' => $user->id,
    			'friend_id' => $friend->id,
    			'status' => 'pending'
    		]);
    		$userFriend->save();
    	}
    	return redirect()->route('dashboard.index');
    }

    public function cancel(Request $request) {
    	
    }
}