import { gsap } from "gsap";

export let mapTL = gsap.timeline();

gsap.set("#bottom-road-map, #top-road-map, #arrow, #arrow-ring-large, #arrow-ring-small", {transformOrigin: "center"});

mapTL.from("#bottom-road-map, #top-road-map", {duration: 1, alpha: 0, scale: 5, ease: "power2.in"})
        .fromTo("#arrow", {alpha: 0, scale: 3}, {duration: .5, alpha: 1, scale: 1, ease: "none"}, "+=.2")
        .fromTo("#arrow-ring-large", {alpha: 0, scale: 0}, {duration: .3, alpha: 1, scale: 1.2})
        .to("#arrow-ring-large", {duration: .3, scale: 1})
        .fromTo("#arrow-ring-small", {alpha: 0, scale: 0}, {duration: .3, alpha: 1, scale: 1.2})
        .to("#arrow-ring-small", {duration: .3, scale: 1})