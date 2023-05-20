<?php

namespace Database\Seeders;

use App\Models\CurrentOrganisationModel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();
        DB::table('current_organisations')->truncate();
        
        $user = UserModel::create([
            "name" => "John Smith",
            "email" => "john.smith@example.com",
            "profile_picture_url" => "https://placehold.co/600x400.png",
            "email_verified_at" => "2022-01-01 15:38:33.0",
            "identification_number" => "S9****567A",
        ]);

        $current_organisations = CurrentOrganisationModel::create([
            "name" => "Sample Bank ABC",
            "logo_url" => "https://placehold.co/600x400.png",
            "is_personal" => false,
        ]);

        $user->current_organisations()->associate($current_organisations);
        $user->save();
    }
}
