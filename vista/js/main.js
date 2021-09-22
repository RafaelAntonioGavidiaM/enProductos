$(document).ready(function () {


    function listarProducto(){

        var listarProductos = "ok";
        var objListaProctos = new FormData();
        objListaProctos.append("listarProductos",listarProductos);

        $.ajax({

            url: "control/controlProductos.php",
            type: "post",
            dataType: "json",
            data: objListaProctos,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta){


                var dataSet = [];
                var interface = "";
                respuesta.forEach(listaProductos)

                function listaProductos(item, index){

                    var foto = '<img src="'+ item.foto +'" high="40" width="40">';
                    var objBotones =  '<button id="btnEditarProducto" type="button" class="btn btn-warning" idProducto="'+ item.idProducto +'" nombre= "' + item.nombre + '" descripcion= "' + item.descripcion + '" stock="' + item.stock + '" unidadMedida="' + item.unidadMedida + '" imagen = "' + item.imagen + '"><span class="glyphicon glyphicon-pincel" aria-hidden="true"></span></button>'
                    objBotones += '<button id="btnEliminarProducto" type="button" class="btn btn-danger" idProducto = "' + item.idProducto + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'
                    




                }

            }












        })







    }


    $("#btnRegistrar").click(function () {

        var nombre = $("#txtNombre").val();
        var descripcion = $("#txtDescripcion").val();
        var stock = $("#txtStock").val();
        var unidadMedida = $("#txtUnidadMedida").val();
        var imagen = document.getElementById("txtImagen").files[0];

        var objData = new FormData();
        objData.append("nombre", nombre);
        objData.append("descripcion", descripcion);
        objData.append("stock", stock);
        objData.append("unidadMedida", unidadMedida);
        objData.append("imagen", imagen);


        $.ajax({

            url: "control/controlProductos.php",
            type: "post",
            dataType: "json",
            data: objListaProctos,
            cache: false,
            contentType: false,
            processData: false,
            success: function (respuesta) {

                if(respuesta = "ok"){

                    

                }

            }

        })





    })
})