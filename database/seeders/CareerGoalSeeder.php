<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CareerGoalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('career_goals')->truncate();

        DB::table('career_goals')->insert([
            'name' => 'Account Manager',
            'description' => 'Manage maintain and grow the sales and relationships with a specific customer or set of accounts. This includes in-depth customer engagement relationship-building and provision of quality solutions and service to address customers needs efficiently and generate revenue',
            'category' => 'Sales and Marketing',
            'type' => 'technical',
            'progress' => 35,
        ]);

    }
}
