<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(SignupRequest $request)
    {

      $validated = $request->validated();

      try {
        //code...
        if($validated){

          if($request['age'] < 18){
            return response('You are less than 18!', 403);
          }
            $user = User::create([
                'email'=>$request['email'],
                'password'=>bcrypt($request['password']),
                'username'=>$request['username'],
                "name"=>$request['name'],
                'gender'=>$request['gender'],
                'type'=>$request['type'],
                "age"=>$request['age'],
                'profileImg'=>$request['profileImg'],
                "images"=>$request['images']
            ]);

            $token = $user->createToken("main")->plainTextToken;


        return response(['user'=>$user,'token'=>$token], 200);
        }
      } catch (\Throwable $th) {
        throw $th;
        return response('error', 500);
      }
        
       

        
    }

    public function login(LoginRequest $request){
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response(['message'=>'User credentials are not valid'], 422);
        }

        $user = Auth::user();

       $token =  $user->createToken('main')->plainTextToken;

       return response(['user'=>$user,'token'=>$token]);

        


    }

    public function logout (Request $request){
/** @var User $user */
        $user = Auth::user();

        $user->currentAccessToken()->delete();
        return response('loggedout', 204);


    }
}
