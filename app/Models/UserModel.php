<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CurrentOrganisationModel;

class UserModel extends Model
{
    use HasFactory;

    protected $table = 'users';
    protected $guarded = [];

    public function current_organisations()
    {
        return $this->belongsTo(CurrentOrganisationModel::class, 'current_organisation_id');
    }
    

    // public function toObject()
    // {
    //     $userObject = new stdClass;
    //     $userObject->name = $this->name;
    //     $userObject->email = $this->email;
    //     $userObject->profile_picture_url = $this->profile_picture_url;
    //     $userObject->email_verified_at = $this->email_verified_at;
    //     $userObject->identification_number = $this->identification_number;
    //     $userObject->current_organisations = new stdClass;
    //     $userObject->current_organisations->id = $this->current_organisations->id;
    //     $userObject->current_organisations->name = $this->current_organisations->name;
    //     $userObject->current_organisations->logo_url = $this->current_organisations->logo_url;
    //     $userObject->current_organisations->is_personal = $this->current_organisations->is_personal;

    //     return $userObject;
    // }
}
