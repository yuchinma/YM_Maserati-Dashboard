import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let prndTL = gsap.timeline();

// gsap.set("#trident-top, #headlight-left, #headlight-right, #whole-maserati-logo", {transformOrigin: "center"});
// gsap.set("#speed-bar-color", {scaleX: -1, scaleY: -1});

prndTL.from("#prnd-trident", {duration: .5, y: "+=50", ease: "back"})
        .from("#p-btn-off", {duration: .5, x: "+=50", y: "+=20", ease: "back"}, "btn")
        .from("#r-btn", {duration: .5, x: "+=10", y: "+=50", ease: "back"}, "btn")
        .from("#n-btn", {duration: .5, x: "-=10", y: "+=50", ease: "back"}, "btn")
        .from("#d-btn-off", {duration: .5, x: "-=50", y: "+=20", ease: "back"}, "btn")

        .from("#speed-circle", {duration: .3, x: "-=320", y: "+=400", ease: "none"}, "circle")
        .from("#fuel-circle", {duration: .3, x: "+=230", y: "+100", ease: "none"}, "circle")
        .fromTo("#speed-number", {alpha: 0}, {duration: .3, alpha: 1}, "scale")
        .fromTo("#fuel-scale g", {alpha: 0}, {duration: .3, alpha: 1, drawSVG: true}, "scale")
        .from("#fuel-f, #fuel-e", {duration: .2, alpha: 0})
        .from("#speed-bar-color", {duration: 1, drawSVG: 0}, "bar")
        .from("#fuel-bar-grey, #fuel-bar-color", {duration: .5, drawSVG: 0}, "bar")
        .to("#fuel-bar-color", {duration: .5, drawSVG: "30%"}, "-=.5")