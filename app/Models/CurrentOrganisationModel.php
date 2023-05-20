<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrentOrganisationModel extends Model
{
    use HasFactory;

    protected $table = 'current_organisations';
    protected $guarded = [];


    public function user()
    {
        return $this->hasMany(UserModel::class, 'current_organisation_id');
    }

}
