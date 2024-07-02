let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', elegir);

function elegir() {
    let eleccion = seleccionar.value;

    if (eleccion ==0) {
        descripcion.innerHTML = '';
    }

    if ( eleccion == 1) {
        resultado.innerHTML = '<img src="images/gato1.jpg" alt="gato1" class="img-fluid">'
        contenido.innerHTML = 'El gato esfinge, también conocido como Sphynx, es una raza única y llamativa por su falta de pelaje. Esta característica le da un aspecto distintivo y le hace resaltar entre otras razas. Es conocido por su naturaleza cariñosa, juguetona y sociable. Requiere cuidados especiales para mantener su piel saludable y protegida. Su falta de pelo no afecta su capacidad para ser una mascota amorosa y leal, lo que lo convierte en una opción popular entre los amantes de los gatos que buscan una compañía inusual y afectuosa.';
        
    } else if (eleccion == 2) {
        resultado.innerHTML = '<img src="images/gato2.jpg" alt="gato2" class="img-fluid">'
        contenido.innerHTML = 'El gato Abisinio es una raza elegante y atlética, reconocida por su pelaje corto y fino que presenta un efecto de "ticking" o moteado. Originario de Etiopía, este gato tiene un aspecto exótico que recuerda a los felinos salvajes. Es extremadamente activo, curioso y juguetón, siempre buscando explorar su entorno y participar en actividades con sus dueños. A pesar de su energía, el Abisinio es también afectuoso y le encanta interactuar con las personas, lo que lo convierte en una excelente mascota para aquellos que buscan un compañero dinámico y sociable.';
    } else if (eleccion == 3) {
        resultado.innerHTML = '<img src="images/gato3.jpg" alt="gato3" class="img-fluid">'
        contenido.innerHTML = 'El gato siamés es una raza icónica y elegante, conocida por su cuerpo esbelto, ojos azules penetrantes y su distintivo patrón de color en puntos (caras, orejas, patas y cola más oscuros que el cuerpo). Originario de Tailandia, este gato es famoso por su personalidad extrovertida y vocal. Los siameses son muy sociables y disfrutan de la compañía humana, a menudo desarrollando un vínculo muy fuerte con sus dueños. Son inteligentes, juguetones y requieren mucha atención y estimulación, siendo ideales para hogares donde puedan recibir mucho cariño e interacción.';
    } else if(eleccion == 4) {
        resultado.innerHTML = '<img src="images/gato4.jpg" alt="gato4" class="img-fluid">'
        contenido.innerHTML = 'El gato munchkin es una raza relativamente nueva y conocida por sus patas cortas debido a una mutación genética. Esta característica les da una apariencia adorable y única. A pesar de sus patas cortas, los munchkins son activos y ágiles, disfrutando de correr y jugar. Son conocidos por su personalidad extrovertida, amistosa y traviesa, lo que los convierte en excelentes compañeros de juego. Además, los munchkins son cariñosos y disfrutan de la interacción con sus dueños, siendo una opción popular para familias y hogares con niños.';
    } else if (eleccion == 5) {
        resultado.innerHTML = '<img src="images/gato5.jpg" alt="gato5" class="img-fluid">'
        contenido.innerHTML = 'El gato Maine Coon es una de las razas más grandes y majestuosas de gatos domésticos. Con un pelaje largo y espeso, una cola tupida y orejas con mechones, estos gatos tienen una apariencia imponente. Originarios de América del Norte, los Maine Coon son conocidos por su naturaleza gentil y amistosa. A pesar de su tamaño, son muy sociables y se llevan bien con niños y otras mascotas. Son inteligentes, juguetones y tienen un carácter equilibrado, lo que los convierte en una excelente opción para familias que buscan un compañero grande, cariñoso y fácil de manejar.'
    }
}