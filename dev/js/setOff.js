import { gsap } from "gsap";

export let setOffTL = gsap.timeline();

gsap.set("#arrow-icon", {y: "+=50"});
gsap.set("#pop-up-window, #arrow-icon, #yellow-lane", {transformOrigin: "center"});

setOffTL.to("#p-btn-on", {alpha: 0}, "drive")
        .to("#p-btn-off", {alpha: 1}, "drive")
        .to("#d-btn-on", {alpha: 1}, "drive")
        .to("#d-btn-off", {alpha: 0}, "drive")

//speed number count up, pointer rotate

//set off, go straight, exceed speed limit
        .to("#arrow-icon", {duration: 3.5, y: "-=200", ease: "power2.in"})
        .from("#speed-notif", {duration: 1, alpha: 1, x: "+=300", ease: "power4.out"}, "-=.58")
        .to("#arrow-icon", {duration: 5.5, y: "-=258.5", ease: "power3.out"}, "-=1")

//turn left, pop up window, slow down, stop
        .to("#arrow-icon", {duration: 1, rotate: -90, ease: "none"}, "-=2.5")
        .to("#speed-notif", {duration: .5, x: "+=300"}, "-=2")
        .to("#arrow-icon", {duration: 5, x: "-=200", ease: "none"}, "-=1.5")
        .fromTo("#pop-up-window", {alpha: 0, scale: 0}, {duration: 1, alpha: 1, scale: 1.05, ease: "power4.out"}, "-=4")
        .to("#yellow-lane", {duration: .2, alpha: .5}, "-=3.3")
        .to("#yellow-lane", {duration: .2, alpha: 1}, "-=3.1")
        .to("#yellow-lane", {duration: .2, alpha: .5}, "-=2.9")
        .to("#yellow-lane", {duration: .2, alpha: 1}, "-=2.7")
        .to("#yellow-lane", {duration: .2, alpha: .5}, "-=2.5")
        .to("#yellow-lane", {duration: .2, alpha: 1}, "-=2.3")
        // .to("#yellow-lane", {duration: .2, alpha: .5})
        // .to("#yellow-lane", {duration: .2, alpha: 1, yoyo: true, repeat: 4})
        .to("#pop-up-window", {duration: 1, alpha: 0, scale: 0}, "-=1.1")
        .to("#arrow-icon", {duration: 8, x: "-=145", ease: "power3.out"}, "-=1")

//spped number count down, pointer back to 0

        .to("#arrow-icon", {duration: .2, alpha: .5})
        .to("#arrow-icon", {duration: .2, alpha: 1, yoyo: true, repeat: 4})