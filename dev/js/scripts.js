import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

// import { sunsetTL } from "./sunset"

gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline();

// mainTL.add(sunsetTL)
        // .add(wavesTL, "-=2");

        // .addLabel("marker")

        // mainTL.play("marker");
        mainTL.play();

// console.log(numberThing);

// GSDevTools.create();