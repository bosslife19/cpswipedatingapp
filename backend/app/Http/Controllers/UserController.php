<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function getSubscribed($id){
        $user = Auth::user();
        $subscribedUsers = User::whereIn('id', $user->subscribed)->where('id', '!=', $id)->get();

            return response()->json(['subscribed_users' => $subscribedUsers]);
    }

    public function getAll($id){
        $users = User::where('id', '!=', $id)->get();
        
        return response($users, 200);
    }

    public function requestSubscribe($id){
       $validatedData = request()->validate(['username' =>"required|string"]);
       $user = User::find($id);
       $user->subscription_requests =array_unique(array_merge((array) $user->subscription_requests, [$validatedData['username']]));

       $user->save();

       return response($user,200);
    }

    public function subscribe(Request $request){
        $subscribingAccount = $request->username;
        $user = Auth::user();
        $user->subscribed = array_unique(array_merge((array) $user->subscribed, [$subscribingAccount]));
        $user->subscription_requests = array_diff( $user->subscription_requests, [$subscribingAccount]);

        $user->save();

        return response($user,200);
    }

    public function rejectSubscribe(Request $request){
        $subscribingAccount = $request->username;
        $user = Auth::user();

        $user->subscription_requests = array_diff( $user->subscription_requests, [$subscribingAccount]);

        $user->save();

        return response($user,200);
    }

    public function updatePaymentDetails(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([

            'subscriptionPrice'=>"required|integer",
            'paymentDetails' => 'required|string',
        ]);

        // Update the user's payment details in the database
        $user = Auth::user();
        $user->subscription_amount = $validatedData['subscriptionPrice'];
        $user->subscription_payment_details = $validatedData['paymentDetails'];
        $user->save();

        return response()->json(['message' => 'User payment details updated successfully']);
    }

    public function getPaymentDetails($id){
        $user = User::find($id);

        $price = $user->subscription_amount;
        $paymentDetails= $user->subscription_payment_details;

        return response(['price'=>$price, 'paymentDetails'=>$paymentDetails], 200);


    }

    public function getUser($id){
        $user = User::find($id);

        return response($user, 200);
    }
    public function getPotentials($id){
        $user = Auth::user();
        
        $potentials = User::where('age', '>=', $user->age)
        ->where('age', '<=', $user->age + 5)
        // ->where('type', $user->type)
        ->where('id', '!=', $id)
        ->get();

        return response($potentials, 200);
    }

    public function search(Request $request){
        $user = $request['username'];

        $result = User::where('username', 'like', '%' . $user . '%')->get();

        return response($result, 200);
    }

    public function getAllMen($id){
        $user = Auth::user();

        $men = User::where('gender', 'male')->where('id', '!=', $id)->get();

        return response($men, 200);
    }

    public function getAllWomen($id){
        $user = Auth::user();

        $men = User::where('gender', 'female')->where('id', '!=', $id)->get();

        return response($men, 200);
    }
    

    public function upload(Request $request)
    {
        
        $request->validate([
            'image' => 'required|mimes:jpeg,png,jpg,gif,mp4,mkv', // Adjust validation rules as needed
        ]);

        $user = auth()->user(); // Assuming you have authentication set up

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $imagePath = $image->storeAs('public/images', $imageName); // Store image in storage/app/public/images

        $userImages = $user->images ?? [];
        $userImages[] = 'http://localhost:8000' . Storage::url($imagePath); // Add image URL to user's images array
        $user->images = $userImages;
        $user->save();

        $imageSent = 'http://localhost:8000' . Storage::url($imagePath);
       


        return response(['image_url' => $imageSent], 200);
       
    }

    public function uploadProfileImage(Request $request){
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust validation rules as needed
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('profile_images', $imageName, 'public');

            $user = Auth::user(); // Assuming you have authentication set up
        $user->profileImg = $imagePath;
        $user->save();

        $imageUrl = Storage::url($user->profileImg);
        
        $imageSent = "http://localhost:8000" . $imageUrl;
        $user->profileImg = $imageSent;
        $user->save();
            return response(['image_path' => $imageSent], 200);
        } else {
            return response(['message' => 'Image not found.'], 400);
        }
    }
}


