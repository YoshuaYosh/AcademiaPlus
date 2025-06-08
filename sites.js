let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  clearTimeout(slideTimer); // Stop l'automatique temporairement
  showSlides(slideIndex += n);
  autoSlide(); // Relance automatique
}

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoSlide, 5000); // Relance après 5s
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  autoSlide();
});



