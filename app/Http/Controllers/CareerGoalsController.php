<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CareerGoalsModel;

class CareerGoalsController extends Controller
{
    
    public function index(Request $request) {
        $careers = CareerGoalsModel::all();

        $response = [
            'data' => $careers
        ];

        return response()->json($response);
    }

}
