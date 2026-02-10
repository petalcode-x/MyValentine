// ---------- INDEX PAGE ----------
function generateLink() {
  const from = document.getElementById("fromName")?.value.trim();
  const to = document.getElementById("toName")?.value.trim();
  const linkBox = document.getElementById("linkBox");

  if (!from || !to) {
    linkBox.innerText = "Please enter both names 💔";
    return;
  }

  const base =
    window.location.origin +
    window.location.pathname.replace("index.html", "");

  const link = `${base}ask.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

  linkBox.innerHTML = `
    <p>Share this link to your Valentine💕</p>
    <a href="${link}" target="_blank">${link}</a>
  `;
}

// ---------- ASK PAGE ----------
const params = new URLSearchParams(window.location.search);
const from = params.get("from");
const to = params.get("to");

const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const yesBox = document.getElementById("yesBox");

if (question && from && to) {
  question.innerText = `${to}, will you be my Valentine? 💖\n– ${from}`;
}

/// YES CLICK → KISSING CATS + POPPERS + HEARTS + SPARKLES
if (yesBtn) {
  yesBtn.onclick = () => {
    questionBox.style.display = "none";
    yesBox.style.display = "block";

    poppers();   // 🎉 poppers
    hearts();    // ❤️ floating hearts
    sparkles();  // 💖 optional sparkles around GIF
  };
}

// NO FLOATING (MOUSE + TOUCH)
function moveNo() {
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
}

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

// 🎉 POPPERS FUNCTION
function poppers() {
  const colors = ["#ff4d6d", "#ffd166", "#c77dff", "#4cc9f0", "#ffafcc"];

  for (let i = 0; i < 40; i++) {
    const pop = document.createElement("div");
    pop.className = "popper";

    pop.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    pop.style.left = Math.random() * 100 + "vw";
    pop.style.top = "60vh";

    pop.style.transform =
      `translate(${Math.random() * 200 - 100}px, ${Math.random() * -200}px)`;

    document.body.appendChild(pop);

    setTimeout(() => pop.remove(), 1200);
  }
}

// ❤️ HEARTS FLOATING UP
function hearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.innerText = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 2s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

// 💖 SPARKLES AROUND GIF
function sparkles() {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.innerText = "💖";
    sparkle.style.position = "fixed";
    sparkle.style.left = 40 + Math.random() * 200 + "px";
    sparkle.style.top = 200 + Math.random() * 100 + "px";
    sparkle.style.fontSize = "15px";
    sparkle.style.opacity = Math.random();
    sparkle.style.animation = "floatUp 2s ease-out forwards";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2000);
  }
}
