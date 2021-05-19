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

    // TODO: write add friend code
    public function create(Request $request) {
        $user = $request->user();
        $requestData = $request->json()->all();

        $friend = User::where('username', $requestData['username'])->get();

        if ($friend->isEmpty()) {
            return response()->json([
                'message' => 'This user does not exist'
            ], 404);
        }

        // check if the friend request already exists
        $matchThese = [
            'user_id' => $user->id,
            'friend_id' => $friend->first()->id
        ];

        $found = UserFriend::Where($matchThese)->get();

        if ($found->isEmpty()) {
            $userfriend = new UserFriend([
                'user_id' => $user->id,
                'friend_id' => $friend->first()->id,
                'status' => 'pending'
            ]);
            $userfriend->save();
            return response()->json(new UserFriendResource($userfriend));
        } else {
            return response()->json([
                'message' => 'Friend request already sent'
            ], 409);
        }

    }

    // TODO: write remove friend / cancel friend request
    public function remove(Request $request, $userfriendID) {
        $userfriend = UserFriend::find($userfriendID);
        if ($userfriend) {
            $destroy = UserFriend::destroy($userfriendID);
        }
        return response()->json($destroy);
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
