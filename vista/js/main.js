$(document).ready(function() {


    // function listarProducto(){

    //     var listarProductos = "ok";
    //     var objListaProctos = new FormData();
    //     objListaProctos.append("listarProductos",listarProductos);

    //     $.ajax({

    //         url: "control/controlProductos.php",
    //         type: "post",
    //         dataType: "json",
    //         data: objListaProctos,
    //         cache: false,
    //         contentType: false,
    //         processData: false,
    //         success: function(respuesta){


    //             var dataSet = [];
    //             var interface = "";
    //             respuesta.forEach(listaProductos)

    //             function listaProductos(item, index){

    //                 var foto = '<img src="'+ item.foto +'" high="40" width="40">';
    //                 var botones =  <button id="btnEditarProducto" type="button" class="btn btn-warning" idProducto="'+ item.idProducto +'" nombre= "' + item.nombre + '" descripcion= "' + item.descripcion + '" stock="' + item.stock + '" unidadMedida="' + item.unidadMedida + '">button</button>




    //             }

    //         }












    //     })







    // }

























































































































    $("#btnRegistrar").click(function() {

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
            data: objData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta) {

                if (respuesta = "ok") {



                }

            }

        })





    })

    var idProducto = 0;
    var imagenAnterior = "";

    $("#tablaProductos").on("click", "#", function() {

        idProducto = $(this).attr("idProducto");
        var nombre = $(this).attr("nombre");
        var descripcion = $(this).attr("descripcion");
        var stock = $(this).attr("stock");
        var medidaUnidad = $(this).attr("unidadaMedida");
        var Imagen = $(this).attr("imagen");
        $("#mNombre").val(nombre);
        $("#mDescripcion").val(descripcion);
        $("#mstock").val(stock);
        $("#mUnidadMedida").val(medidaUnidad);
        $("#mImagen").val(Imagen);
        $("#imagenAnterior").attr("src", Imagen);
        imagenAnterior = Imagen;











    })


    $("#btnModificarProductos").click(function() {

        var nombre = $("#mNombre").val();
        var descripcion = $("#mDescripcion").val();
        var stock = $("#mstock").val();
        var medidaUnidad = $("#mUnidadMedida").val();
        var imagen = document.getElementById("mImagen").files[0];

        var objData = new FormData();

        objData.append("mNombre", nombre);
        objData.append("mDescripcion", descripcion);
        objData.append("mStock", stock);
        objData.append("mUnidadMedida", medidaUnidad);



        if (imagen == null || imagen == "" || imagen.empty()) {

            objData.append("mImagen", imagenAnterior);





        } else {
            objData.append("mImagen", imagen);
            objData.append("imagenAnterior", imagenAnterior);


        }


        $.ajax({
            url: "control/control/controlProductos.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta) {


            }



        })












    })




})