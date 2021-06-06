import { gsap } from "gsap";

export let initLogoAnimTL = gsap.timeline();

gsap.set("#trident-top, #headlight-left, #headlight-right, #whole-maserati-logo", {transformOrigin: "center"});
gsap.set("#left-light-set-block", {x: "-=45"});

//trident logo appear
initLogoAnimTL.to("#trident-strokes-block-left", {duration: .3, x: "-=50", ease: "none"}, "stroke")
        .to("#trident-strokes-block-right", {duration: .3, x: "+=50", ease: "none"}, "stroke")
        .from("#trident-base", {duration: .3, y: "+50"})
        .fromTo("#trident-top", {y: "-=100", alpha: 0}, {duration: .5, y: "+=100", alpha: 1, ease: "back"})

//headlight set appear
        .from("#left-light-stroke-1, #left-light-stroke-2, #left-light-stroke-3, #left-light-stroke-4, #headlight-left", {alpha: 0}, "light")
        .from("#right-light-stroke-1, #right-light-stroke-2, #right-light-stroke-3, #right-light-stroke-4, #headlight-right", {alpha: 0}, "light")
        .to("#left-light-set-block", {duration: 1, x: "-=350", ease: "none"}, "light")
        .to("#right-light-set-block", {duration: 1, x: "+=350", ease: "none"}, "light")

//maserati & levante logo
        .to("#levante-logo-anim", {alpha: 0})
        .to("#maserati-block-left", {duration: .5, x: "-=200"}, "maserati")
        .to("#maserati-block-right", {duration: .5, x: "+=200"}, "maserati")
        .to("#maserati-logo-anim", {alpha: 0})
        .to("#levante-logo-anim", {alpha: 1}, "-=.3")
        .to("#levante-block-left", {duration: .5, x: "-=150"}, "levante", "-=.7")
        .to("#levante-block-right", {duration: .5, x: "+=150"}, "levante", "-=.7")

//whole thing fade out
        .fromTo("#whole-maserati-logo", {scale: 1}, {duration: 1.5, x: "+=380", y: "-=1000", alpha: 0, scale: 20, ease: "power4.out"}, "+=.2")