   const menuButton = document.querySelector('.menu-button-container');
   let menu=document.querySelector(".hiddenMenu")
 function toggleMenu() {
        
          menuButton.classList.toggle('open');
          
          const menuText = document.querySelector('.menu-text');
          if (menuButton.classList.contains('open')) {
            menuText.textContent = 'CLOSE';
          } else {
            menuText.textContent = 'MENU';
          }
}
menuButton.addEventListener("click", () => {
  const isMenuVisible = menu.style.display === "flex";

  if (isMenuVisible) {
    menu.style.display = "none";
    document.body.style.position = "";
  } else {
    menu.style.display = "flex";
    document.body.style.position = "fixed";

    const imgBlock = document.querySelector(".imgBlock");

    if (!imgBlock.hasAttribute("data-aos")) {
      imgBlock.setAttribute("data-aos", "fade-down");
    }

    imgBlock.classList.remove("aos-animate");
    void imgBlock.offsetWidth;
    imgBlock.classList.add("aos-animate");
  }
});

