<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('status');
            $table->string('document_name');
            $table->string('issuer_name');
            $table->string('issuer_logo_url');
            $table->string('recipient_name');
            $table->dateTime('received_on')->nullable();
            $table->dateTime('expire_at')->nullable();
            $table->timestamps();
            $table->dateTime('archived_at')->nullable();
            $table->dateTime('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documents');
    }
}
