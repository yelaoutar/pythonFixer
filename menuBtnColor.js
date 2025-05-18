gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".line_top",
  start: "top -10px", 
  end: "bottom", 

  onEnter: () => {
    document.querySelectorAll('.hamburger-line').forEach(btn => btn.classList.add('ham-lines'));
    document.querySelector('.menu-text').classList.add('newMenuText');
  },
  onLeaveBack: () => {
    document.querySelectorAll('.hamburger-line').forEach(btn => btn.classList.remove('ham-lines'));
    document.querySelector('.menu-text').classList.remove('newMenuText');
  }
});
ScrollTrigger.create({
  trigger: "#contact",
  start: "top 40px",
  end:"bottom",
  onEnter: () => {
    document.querySelectorAll('.hamburger-line').forEach(btn => btn.classList.remove('ham-lines'));
    document.querySelector('.menu-text').classList.remove('newMenuText');
  },
  onLeaveBack: () => {
    document.querySelectorAll('.hamburger-line').forEach(btn => btn.classList.add('ham-lines'));
    document.querySelector('.menu-text').classList.add('newMenuText');
  }
});



