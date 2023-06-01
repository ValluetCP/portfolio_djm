const slides = document.querySelectorAll('.savanah_montre>div') // changer sélecteur css
const montres = document.querySelectorAll('.montres>div') // changer sélecteur css

// bullets.forEach(function (bullet, index) {
montres.forEach((montre,index) => {
    montre.addEventListener('click',(event)=>{
        slides.forEach((slide) => {
            slide.classList.remove('visible_2')
        })
        slides[index].classList.add('visible_2')

        // mettre le bon style sur les bullets
        montres.forEach((b) => {
            b.classList.remove('active-montre') // à voir si cette classe fonctionne avec des images, sinon changer le nom de la clase
        })
        montre.classList.add('active-montre') // à voir si cette classe fonctionne avec des images, sinon changer le nom de la clase
    })
})

