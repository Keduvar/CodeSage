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

//////

function darkTheme() {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme");
  root.classList.replace("light-theme", "dark-theme");
  themeButton.classList.add("dark-theme-active");
  themeButton.classList.remove("light-theme-active");
  localStorage.setItem("theme", "dark-theme");
}

function lightTheme() {
  const root = document.documentElement;
  const themeButton = document.querySelector(".theme");
  root.classList.replace("dark-theme", "light-theme");
  themeButton.classList.add("light-theme-active");
  themeButton.classList.remove("dark-theme-active");
  localStorage.setItem("theme", "light-theme");
}

// Инициализация кнопки переключения темы
document.getElementById("darkMode").addEventListener("click", darkTheme);
document.getElementById("lightMode").addEventListener("click", lightTheme);

///
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "dark-theme";
  root.classList.add(savedTheme);
});
