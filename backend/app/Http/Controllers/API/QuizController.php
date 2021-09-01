<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes =  Quiz::all();

        return response()->json([
            'status' => 200,
            'quizzes' => $quizzes
        ]);
    }
}
