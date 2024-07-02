function evaluar() {
    var clinica = document.getElementById("clinica").checked;
    var grooming = document.getElementById("grooming").checked;
    var respuesta2 = document.querySelector('input[name="preg2"]:checked');
    var respuesta3 = document.querySelector('input[name="preg3"]:checked');

    if ((!clinica && !grooming) || !respuesta2 || !respuesta3) {
        Swal.fire({
            title: "Atención usuario",
            text: "No deje campos vacíos!",
            icon: "warning",
        });
    } else {
        var mensaje1 = "";
        if (respuesta2.value === "Buena") {
            mensaje1 = "Nos alegra saber que recibiste el servicio deseado.";
        } else if (respuesta2.value === "Regular") {
            mensaje1 = "Tomaremos en cuenta tus comentarios para seguir mejorando y ofrecerte una mejor experiencia en el futuro.";
        } else {
            mensaje1 = "Gracias por su opinión y lamentamos que el servicio no fuera el deseado..";
        }

        var mensaje2 = respuesta3.value === "Si"
            ? "Agradecemos sinceramente tu opinión positiva y tu recomendación sobre nuestro servicio."
            : "Lamentamos que no recomendarías nuestro servicio.";


        Swal.fire({
            title: "Gracias por calificarnos.",
            html:"<iframe src='https://lottie.host/embed/5279d927-4be1-4d29-9d81-11b310a40e6e/d9SSl1txUs.json'></iframe> <br>" + mensaje1 + "<br><br><strong>Sobre la recomendación: </strong>" + mensaje2        
        });
    }
}

function limpiarFormulario() {
    document.getElementById("clinica").checked = false;
    document.getElementById("grooming").checked = false;

    document.querySelectorAll('input[name="preg2"]').forEach(radio => (radio.checked = false));
    document.querySelectorAll('input[name="preg3"]').forEach(radio => (radio.checked = false));
}
