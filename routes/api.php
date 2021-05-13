<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\RoomResource;
use App\Models\Room;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// https://stackoverflow.com/questions/49884611/api-requests-with-axios-always-unauthorized-with-laravel-api/66945025#66945025

Route::middleware('auth')->get('/rooms', function(Request $request) {
	$user = $request->user();
	return response()->json(RoomResource::collection($user->rooms));
});
