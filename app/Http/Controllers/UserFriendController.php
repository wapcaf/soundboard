<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Http\Resources\UserFriendResource;

use App\Models\User;
use App\Models\UserFriend;

class UserFriendController extends Controller
{
    public function index(Request $request) {
        $user = $request->user();
        return response()->json(UserFriendResource::collection($user->userfriends));
    }

    public function add(Request $request) {
        $user = $request->user();
    }    

    /*
    public function add(Request $request) {
    	$user = Auth::user();
    	$requestData = $request->input();
    	if ($friend = User::where('username', $requestData['username'])->first()) {
    		if ($friend->id === $user->id) {
    			return redirect()->route('dashboard.index');
    		}
    		//ddd($friend->id);
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
        $user = Auth::user();
        $requestData = $request->input();
        if ($friend = $user->friends->where('friend', $requestData['friend'])->first()) {
            $user->userfriends->where('friend_id', $friend->id)->first()->delete();
        }
        return redirect()->route('dashboard.index');
    }
    */
}
