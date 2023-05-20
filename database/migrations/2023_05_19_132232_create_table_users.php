<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('profile_picture_url');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('identification_number');
            $table->unsignedBigInteger('current_organisation_id')->nullable();
            $table->timestamps();

            $table->foreign('current_organisation_id')->references('id')->on('current_organisations');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
