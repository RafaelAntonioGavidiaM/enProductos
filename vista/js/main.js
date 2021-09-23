$(document).ready(function() {

    // -------------------------------------METODOS O FUNCIONES .-. --------------------------------------
    listarProducto();

    //---------------------------------------Variables-----------------------------------------------------


    // --------------------------------------------------------------------------------------------
    // ------------------------------Listar Productos Registrados----------------------------------
    // --------------------------------------------------------------------------------------------


    function listarProducto() {

        var listarProductos = "ok";
        var objListaProctos = new FormData();
        objListaProctos.append("listarProductos", listarProductos);

        $.ajax({

            url: "control/controlProductos.php",
            type: "post",
            dataType: "json",
            data: objListaProctos,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta) {


                var dataSet = [];

                respuesta.forEach(listaProductos)

                function listaProductos(item, index) {

                    var foto = '<img src="' + item.imagen + '" high="40" width="40">'; <<
                    <<
                    <<
                    < HEAD
                    var objBotones = '<button id="btnEditarProducto" type="button" class="btn btn-warning" idProducto="' + item.idProducto + '" nombre= "' + item.nombre + '" descripcion= "' + item.descripcion + '" stock="' + item.stock + '" unidadMedida="' + item.unidadMedida + '" imagen = "' + item.imagen + '" data-toggle="modal" data-target="#modalModificar"><span class="glyphicon glyphicon-pincel" aria-hidden="true"></span></button>'
                    objBotones += '<button id="btnEliminarProducto" type="button" class="btn btn-danger" idProducto = "' + item.idProducto + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'; ===
                    ===
                    =
                    var objBotones = '<button id="btnEditarProducto" type="button" class="btn btn-warning" idProducto="' + item.idProducto + '" nombre= "' + item.nombre + '" descripcion= "' + item.descripcion + '" stock="' + item.stock + '" unidadMedida="' + item.unidadMedida + '" imagen = "' + item.imagen + '"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'
                    objBotones += '<button id="btnEliminarProducto" type="button" class="btn btn-danger" idProducto = "' + item.idProducto + '" imagen = "' + item.imagen + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'; >>>
                    >>>
                    >
                    51e37 f15edf8b38de0b10f52a3dc2aafeb5373a2

                    dataSet.push([item.nombre, item.descripcion, item.stock, item.unidadMedida, foto, objBotones]);

                }


                $('#tablaProductos').DataTable({
                    data: dataSet,
                    dom: 'Bfrtip',
                    buttons: [{
                            extend: 'excelHtml5',
                            exportOptions: {

                                colums: [0, ':visible']

                            }
                        },

                        {
                            extend: 'pdfHtml5',
                            exportOptions: {

                                colums: [0, ':visible']

                            }
                        },



                        'colvis'

                    ],

                    language: {
                        "decimal": "",
                        "emptyTable": "No data available in table",
                        "info": "Showing _START_ to _END_ of _TOTAL_ entries",
                        "infoEmpty": "Showing 0 to 0 of 0 entries",
                        "infoFiltered": "(filtered from _MAX_ total entries)",
                        "infoPostFix": "",
                        "thousands": ",",
                        "lengthMenu": "Show _MENU_ entries",
                        "loadingRecords": "Loading...",
                        "processing": "Processing...",
                        "search": "Buscar:",
                        "zeroRecords": "No se encuentro registros con el criterio de busqueda",
                        "paginate": {
                            "first": "Primero",
                            "last": "Ultimo",
                            "next": "Siguiente",
                            "previous": "Anterior"
                        },
                        "aria": {
                            "sortAscending": ": activate to sort column ascending",
                            "sortDescending": ": activate to sort column descending"
                        }
                    }
                });

            }















        })

    }

    // --------------------------------------------------------------------------------------------
    // ------------------------------Resgitrar Producto-----------------------------
    // --------------------------------------------------------------------------------------------

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

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Registro Exitosa',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    iniciarTablaProductos();
                    listarProducto();

                }

            }

        })
    })

    $("#tablaProductos").on("click", "#btnEliminarProducto", function() {

        Swal.fire({
                title: '¿Seguro quieres eliminar este producto?',
                text: "Una vez eliminado no se podra recuperar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, Eliminar!'
            })
            .then((willDelete) => {
                if (willDelete) {

                    var idProducto = $(this).attr("idProducto");
                    var imagen = $(this).attr("imagen");

                    var objData = new FormData();
                    objData.append("eIdProducto", idProducto);
                    objData.append("eimagen", imagen);

                    $.ajax({
                        url: "control/controlProductos.php",
                        type: "post",
                        dataType: "json",
                        data: objData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function(respuesta) {

                            Swal.fire(
                                'Eliminado!',
                                'El Producto fue eliminado',
                                'success'
                            )
                            iniciarTablaProductos();
                            listarProducto();
                            iniciarTablaProductos()

                        }


                    })

                }
            })

    });

    // --------------------------------------------------------------------------------------------
    // ------------------------------Destruir datatable de producto--------------------------------
    // --------------------------------------------------------------------------------------------

    function iniciarTablaProductos() {

        var tablaProducto = $("#tablaProductos").DataTable();
        tablaProducto.destroy();


    }

    var idProducto = 0;
    var imagenAnterior = "";

    $("#tablaProductos").on("click", "#btnEditarProducto", function() {

        idProducto = $(this).attr("idProducto");
        var nombre = $(this).attr("nombre");
        var descripcion = $(this).attr("descripcion");
        var stock = $(this).attr("stock");
        var medidaUnidad = $(this).attr("unidadMedida");
        var Imagen = $(this).attr("imagen");
        $("#mNombre").val(nombre);
        $("#mDescripcion").val(descripcion);
        $("#mstock").val(stock);
        $("#mUnidadMedida").val(medidaUnidad);
        // $("#mImagen").val(Imagen);
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
        objData.append("id", idProducto);



        if (imagen == null || imagen == "") {

            objData.append("mImagen", imagenAnterior);





        } else {
            objData.append("mImagen", imagen);
            objData.append("imagenAnterior", imagenAnterior);


        }


        $.ajax({
            url: "control/controlProductos.php",
            type: "post",
            dataType: "json",
            data: objData,
            cache: false,
            contentType: false,
            processData: false,
            success: function(respuesta) {
                iniciarTablaProductos();
                listarProducto();



            }



        })












    })


})