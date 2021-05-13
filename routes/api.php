<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\RoomResource;
use App\Models\Room;
use App\Http\Resources\UserFriendResource;
use App\Models\UserFriend;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

// https://stackoverflow.com/questions/49884611/api-requests-with-axios-always-unauthorized-with-laravel-api/66945025#66945025

Route::middleware('auth')->get('/poll', function(Request $request) {
	return ['message' => 'yo'];
});

Route::middleware('auth')->get('/poll/{room}', function(Room $room) {
	return ['message' => 'room id = ' . $room->id];
});

Route::middleware('auth')->get('/rooms', function(Request $request) {
	$user = $request->user();
	return response()->json(RoomResource::collection($user->rooms));
});

Route::middleware('auth')->get('/rooms/{room}', function(Request $request, $room) {
	return response()->json(new RoomResource(Room::findOrFail($room)));
});

Route::middleware('auth')->get('/friends', function(Request $request) {
	$user = $request->user();
	return response()->json(UserFriendResource::collection($user->userfriends));
});