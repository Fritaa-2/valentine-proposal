// ====== BACKGROUND SONG ======
const bgSong = document.getElementById("bgSong");
const clickSong = document.getElementById("clickSong");

// Try to autoplay background song
bgSong.play().catch(() => {
  console.log("Autoplay blocked, waiting for user interaction...");
});

// Start background song on first user interaction (mobile-friendly)
function startBgSong() {
  bgSong.play().catch(() => {});
  document.removeEventListener("click", startBgSong);
}
document.addEventListener("click", startBgSong, { once: true });

// ====== FLIP CARDS ======
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped"); // Flip the card

    // Stop background song
    if (!bgSong.paused) {
      bgSong.pause();
    }

    // Play click song
    clickSong.currentTime = 0;
    clickSong.play();
  });
});
const nextBtn = document.getElementById("nextBtn");
const ringSection = document.getElementById("ringSection");
const ringBox = document.getElementById("ringBox");
const question = document.getElementById("question");
const answerBtns = document.getElementById("answerBtns");

let opened = false;

// Show ring section
nextBtn.addEventListener("click", () => {
  ringSection.style.display = "block";
  nextBtn.style.display = "none";
});

// Open ring box
ringBox.addEventListener("click", () => {
  if (!opened) {
    ringBox.src = "ring-open.jpg";
    question.style.display = "block";
    answerBtns.style.display = "block";
    opened = true;
  }
});

// YES button
document.querySelector(".yes").addEventListener("click", () => {
  alert("YAY!!! 💖💍");
});

// NO button (fun effect)
document.querySelector(".no").addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  document.querySelector(".no").style.transform = `translate(${x}px, ${y}px)`;
});
