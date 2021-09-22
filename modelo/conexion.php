<?php
class conexion
{
    public static function conectar()
    {
        $nombreServidor = "localhost";
        $dbNombre = "productos";
        $user = "root";
        $password = "";

        try {
            $objConexion = new PDO('mysql:host=' . $nombreServidor . ';dbname=' . $dbNombre . ';', $user, $password);
            $objConexion->exec("set names utf8");
        } catch (Exception $e) {
            $objConexion = $e;
        }
        return $objConexion;
    }
}
