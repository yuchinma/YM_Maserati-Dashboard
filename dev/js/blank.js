import { gsap } from "gsap";

export let blankTL = gsap.timeline();

blankTL.to("#p-btn-on,#p-btn-off, #d-btn-on, #d-btn-off, #r-btn, #n-btn, #pointer, #pointer-block, #speed-notif, #speed-count", {alpha: 0})