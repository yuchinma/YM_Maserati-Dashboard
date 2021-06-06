import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { blankTL } from "./blank"
import { initLogoAnimTL } from "./initLogoAnim"
import { prndTL } from "./prnd"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(blankTL)
        .add(initLogoAnimTL)
        .addLabel("marker")
        .add(prndTL);

        mainTL.play("marker");
        // mainTL.play();

// console.log(numberThing);

// GSDevTools.create();