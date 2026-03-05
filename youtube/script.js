const body = document.body;
const menuIcon = document.getElementById("menuIcon");
const modal = document.getElementById("modal");
const popUp = document.getElementById("pop-up");
const overlay = document.getElementById("overlay");
const youtube = document.getElementById("youtube");
const subscribe = document.getElementById("subscribe");
const library = document.getElementById("library");
const navLateralGrow = document.getElementById("nav-lateral-grow");
const inscrevaSe = document.getElementById("inscrevaSe");

// Detectar preferência de tema do dispositivo
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Função para atualizar tema
function aplicarTema(isDark) {
  if (isDark) {
    body.classList.add("escuro");
    youtube.src = "image/Youtube-LogoDark.png";
    subscribe.src = "image/subscribeDark.png";
    library.src = "image/libraryDark.png";
  } else {
    body.classList.remove("escuro");
    youtube.src = "image/Youtube-Logo.png";
    subscribe.src = "image/subscribe.png";
    library.src = "image/library.png";
  }
}

// Aplicar tema inicial baseado na preferência do dispositivo
aplicarTema(prefersColorScheme.matches);

// Detectar mudanças nas preferências do dispositivo
prefersColorScheme.addEventListener("change", (e) => {
  aplicarTema(e.matches);
});

// pesquisa lateral

function mudouTamanho() {
  if (window.innerWidth >= 972 || window.innerWidth < 630) {
    navLateral.style.display = "flex";
    popUp.style.display = "none";
    overlay.style.display = "none";
  } else {
    navLateralGrow.style.display = "none";
  }
}

function clickMenu() {
  if (window.innerWidth <= 972 || window.innerWidth >= 972) {
    if (navLateralGrow.style.display == "flex") {
      navLateralGrow.style.display = "none";
      overlay.style.display = "none";
    } else {
      navLateralGrow.style.display = "flex";
      overlay.style.display = "block";
    }
  }
}

function clickModal() {
  popUp.style.display = "flex";
  overlay.style.display = "block";
}
function clickOverlay() {
  popUp.style.display = "none";
  overlay.style.display = "none";
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

window.addEventListener("resize", mudouTamanho);
inscrevaSe.addEventListener("click", inscreverSe);
menuIcon.addEventListener("click", clickMenu);
modal.addEventListener("click", clickModal);
overlay.addEventListener("click", clickOverlay);
