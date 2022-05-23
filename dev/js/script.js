let Burger=document.querySelector(".burger");
Main_nav=document.querySelector(".nav");

Burger.addEventListener("click",function(){
    Burger.classList.toggle("active");
    Main_nav.classList.toggle("active");
});

let ignoreClickOnMeElement = document.querySelector(".nav");

document.addEventListener('click', function(event) {
    let isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    
    if(Burger.classList.contains("active")){
        
        if (!isClickInsideElement) {
            Burger.classList.toggle("active");
            Main_nav.classList.toggle("active");
        }
    }
});

// SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    autoplay: {
        delay: 5000,
    },
});