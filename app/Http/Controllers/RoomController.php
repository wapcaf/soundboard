<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Http\Resources\RoomResource;

use App\Models\Room;

class RoomController extends Controller
{
    // https://beyondco.de/docs/laravel-websockets/basic-usage/starting

    public function index(Request $request) {
        $user = $request->user();
        return response()->json(RoomResource::collection($user->rooms));
    }

    public function room(Request $request, $room) {
        return response()->json(new RoomResource(Room::findOrFail($room)));
    }

    public function dashboard(Request $request) {
        $user = Auth::user();
        if (!Auth::check()) {
            return redirect()->route('login');
        }
        return view('dashboard', [
            'user' => $user,
            'rooms' => $user->rooms,
            'userfriends' => $user->userfriends
        ]);
    }

    public function create(Request $request) {
    	$user = Auth::user();
    	$requestData = $request->input();
    	$room = new Room(
    		[
    			'title' => $requestData['title'],
    			'user_id' => $user->id
    		]
    	);
    	$room->save();
    	return redirect()->route('dashboard.index');
    }

    public function remove(Request $request) {
        $user = Auth::user();
        $requestData = $request->input();
        if ($room = $user->rooms->find($requestData['room'])) {
            $room->delete();
        }
        return redirect()->route('dashboard.index');
    }
}
