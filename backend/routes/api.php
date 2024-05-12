<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function(){
Route::get('/user/potentials/{id}', [UserController::class, 'getPotentials']);
Route::get('/user/{id}', [UserController::class, 'getUser']);
Route::post('/user/paymentdetails', [UserController::class, 'updatePaymentDetails']);
Route::post('/user/requestsubscribe/{id}', [UserController::class, 'requestSubscribe']);
Route::get('/user/paymentdetails/{id}', [UserController::class, 'getPaymentDetails']);
Route::get('/user/men/{id}', [UserController::class, 'getAllMen']);
Route::get('/user/women/{id}', [UserController::class, 'getAllWomen']);
Route::post('/user/uploadprofile', [UserController::class, 'uploadProfileImage']);
Route::post('/user/upload', [UserController::class, 'upload']);
Route::post('/user/search', [UserController::class, 'search']);
Route::get('/user/subscribed/{id}', [UserController::class, 'getSubscribed']);
Route::post("/user/subscribe", [UserController::class, 'subscribe']);
Route::post("/user/rejectsubscribe", [UserController::class, 'rejectSubscribe']);
Route::get("/user/all/{id}", [UserController::class, 'getAll']);
Route::post('/logout', [AuthController::class,'logout']);
});

Route::post("/register", [AuthController::class, 'register']);
Route::post("/login", [AuthController::class, 'login']);