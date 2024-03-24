document.getElementById("darkMode").addEventListener("click", darkTheme);
document.getElementById("lightMode").addEventListener("click", lightTheme);

document.addEventListener("DOMContentLoaded", () => {
  // Открытие меню
  var menuMobile = document.getElementById("menuMobile");
  var main = document.querySelector("main");
  var openMenu = document.getElementById("openMenu");

  var backdrop = document.createElement("div");
  backdrop.classList.add("menu-backdrop");
  document.body.appendChild(backdrop);

  openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("menu");
    menuMobile.classList.toggle("open");
    main.classList.toggle("shift");
    backdrop.classList.toggle("show");
  });

  backdrop.addEventListener("click", () => {
    openMenu.classList.toggle("menu");
    menuMobile.classList.remove("open");
    main.classList.remove("shift");
    this.classList.remove("show");
  });

  // Сохранение темы
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "dark-theme";

  if (savedTheme === "dark-theme") darkTheme();

  if (savedTheme === "light-theme") lightTheme();

  root.classList.add(savedTheme);
});

function darkTheme() {
  const root = document.documentElement;
  root.classList.replace("light-theme", "dark-theme");

  const themeButton = document.querySelector(".theme");
  themeButton.classList.add("dark-theme-active");
  themeButton.classList.remove("light-theme-active");

  localStorage.setItem("theme", "dark-theme");
}

function lightTheme() {
  const root = document.documentElement;
  root.classList.replace("dark-theme", "light-theme");

  const themeButton = document.querySelector(".theme");
  themeButton.classList.add("light-theme-active");
  themeButton.classList.remove("dark-theme-active");

  localStorage.setItem("theme", "light-theme");
}
