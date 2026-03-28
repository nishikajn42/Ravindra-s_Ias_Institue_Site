"use strict";
// TYPING ANIMATION
const TYPING_STRINGS = [
  "Build Your IAS Dream Here.",
  "Gwalior's Premier UPSC Coaching.",
  "20 Years. 2000+ Selections.",
  "Your Officer Journey Starts Now.",
];
let typingIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typingText");
  if (!el) return;
  const current = TYPING_STRINGS[typingIndex];
  el.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);

  if (!isDeleting && charIndex === current.length + 1) {
    setTimeout(() => { isDeleting = true; }, 1800);
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false; charIndex = 0;
    typingIndex = (typingIndex + 1) % TYPING_STRINGS.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 85);
}
// TOPPER CAROUSEL RENDER
function renderCarousel() {
  const track = document.getElementById("carouselTrack");
  const dots  = document.getElementById("carouselDots");
  if (!track) return;

  track.innerHTML = TOPPERS.map(t => `
    <div class="topper-card">
      <div class="topper-avatar">${t.init}</div>
      <div class="topper-name">${t.name}</div>
      <div class="topper-rank">${t.rank}</div>
      <div class="topper-exam">${t.exam}</div>
    </div>
  `).join("");

  if (dots) {
    dots.innerHTML = TOPPERS.slice(0, 5).map((_, i) =>
      `<span class="${i === 0 ? "active" : ""}"></span>`
    ).join("");
  }
}
// FADE-IN SCROLL OBSERVER
function initFadeObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// ACTIVE NAV LINK ON SCROLL
// ────────────────────────────────────────────────────────────
function initScrollSpy() {
  const sections = document.querySelectorAll(".section[id]");
  const navLinks = document.querySelectorAll(".nav-link[data-section]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle("active", l.dataset.section === e.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -40% 0px" });

  sections.forEach(s => observer.observe(s));
}


// ────────────────────────────────────────────────────────────
// MOBILE NAV
function initMobileNav() {
  const ham     = document.getElementById("hamburger");
  const drawer  = document.getElementById("mobileDrawer");
  const overlay = document.getElementById("mobileOverlay");

  function closeDrawer() {
    ham.classList.remove("open");
    drawer.classList.remove("open");
    overlay.classList.remove("show");
  }

  ham.addEventListener("click", () => {
    const isOpen = drawer.classList.toggle("open");
    ham.classList.toggle("open", isOpen);
    overlay.classList.toggle("show", isOpen);
  });

  overlay.addEventListener("click", closeDrawer);
  document.querySelectorAll(".mob-link").forEach(l => l.addEventListener("click", closeDrawer));
}
