import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { blankTL } from "./blank"
import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"
import { infoTL } from "./information"
import { musicTL } from "./music"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(blankTL)
        .add(initLogoAnimTL)
        .add(prndTL)
        .add(infoTL)
        .addLabel("marker")
        .add(musicTL);

        mainTL.play("marker");
        // mainTL.play();

// console.log(numberThing);

// GSDevTools.create();