

var carousels_montre = document.querySelectorAll('.bracelet_carousel');

carousels_montre.forEach(function(carousel,index){
    const slides = carousel.querySelectorAll('.bracelet>div') // changer sélecteur css
    const billes = carousel.querySelectorAll('.billes>div') // changer sélecteur css
    
    // bullets.forEach(function (bullet, index) {
    billes.forEach((bille, index) => {
        bille.addEventListener('click', (event) => {
            slides.forEach((slide) => {
                slide.classList.remove('visible_3')
            })
            slides[index].classList.add('visible_3')
    
            // mettre le bon style sur les bullets
            billes.forEach((b) => {
                b.classList.remove('active-bille') // à voir si cette classe fonctionne avec des images, sinon changer le nom de la clase
            })
            bille.classList.add('active-bille') // à voir si cette classe fonctionne avec des images, sinon changer le nom de la clase
        })
    })
})