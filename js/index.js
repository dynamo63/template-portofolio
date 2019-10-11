
// Configuration du defilement fluide 
const smoothScroll = (anchor, duration) =>{
    const time = duration || 1000
    const ancre = anchor || '#'
    const scrollPosit = ancre !== '#' ? parseInt($( ancre ).offset().top) - 100 : 0
    $('html, body').animate({scrollTop:scrollPosit, time})
}

$('a[href^="#"').on('click', function(event){
    event.preventDefault()
    const target = $(this).attr('href')
    smoothScroll(target)
})


// button scroll home action

const btnElt = document.getElementById('home')

window.addEventListener('scroll',() =>{
    if(window.scrollY > 300){
        btnElt.style.opacity = 1
    } else {
        btnElt.style.opacity = 0
    }
})

//aos init: animation scroll

AOS.init();

//sidenav init

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
});