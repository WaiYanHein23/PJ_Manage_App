<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        $totalPendingTask=Task::query()
        ->where('status','pending')
        ->count();
        $myPendingTask=Task::query()
        ->where('status','pending')
        ->where('assigned_user_id',auth()->user()->id)
        ->count();

        $totalInProgressTask=Task::query()
        ->where('status','in_progress')
        ->count();
        $myInProgressTask=Task::query()
        ->where('status','in_progress')
        ->where('assigned_user_id',auth()->user()->id)
        ->count();

        $totalCompletedTask=Task::query()
        ->where('status','completed')
        ->count();
        $myCompletedTask=Task::query()
        ->where('status','completed')
        ->where('assigned_user_id',auth()->user()->id)
        ->count();

        $activeTasks=Task::query()
        ->whereIn('status',['pending','in_progress'])
        ->where('assigned_user_id',auth()->user()->id)
        ->limit(10)
        ->get();
        $activeTasks=TaskResource::collection($activeTasks);
        return inertia('Dashboard',compact('totalPendingTask','myPendingTask','totalInProgressTask','myInProgressTask','totalCompletedTask','myCompletedTask','activeTasks'));
    }
}
