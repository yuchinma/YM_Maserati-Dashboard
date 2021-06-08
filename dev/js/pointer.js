import { gsap } from "gsap";

export let pointerTL = gsap.timeline();

// gsap.set("#pop-up-window, #arrow-icon, #yellow-lane", {transformOrigin: "center"});

pointerTL.to("#pointer", {duration: 4.5, rotation: -50, ease: "power4.inOut"}, "+=1.1")
        .to("#pointer", {duration: 5, rotation: -25, ease: "power1.inOut"}, "-=1.15")
        .to("#pointer", {duration: 1, rotation: -26, ease: "power1.inOut"})
        .to("#pointer", {duration: 1, rotation: -24, ease: "power1.inOut", yoyo: true, repeat: 2})
        .to("#pointer", {duration: 5.5, rotation: 0, ease: "power2.out"}, "-=.5")
        .to("#direction-light-left-white", {alpha: 1}, "-=13.4")
        .to("#direction-light-left-white", {alpha: 0}, "-=13.1")
        .to("#direction-light-left-white", {alpha: 1}, "-=12.8")
        .to("#direction-light-left-white", {alpha: 0}, "-=12.5")
        .to("#direction-light-left-white", {alpha: 1}, "-=12.2")
        .to("#direction-light-left-white", {alpha: 0}, "-=11.9")
        .to("#direction-light-left-white", {alpha: 1}, "-=11.6")
        .to("#direction-light-left-white", {alpha: 0}, "-=11.3")
        .to("#direction-light-left-white", {alpha: 1}, "-=11")
        .to("#direction-light-left-white", {alpha: 0}, "-=10.7")
        .to("#d-btn-off", {alpha: 1}, "end")
        .to("#d-btn-on", {alpha: 0}, "end")
        .to("#p-btn-off", {alpha: 0}, "end")
        .to("#p-btn-on", {alpha: 1}, "end")