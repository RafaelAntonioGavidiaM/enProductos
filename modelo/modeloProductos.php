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

                    if ($objConexion->execute()) {

                        $mensaje = "ok";
                    } else {
                        $mensaje = "error";
                    }
                } catch (Exception $th) {
                    $mensaje = $th;
                }
            } else {
                $mensaje = "no se pudo mover la imagen";
            }
        } else {
            $mensaje = "El formato de la imagen es incompatible";
        }

        return $mensaje;
    }

    public static function mdlListarProductos()
    {

        $objConsulta = conexion::conectar()->prepare("SELECT * from producto");
        $objConsulta->execute();
        $lista = $objConsulta->fetchAll();
        $objConsulta = null;
        return $lista;
    }



    

    

    public static function mdlEliminar($idProducto,$imagen){

        $mensaje = "";

        if (!unlink("../" . $imagen)) {
            $mensaje = "No fue posible eliminar la imagen";
        } else {
            try {
                $objEliminarProducto = Conexion::conectar()->prepare("DELETE FROM producto WHERE idProducto='$idProducto'");
                if ($objEliminarProducto->execute()) {
                    $mensaje = "ok";
                } else {
                    $mensaje = "error";
                }
                $objEliminarProducto = null;
            } catch (Exception $e) {
                $mensaje = $e;
            }
        }

        return $mensaje;
    }

    public static function mdlModificarProducto($id, $nombre, $descripcion, $imagen, $imagenAnterior, $unidad, $stock)
    {

        $mensaje = "";

        






        if ($imagen == null) {

            
           $mensaje=modeloProductos::modificar($id, $nombre, $descripcion, $unidad, $stock, $imagenAnterior);
        } else {

            $nombreArchivo = $imagen['name'];
            $extension = substr($nombreArchivo, -4);
            $rutaArchivo = "vista/imagenesProductos/" . $nombre . $extension;
            $rutaMover = "../vista/imagenesProductos/" . $nombre . $extension;

            if (unlink("../" . $imagenAnterior)) {
                if (move_uploaded_file($imagen['tmp_name'], $rutaMover)) {

                    $mensaje=modeloProductos::modificar($id, $nombre, $descripcion, $unidad, $stock, $rutaArchivo);
                }
            }
        }

        return $mensaje;
    }


    public static  function modificar($idP, $n, $d, $u, $s, $ri)
    {

        $objModificar = conexion::conectar()->prepare("UPDATE producto set nombre=:n,descripcion=:d,stock=:s,unidadMedida=:u, imagen=:i where idProducto=:id");
        $objModificar->bindParam(":n", $n, PDO::PARAM_STR);
        $objModificar->bindParam(":d", $d, PDO::PARAM_STR);
        $objModificar->bindParam(":s", $s, PDO::PARAM_INT);
        $objModificar->bindParam(":u", $u, PDO::PARAM_STR);
        $objModificar->bindParam(":i", $ri, PDO::PARAM_STR);
        $objModificar->bindParam(":id", $idP, PDO::PARAM_INT);


        if ($objModificar->execute()) {

            $devolver = "ok";
        } else {
            $devolver = "error";
        }
        return $devolver;
    }
}
