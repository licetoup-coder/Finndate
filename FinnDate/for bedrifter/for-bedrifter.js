const btn = document.querySelector("#notification-btn");
const box = document.querySelector("#notification-box");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  box.classList.toggle("show");
});
