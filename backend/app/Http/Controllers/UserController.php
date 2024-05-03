<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getSubscribed(){
        $user = Auth::user();
        $subscribedUsers = User::whereIn('id', $user->subscribed)->get();

            return response()->json(['subscribed_users' => $subscribedUsers]);
    }

    public function getAll(){
        $users = User::all();
        
        return response($users, 200);
    }

    public function subscribe(Request $request){
        $subscribingAccount = $request->id;
        $user = Auth::user();
        $user->subscribed = array_unique(array_merge((array) $user->subscribed, [$subscribingAccount]));

        $user->save();

        return response($user,200);
    }
    public function getPotentials(){
        $user = Auth::user();
        
        $potentials = User::where('age', '>=', $user->age)
        ->where('age', '<=', $user->age + 5)
        ->where('type', $user->type)
        ->get();

        return response($potentials, 200);
    }

    public function search(Request $request){
        $user = $request['user'];

        $result = User::where('username', 'like', '%' . $user . '%')->get();

        return response($result, 200);
    }

    public function getAllMen(){
        $user = Auth::user();

        $men = User::where('gender', 'male')->get();

        return response($men, 200);
    }

    public function getAllWomen(){
        $user = Auth::user();

        $men = User::where('gender', 'female')->get();

        return response($men, 200);
    }
    

    public function upload(Request $request)
    {
        
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $file = $request->file('file');

            $authUser = Auth::user();
            // Determine if it's an image or video based on the MIME type
            
           
                // Handle image upload
                $path = $file->store('images', 'public');
                $authUser['images'] = [$path];
                $authUser->save();
            
                // Handle video upload
               

            return response()->json(['path' => $path]);
        }

       
    }
}


