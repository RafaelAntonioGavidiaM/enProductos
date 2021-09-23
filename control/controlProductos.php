<?php

require "../modelo/modeloProductos.php";

class controlProductos{

public $idProducto;
public $nombre;
public $descripcion;
public $stock;
public $unidadMedida;
public $imagen;
public $imagenAnterior;


public function ctrlInsertar(){

    $objRespuesta=modeloProductos::mdlInsertar($this->nombre,$this->descripcion,$this->stock,$this->unidadMedida,$this->imagen);
    echo json_encode($objRespuesta);

    

}

public function ctrlListarProductos(){
    $objRespuesta=modeloProductos::mdlListarProductos();
    echo json_encode($objRespuesta);


}

public function ctrlEliminarProductos(){

    $objRespuesta = modeloProductos::mdlEliminar($this->idProducto, $this->imagen);
    echo json_encode($objRespuesta);

}

public function ctrlModificarProductos(){
    $objRespuesta=modeloProductos::mdlModificarProducto($this->idProducto,$this->nombre,$this->descripcion,$this->imagen,$this->imagenAnterior,$this->unidadMedida,$this->stock);
    echo json_encode($objRespuesta);

}

}

if(isset($_POST["nombre"]) && isset($_POST["descripcion"]) && isset($_POST["stock"]) && isset($_POST["unidadMedida"]) && isset($_FILES["imagen"])){
    
    $objInsertar = new controlProductos();
    $objInsertar->nombre=$_POST["nombre"];
    $objInsertar->descripcion=$_POST["descripcion"];
    $objInsertar->stock=$_POST["stock"];
    $objInsertar->unidadMedida=$_POST["unidadMedida"];
    $objInsertar->imagen=$_FILES["imagen"];
    $objInsertar->ctrlInsertar();






}
if(isset($_POST["listarProductos"])){

    $objListar= new controlProductos();
    $objListar->ctrlListarProductos();

}
if(isset($_POST["eIdProducto"]) && isset($_POST["eimagen"])){

    $objEliminar= new controlProductos();
    $objEliminar->idProducto=$_POST["eIdProducto"];
    $objEliminar->imagen=$_POST["eimagen"];
    $objEliminar->ctrlEliminarProductos();




}
if(isset($_POST["id"]) && isset($_POST["mNombre"]) && isset($_POST["mDescripcion"]) && isset($_POST["mStock"]) && isset($_POST["mUnidadMedida"]) ){

    $objModificar= new  controlProductos();
    $objModificar->nombre=$_POST["mNombre"];
    $objModificar->descripcion=$_POST["mDescripcion"];
    $objModificar->stock=$_POST["mStock"];
    $objModificar->unidadMedida=$_POST["mUnidadMedida"];
    $objModificar->idProducto=$_POST["id"];

    if(isset($_FILES["mImagen"]) && isset($_POST["imagenAnterior"])){
        $objModificar->imagen=$_FILES["mImagen"];
        $objModificar->imagenAnterior=$_POST["imagenAnterior"];


    }
    else if(isset($_POST["mImagen"]) ){
        $objModificar->imagenAnterior=$_POST["mImagen"];
        $objModificar->imagen=null;



    }

    $objModificar->ctrlModificarProductos();




}



