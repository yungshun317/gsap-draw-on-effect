"use strict";

let timeline = gsap.timeline({
    repeat: 2,
    repeatDelay: 5,
    defaults: {
        duration: 12,
        ease: "power1.inOut"
    }
}).to("#hand", {
    path: "#path",
    align: "#path",
    alignOrigin: [0.28, 0.08]
}).to("#path", {
        strokeDasharray: "4096, " + "0"
    }, "<"
);