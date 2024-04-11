const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initialiseSlider);

function initialiseSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displayslide");
        intervalId = setInterval(nextSlide, 2500);
        console.log(intervalId);
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slides[index].classList.add("displayslide"); // Use the provided index
}

function prevSlide() {
    // Implementing logic to show the previous slide
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function nextSlide() {
    // Implementing logic to show the next slide
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
