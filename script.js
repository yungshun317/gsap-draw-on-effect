"use strict";

let timeline = gsap.timeline({
    repeat: 2,
    repeatDelay: 5,
    defaults: {
        duration: 12,
        ease: "power1.inOut"
    }
}).set("#hand", {
    xPercent: -26,
    yPercent: -6
    // transformOrigin: "50% 50%"
}).to("#hand", {
    motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5]
    }
}).to("#path", {
        // strokeDasharray: (black line, white line)
        strokeDasharray: "4046, " + "0"
    }, "<"
);

document.getElementById("pause").onclick = () => timeline.pause();
document.getElementById("play").onclick = () => timeline.play();
document.getElementById("reverse").onclick = () => timeline.reverse();
document.getElementById("seek").onclick = () => timeline.seek(5);
document.getElementById("restart").onclick = () => timeline.restart();