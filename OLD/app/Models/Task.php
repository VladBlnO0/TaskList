<?php

namespace App\Models;

use AllowDynamicProperties;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[AllowDynamicProperties]
class Task extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'long_description'];

    public function toggleComplete(): void
    {
        $this->completed = !$this->completed;
        $this->save();
    }
}
