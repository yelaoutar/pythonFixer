const menuBtns = document.querySelectorAll('.hamburger-line');
const section = document.getElementById('about');
const menuText = document.querySelector('.menu-text');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuBtns.forEach(btn => btn.classList.add('ham-lines'));
      menuText.classList.add("newMenuText")
    } else {
      menuBtns.forEach(btn => btn.classList.remove('ham-lines'));
      menuText.classList.remove("newMenuText")
    }
  });
}, { threshold: 0.7 });

observer.observe(section);
