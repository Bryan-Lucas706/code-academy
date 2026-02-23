const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const capa = document.getElementById("capa");
const song = document.getElementById("audio");
const anterior = document.getElementById("anterior");
const play = document.getElementById("play");
const proximo = document.getElementById("proximo");
const progresso = document.getElementById("progresso");
const containerProgreso = document.getElementById("progress-container");
const botaoAletorio = document.getElementById("aleatorio");

const chopSuey = {
  songName: "Chop Suey",
  bandName: "System of a Down",
  file: "chop-suey",
};

const devilInI = {
  songName: "Devil in I",
  bandName: "Slipknot",
  file: "devil-in-i",
};

const dig = {
  songName: "Dig",
  bandName: "Mudvayne",
  file: "dig",
};

const thisIlove = {
  songName: "This I Love",
  bandName: "Guns N' Roses",
  file: "this-i-love",
};

let isPlaying = false;
let TaAleatorio = false;

const originalPlaylist = [chopSuey, devilInI, dig, thisIlove];
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

function updadeProgressBar() {
  const barWidth = (song.currentTime / song.duration) * 100;
  progresso.style.setProperty("--progress", `${barWidth}%`);
}

function jumpTo(event) {
  const width = containerProgreso.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function AleatorioArray(ArrayPreAleatorio) {
  let size = sortedPlaylist.length;
  let currentIndex = size - 1;
  
}

function botaoAletorioClicado() {
  if (TaAleatorio === false) {
    TaAleatorio = true;
    AleatorioArray();
  }
}

iniciandoSong();

anterior.addEventListener("click", anteriorSong);
play.addEventListener("click", playPauseDecider);
proximo.addEventListener("click", proximoSong);
song.addEventListener("timeupdate", updadeProgressBar);
containerProgreso.addEventListener("click", jumpTo);
botaoAletorio.addEventListener("click", botaoAletorioClicado);
