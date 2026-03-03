const body = document.body;
const menu = document.getElementById("menu");
const youtube = document.getElementById("youtube");
const botao = document.getElementById("botao-tema");
const shorts = document.getElementById("shorts");
const subscribe = document.getElementById("subscribe");
const library = document.getElementById("library");
const navLateral = document.getElementById("nav-lateral");
const inscrevaSe = document.getElementById("inscrevaSe");

// Persistência do tema
const temasalvo = localStorage.getItem("tema");
temaEscuro(temasalvo === "escuro");

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add("escuro");
    botao.innerHTML = '<i class="fa-regular fa-sun"></i>';
    youtube.src = "image/Youtube-LogoDark.png";
    shorts.src = "image/shortsDark.png";
    subscribe.src = "image/subscribeDark.png";
    library.src = "image/libraryDark.png";
  } else {
    body.classList.remove("escuro");
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    youtube.src = "image/Youtube-Logo.png";
    shorts.src = "image/shorts.png";
    subscribe.src = "image/subscribe.png";
    library.src = "image/library.png";
  }
}

botao.addEventListener("click", () => {
  const isescuro = body.classList.toggle("escuro");
  temaEscuro(isescuro);
  localStorage.setItem("tema", isescuro ? "escuro" : "claro");
});

// pesquisa lateral

function mudouTamanho() {
  if (window.innerWidth >= 972 || window.innerWidth < 630) {
    navLateral.style.display = "block";
  } else {
    navLateral.style.display = "none";
  }
}

function clickMenu() {
  if (window.innerWidth <= 972 && window.innerWidth >= 630)
    if (navLateral.style.display == "block") {
      navLateral.style.display = "none";
    } else {
      navLateral.style.display = "block";
    }
}

let inscrito = false;

if (localStorage.getItem("inscrito") === "true") {
  inscrito = true;
  inscrevaSe.classList.add("inscrito");
  inscrevaSe.innerHTML = '<i class="fa-solid fa-bell"></i> Inscrito';
}

function inscreverSe() {
  if (inscrito === false) {
    inscrito = true;
    inscrevaSe.classList.add("inscrito");
    inscrevaSe.innerHTML = '<i class="fa-solid fa-bell"></i> Inscrito';
    localStorage.setItem("inscrito", "true");
  } else {
    inscrito = false;
    inscrevaSe.classList.remove("inscrito");
    inscrevaSe.innerText = "Inscrever-se";
    localStorage.setItem("inscrito", "false");
  }
}

const pesquisa = document.getElementById("pesquisa");
const transmitir = document.getElementById("transmitir");
const lupa = document.getElementById("lupa");
const tresPontos = document.getElementById("3-pontos");
const fotoPerfil = document.getElementById("foto-perfil");

const htmlOriginal = {
  menu: menu.outerHTML,
  youtube: youtube.outerHTML,
  transmitir: transmitir.outerHTML,
  lupa: lupa.outerHTML,
  tresPontos: tresPontos.outerHTML,
  pesquisa: pesquisa.outerHTML,
  fotoPerfil: fotoPerfil.outerHTML,
};

function TrocarItems() {
  while (window.innerWidth <= 630) {
    if (window.innerWidth <= 630) {
      menu.outerHTML = '<i class="fa-solid fa-angle-left"></i>';
      youtube.outerHTML = '<h1 id="nome-canal">Curso em video</h1>';
      transmitir.outerHTML = '<i class="fa-brands fa-chromecast"></i>';
      lupa.outerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
      tresPontos.outerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      pesquisa.remove();
      fotoPerfil.remove();
    } else {
      menu.outerHTML = htmlOriginal.menu;
      youtube.outerHTML = htmlOriginal.youtube;
      transmitir.outerHTML = htmlOriginal.transmitir;
      lupa.outerHTML = htmlOriginal.lupa;
      tresPontos.outerHTML = htmlOriginal.tresPontos;
      pesquisa.add();
      fotoPerfil.add();
    }
  }

  menu = document.getElementById("menu");
}

window.addEventListener("resize", TrocarItems);
window.addEventListener("resize", mudouTamanho);
inscrevaSe.addEventListener("click", inscreverSe);
menu.addEventListener("click", clickMenu);
