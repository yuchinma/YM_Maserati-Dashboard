import { gsap } from "gsap";

export let speedUpTL = gsap.timeline();

// gsap.set("#pop-up-window, #arrow-icon, #yellow-lane", {transformOrigin: "center"});

// speedUpTL.to("#speed-count", {duration: .5, alpha: 0, onStart: startTimer});

// var counterSpeed = 100;
// var topSpeed = 70;
// var speedNumber = 0;
// var myVar;

// function startTimer(){

//     myVar = setInterval(speedCounter, counterSpeed);
// }

// function speedCounter(){
//     // console.log("counter");
//     if (speedNumber < topSpeed) {
// 		speedNumber++;
// 		document.getElementById("speedTag").innerHTML = speedNumber;
// 	} else {
// 		clearInterval(myVar);
// 	}
// 	return speedNumber;

// }