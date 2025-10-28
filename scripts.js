const navbar = document.getElementById("navbar");

function openSideBar() {
  navbar.classList.add("show");
}

function closeSideBar() {
  navbar.classList.remove("show");
}

const pessoas = document.querySelectorAll(".person-rating");
const countEl = document.getElementById("count");
const nextBtn = document.querySelector(".arrow-next button");
const prevBtn = document.querySelector(".arrow-prev button");
const pageNumber = document.querySelector(".number-page h2");

const porPagina = 3;
let paginaAtual = 1;

countEl.textContent = pessoas.length;

function mostrarAvaliacoes() {
  pessoas.forEach((pessoa, i) => {
    pessoa.style.display =
      i >= (paginaAtual - 1) * porPagina && i < paginaAtual * porPagina
        ? "flex"
        : "none";
  });

  pageNumber.textContent = paginaAtual;

  const totalPaginas = Math.ceil(pessoas.length / porPagina);

  if (paginaAtual === 1) {
    prevBtn.parentElement.style.display = "none";
    nextBtn.parentElement.style.display = totalPaginas > 1 ? "flex" : "none";
  } else {
    prevBtn.parentElement.style.display = "flex";
    nextBtn.parentElement.style.display =
      paginaAtual < totalPaginas ? "flex" : "none";
  }
}

mostrarAvaliacoes();

nextBtn.addEventListener("click", () => {
  const totalPaginas = Math.ceil(pessoas.length / porPagina);
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    mostrarAvaliacoes();
  }
});

prevBtn.addEventListener("click", () => {
  if (paginaAtual > 1) {
    paginaAtual--;
    mostrarAvaliacoes();
  }
});

//carousel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
