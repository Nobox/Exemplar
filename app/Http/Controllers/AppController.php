<?php

namespace App\Http\Controllers;

class AppController extends Controller
{
    /**
     * Show index page.
     *
     * @return Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }
}
