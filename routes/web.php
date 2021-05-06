<?php

use App\Models\Room;
use App\Models\User;
use App\Http\Controllers\RoomController;
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

Route::post('/rooms', [RoomController::class, 'create'])->name('room.create');

Route::get('/rooms/{room}', function (Room $room) {
	// Show a room based on it's id
	$user = Auth::user();
	if (!Auth::check()) {
        return redirect()->route('login');
    }
	return view('room', [
		'room' => $room,
    	'user' => $user
	]);
});

// Route::get('/rooms/{room}', function ($id) {
// 	// Find a room based on it's id
// 	$room = Room::findOrFail($id);
// 	return view('room', [
// 		'room' => $room
// 	]);
// });