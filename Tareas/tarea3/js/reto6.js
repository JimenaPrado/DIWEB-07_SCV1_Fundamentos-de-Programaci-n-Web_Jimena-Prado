const colorImages = document.querySelectorAll('.colores img');

colorImages.forEach(img => {
    img.addEventListener('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    img.addEventListener('mouseleave', function() {
        document.body.style.cursor = 'auto';
    });


    img.addEventListener('click', function() {
        const colorId = this.id;
        switch (colorId) {
            case 'c1':
                document.querySelector('.showcase-image').src = 'images/carro1.png';
                break;
            case 'c2':
                document.querySelector('.showcase-image').src = 'images/carro2.png';
                break;
            case 'c3':
                document.querySelector('.showcase-image').src = 'images/carro3.png';
                break;
            case 'c4':
                document.querySelector('.showcase-image').src = 'images/carro4.png';
                break;
            default:
                break;
        }
    });
});
