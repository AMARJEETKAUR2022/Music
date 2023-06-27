const songs = [
    { name: "Bad Romance", audio: "songs/bad romance.mp3" },
    { name: "People", audio: "songs/People.mp3" },
    { name: "Bella Ciao", audio: "songs/bellaChao.mp3" },
    { name: "Let me love you", audio: "songs/letmeloveyou.mp3" },
    { name: "Living hell", audio: "songs/living hell.mp3" },
    { name: "Love me like you do", audio: "songs/lovemelikeyoudo.mp3" },
    { name: "Scars", audio: "songs/Scars.mp3" },
    { name: "Unstoppable", audio: "songs/unstopable.mp3" }
  ];

  let currentAudio = null;

  function addSongsToPlaylist() {
    const images = document.querySelectorAll(".img");

    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        if (currentAudio && !currentAudio.paused) {
          if (currentAudio.src === songs[index].audio) {
              playSong(index);
          } else {
            stopSong(index);
          }
        } else {
          playSong(index);
        }
      });
    });
  }

  function playSong(index) {
    const audio = new Audio(songs[index].audio);
    audio.play();
    currentAudio = audio;
  }

  function stopSong() {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  window.addEventListener("DOMContentLoaded", addSongsToPlaylist);