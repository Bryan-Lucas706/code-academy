const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const capa = document.getElementById("capa");
const song = document.getElementById("audio");
const anterior = document.getElementById("anterior");
const play = document.getElementById("play");
const proximo = document.getElementById("proximo");

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

const playlist = [chopSuey, devilInI, dig, thisIlove];
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
  capa.src = `capas/${playlist[index].file}.jpeg`;
  song.src = `songs/${playlist[index].file}.mpeg`;
  songName.innerText = playlist[index].songName;
  bandName.innerText = playlist[index].bandName;
}

function anteriorSong() {
  if (index === 0) {
    index = playlist.length - 1;
  } else {
    index = index - 1;
  }
  iniciandoSong();
  play.song();
}

function proximoSong() {
  if (index === playlist.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  iniciandoSong();
  playSong();
}

iniciandoSong();

anterior.addEventListener("click", anteriorSong);
play.addEventListener("click", playPauseDecider);
proximo.addEventListener("click", proximoSong);
