<?php

use App\Models\Room;
use App\Models\User;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserFriendController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	// Market the software
	$user = Auth::user();
    return view('home', [
    	'user' => $user
    ]);
});

// make login
// https://laracasts.com/series/laravel-authentication-options/episodes/9

Route::get('/dashboard', [RoomController::class, 'index'])->name('dashboard.index');
Route::get('/rooms/{room}', [RoomController::class, 'index'])->name('dashboard.index');

// REMOVE THE BELOW ROUTES ONCE PREACT IS SETUP
// Rooms
Route::post('/rooms', [RoomController::class, 'create'])->name('room.create');

Route::prefix('rooms')->group(function() {
	// Route::get('/{room}', function (Room $room) {
	// 	// Show a room based on it's id
	// 	$user = Auth::user();
	// 	if (!Auth::check()) {
	//         return redirect()->route('login');
	//     }
	// 	return view('room', [
	// 		'room' => $room,
	//     	'user' => $user
	// 	]);
	// });

	Route::post('/remove', [RoomController::class, 'remove'])->name('room.remove');
});

// move to API

Route::post('/friends/add', [UserFriendController::class, 'add'])->name('friends.add');

Route::post('/friends/cancel', [UserFriendController::class, 'cancel'])->name('friends.cancel');

// Route::get('/rooms/{room}', function ($id) {
// 	// Find a room based on it's id
// 	$room = Room::findOrFail($id);
// 	return view('room', [
// 		'room' => $room
// 	]);
// });
