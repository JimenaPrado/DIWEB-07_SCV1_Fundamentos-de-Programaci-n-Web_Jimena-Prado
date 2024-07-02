function facturar() {
    var client = document.getElementById('cliente').value;
    var articulo = document.getElementById('artic').value;
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var precio = parseFloat(document.getElementById('precio').value);

    if (client === "" || articulo === "" || isNaN(cantidad) || isNaN(precio)) {
        Swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "No dejar campos vacios",
        });
    } else {
        var subTotal = cantidad * precio;
        var iva = subTotal * 0.13;
        var servicio = subTotal * 0.05;
        var totalPago = subTotal + iva + servicio;

        document.getElementById('clien').innerHTML = client;       
        document.getElementById('cant').innerHTML = cantidad;
        document.getElementById('articulo').innerHTML = articulo;
        document.getElementById('subtotal').innerHTML = "₡" + subTotal.toFixed(2);
        document.getElementById('iva').innerHTML = "₡" + iva.toFixed(2);
        document.getElementById('servicio').innerHTML = "₡" + servicio.toFixed(2);
        document.getElementById('total').innerHTML = "₡" + totalPago.toFixed(2);
    }
}

function btnLimpiar() {
    document.getElementById('cliente').value = "";
    document.getElementById('artic').value = "";
    document.getElementById('cantidad').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('clien').innerHTML = "";
    document.getElementById('articulo').innerHTML = "";
    document.getElementById('cant').innerHTML = "";
    document.getElementById('subtotal').innerHTML = "";
    document.getElementById('iva').innerHTML = "";
    document.getElementById('servicio').innerHTML = "";
    document.getElementById('total').innerHTML = "";
}