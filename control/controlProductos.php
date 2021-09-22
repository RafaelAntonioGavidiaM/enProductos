<?php

require "../modelo/modeloProductos.php";

class controlProductos{

public $idProducto;
public $nombre;
public $descripcion;
public $stock;
public $unidadMedida;
public $imagen;


public function ctrlInsertar(){

    $objRespuesta=modeloProductos::mdlInsertar($this->nombre,$this->descripcion,$this->stock,$this->unidadMedida,$this->imagen);
    echo json_encode($objRespuesta);

    

}

public function ctrlListarProductos(){
    $objRespuesta=modeloProductos::mdlListarProductos();
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


