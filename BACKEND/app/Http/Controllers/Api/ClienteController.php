<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CLiente;

class ClienteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $clientes=CLiente::all();
        return $clientes;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $cliente = new CLiente();
        $cliente->Correo= $request->Correo;
        $cliente->APaterno= $request->APaterno;
        $cliente->AMaterno= $request->AMaterno;
        $cliente->Nombres= $request->Nombres;
        $cliente->Mensaje= $request->Mensaje;
        $cliente->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $cliente = CLiente::find($id);
        return $cliente;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //
        $cliente = CLiente::findOrFail($request->id);
        $cliente->Correo= $request->Correo;
        $cliente->APaterno= $request->APaterno;
        $cliente->AMaterno= $request->AMaterno;
        $cliente->Nombres= $request->Nombres;
        $cliente->Mensaje= $request->Mensaje;
        $cliente->save();
        return $cliente;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $cliente=CLiente::destroy($id);
        return $cliente;
    }
}
