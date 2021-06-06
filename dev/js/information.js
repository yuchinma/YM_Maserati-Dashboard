import { gsap } from "gsap";

export let infoTL = gsap.timeline();

// gsap.set("#pointer-block", {transformOrigin: "right bottom"});

infoTL.fromTo("#date-and-time", {alpha: 0}, {duration: .8, alpha: 1})
        .fromTo("#cloud", {alpha: 0}, {duration: .3, alpha: 1})
        .from("#sun", {duration: .5, alpha: 0, x: "+=25", y: "+=20"})
        .from("#degree", {duration: .3, alpha: 0, y: "-=30"})