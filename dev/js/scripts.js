import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { blankTL } from "./blank"
import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"
import { infoTL } from "./information"
import { musicTL } from "./music"
import { notifTL } from "./notification"
import { mapTL } from "./mapReveal"
import { setOffTL } from "./setOff"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(blankTL)
        .add(initLogoAnimTL)
        .add(prndTL)
        .add(infoTL)
        .add(musicTL)
        .add(notifTL, "+=.3")
        .add(mapTL)
        .addLabel("marker")
        .add(setOffTL);

        mainTL.play("marker");
        // mainTL.play();

// console.log(numberThing);

// GSDevTools.create();