const chatItems = document.querySelectorAll(".chat-item");
const chatMessages = document.querySelector("#chat-messages");
const chatUserName = document.querySelector("#chat-user-name");
const chatUserImage = document.querySelector("#chat-user-image");
const chatUserStatus = document.querySelector("#chat-user-status");
const chatForm = document.querySelector("#chat-form");
const messageInput = document.querySelector("#message-input");
const loginLink = document.querySelector("#login-link");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (loginLink && currentUser) {
  loginLink.textContent = "Min profil";
  loginLink.href = "../kabinet/kabinet.html";
}

const chats = {
  angelina: {
    name: "Angelina, 30",
    image: "../hjemmeside/last ned (7).jpg",
    status: "Aktiv for 2 minutter siden",
    messages: [
      { type: "sent", text: "message", time: "11:59" },

      { type: "received", text: "message", time: "11:58" },

      {
        type: "received",
        text: "message",
        time: "12:00",
      },
      { type: "sent", text: "message", time: "12:01" },
      {
        type: "received",
        text: "message",
        time: "12:04",
      },
    ],
  },

  olivia: {
    name: "Olivia, 25",
    image: "../hjemmeside/щдшмш.jpg",
    status: "Aktiv nå",
    messages: [
      { type: "received", text: "Hei", time: "10.10.2015" },
      {
        type: "sent",
        text: "Hei! Hvordan har du det?",
        time: "10.10.2015 lest",
      },
      { type: "received", text: "Bra.", time: "nå" },
    ],
  },

  emma: {
    name: "Emma, 25",
    image: "../hjemmeside/324860_2.jpg",
    status: "Sist aktiv i går",
    messages: [
      {
        type: "received",
        text: "melding",
        time: "I går",
      },
    ],
  },

  luisa: {
    name: "Luisa, 33",
    image: "../hjemmeside/b9dde5568a79c429f1a4a7123a59e16e.jpg",
    status: "Aktiv for 1 time siden",
    messages: [
      {
        type: "received",
        text: "melding",
        time: "I går",
      },
    ],
  },
};

let activeChatId = "angelina";

function renderChat(chatId) {
  const chat = chats[chatId];
  if (!chat) return;

  chatUserName.textContent = chat.name;
  chatUserImage.src = chat.image;
  chatUserImage.alt = chat.name;
  chatUserStatus.textContent = chat.status;

  chatMessages.innerHTML = "";

  chat.messages.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", msg.type);

    messageDiv.innerHTML = `
      <p>${msg.text}</p>
      <span>${msg.time}</span>
    `;

    chatMessages.appendChild(messageDiv);
  });
}

chatItems.forEach((item) => {
  item.addEventListener("click", () => {
    chatItems.forEach((chat) => chat.classList.remove("active"));
    item.classList.add("active");

    activeChatId = item.dataset.id;
    renderChat(activeChatId);
  });
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = messageInput.value.trim();
  if (!text) return;

  chats[activeChatId].messages.push({
    type: "sent",
    text: text,
    time: "Nå",
  });

  renderChat(activeChatId);
  messageInput.value = "";
});

renderChat(activeChatId);

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
