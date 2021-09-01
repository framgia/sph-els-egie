<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\QuizController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
});

Route::get('user-list', [UserController::class, 'index']);
Route::get('user-profile/{id}', [UserController::class, 'show']);
Route::get('edit-profile/{id}', [UserController::class, 'edit']);
Route::post('update-profile/{id}', [UserController::class, 'update']);

Route::get('categories', [QuizController::class, 'index']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
