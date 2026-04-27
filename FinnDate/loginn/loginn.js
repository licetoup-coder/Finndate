const username = document.querySelector("#text");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".register-form");

const title = document.querySelector("#form-title");
const button = document.querySelector("#submit");
const toggle = document.querySelector("#toggle-mode");

let isLogin = false;

let users = JSON.parse(localStorage.getItem("users")) || {};

toggle.addEventListener("click", () => {
  isLogin = !isLogin;

  if (isLogin) {
    title.textContent = "LOGG INN";
    button.textContent = "Logg inn";
    username.style.display = "none";
    toggle.textContent = "Registrer";
  } else {
    title.textContent = "REGISTRASJON";
    button.textContent = "Registrer";
    username.style.display = "block";
    toggle.textContent = "Logg inn";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert("Fyll ut alle feltene");
    return;
  }

  if (isLogin) {
    const foundUser = Object.values(users).find(
      (user) => user.email === emailValue && user.password === passwordValue,
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      const redirect = localStorage.getItem("redirectAfterLogin");

      if (redirect === "meldinger") {
        localStorage.removeItem("redirectAfterLogin");
        window.location.href = "../meldinger/meldinger.html";
      } else {
        window.location.href = "../hjemmeside/date.html";
      }
    } else {
      alert("Feil email eller passord");
    }

    return;
  }

  if (!nameValue) {
    alert("Skriv navn");
    return;
  }

  const userExists = Object.values(users).some(
    (user) => user.email === emailValue,
  );

  if (userExists) {
    alert("Denne e-posten er allerede registrert");
    return;
  }

  const userId = "User" + Object.keys(users).length;

  users[userId] = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registrering fullført!");

  username.value = "";
  email.value = "";
  password.value = "";
});

const btn = document.querySelector("#notification-btn");
const box = document.querySelector("#notification-box");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  box.style.display = box.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !box.contains(e.target)) {
    box.style.display = "none";
  }
});
