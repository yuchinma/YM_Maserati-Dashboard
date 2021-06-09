import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import $ from "jquery"

import { blankTL } from "./blank"
import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"
import { infoTL } from "./information"
import { musicTL } from "./music"
import { notifTL } from "./notification"
import { mapTL } from "./mapReveal"
import { setOffTL } from "./setOff"
import { pointerTL } from "./pointer"
import { speedCounter } from "./speed";

// myTL.from("#something",{duration:.05, alpha:0, onStart:speedCounter});

// A $( document ).ready() block.
$(document).ready(function () {

    // let numberToCount = document.getElementById("speedTag");
    // console.log(numberToCount);
    speedCounter();
});

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(blankTL)
        .add(initLogoAnimTL)
        .add(prndTL)
        .add(infoTL)
        // .addLabel("marker")
        .add(musicTL)
        .add(notifTL, "+=.3")
        .add(mapTL)
        .add(setOffTL, "go")
        .add(pointerTL, "go", {onStart: speedCounter})

        // mainTL.play("marker");
        mainTL.play();

// console.log(numberThing);

// GSDevTools.create();