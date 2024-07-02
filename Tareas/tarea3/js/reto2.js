function convertir1() {
    const monto = parseFloat(document.getElementById('montoColones').value);
    const cambioDol = parseFloat(document.getElementById('tipoCambioDol').value);

    if (isNaN(monto) || isNaN(cambioDol)) {
        Swal.fire({
            icon: "error",
            title: "Campos no completados",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    } else {
        const conver1 = (monto / cambioDol);
        const resultado1 = conver1;

        Swal.fire({
            icon: 'success',
            html: '<b>El tipo de cambio es...</b>' + '<br>$' + resultado1,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ACEPTAR',
        });
    }
}

function convertir2() {
    const monto = parseFloat(document.getElementById('montoDolares').value);
    const cambioCol = parseFloat(document.getElementById('tipoCambioCol').value);

    if (isNaN(monto) || isNaN(cambioCol)) {
        Swal.fire({
            icon: "error",
            title: "Campos no completados",
            showClass: {
                popup: 'animate__animated animate__fadeIn'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        });
    } else {
        const conver2 = (monto * cambioCol);
        const resultado2 = conver2;

        Swal.fire({
            icon: 'success',
            html: '<b>El tipo de cambio es...</b>' + '<br>₡' + resultado2,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'ACEPTAR',
        });
    }
}

function limpiarConv() {
    document.getElementById('montoColones').value = '';
    document.getElementById('tipoCambioDol').value = '';
    document.getElementById('montoDolares').value = '';
    document.getElementById('tipoCambioCol').value = '';
}
