import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let flightTL = gsap.timeline();

flightTL.to("#space-ship", {
    duration: 15,
    motionPath: {
        path: "#rocketPath",
        align:"rocketPath",
        autoRotate: true
    },
    ease: "power4.out"
});


// MotionPathHelper.create("#space-ship");