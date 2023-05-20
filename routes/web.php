<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // Handle your application's main view or redirect to another route
});

Route::get('/{path}', function () {
    abort(404); // Return a 404 error for routes other than /
})->where('path', '^(?!api).*$');
