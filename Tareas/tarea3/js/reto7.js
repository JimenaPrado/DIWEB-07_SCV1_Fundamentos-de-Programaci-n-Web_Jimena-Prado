$(document).ready(function() {
    $('img[usemap]').rwdImageMaps();
});

// Desplegables

  $("#r1").click(function() {
    Swal.fire({
        title: "Salvas una vida.",
        text: "Muchas personas abandonan a sus mascotas en la calle mientras que otras las entregan en albergues o refugios. Debido a la escasez de espacio en estos lugares, en algunos casos los animales son sacrificados. Los que terminan en la calle pueden morir de hambre, atropellados, abusados o enfermos.",
        imageUrl: "images/iconoHuella.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
});

$("#r2").click(function() {
    Swal.fire({
        title: "Te hacen compañía.",
        text: "Tener una mascota hará que nunca te sientas solo. Con ella puedes jugar, hacer ejercicio y hasta usarla de paño de lágrimas en aquellos días grises. Son fieles compañeros, especialmente los perros.",
        imageUrl: "images/iconoHuella.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
});

$("#r3").click(function() {
    Swal.fire({
        title: "Le das oportunidad a otros.",
        text: "Al adoptar, no solo iluminas la vida de un animal, además ayudas a liberar espacio en un albergue, lo que permite rescatar a más animales abandonados a su suerte.",
        imageUrl: "images/iconoHuella.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
});

$("#r4").click(function() {
    Swal.fire({
        title: "Te brindan amor incondicional.",
        text: "Pase lo que pase, tu mascota siempre estará disponible para quererte y será la primera que se alegre cuando llegues a casa. El amor que brindan los animales es tan puro que solo querrás tenerlo cerca siempre.",
        imageUrl: "images/iconoHuella.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
});

$("#r5").click(function() {
    Swal.fire({
        title: "No apoyarás el tráfico ilegal de animales.",
        text: "Las mascotas que estás personas venden, por lo general, viven dentro de jaulas y lejos del calor humano. Además, se suele desconocer su origen y si fueron criadas responsablemente. Al comprar, se continúa con el ciclo de venta y encierro.",
        imageUrl: "images/iconoHuella.svg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
});