import { gsap } from "gsap";

export let blankTL = gsap.timeline();

blankTL.to("#p-btn-on, #d-btn-on, #pointer, #pointer-block, #speed-notif, #speed-count", {alpha: 0})