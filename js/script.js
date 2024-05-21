// for text animation
gsap.registerPlugin(SplitText);

function setupSplits() {
  const targets = gsap.utils.toArray(".heading");
  targets.forEach((target) => {
    let splitHeading = new SplitText(target, { type: "words, chars" });
    let chars = splitHeading.chars; //an array of all the divs that wrap each character
    gsap.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01,
      duration: 1,
      scrollTrigger: {
        trigger: ".heading",
        scroller:"body",
        //markers: true,
        start: "top 0%",
        //scrub: true
      }
    });
  });
}
setupSplits();

// for custom timeline animation
const menu = document.querySelector("nav button");
const close = document.querySelector(".full button");

let tl = gsap.timeline();
tl.to(".full", {
  left: 0,
});
tl.from(".full li", {
  x: -100,
  stagger: 0.1,
  opacity: 0,
});
tl.from(".full button", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});

const image = document.querySelector("#image img");

// for left right slider animation
gsap.to("#page_two .list-logos", {
  x: "-100%",
  scrollTrigger: {
    trigger: "#page_two",
    scroller: "body",
    start: "top 0%",
    scrub: 2,
    pin: true,
  },
});

gsap.to("#page_two .list-logos2", {
  x: "100%",
  scrollTrigger: {
    trigger: "#page_two",
    scroller: "body",
    start: "top 0%",
    scrub: 2,
  },
});

// // for custom cursor animation
// const body = document.querySelector("body");
// const cursor = document.querySelector("#cursor");
// const image = document.querySelector("#image");

// body.addEventListener("mousemove", function (e) {
//   gsap.to(cursor, {
//     x: e.x,
//     y: e.y,
//   });
// });

// image.addEventListener("mouseenter", function () {
//   cursor.innerHTML = "View More";
//   gsap.to(cursor, {
//     scale: 2,
//   });
// });
// image.addEventListener("mouseleave", function () {
//   cursor.innerHTML = "";
//   gsap.to(cursor, {
//     scale: 1,
//   });
// });
