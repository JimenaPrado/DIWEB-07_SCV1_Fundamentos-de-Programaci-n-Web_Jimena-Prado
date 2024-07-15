var panorama1 = new PANOLENS.ImagePanorama('imagenes/panoramica.jpg');
var duration = 1000;

var viewer = new PANOLENS.Viewer({
    container: document.querySelector('#panorama-container'),
});


var infospot1_1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Arrow);
var infospot1_2 = new PANOLENS.Infospot(20, PANOLENS.DataImage.Info);
var infospot1_3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Arrow);
var infospot1_4 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
var infospot1_5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Arrow);
var infospot1_6 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
var infospot1_7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Arrow);
var infospot1_8 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot1_9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Arrow);
var infospot1_10 = new PANOLENS.Infospot(60, PANOLENS.DataImage.VideoPlay);


infospot1_1.position.set(49 ,60 , -500); //Inicio del tour
infospot1_2.position.set(500 ,140 , 3); //Informacion #1
infospot1_3.position.set(500 ,-7 , 0); // Pasar al siguiente info
infospot1_4.position.set(111 ,300 , 500); //Informacion #2
infospot1_5.position.set(107 ,57 , 500); //Pasar al siguiente info 3
infospot1_6.position.set(-500 ,324 , -5); //Informacion #3
infospot1_7.position.set(-500 ,54 , -3); //Pasar al siguiente info 4
infospot1_8.position.set(-181 ,500 , -1); //Informacion #4
infospot1_9.position.set(-432 ,500 , -4); //Pasar al siguiente info 5
infospot1_10.position.set(393 ,500 , -401); //Informacion #5


panorama1.add(infospot1_1);
panorama1.add(infospot1_2);
panorama1.add(infospot1_3);
panorama1.add(infospot1_4);
panorama1.add(infospot1_5);
panorama1.add(infospot1_6);
panorama1.add(infospot1_7);
panorama1.add(infospot1_8);
panorama1.add(infospot1_9);
panorama1.add(infospot1_10);


infospot1_1.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_2.position);
});


infospot1_3.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_4.position);
});

infospot1_5.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_6.position);
});

infospot1_7.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_8.position);
});

infospot1_9.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_10.position);
});

infospot1_10.addEventListener('click', function() {
    viewer.tweenControlCenter(infospot1_1.position);
});



infospot1_1.addHoverText('Empezar el tour', -1030);
infospot1_1.element.innerHTML = '<div style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 15px; width: 130px;">Empezar el tour</div>';
//infospot1_1.material.color.set(0x1e1595);
panorama1.add(infospot1_1);

infospot1_2.addHoverText('Visite la panoramica #4', -950);
infospot1_2.element.innerHTML = '<div class="text-center" style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;"><div><img src="imagenes/pintura.svg" width="100px"></div><h3>La arquitectura barroca</h3><p>Se caracteriza por sus formas atractivas y su temática exclusivamente religiosa. En estas obras se crean ilusiones de espacio, contrastes de color, de luz y sombras, diversos artificios visuales que atrapan la mirada y la sensibilidad del espectador.</p></div>>';
panorama1.add(infospot1_2);


infospot1_3.addHoverText('', -1000);
infospot1_3.element.innerHTML = '<div style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 15px; width: 190px;"><strong>Siguiente:</strong> Sus ventanas</div>';
panorama1.add(infospot1_3);


infospot1_4.addHoverText('Visite la panoramica #5', -950);
infospot1_4.element.innerHTML = '<div class="text-center" style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;"><div><img src="imagenes/ventana.svg" width="100px"></div><h3>Sus ventanas</h3><p>La arquitectura barroca es conocida por poseer una estética recargada y ostentosa. Sus ventanas se caracterizan por ser ovaladas, curvas o mixtas.</p></div>';
panorama1.add(infospot1_4);


infospot1_5.addHoverText('', -1030);
infospot1_5.element.innerHTML = '<div style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 280px;"><strong>Siguiente:</strong> Ornamentación exuberante</div>';
panorama1.add(infospot1_5);

infospot1_6.addHoverText('', -950);
infospot1_6.element.innerHTML = '<div class="text-center" style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;"><div><img src="imagenes/ornamento.svg" width="100px"></div><h3>Ornamentación exuberante</h3><p>La decoración abundante y detallada es una de las señas de identidad en la arquitectura del barroco. Fachadas, techos y paredes se cubren de molduras, esculturas, frescos y otros detalles que añaden riqueza visual y complejidad a los edificios. Y es que todo se decora ricamente: las columnas se retuercen (lo que se conoce como columnas salomónicas), los altares se cubren de oro y las paredes se cubren de molduras.</p></div>>';
panorama1.add(infospot1_6);

infospot1_7.addHoverText('', -1030);
infospot1_7.element.innerHTML = '<div style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 190px;"><strong>Siguiente:</strong> Pinturas y figuras escultóricas</div>';
panorama1.add(infospot1_7);

infospot1_8.addHoverText('', -950);
infospot1_8.element.innerHTML = '<div class="text-center" style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;"><div><img src="imagenes/escultura.svg" width="100px"></div><h3>Pinturas y figuras escultóricas</h3><p>También se caracterizaba por la integración de pinturas y figuras escultóricas en las composiciones.</p></div>';
panorama1.add(infospot1_8);

infospot1_9.addHoverText('', -1030);
infospot1_9.element.innerHTML = '<div style="background-color:#1f1b1a; color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 190px;"><strong>Siguiente:</strong> Video</div>';
panorama1.add(infospot1_9);

infospot1_10.addHoverText('', -950);
infospot1_10.element.innerHTML = `
    <div class = "" style="">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vXmtVfzFPnA?si=bMca7Hh9hJI8Qp_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
`;
panorama1.add(infospot1_10);


viewer.add(panorama1);