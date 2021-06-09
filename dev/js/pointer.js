import { gsap } from "gsap";

export let pointerTL = gsap.timeline();

// gsap.set("#pop-up-window, #arrow-icon, #yellow-lane", {transformOrigin: "center"});

pointerTL.to("#pointer", {duration: 4.5, rotation: -50, ease: "power4.out", onStart: startTimer}, "+=1.1")
        .to("#pointer", {duration: 5, rotation: -25, ease: "power1.inOut", onStart: startTimer2}, "-=1.15")
        .to("#pointer", {duration: 1, rotation: -26, ease: "power1.inOut"})
        .to("#pointer", {duration: 1, rotation: -24, ease: "power1.inOut", yoyo: true, repeat: 2})
        .to("#pointer", {duration: 5.5, rotation: 0, ease: "power2.out"}, "-=.5")
        .to("#direction-light-left-white", {alpha: 1}, "-=13.4")
        .to("#direction-light-left-white", {alpha: 0}, "-=13.1")
        .to("#direction-light-left-white", {alpha: 1}, "-=12.8")
        .to("#direction-light-left-white", {alpha: 0}, "-=12.5")
        .to("#direction-light-left-white", {alpha: 1}, "-=12.2")
        .to("#direction-light-left-white", {alpha: 0}, "-=11.9")
        .to("#direction-light-left-white", {alpha: 1}, "-=11.6")
        .to("#direction-light-left-white", {alpha: 0}, "-=11.3")
        .to("#direction-light-left-white", {alpha: 1}, "-=11")
        .to("#direction-light-left-white", {alpha: 0}, "-=10.7")
        .to("#d-btn-off", {alpha: 1}, "end")
        .to("#d-btn-on", {alpha: 0}, "end")
        .to("#p-btn-off", {alpha: 0}, "end")
        .to("#p-btn-on", {alpha: 1}, "end")

//counter to 70mph
var counterSpeed = 35;
var topSpeed = 70;
var speedNumber = 0;
var myVar;

function startTimer(){

        myVar = setInterval(speedCounter, counterSpeed);
}

function speedCounter(){
        // console.log("counter");
        if (speedNumber < topSpeed) {
                speedNumber++;
                document.getElementById("speedTag").innerHTML = speedNumber;
        } else {
                clearInterval(myVar);
        }
        return speedNumber;

}

//counter 70mph to 30mph
var counterSpeed2 = 50;
var topSpeed2 = 30;
var speedNumber2 = 70;
var myVar2;

function startTimer2(){

        myVar2 = setInterval(speedCounter2, counterSpeed2);
}

function speedCounter2(){
        // console.log("counter");
        if (speedNumber2 < topSpeed2) {
                speedNumber2++;
                document.getElementById("speedTag").innerHTML = speedNumber2;
        } else {
                clearInterval(myVar2);
        }
        return speedNumber2;

}

//counter 30mph to 0mph
// var counterSpeed = 50;
// var topSpeed = 70;
// var speedNumber = 0;
// var myVar;

// function startTimer(){

//         myVar = setInterval(speedCounter, counterSpeed);
// }

// function speedCounter(){
//         // console.log("counter");
//         if (speedNumber < topSpeed) {
//                 speedNumber++;
//                 document.getElementById("speedTag").innerHTML = speedNumber;
//         } else {
//                 clearInterval(myVar);
//         }
//         return speedNumber;

// }