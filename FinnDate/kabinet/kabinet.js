const userName = document.querySelector("#user-name");
const userEmail = document.querySelector("#user-email");
const logoutBtn = document.querySelector("#logout");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "../loginn/loginn.html";
} else {
  userName.textContent = currentUser.name;
  userEmail.textContent = currentUser.email;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "../loginn/loginn.html";
});

const btn = document.querySelector("#notification-btn");
const box = document.querySelector("#notification-box");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  box.style.display = box.style.display === "block" ? "none" : "block";
});

// закрити при кліку поза
document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !box.contains(e.target)) {
    box.style.display = "none";
  }
});
