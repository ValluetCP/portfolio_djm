// initialisation de AnimateOnScroll
// AOS.init();


// Initialisation personnalisée

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 40, // offset (in px) from the original trigger point - décalage
    delay: 50, // values from 0 to 3000, with step 50ms - délai, tps d'animation, à rallonger ou pas pour faire durer par exemple - le délai quon détermine avant que ça démarre
    duration: 300, // values from 0 to 3000, with step 50ms - durée de la transition
    easing: 'ease-out-quad', // default easing for AOS animations - rapidité - gérer la vitesse (cf : lissage de vitesse)
    once: false, // whether animation should happen only once - while scrolling down - pour que l'animation ne se fasse qu'une seule fois
    mirror: true, // whether elements should animate out while scrolling past them - faux : quand l'animation ne fonctionne qu'une fois- vrai : l'animation fonction en sorti et en entrée à chaque fois qu'on scroll. l'animation doit se relancer en haut et en bas de la fenêtre.
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});



