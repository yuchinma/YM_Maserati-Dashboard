import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { initLogoAnimTL } from "./initLogoAnim"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

mainTL.add(initLogoAnimTL)
        // .add(wavesTL, "-=2");

        // .addLabel("marker")

        // mainTL.play("marker");
        mainTL.play();

// console.log(numberThing);

// GSDevTools.create();