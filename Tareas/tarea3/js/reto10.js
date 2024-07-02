function buscar() {
    var id = document.getElementById('NumeroIdentificacion').value;
    let nombreId = "";
    let regimenId = "";

    if (isNaN(id)) {
        Swal.fire({
            icon: "error",
            title: "Atencion usuario",
            text: "El número de identificación debe ser numérico.",
        });

    } else {
        if (id == 109110338) { 
            nombreId = "MANUEL JIMENEZ BONILLA";
            regimenId = "IVM";
            usuarioID = "109110338";
        } else if (id == 209110338) {
            nombreId = "DANIELA SALAZAR ARCE";
            usuarioID = "209110338";
            regimenId = "FONDO DE PENSIONES Y JUBILACIONES DEL PODER JUDICIAL";
        } else if (id == 309110338) {
            nombreId = "JUAN VARGAS ARCE";
            regimenId = "FONDO DE PENSIONES DEL MAGISTERIO NACIONAL";
            usuarioID = "309110338";
        } else if (id == 409110338) {
            nombreId = "VALERIA ZAMORA RAMIREZ";
            regimenId = "RCC";
            usuarioID = "409110338";
        } else if (id == 509110338) {
            nombreId = "SEAN WU";
            regimenId = "IVM";
            usuarioID = "509110338";
        } else {
            Swal.fire({
                icon: "info",
                title: "Atencion usuario",
                text: "El número de identificación no coincide con ningún registro",
            });
        }
        
        Swal.fire({
            title: "Averiguá tu régimen",
            icon: "info",
            html: "<strong>Nombre: </strong> " + nombreId + "<br><strong>Identificación: </strong>" + usuarioID + "<br><strong>Régimen: </strong>" + regimenId,
            focusConfirm: false,
            confirmButtonText: `Ok`,
            confirmButtonAriaLabel: "Thumbs up, great!",
          });
    }
    limpiarFormulario();
}

function limpiarFormulario() {
    document.getElementById('NumeroIdentificacion').value = '';
}

