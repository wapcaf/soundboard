<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

use App\Http\Resources\RoomResource;

use App\Models\Room;

class RoomController extends Controller
{
    // https://beyondco.de/docs/laravel-websockets/basic-usage/starting

    //API
    public function index(Request $request) {
        $user = $request->user();
        return response()->json(RoomResource::collection($user->rooms));
    }

    public function room(Request $request, $room) {
        return response()->json(new RoomResource(Room::findOrFail($room)));
    }

    public function create(Request $request) {
        $requestData = $request->input();
        $room = new Room([
            'user_id' => $request->user()->id,
            'title' => $requestData['title']
        ]);
        $room->save();
        return response()->json(new RoomResource($room));
    }

    public function remove(Request $request, $room) {
        $user = $request->user();
        if ($room = $user->rooms->find($room)) {
            $room->delete();
        }
    }


    // NON API
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
}
