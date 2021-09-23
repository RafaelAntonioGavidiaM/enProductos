<?php
require "conexion.php";
class modeloProductos
{


    public static function mdlInsertar($nombre, $descripcion, $stock, $unidadMedida, $imagen)
    {

        $mensaje = "";

        $nombreArchivo = $imagen['name'];
        $extencion = substr($nombreArchivo, -4);
        $rutaArchivo = "../vista/imagenesProductos/" . $nombre . $extencion;
        $url = "vista/imagenesProductos/" . $nombre . $extencion;

        if (($extencion == ".jpg" || $extencion == ".JPG") || ($extencion == ".png" || $extencion == ".PNG") || ($extencion == ".jpng" || $extencion == ".JPNG")) {

            if (move_uploaded_file($imagen['tmp_name'], $rutaArchivo)) {

                try {
                    $objConexion = conexion::conectar()->prepare("INSERT INTO producto(nombre,descripcion,stock,unidadMedida,imagen) values(:n,:d,:s,:u,:i)");
                    $objConexion->bindParam(":n", $nombre, PDO::PARAM_STR);
                    $objConexion->bindParam(":d", $descripcion, PDO::PARAM_STR);
                    $objConexion->bindParam(":s", $stock, PDO::PARAM_INT);
                    $objConexion->bindParam(":u", $unidadMedida, PDO::PARAM_STR);
                    $objConexion->bindParam(":i", $url, PDO::PARAM_STR);

                    if($objConexion->execute()){

                        $mensaje="ok";

                    }
                    else{
                        $mensaje="error";

                    }
                    
                } catch (Exception $th) {
                $mensaje=$th;
                }

               

            }else{
                $mensaje="no se pudo mover la imagen";

            }
        }
        else{
            $mensaje="El formato de la imagen es incompatible";


        }

        return $mensaje;

    }

    public static function mdlListarProductos(){

        $objConsulta=conexion::conectar()->prepare("SELECT * from producto");
        $objConsulta->execute();
        $lista=$objConsulta->fetchAll();
        $objConsulta=null;
        return $lista;



    }

    
    
}
