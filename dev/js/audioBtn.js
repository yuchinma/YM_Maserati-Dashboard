import $ from "jquery"

let musicIsPlaying = false;

let audio = document.getElementById("audio");
// volume is 0 - 1
audio.volume = 0.8;

$("#maserati-logo-btn").on("click",function(){

    if(musicIsPlaying === false){
        // console.log("play");
        audio.play();
        musicIsPlaying = true;
    }else{
        audio.pause();
        // audio.stop();
        musicIsPlaying = false;
    }
})