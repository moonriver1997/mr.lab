var nowSlide = 0;
showSlides();


function showSlides() {
    var slides = document.getElementsByClassName("photo");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    nowSlide = (nowSlide + 1) % slides.length;
    slides[nowSlide].style.display = "inline";  
    setTimeout(showSlides, 3000);
}