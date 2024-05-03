<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function(){
Route::get('/user/potentials', [UserController::class, 'getPotentials']);
Route::get('/user/men', [UserController::class, 'getAllMen']);
Route::get('/user/women', [UserController::class, 'getAllWomen']);
Route::post('/user/upload', [UserController::class, 'upload']);
Route::post('/user/search', [UserController::class, 'search']);
Route::get('/user/subscribed', [UserController::class, 'getSubscribed']);
Route::post("/user/subscribe", [UserController::class, 'subscribe']);
Route::get("/user/all", [UserController::class, 'getAll']);
Route::post('/logout', [AuthController::class,'logout']);
});

Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);