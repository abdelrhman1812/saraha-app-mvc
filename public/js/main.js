const switchInput = document.querySelector(".switch .input");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark");
  switchInput.checked = true;
}

switchInput.addEventListener("change", () => {
  if (switchInput.checked) {
    body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
  } else {
    body.classList.remove("dark");
    localStorage.setItem("darkMode", "disabled");
  }
});

let t1 = gsap.timeline();
let t2 = gsap.timeline();
let t3 = gsap.timeline();

t1.to(".cog1", {
  transformOrigin: "50% 50%",
  rotation: "+=360",
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8,
});

t2.to(".cog2", {
  transformOrigin: "50% 50%",
  rotation: "-=360",
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8,
});

t3.fromTo(
  ".wrong-para",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    stagger: {
      repeat: -1,
      yoyo: true,
    },
  }
);
