const openMenu = document.getElementById("openMenu");
const menuMobile = document.getElementById("menuMobile");
openMenu.onclick = () => {
  menuMobile.classList.toggle("menu");
  openMenu.classList.toggle("menu");
};
