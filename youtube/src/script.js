const body = document.body;
const menuIcon = document.getElementById("menuIcon");
const showMore = document.getElementById("showMore");
const moreChannels = document.getElementById("moreChannels");
const options = document.getElementById("options");
const popUp = document.getElementById("pop-up");
const overlay = document.getElementById("overlay");
const youtube = document.getElementById("youtube");
const navLateralGrow = document.getElementById("nav-lateral-grow");
const inscrevaSe = document.getElementById("inscrevaSe");

// pesquisa lateral
function clickMenu() {
  if (navLateralGrow.style.display === "none") {
    navLateralGrow.style.display = "flex";
    overlay.style.display = "block";
  } else {
    closeAll();
  }
}

function ShowMoreChannels() {
  if (moreChannels.style.display === "none") {
    moreChannels.style.display = "block";
    showMore.innerHTML = '<i class="fa-solid fa-angle-up"></i>Mostrar menos';
  } else {
    moreChannels.style.display = "none";
    showMore.innerHTML = '<i class="fa-solid fa-angle-down"></i>Mostrar mais';
  }
}

function clickOptions() {
  popUp.style.display = "flex";
  overlay.style.display = "block";
}

function closeAll() {
  popUp.style.display = "none";
  overlay.style.display = "none";
  navLateralGrow.style.display = "none";
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

// Detectar preferência de tema do dispositivo
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Função para atualizar tema
function aplicarTema(isDark) {
  if (isDark) {
    body.classList.add("escuro");
    youtube.src = "image/Youtube-LogoDark.png";
  } else {
    body.classList.remove("escuro");
    youtube.src = "image/Youtube-Logo.png";
  }
}

// Aplicar tema inicial baseado na preferência do dispositivo
aplicarTema(prefersColorScheme.matches);

// Detectar mudanças nas preferências do dispositivo
prefersColorScheme.addEventListener("change", (e) => {
  aplicarTema(e.matches);
});

showMore.addEventListener("click", ShowMoreChannels);
inscrevaSe.addEventListener("click", inscreverSe);

menuIcon.addEventListener("click", clickMenu);
options.addEventListener("click", clickOptions);
overlay.addEventListener("click", closeAll);
window.addEventListener("resize", closeAll);
