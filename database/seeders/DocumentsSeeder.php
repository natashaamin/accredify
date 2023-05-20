<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DocumentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('documents')->truncate();

        DB::table('documents')->insert([
            'status' => 'issued',
            'document_name' => 'SWAB Test Result',
            'issuer_name' => 'ISSUER NAME',
            'issuer_logo_url' => 'https://placehold.co/600x400.png',
            'recipient_name' => 'John Frusciante',
            'received_on' => '2022-01-12T17:58:25.000000Z',
            'expire_at' => '2023-01-12T00:00:00.000000Z',
        ]);
    }
}
