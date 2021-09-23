$(document).ready(function() {


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
                
                respuesta.forEach(listaProductos)

                function listaProductos(item, index){

                    var foto = '<img src="'+ item.imagen +'" high="40" width="40">';
                    var objBotones =  '<button id="btnEditarProducto" type="button" class="btn btn-warning" idProducto="'+ item.idProducto +'" nombre= "' + item.nombre + '" descripcion= "' + item.descripcion + '" stock="' + item.stock + '" unidadMedida="' + item.unidadMedida + '" imagen = "' + item.imagen + '"><span class="glyphicon glyphicon-pincel" aria-hidden="true"></span></button>'
                    objBotones += '<button id="btnEliminarProducto" type="button" class="btn btn-danger" idProducto = "' + item.idProducto + '"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';
                    
                    dataSet.push([item.nombre , item.descripcion, item.stock, item.unidadMedida, foto, objBotones]);
                
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

                }

            }

        })





    })
})