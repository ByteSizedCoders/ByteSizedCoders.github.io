const button = document.queryS;
elector(".menu");
const navigationList = document.querySelector(".navlist");
button.addEventListener("click", () => {
  navigationList.classList.toggle("active");
});

function darkmode() {
  const wasDarkmode = localStorage.getItem("darkmode") === "true";
  localStorage.setItem("darkmode", !wasDarkmode);
  const element = document.body;
  element.classList.toggle("dark-mode", !wasDarkmode);
}

function onload() {
  document.body.classList.toggle(
    "dark-mode",
    localStorage.getItem("darkmode") === "true"
  );
}
