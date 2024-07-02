window.onload = function () {
    var a = "";
    var n = "";

    document.getElementById('servicio').onchange = function (e) {
        a = e.target.value;
        var imagen = "";

        if (a == "Grooming") {
            imagen = "images/grooming.jpg";
        } else if (a == "Checkeo General") {
            imagen = "images/checkeo.jpg";
        } else if (a == "Examen de Sangre") {
            imagen = "images/examen.jpg";
        }
        document.getElementById("imagen").src = imagen;
    }

    document.getElementById("tamahno").onchange = function (es) {
        n = es.target.value;
    }
}

function calcular() {
    var servicioSeleccionado = document.getElementById('servicio').value;
    var tamahnoSeleccionado = document.getElementById('tamahno').value;

    // Validación de selección de servicio y tamaño de mascota
    if (servicioSeleccionado === "Seleccione un servicio:" || tamahnoSeleccionado === "Seleccione el tamaño de su mascota:") {
        Swal.fire({
            icon: "info",
            title: "Atencion",
            text: "Seleccionar el servicio y tamaño de su mascota.",
        });
        return;
    }

    var montoCuota = 0;
    switch (servicioSeleccionado) {
        case "Grooming":
            if (tamahnoSeleccionado === "Pequeña") montoCuota = 5000;
            else if (tamahnoSeleccionado === "Mediana") montoCuota = 10000;
            else if (tamahnoSeleccionado === "Grande") montoCuota = 15000;
            break;

        case "Checkeo General":
            if (tamahnoSeleccionado === "Pequeña") montoCuota = 10000;
            else if (tamahnoSeleccionado === "Mediana") montoCuota = 15000;
            else if (tamahnoSeleccionado === "Grande") montoCuota = 20000;
            break;

        case "Examen de Sangre":
            if (tamahnoSeleccionado === "Pequeña") montoCuota = 15000;
            else if (tamahnoSeleccionado === "Mediana") montoCuota = 20000;
            else if (tamahnoSeleccionado === "Grande") montoCuota = 25000;
            break;
    }

    Swal.fire({
        title: "Calculo del pago",
        icon: "info",
        html: `El pago aproximado del servicio ` + servicioSeleccionado + ' para una mascota ' +tamahnoSeleccionado+ " es de: ₡" + montoCuota,
        focusConfirm: false,
        confirmButtonText: `Ok`,
      });
}
