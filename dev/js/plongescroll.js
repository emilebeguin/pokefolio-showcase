document.addEventListener("scroll", function() {
    scrollHeight = window.pageYOffset;
    document.getElementsByClassName("plongescroll")[0].style.width = scrollHeight >= 200 ? "90%" : "";
}, false);