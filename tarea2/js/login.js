// Código para la validación del login
document.getElementById("btn-login").addEventListener("click", login);

function validation_alert(ptext) {
    Swal.fire({
        title: "Falta entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/eb03989f-5478-4313-b2b6-ac4a6b3888d8/qCcCHjN5wn.json"></iframe><br><p>' + ptext + "</p>",
    });
}

function login() {
    let user_input = document.getElementById("usuario").value;
    let pass_input = document.getElementById("contra").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["usuario", "contra"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Completar los campos requeridos.";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password){
            Swal.fire({
                title: "Un momento",
                showConfirmButton: false,
                timer: 2000,
                html: '<iframe src="https://lottie.host/embed/8c3ed3ab-4d61-46ca-aa43-befbbcbd8225/Jk7CPyLLK9.json"></iframe>',
            }).then(() => {
                window.location.href = "landing.html";
            });
        } else {
            text = "Datos incorrectos.";
            validation_alert(text);
        }
    }
}
