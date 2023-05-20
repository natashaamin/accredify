<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocumentsModel;

class DocumentsController extends Controller
{

    public function index(Request $request)
    {
        $documents = DocumentsModel::all();

        $response = [
            'data' => $documents,
            'links' => [
                'first' => $request->url(),
                'last' => $request->url(),
                'prev' => null,
                'next' => null
            ],
            'meta' => [
                'current_page' => 1,
                'from' => 1,
                'last_page' => 1,
                'links' => [
                    [
                        'url' => null,
                        'label' => 'pagination.previous',
                        'active' => false,
                    ]
                ],
                'path' => $request->url(),
                'per_page' => 10,
                'to' => $documents->count(),
                'total' => $documents->count()
            ]

        ];
        return response()->json($response);
    }

    public function seedData()
    {
        $data = [
            [
                'status' => 'issued',
                'document_name' => 'SWAB Test Result',
                'issuer_name' => 'ISSUER NAME',
                'issuer_logo_url' => 'https://placehold.co/600x400.png',
                'recipient_name' => 'John Frusciante',
                'received_on' => '2022-01-12T17:58:25.000000Z',
                'expire_at' => '2023-01-12T00:00:00.000000Z',
            ],
            // Add more dummy data as needed
        ];

        // Insert dummy data into the documents table
        foreach ($data as $item) {
            DocumentsModel::create($item);
        }

        // Return a response indicating the success of the operation
        return response()->json(['message' => 'Dummy data seeded successfully'], 201);
    }
}