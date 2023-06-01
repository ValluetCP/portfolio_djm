const slidesHeader = document.querySelectorAll('.header>div')
const bulletsHeader = document.querySelectorAll('.bullets>div')

let slideIndex = 0

let interval = null

// bullets
bulletsHeader.forEach((bullet,index) =>{
    bullet.addEventListener('click',(event)=>{
        slideIndex=index
        loop()

        slidesHeader.forEach((slide)=>{
            slide.classList.remove('visible')
        })
        slidesHeader[index].classList.add('visible')

        bulletsHeader.forEach((b) =>{
            b.classList.remove('active-bullet')
        })
        bullet.classList.add('active-bullet')
    })
})


const loop = () => {
    clearInterval(interval)
    interval=setInterval(() => {
        // slideIndex + 1
        slideIndex++
        if (slideIndex > 2){
            slideIndex = 0
        }

        // met à jour toutes les 5secondes
        slidesHeader.forEach((slide)=> {
            slide.classList.remove('visible');
        })
        slidesHeader[slideIndex].classList.add('visible');

        bulletsHeader.forEach((b) =>{
            b.classList.remove('active-bullet')
        })
        bulletsHeader[slideIndex].classList.add('active-bullet')
        console.log(slideIndex)


    

    }, 5000)
}
loop()

