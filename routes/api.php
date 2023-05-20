<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CareerGoalsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/documents', [DocumentsController::class, 'index']);
Route::post('/documents/seed', [DocumentsController::class, 'seedData']);

Route::get('/user', [UserController::class, 'index'])->withoutMiddleware(['auth']);
Route::get('/career', [CareerGoalsController::class, 'index']);