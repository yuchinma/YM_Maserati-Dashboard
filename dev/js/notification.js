import { gsap } from "gsap";

export let notifTL = gsap.timeline();

gsap.set("#warning-icon", {transformOrigin: "center"});

notifTL.from("#warning-icon", {duration: .5, alpha: 0, scale: 0, ease: "back"})
        .from("#fuel-notif", {duration: .5, x: "+=300", ease: "power4.out"}, "+=.2")