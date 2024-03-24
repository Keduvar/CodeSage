document.addEventListener("DOMContentLoaded", function () {
  var menuMobile = document.getElementById("menuMobile");

  var main = document.querySelector("main");

  var openMenu = document.getElementById("openMenu");

  var backdrop = document.createElement("div");
  backdrop.classList.add("menu-backdrop");
  document.body.appendChild(backdrop);

  openMenu.addEventListener("click", function () {
    openMenu.classList.toggle("menu");
    menuMobile.classList.toggle("open");
    main.classList.toggle("shift");
    backdrop.classList.toggle("show");
  });

  backdrop.addEventListener("click", function () {
    openMenu.classList.toggle("menu");
    menuMobile.classList.remove("open");
    main.classList.remove("shift");
    this.classList.remove("show");
  });
});
