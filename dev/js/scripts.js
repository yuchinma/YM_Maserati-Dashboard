import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { blankTL } from "./blank"
import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"
import { infoTL } from "./information"
import { musicTL } from "./music"
import { notifTL } from "./notification"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(blankTL)
        .add(initLogoAnimTL)
        .add(prndTL)
        .add(infoTL)
        .addLabel("marker")
        .add(musicTL)
        .add(notifTL);

        mainTL.play("marker");
        // mainTL.play();

// console.log(numberThing);

// GSDevTools.create();