import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
// import $ from "jquery"

import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"
import { infoTL } from "./information"
import { musicTL } from "./music"
import { musicPlayTL } from "./musicPlay"
import { notifTL } from "./notification"
import { mapTL } from "./mapReveal"
import { setOffTL } from "./setOff"
import { pointerTL } from "./pointer"


gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(initLogoAnimTL)
        .add(prndTL, "+=.6")
        .add(infoTL)
        .add(musicTL)
        .add(notifTL, "+=.3")
        .add(mapTL, "-=.6")
        .add(setOffTL, "go")
        .add(pointerTL, "go")
        .add(musicPlayTL, "-=25");
        // .addLabel("marker")

        // mainTL.play("marker");
        mainTL.play();

// console.log(numberThing);

// GSDevTools.create();


//music
import $ from "jquery"

let musicIsPlaying = false;

let audio = document.getElementById("audio");
// volume is 0 - 1
audio.volume = 0.8;


$("#pause").on("click",function(){

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