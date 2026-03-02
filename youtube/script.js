const body = document.body;
const menu = document.getElementById("menu");
const youtube = document.getElementById("youtube");
const pesquisa = document.getElementById("pesquisa");
const conectar = document.getElementById("conectar");
const lupa = document.getElementById("lupa");
const tresPontos = document.getElementById("3-pontos");
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
  if (window.innerWidth >= 963 || window.innerWidth < 630) {
    navLateral.style.display = "block";
  } else {
    navLateral.style.display = "none";
  }
}

function clickMenu() {
  if (window.innerWidth <= 963 && window.innerWidth >= 630)
    if (navLateral.style.display == "block") {
      navLateral.style.display = "none";

      //        navLateral.classList.remove("fadeIn");
      //        navLateral.classList.add("fadeOut");
    } else {
      navLateral.style.display = "block";
      //        navLateral.classList.remove("fadeOut");
      //        navLateral.classList.add("fadeIn");
    }
}

function TrocarItems() {
  if (window.innerWidth <= 630) {
    pesquisa.style.width = "1000px";
  } else {
    pesquisa.style.width = "100000px";
  }
}

let inscrito = false;

function inscreverSe() {
  if (inscrito === false) {
    inscrito = true;
    inscrevaSe.classList.add("inscrito");
    inscrevaSe.innerText = "Inscrito";
  } else {
    inscrito = false;
    inscrevaSe.classList.remove("inscrito");
    inscrevaSe.innerText = "Inscrever-se";
  }
}

menu.addEventListener("click", clickMenu);
window.addEventListener("resize", mudouTamanho);
inscrevaSe.addEventListener("click", inscreverSe);
window.addEventListener("resize", TrocarItems);
