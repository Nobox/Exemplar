@extends('layouts.master')

@section('content')
    <div class="row hidden">
        <div class="col-md-12">
            <h1>Trivia</h1>
            <a href="#" class="btn btn-primary">Start here</a>
        </div>
    </div>
    <div class="row hidden">
        <div class="col-md-12">
            <h1>Question 1?</h1>
            <ul class="list-unstyled">
                <li>
                    <div class="checkbox">
                        <label><input type="checkbox"> Choice 1</label>
                    </div>
                </li>
                <li>
                    <div class="checkbox">
                        <label><input type="checkbox"> Choice 1</label>
                    </div>
                </li>
                <li>
                    <div class="checkbox">
                        <label><input type="checkbox"> Choice 1</label>
                    </div>
                </li>
                <li>
                    <div class="checkbox">
                        <label><input type="checkbox"> Choice 1</label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div class="row hidden">
        <div class="col-md-12">
            <h1>Congrats, you finished!</h1>
        </div>
    </div>
@stop
