//Toast
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastBootstrap.show()

//PopOver
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//Carrusel
const myCarouselElement = document.querySelector('#carrouseliaArt')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
})
carousel.cycle()