<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Room;

class RoomController extends Controller
{
    //

    public function index() {
	    $user = Auth::user();
		if (!Auth::check()) {
	        return redirect()->route('login');
	    }
	    $rooms = $user->rooms; 
		return view('dashboard', [
			'rooms' => $rooms,
	    	'user' => $user
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
}
