const botao = document.getElementById("botao-tema");
const body = document.body;
const youtube = document.getElementById("youtube");
const shorts = document.getElementById("shorts");
const subscribe = document.getElementById("subscribe");
const library = document.getElementById("library");

// Persistência do tema
const temasalvo = localStorage.getItem("tema");
temaEscuro(temasalvo === "escuro");

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add("escuro");
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
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
