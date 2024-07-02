const empleados = [];

function agregarEmpleado() {
    const nombre = document.getElementById('nombre').value,
        apellido = document.getElementById('apellidos').value,
        horas = document.getElementById('horas').value;

    if(nombre === '' || apellido === '' || isNaN(horas)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Campos incompletos",
          });
    } else {
        const pago = (horas * 2500);
        
        empleados.push({ nombre, apellido, pago });

        const selectEmpleados = document.getElementById('seleccionarEmpleado');
        const option = document.createElement('option');

        option.value = nombre + ' ' + apellido;
        option.text = nombre + ' ' + apellido;

        selectEmpleados.appendChild(option);

        Swal.fire({
            icon: "success",
            title: "Información guardada",
            showConfirmButton: true,
          });
    }
}


function calcularSalario() {
    const nombreSeleccionado = document.getElementById('seleccionarEmpleado').value;
    const resultado = document.getElementById('resultado');

    let empleadoSelec = null;

    for (let i = 0; i < empleados.length; i++) {
        const empleado = empleados[i];
        const nombreComp = empleado.nombre + ' ' + empleado.apellido;

        if (nombreComp === nombreSeleccionado) {
            empleadoSelec = empleado;
            break;
        }
    }

    if (empleadoSelec) {
        const salarioEmpleado = empleadoSelec.pago;
        resultado.textContent = 'El pago de ' + nombreSeleccionado + ' es de ₡' + salarioEmpleado;
    } else {
        resultado.textContent = '';
    }
}


function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('horas').value = '';

}