import { gsap } from "gsap";

export let musicPlayTL = gsap.timeline();

gsap.set("#song-white-bar", {transformOrigin: "left center"});

musicPlayTL.to("#song-white-bar", {duration: 50, scaleX: .95})