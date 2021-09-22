<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <!-- sweetAlert -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!-- DataTables -->
    <!-- Por Defecto -->
    <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css'>
    <!-- Botones Exportacion-->
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.colVis.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/1.7.1/js/buttons.print.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.25/js/dataTables.jqueryui.min.js"></script>


    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/buttons/1.7.1/css/buttons.dataTables.min.css'>
    <link rel='stylesheet' type='text/css' media='screen' href='https://cdn.datatables.net/colreorder/1.5.4/css/colReorder.dataTables.min.css'>
    <!---------------------------------------------------------------------------------------------------------------------------------------->
    <link rel='stylesheet' type='text/css' media='screen' href='vista/css/main.css'>
    <script src='vista/js/main.js'></script>
</head>

<body>
    <header>
        <h1>Reto</h1>
    </header>

    <div class="container">
        <div class="col-sm-12">
            <div class="col-ms-6">
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="text">Nombre:</label>
                        <input type="text" class="form-control" id="txtNombre">
                    </div>
                    <div class="form-group">
                        <label for="text">txtDescripcion:</label>
                        <input type="text" class="form-control" id="txtDescripcion">
                    </div>
                    <div class="form-group">
                        <label for="text">Stock:</label>
                        <input type="text" class="form-control" id="txtStock">
                    </div>
                    <div class="form-group">
                        <label for="text">Unidad de medida:</label>
                        <input type="text" class="form-control" id="txtUnidadMedida">
                    </div>
                    <div class="form-group">
                        <label for="text">Imagen:</label>
                        <input type="text" class="form-control" id="imagen">
                    </div>

                    <button type="submit" id="btnRegistrar" class="btn btn-primary">Registrar</button>

                </form>

            </div>
            <div class="col-sm-6">

                <table id="tablaProductos" class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                            <th>Stock</th>
                            <th>Unidad de medida</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody id="bodyTablaProductos">

                    </tbody>
                </table>

            </div>
        </div>
    </div>

</body>

</html>