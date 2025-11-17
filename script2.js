import gsap from "./node_modules/gsap/index.js";
import { ScrollTrigger } from "./node_modules/gsap/ScrollTrigger.js";
import { SplitText } from "./node_modules/gsap/SplitText.js";
import { ScrollSmoother } from "./node_modules/gsap/ScrollSmoother.js";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

    ScrollSmoother.create({
        smooth: 1,
        effects: true
    });
});