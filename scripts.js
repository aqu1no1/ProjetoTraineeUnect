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
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
