import { gsap } from "gsap";

export let blankTL = gsap.timeline();

//prnd "on" btns
blankTL.to("#p-btn-on, #d-btn-on", {alpha: 0})