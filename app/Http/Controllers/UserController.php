<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use App\Models\CurrentOrganisationModel;

class UserController extends Controller
{
    public function index(Request $request) 
    {
        $user = UserModel::with('current_organisations')->first();

        $response = [
            'data' =>  $user
        ];

        return response() -> json($response);
    }
}
