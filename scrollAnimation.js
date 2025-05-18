

AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  
});


const lenis = new Lenis({
  wrapper: document.body,
  content: document.body,
  smooth: true,
  lerp: 0.1,
  wheelMultiplier: 1,
  infinite: false
});


function raf(time) {
  lenis.raf(time);
  AOS.refresh();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const button = document.querySelector('.outlined_button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  lenis.scrollTo('#about', {
    duration: 2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
});

function ChangeAnimation() {
  let element = document.getElementById("text");
  if (window.innerWidth < 926) {
    element.setAttribute("data-aos", "fade-up");
  }
}
ChangeAnimation();
window.addEventListener('resize', ChangeAnimation);

function changeNavBack() {
  let nav = document.querySelector("nav");
  if (window.scrollY > 17) {
    nav.classList.add("scrolled");
    console.log("scrolling")
  } else {
    nav.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", changeNavBack);
