const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.classList.contains("mathew")) {
      const sure = confirm("Er du sikkert?");

      if (sure) {
        window.location.href = "https://www.politiet.no";
      }

      return;
    }

    heart.classList.toggle("liked");
    heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
  });
});

const loginLink = document.querySelector("#login-link");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (loginLink && currentUser) {
  loginLink.textContent = "Min profil";
  loginLink.href = "../kabinet/kabinet.html";
}

const messagesLink = document.querySelector("#messages-link");

messagesLink.addEventListener("click", (e) => {
  e.preventDefault();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "../loginn/loginn.html";
  } else {
    window.location.href = "../meldinger/meldinger.html";
  }
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
