const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const capa = document.getElementById("capa");
const song = document.getElementById("audio");
const likeButton = document.getElementById("like");
const anterior = document.getElementById("anterior");
const play = document.getElementById("play");
const proximo = document.getElementById("proximo");
const progresso = document.getElementById("progresso");
const containerProgreso = document.getElementById("progress-container");
const botaoAletorio = document.getElementById("aleatorio");
const botaoRepetir = document.getElementById("repetir");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");

const chopSuey = {
  songName: "Chop Suey",
  bandName: "System of a Down",
  file: "chop-suey",
  liked: false,
};

const devilInI = {
  songName: "Devil in I",
  bandName: "Slipknot",
  file: "devil-in-i",
  liked: false,
};

const dig = {
  songName: "Dig",
  bandName: "Mudvayne",
  file: "dig",
  liked: false,
};

const thisIlove = {
  songName: "This I Love",
  bandName: "Guns N' Roses",
  file: "this-i-love",
  liked: false,
};

let isPlaying = false;
let TaAleatorio = false;
let TaRepetindo = false;
const originalPlaylist = JSON.parse(localStorage.getItem("playlist")) ??  [chopSuey, devilInI, dig, thisIlove];
let sortedPlaylist = [...originalPlaylist];
let index = 0;

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");
  song.play();
  isPlaying = true;
}

function pauseSong() {
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  song.pause();
  isPlaying = false;
}

function playPauseDecider() {
  if (isPlaying === true) {
    pauseSong();
  } else {
    playSong();
  }
}

function iniciandoSong() {
  capa.src = `capas/${sortedPlaylist[index].file}.jpeg`;
  song.src = `songs/${sortedPlaylist[index].file}.mpeg`;
  songName.innerText = sortedPlaylist[index].songName;
  bandName.innerText = sortedPlaylist[index].bandName;
  likeButtonRender();
}

function toHHMMSS(originalNumber) {
  let hours = Math.floor(originalNumber / 3600);
  let min = Math.floor((originalNumber - hours * 3600) / 60);
  let seg = Math.floor(originalNumber - hours * 3600 - min * 60);

  if (originalNumber > 3600) {
    return `${hours.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
  } else {
    return `${min.toString().padStart(2, "0")}:${seg.toString().padStart(2, "0")}`;
  }
}

function updateCurrentTime() {}

function updateTotalTime() {
  totalTime.innerText = toHHMMSS(song.duration);
}

function updadeProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  progresso.style.setProperty("--progress", `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);
}

function anteriorSong() {
  if (index === 0) {
    index = sortedPlaylist.length - 1;
  } else {
    index = index - 1;
  }
  iniciandoSong();
  play.song();
}

function proximoSong() {
  if (index === sortedPlaylist.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  iniciandoSong();
  playSong();
}

function likeButtonRender() {
  if (sortedPlaylist[index].liked === true) {
    likeButton.querySelector(".bi").classList.remove("bi-heart");
    likeButton.querySelector(".bi").classList.add("bi-heart-fill");
    likeButton.classList.add("botao-ativado");
  } else {
    likeButton.querySelector(".bi").classList.add("bi-heart");
    likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
    likeButton.classList.remove("botao-ativado");
  }
}

function buttonLikedClicked() {
  if (sortedPlaylist[index].liked === false) {
    sortedPlaylist[index].liked = true;
  } else {
    sortedPlaylist[index].liked = false;
  }
  likeButtonRender();
  localStorage.setItem("playlist", JSON.stringify(originalPlaylist));
}

function nextOrRepeat() {
  if (TaRepetindo === false) {
    proximoSong();
  } else {
    playSong();
  }
}

function jumpTo(event) {
  const width = containerProgreso.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function AleatorioArray(ArrayPreAleatorio) {
  const size = ArrayPreAleatorio.length;
  let currentIndex = size - 1;
  while (currentIndex > 0) {
    let ramdomIndex = Math.floor(Math.random() * size);
    let aux = ArrayPreAleatorio[currentIndex];
    ArrayPreAleatorio[currentIndex] = ArrayPreAleatorio[ramdomIndex];
    ArrayPreAleatorio[ramdomIndex] = aux;
    currentIndex -= 1;
  }
}

function botaoAletorioClicado() {
  if (TaAleatorio === false) {
    TaAleatorio = true;
    AleatorioArray(sortedPlaylist);
    botaoAletorio.classList.add("botao-ativado");
  } else {
    TaAleatorio = false;
    sortedPlaylist = [...originalPlaylist];
    botaoAletorio.classList.remove("botao-ativado");
  }
}

function botaoRepetirClicado() {
  if (TaRepetindo === false) {
    TaRepetindo = true;
    botaoRepetir.classList.add("botao-ativado");
  } else {
    TaRepetindo = false;
    botaoRepetir.classList.remove("botao-ativado");
  }
}

iniciandoSong();

anterior.addEventListener("click", anteriorSong);
play.addEventListener("click", playPauseDecider);
proximo.addEventListener("click", proximoSong);
song.addEventListener("timeupdate", updadeProgress);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime);
containerProgreso.addEventListener("click", jumpTo);
botaoAletorio.addEventListener("click", botaoAletorioClicado);
botaoRepetir.addEventListener("click", botaoRepetirClicado);
likeButton.addEventListener("click", buttonLikedClicked);
