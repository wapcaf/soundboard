<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\Room;

use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserFriendController;

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

Route::middleware('auth')->get('/rooms', [RoomController::class, 'index'])->name('rooms.index');
Route::middleware('auth')->get('/rooms/{room}', [RoomController::class, 'room'])->name('rooms.room');
Route::middleware('auth')->post('/rooms', [RoomController::class, 'create'])->name('rooms.create');
Route::middleware('auth')->delete('/rooms/{room}', [RoomController::class, 'remove'])->name('rooms.remove');

Route::middleware('auth')->get('/friends', [UserFriendController::class, 'index'])->name('userfriends.index');
Route::middleware('auth')->post('/friends', [UserFriendController::class, 'create'])->name('userfriends.create');
Route::middleware('auth')->delete('/friends/{userfriend}', [UserFriendController::class, 'remove'])->name('userfriends.remove');

// https://stackoverflow.com/questions/49884611/api-requests-with-axios-always-unauthorized-with-laravel-api/66945025#66945025

Route::middleware('auth')->get('/poll', function(Request $request) {
	return ['message' => 'yo'];
});

Route::middleware('auth')->get('/poll/{room}', function(Room $room) {
	return ['message' => 'room id = ' . $room->id];
});
