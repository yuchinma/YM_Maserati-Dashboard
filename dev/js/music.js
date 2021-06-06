import { gsap } from "gsap";

export let musicTL = gsap.timeline();

gsap.set("#album-photo", {transformOrigin: "center"});
gsap.set("#song-white-bar", {transformOrigin: "left center"});

musicTL.from("#album-photo", {alpha: 0, scale: 0}, {duration: 1, alpha: 1, scale: 1, ease: "power4.out"})
        .from("#song-info", {duration: 1, x: "-=200", ease: "power4.out"})
        .from("#song-grey-bar", {duration: .5, alpha: 0})
        .from("#song-white-bar", {duration: .5, alpha: 0, scaleX: 0})
        .from("#music-btn", {duration: .5, alpha: 0}, "-=.3")