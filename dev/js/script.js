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

// --------------- Hide Download Button start
function checkFloatingDiv() {
    var section1 = document.querySelector('.download');
    var position1 = section1.getBoundingClientRect();

    
    //Checking whether the specified sections are visible
    //If any of them is visible, then show the float content. Else, hide it.
    if (position1.top < window.innerHeight && position1.bottom >= 0) {
        //Show the floating element
        document.querySelector('.btn--yellow-float').style.display = "none";
        return;
    } else {
        document.querySelector('.btn--yellow-float').style.display = "block";
    }
    

}

// Run the function on scroll
window.addEventListener("scroll", checkFloatingDiv);
// Run the function on load, if any elements are already visible without scrolling
window.addEventListener("load", checkFloatingDiv);

// --------------- Hide Download Button end