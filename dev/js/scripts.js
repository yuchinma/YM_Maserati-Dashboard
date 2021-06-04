import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { spaceShipTL } from "./space-ship"
import { liftOffTL } from "./listOff"
import { flightTL } from "./flightPath"


gsap.registerPlugin(GSDevTools);

let mainTL = gsap.timeline({paused:true});

mainTL.add(fadeInTL)
        .add(zoomTL)
        .add(spaceShipTL)
        .add(liftOffTL)
        .addLabel("marker")
        .add(flightTL);

        mainTL.play("marker");


// console.log(numberThing);

// GSDevTools.create();