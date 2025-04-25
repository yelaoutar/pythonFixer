
document.addEventListener('DOMContentLoaded', () => {
AOS.init({
    duration: 600,
  easing: 'ease-in-out'
}

);
const lenis = new Lenis({
smooth: true,
lerp: 0.9,    
wheelMultiplier: 0.7, 
infinite: false 
});

function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  });
function ChangeAnimation(){
  let element=document.getElementById("text");
  if(window.innerWidth<926){
    element.setAttribute("data-aos","fade-up")
  }
}
ChangeAnimation()