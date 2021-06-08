import { gsap } from "gsap";

export let musicTL = gsap.timeline();

gsap.set("#album-photo", {transformOrigin: "center"});
gsap.set("#song-white-bar", {transformOrigin: "left center"});

musicTL.from("#album-photo", {duration: .8, alpha: 0, scale: 0, ease: "power4.out"})
        .from("#song-info", {duration: .5, x: "-=150", ease: "power4.out"})
        .from("#song-grey-bar", {duration: .5, alpha: 0}, "music")
        .from("#music-btn", {duration: .5, alpha: 0}, "music")
        .from("#song-white-bar", {duration: .6, alpha: 0, scaleX: 0})