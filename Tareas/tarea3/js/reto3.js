document.getElementById('veterinarias').addEventListener('change', function() {
    let seleccion = this.value;

    switch (seleccion) {
        case '1':
            window.location.href = 'https://medicalpetscr.com/';
            break;
        case '2':
            window.location.href = 'https://hospitalveterinariolagranjita.com/Pages/Inicio/Inicio.aspx';
            break;
        case '3':
            window.location.href = 'https://lavete.com/';
            break;
        case '4':
            window.location.href = 'https://www.facebook.com/InnovavetClinicaVeterinariaCR/?locale=es_LA';
            break;
        case '5':
            window.location.href = 'https://ejemplo.com/guanavet';
            break;
        default:
            break;
    }
});