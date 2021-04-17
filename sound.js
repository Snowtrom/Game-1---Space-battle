function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

song_start = new sound("F-777 - System Split.mp3");

song_level1 = new sound("F-777 - As One (HQ).mp3");
song_level2 = new sound("EnV - Bonus Level.mp3");
song_level3 = new sound("F-777 - The Seven Seas.mp3");
song_level4 = new sound("F-777 - Shock Rave [FREE DOWNLOAD].mp3");
song_level5 = new sound("F-777 - Viking Arena.mp3");
song_level6 = new sound("F-777 - A New Energy.mp3");
song_level7 = new sound("F-777 Tuxedo Lightsaber Battle.mp3");
song_level8 = new sound("F-777 - Deadlocked.mp3");
song_level9 = new sound("F-777 - 1up [2017 VERSION].mp3");
song_level10 = new sound("F-777 - Viper (Full Version).mp3");
song_level11 = new sound("F-777 - This Isn't Science Rocket - 2015 Edition (FREE DOWNLOAD)!.mp3");
song_level12 = new sound("F-777 - Airborne Robots.mp3");
song_level13 = new sound("F-777 - Space Battle.mp3");
song_level14 = new sound("F 777 - Sonic Blaster.mp3");
song_level15 = new sound("F-777 - Hydra [FREE NEWGROUNDS DOWNLOAD!].mp3");

let br = 0, a = 0;

function updateSound(){
    if(menu == "start" || menu == "shop" || menu == "bullets" || menu == "ships" || menu == "levels" || menu == "rules"){
      if(a == 1){
          br++;
      }

      if(br % 100 == 0){
          //console.log(br/100);
      }

      if(br/100 == 172){
          br = 0;
          song_start.play();
      }
    }
}

function triggerSound(){
  if(a == 0){
    a++;
    song_start.play();
  }
}