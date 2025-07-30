// 🔼 Show or Hide Scroll-to-Top Button
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🪄 Reveal Service Cards on Scroll
const serviceCards = document.querySelectorAll(".service-card");

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight * 0.85;

  serviceCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    card.classList.toggle("reveal", cardTop < triggerPoint);
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
