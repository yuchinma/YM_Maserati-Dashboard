import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export let prndTL = gsap.timeline();

gsap.set("#pointer-block", {transformOrigin: "right bottom"});
gsap.set("#speed-count", {x: "+=5"});
gsap.set("#number-00", {x: "+=1.2"});
gsap.set("#km-h", {x: "-=1.5"});

//prnd btns appear
prndTL.from("#prnd-trident", {duration: .5, y: "+=50", ease: "back"})
        .from("#p-btn-off", {duration: .5, alpha: 0, x: "+=50", y: "+=20", ease: "back"}, "btn")
        .from("#r-btn", {duration: .5, alpha: 0, x: "+=10", y: "+=50", ease: "back"}, "btn")
        .from("#n-btn", {duration: .5, alpha: 0, x: "-=10", y: "+=50", ease: "back"}, "btn")
        .from("#d-btn-off", {duration: .5, alpha: 0, x: "-=50", y: "+=20", ease: "back"}, "btn")

//speed & fuel circle appear, E&F, gradient bars, pointer
        .from("#speed-circle", {duration: .3, x: "-=320", y: "+=400", ease: "none"}, "circle")
        .from("#fuel-circle", {duration: .3, x: "+=230", y: "+100", ease: "none"}, "circle")
        .fromTo("#speed-number", {alpha: 0}, {duration: .3, alpha: 1}, "scale")
        .fromTo("#fuel-scale g", {alpha: 0}, {duration: .3, alpha: 1, drawSVG: true}, "scale")
        .from("#fuel-f, #fuel-e", {duration: .2, alpha: 0})
        .from("#speed-bar-color", {duration: 1, drawSVG: 0}, "bar")
        .from("#fuel-bar-grey, #fuel-bar-color", {duration: .5, drawSVG: 0}, "bar")
        .to("#fuel-bar-color", {duration: .5, drawSVG: "20%"}, "-=.5")
        .from("#pointer-block", {duration: .5, alpha: 0, scale: 10})
        .fromTo("#pointer", {alpha: 0}, {duration: 1, alpha: 1}, "-=.3")
        .from("#speed-counter", {alpha: 0}, "-=.5")

//icons come in, p light on
        .from("#hazard-grey, #direction-light-left-grey, #direction-light-right-grey", {duration: .4, alpha: 0}, "icon")
        .from("#hazard-white, #direction-light-left-white, #direction-light-right-white", {duration: .4, alpha: 0}, "icon")
        .from("#slope-grey, #seatbelt-grey, #beam-light-grey, #car-grey, #auto-grey", {duration: .4, alpha: 0}, "icon")
        .from("#slope-white, #seatbelt-white, #beam-light-white, #car-white, #auto-white", {duration: .4, alpha: 0}, "icon")
        .to("#hazard-white, #direction-light-left-white, #direction-light-right-white, #slope-white, #seatbelt-white, #beam-light-white, #car-white", {duration: .4, alpha: 0})
        .from("#p-btn-on", {alpha: 0}, "p")
        .to("#p-btn-off", {alpha: 0}, "p")