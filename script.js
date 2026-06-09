const elements = document.querySelectorAll(".reveal");
const nav = document.querySelector("nav");

function revealElements() {
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", () => {
  revealElements();

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

revealElements();

/* LIGHTBOX */

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");

    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("active");
  }
});
