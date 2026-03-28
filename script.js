"use strict";

//rsult image
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("result-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// MOCK DATA
// ─────────────────────────────────────────────────────────────

const TOPPERS = [
  { name: "Priya Verma",   rank: "AIR 12",  exam: "IAS 2025", init: "P" },
  { name: "Rahul Gupta",   rank: "AIR 45",  exam: "IPS 2025", init: "R" },
  { name: "Sneha Joshi",   rank: "AIR 67",  exam: "IAS 2025", init: "S" },
  { name: "Amit Tiwari",   rank: "AIR 89",  exam: "IFS 2024", init: "A" },
  { name: "Pooja Singh",   rank: "AIR 102", exam: "IAS 2024", init: "P" },
  { name: "Vikas Yadav",   rank: "AIR 143", exam: "IPS 2024", init: "V" },
  { name: "Neha Sharma",   rank: "AIR 178", exam: "IAS 2025", init: "N" },
  { name: "Deepak Kumar",  rank: "AIR 200", exam: "IRS 2025", init: "D" },
];

const COURSES = [
  {
    icon: "fas fa-seedling", badge: "badge-popular", badgeText: "Most Popular",
    title: "UPSC Foundation", desc: "A comprehensive 12-month programme covering all GS papers, essay, CSAT, and interview preparation from scratch.",
    duration: "12 Months", students: "450+ Enrolled"
  },
  {
    icon: "fas fa-layer-group", badge: "badge-advanced", badgeText: "Advanced",
    title: "Prelims + Mains", desc: "Targeted 8-month integrated preparation for both Prelims and Mains with current affairs, MCQ tests, and answer writing practice.",
    duration: "8 Months", students: "320+ Enrolled"
  },
  {
    icon: "fas fa-scroll", badge: "badge-new", badgeText: "New Batch",
    title: "Optional Subjects", desc: "Specialized coaching for optional subjects: Sociology, History, Geography, PSIR, Public Admin, and more, by subject experts.",
    duration: "5 Months", students: "180+ Enrolled"
  },
  {
    icon: "fas fa-clipboard-check", badge: "badge-free", badgeText: "Try Free",
    title: "Test Series", desc: "Comprehensive all-India mock test series with detailed performance analytics, rank prediction, and personalized feedback.",
    duration: "Year-Round", students: "800+ Enrolled"
  },
];

const ALUMNI = [
  {
    name: "Priya Verma", beforeRole: "B.Tech Graduate, Indore", afterRole: "IAS Officer, MP Cadre",
    rank: "AIR 12 – UPSC 2025",
    quote: "Ravindra Sir's guidance transformed my understanding of the exam. The structured approach and mock tests made all the difference. I owe my success to this institute.",
    init: "P"
  },
  {
    name: "Rahul Gupta", beforeRole: "Engineering Student, Gwalior", afterRole: "IPS Officer, Rajasthan Cadre",
    rank: "AIR 45 – UPSC 2025",
    quote: "The faculty here are not just teachers — they are mentors who understand each student personally. The doubt-clearing sessions and weekly tests kept me on track.",
    init: "R"
  },
  {
    name: "Sneha Joshi", beforeRole: "Commerce Graduate, Jhansi", afterRole: "IFS Officer",
    rank: "AIR 67 – UPSC 2025",
    quote: "I failed twice before joining Ravindra's. The answer-writing workshops and current affairs modules completely changed my approach. Cleared in my very next attempt!",
    init: "S"
  },
];

const BENEFITS = [
  { icon: "fas fa-comments", title: "Daily Doubt Sessions", desc: "Dedicated doubt-clearing sessions every evening with subject experts and peer discussion groups." },
  { icon: "fas fa-book-reader", title: "Premium Study Material", desc: "Meticulously curated notes, current affairs magazines, and PYQ booklets updated every year." },
  { icon: "fas fa-clipboard-list", title: "Weekly Mock Tests", desc: "UPSC-pattern mock tests every Saturday with detailed performance analytics and rank prediction." },
  { icon: "fas fa-microphone", title: "Personality Interview", desc: "Rigorous mock interview panels with retired IAS/IPS officers to groom your personality." },
  { icon: "fas fa-chart-bar", title: "Performance Analytics", desc: "AI-powered analytics dashboard tracking your progress, weak areas, and improvement metrics." },
  { icon: "fas fa-users", title: "Peer Learning Groups", desc: "Structured study groups of 8–10 students with weekly peer discussion and group GS debates." },
  { icon: "fas fa-trophy", title: "Proven Track Record", desc: "2000+ selections in 20 years — our results speak louder than any advertisement." },
];

const FACULTY = [
  { name: "Dr. Meera Pandey",  subject: "Indian Polity & Governance", qual: "Ph.D. Political Science, JNU · Ex-UPSC Panel", init: "M" },
  { name: "Shri Ajay Saxena",  subject: "History & Culture",          qual: "M.A. History, BHU · 18 Years UPSC Teaching", init: "A" },
  { name: "Dr. Kavita Mishra", subject: "Geography & Environment",    qual: "Ph.D. Geography, DU · Author – 5 UPSC Books",  init: "K" },
  { name: "Shri Rohit Jain",   subject: "Economy & Budget",           qual: "MBA Finance · Ex-IRS Officer",               init: "R" },
  { name: "Dr. Sunita Rao",    subject: "Ethics, Integrity & Aptitude", qual: "Ph.D. Philosophy · UPSC Mains Specialist",  init: "S" },
  { name: "Shri Pankaj Dubey", subject: "Science & Technology",       qual: "M.Sc. Physics, IITK · IIT Alumni",           init: "P" },
];

const GALLERY_ITEMS = [
  { label: "Orientation Day 2025",   bg: "linear-gradient(135deg,#0B3D91,#1a54b8)", icon: "fas fa-flag" },
  { label: "Study Hall",             bg: "linear-gradient(135deg,#1a3a6e,#234ca0)", icon: "fas fa-book" },
  { label: "Mock Interview Prep",    bg: "linear-gradient(135deg,#0d4c8b,#1565c0)", icon: "fas fa-microphone" },
  { label: "Result Celebration",     bg: "linear-gradient(135deg,#7b4f00,#c68b00)", icon: "fas fa-trophy" },
  { label: "Workshop on Essay",      bg: "linear-gradient(135deg,#1b5e20,#2e7d32)", icon: "fas fa-pen-alt" },
  { label: "Annual Felicitation",    bg: "linear-gradient(135deg,#1a237e,#283593)", icon: "fas fa-medal" },
];

const STUDY_MATERIAL = [
  { icon: "fas fa-file-pdf", iconClass: "icon-pdf", cat: "Notes",   title: "GS Paper I – Complete Notes",       desc: "Comprehensive notes covering History, Geography & Society for GS1.", size: "12.4 MB", type: "PDF" },
  { icon: "fas fa-file-pdf", iconClass: "icon-pdf", cat: "Notes",   title: "Indian Polity – Quick Revision",    desc: "Concise revision material for Polity and Constitution topics.",      size: "8.2 MB",  type: "PDF" },
  { icon: "fas fa-video",    iconClass: "icon-video",cat: "Video",  title: "Economy – Budget Analysis 2025",    desc: "Detailed Union Budget 2025 analysis by Shri Rohit Jain.",          size: "45 Min",  type: "Video" },
  { icon: "fas fa-clipboard-check", iconClass: "icon-test", cat: "Test", title: "Prelims Mock Test #12",      desc: "100 MCQ full mock test with detailed solutions and explanations.",   size: "100 Q",   type: "Test" },
  { icon: "fas fa-file-alt", iconClass: "icon-notes",cat: "Notes",  title: "Environment & Ecology Summary",     desc: "Topic-wise summary with previous year questions highlighted.",       size: "6.8 MB",  type: "PDF" },
  { icon: "fas fa-video",    iconClass: "icon-video",cat: "Video",  title: "Ethics & Integrity – Case Studies", desc: "20 case studies with model answers for GS Paper IV preparation.",    size: "1.2 Hrs", type: "Video" },
  { icon: "fas fa-clipboard-check", iconClass: "icon-test", cat: "Test", title: "Mains Answer Writing Practice", desc: "5 Full-length Mains mock tests with model answers by toppers.",   size: "5 Tests", type: "Test" },
  { icon: "fas fa-file-alt", iconClass: "icon-notes",cat: "Notes",  title: "Current Affairs Compilation 2025",  desc: "Monthly CA compilation with MCQs, maps, and data tables.",          size: "24 MB",   type: "PDF" },
];

// Default student dashboard data (can be overridden by faculty via localStorage)
const DEFAULT_SCHEDULE = [
  { subject: "Indian Polity", time: "Mon, Wed, Fri - 7:00 AM" },
  { subject: "Geography",     time: "Tue, Thu - 8:00 AM" },
  { subject: "Economy",       time: "Mon, Fri - 5:00 PM" },
  { subject: "Mock Test",     time: "Every Saturday - 9:00 AM" },
];
const DEFAULT_NOTIFS = [
  { msg: "Mock Test #14 scheduled on Saturday 10 AM. Bring your admit card.", time: "2 hrs ago" },
  { msg: "Essay workshop by Ravindra Sir on Friday 4 PM. Attendance compulsory.", time: "Yesterday" },
  { msg: "Monthly current affairs booklet uploaded in the portal.", time: "2 days ago" },
];
const DEFAULT_SUBJECTS = ["Indian Polity", "History", "Geography", "Economy", "Ethics", "Science & Tech"];
const DEFAULT_NOTES = [
  { title: "GS1 Complete Notes",  subject: "History & Geography" },
  { title: "Polity Quick Revision", subject: "Indian Polity" },
  { title: "Economy Budget 2025", subject: "Economy" },
  { title: "Ethics Case Studies",  subject: "Ethics" },
];


// ─────────────────────────────────────────────────────────────
// TYPING ANIMATION
// ─────────────────────────────────────────────────────────────
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


// ─────────────────────────────────────────────────────────────
// TOPPER CAROUSEL RENDER
// ─────────────────────────────────────────────────────────────
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


// ─────────────────────────────────────────────────────────────
// COURSES RENDER
// ─────────────────────────────────────────────────────────────
function renderCourses() {
  const grid = document.getElementById("coursesGrid");
  if (!grid) return;
  grid.innerHTML = COURSES.map(c => `
    <div class="course-card fade-in">
      <div class="course-icon"><i class="${c.icon}"></i></div>
      <span class="course-badge ${c.badge}">${c.badgeText}</span>
      <h3 class="course-title">${c.title}</h3>
      <p class="course-desc">${c.desc}</p>
      <div class="course-meta">
        <span><i class="fas fa-clock"></i> ${c.duration}</span>
        <span><i class="fas fa-users"></i> ${c.students}</span>
      </div>
      <a href="#contact" class="course-btn">Enquire Now <i class="fas fa-arrow-right"></i></a>
    </div>
  `).join("");
}

// ALUMNI SLIDER
// ─────────────────────────────────────────────────────────────
let alumniCurrent = 0;

function renderAlumni() {
  const slider = document.getElementById("alumniSlider");
  const dotsEl  = document.getElementById("alumniDots");
  if (!slider) return;

  slider.innerHTML = ALUMNI.map(a => `
    <div class="alumni-card">
      <div class="alumni-journey">
        <div class="journey-card">
          <div class="journey-avatar before-avatar">${a.init}</div>
          <span class="journey-tag before-tag">Before</span>
          <div class="journey-name">${a.name}</div>
          <div class="journey-detail">${a.beforeRole}</div>
        </div>
        <div class="journey-arrow"><i class="fas fa-arrow-right"></i></div>
        <div class="journey-card">
          <div class="journey-avatar after-avatar">${a.init}</div>
          <span class="journey-tag after-tag">After</span>
          <div class="journey-name">${a.name}</div>
          <div class="journey-detail">${a.afterRole}</div>
          <div class="journey-detail" style="color:var(--gold-dark);font-weight:600;margin-top:4px;">${a.rank}</div>
        </div>
      </div>
      <div class="alumni-quote">
        <blockquote>"${a.quote}"</blockquote>
        <cite>— ${a.name}, ${a.rank}</cite>
      </div>
    </div>
  `).join("");

  if (dotsEl) {
    dotsEl.innerHTML = ALUMNI.map((_, i) =>
      `<span class="${i === 0 ? "active" : ""}" onclick="goAlumni(${i})"></span>`
    ).join("");
  }
}

function goAlumni(idx) {
  alumniCurrent = idx;
  const slider = document.getElementById("alumniSlider");
  if (slider) slider.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll("#alumniDots span").forEach((d, i) =>
    d.classList.toggle("active", i === idx)
  );
}


// ─────────────────────────────────────────────────────────────
// BENEFITS RENDER
// ─────────────────────────────────────────────────────────────
function renderBenefits() {
  const grid = document.getElementById("benefitsGrid");
  if (!grid) return;
  grid.innerHTML = BENEFITS.map(b => `
    <div class="benefit-card fade-in">
      <div class="benefit-icon"><i class="${b.icon}"></i></div>
      <h3 class="benefit-title">${b.title}</h3>
      <p class="benefit-desc">${b.desc}</p>
    </div>
  `).join("");
}


// ─────────────────────────────────────────────────────────────
// FACULTY RENDER
// ─────────────────────────────────────────────────────────────
function renderFaculty() {
  const grid = document.getElementById("facultyGrid");
  if (!grid) return;
  grid.innerHTML = FACULTY.map(f => `
    <div class="faculty-card fade-in">
      <div class="fac-avatar">${f.init}</div>
      <div class="fac-name">${f.name}</div>
      <div class="fac-subject">${f.subject}</div>
      <div class="fac-qual">${f.qual}</div>
    </div>
  `).join("");
}


// ─────────────────────────────────────────────────────────────
// GALLERY RENDER
// ─────────────────────────────────────────────────────────────
const GALLERY = [
  { label: "Result Day 2024", 
    img: "images/result2.jpeg", 
    icon: "fas fa-flag" },
  { label: "Study Hall",           
    img: "images/hallStudy.jpeg",  
    icon: "fas fa-book" },
  { label: "Mock Interview Prep",  
    img: "images/doubtSession.jpeg", icon: "fas fa-microphone" },
  { label: "Result 2024",   
    img: "images/result photo.jpeg", icon: "fas fa-trophy" },
  { label: "Workshop on Essay",    
    img: "images/Class_Photo.jpeg",    icon: "fas fa-pen-alt" },
  { label: "Workshop on Essay",  
    img: "images/classes.jpeg", icon: "fas fa-medal" },
];
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = GALLERY.map((g, i) => `
    <div class="gallery-item fade-in" onclick="openLightbox(${i})">
      <div class="gallery-image-container">
        <img src="${g.img}" alt="${g.label}" class="gallery-img">
      </div>
      <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
      </div>
      <div class="gallery-label">${g.label}</div>
    </div>
  `).join("");
}

function openLightbox(idx) {
  const g = GALLERY[idx];
  const lb = document.getElementById("lightbox");
  const lc = document.getElementById("lightboxContent");
  lc.innerHTML = `
    <div class="lightbox-img-wrap">
      <img src="${g.img}" style="max-width:100%; border-radius:12px; margin-bottom:15px;">
    </div>
    <h3 style="font-family:'Playfair Display',serif;font-size:1.8rem;color:var(--gold-light);margin-bottom:8px;">${g.label}</h3>
    <p style="color:rgba(255,255,255,0.8);font-size:1rem;">Ravindra's IAS Institute · Gwalior</p>
  `;
  lb.classList.add("open");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}

// STUDY MATERIAL RENDER
// ─────────────────────────────────────────────────────────────
function renderStudy() {
  const grid = document.getElementById("studyGrid");
  if (!grid) return;
  grid.innerHTML = STUDY_MATERIAL.map(s => `
    <div class="study-card fade-in">
      <div class="study-icon ${s.iconClass}"><i class="${s.icon}"></i></div>
      <span class="study-cat">${s.cat}</span>
      <h4 class="study-title">${s.title}</h4>
      <p class="study-desc">${s.desc}</p>
      <div class="study-meta">
        <span><i class="fas fa-hdd"></i> ${s.size}</span>
        <span><i class="fas fa-tag"></i> ${s.type}</span>
      </div>
      <a href="#login" class="study-dl"><i class="fas fa-download"></i> Download</a>
    </div>
  `).join("");
}


// ─────────────────────────────────────────────────────────────
// COUNTER ANIMATION (Legacy section)
// ─────────────────────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll(".counter").forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = Math.floor(current).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, stepTime);
  });
}

let countersRun = false;

function handleLegacyObserver() {
  const cards = document.querySelectorAll(".legacy-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        if (!countersRun) { countersRun = true; animateCounters(); }
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(c => observer.observe(c));
}

// FADE-IN SCROLL OBSERVER
// ─────────────────────────────────────────────────────────────
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
// ─────────────────────────────────────────────────────────────
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

// MOBILE NAV
// ─────────────────────────────────────────────────────────────
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


// ─────────────────────────────────────────────────────────────
// SMOOTH SCROLL (for anchor links)
// ─────────────────────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
    });
  });
}


// ─────────────────────────────────────────────────────────────
// BACK TO TOP
// ─────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => btn.classList.toggle("show", window.scrollY > 400));
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}


// ─────────────────────────────────────────────────────────────
// LOGIN SYSTEM
// ─────────────────────────────────────────────────────────────
let currentRole = "student"; // "student" | "faculty"

function initLoginTabs() {
  document.querySelectorAll(".login-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".login-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentRole = tab.dataset.role;
      document.getElementById("loginHint").textContent = "";
    });
  });
}

function togglePass() {
  const inp = document.getElementById("loginPass");
  const ico = document.getElementById("eyeIcon");
  if (inp.type === "password") {
    inp.type = "text"; ico.className = "fas fa-eye-slash";
  } else {
    inp.type = "password"; ico.className = "fas fa-eye";
  }
}

function handleLogin() {
  const id   = document.getElementById("loginId").value.trim();
  const pass = document.getElementById("loginPass").value.trim();
  const hint = document.getElementById("loginHint");

  if (!id || !pass) { hint.textContent = "Please enter your ID and password."; return; }

  if (currentRole === "student" && id === "1") {
    showStudentDashboard();
  } else if (currentRole === "faculty" && id === "2") {
    showFacultyDashboard();
  } else {
    hint.textContent = "Invalid credentials. Use Student ID=1 or Faculty ID=2.";
  }
}

function showStudentDashboard() {
  document.getElementById("loginContainer").style.display = "none";
  const dash = document.getElementById("studentDashboard");
  dash.style.display = "block";
  loadStudentDashboard();
}

function showFacultyDashboard() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("facultyDashboard").style.display = "block";
  loadFacultyEnrolled();
}

function logout() {
  document.getElementById("loginContainer").style.display = "flex";
  document.getElementById("studentDashboard").style.display = "none";
  document.getElementById("facultyDashboard").style.display = "none";
  document.getElementById("loginId").value = "";
  document.getElementById("loginPass").value = "";
  document.getElementById("loginHint").textContent = "";
}


// ─────────────────────────────────────────────────────────────
// STUDENT DASHBOARD LOAD
// ─────────────────────────────────────────────────────────────
function loadStudentDashboard() {
  // Schedule
  const schedule = JSON.parse(localStorage.getItem("ias_schedule") || "null") || DEFAULT_SCHEDULE;
  const schedList = document.getElementById("scheduleList");
  schedList.innerHTML = schedule.map(s => `
    <div class="schedule-item">
      <div class="schedule-dot"></div>
      <div><strong>${s.subject}</strong><span>${s.time}</span></div>
    </div>
  `).join("");

  // Notifications
  const notifs = JSON.parse(localStorage.getItem("ias_notifs") || "null") || DEFAULT_NOTIFS;
  document.getElementById("notifList").innerHTML = notifs.map(n => `
    <div class="notif-item">
      <i class="fas fa-bell"></i>
      <div><p>${n.msg}</p><small>${n.time}</small></div>
    </div>
  `).join("");

  // Subjects
  const subjects = JSON.parse(localStorage.getItem("ias_subjects") || "null") || DEFAULT_SUBJECTS;
  document.getElementById("subjectTags").innerHTML = subjects.map(s =>
    `<span class="subject-tag">${s}</span>`
  ).join("");

  // Notes
  const notes = JSON.parse(localStorage.getItem("ias_notes") || "null") || DEFAULT_NOTES;
  document.getElementById("notesList").innerHTML = notes.map(n => `
    <div class="note-item">
      <div class="note-icon"><i class="fas fa-file-pdf"></i></div>
      <div class="note-info"><strong>${n.title}</strong><span>${n.subject}</span></div>
      <a href="#" class="note-dl"><i class="fas fa-download"></i></a>
    </div>
  `).join("");
}


// ─────────────────────────────────────────────────────────────
// FACULTY DASHBOARD ACTIONS
// ─────────────────────────────────────────────────────────────

function addSubject() {
  const subj = document.getElementById("newSubject").value.trim();
  const sched = document.getElementById("newSchedule").value.trim();
  const msg   = document.getElementById("subjectMsg");
  if (!subj || !sched) { msg.textContent = "⚠ Please fill both fields."; msg.style.color = "#dc2626"; return; }

  // Update schedule in localStorage
  const existing = JSON.parse(localStorage.getItem("ias_schedule") || "null") || [...DEFAULT_SCHEDULE];
  existing.push({ subject: subj, time: sched });
  localStorage.setItem("ias_schedule", JSON.stringify(existing));

  // Update subjects list too
  const subjects = JSON.parse(localStorage.getItem("ias_subjects") || "null") || [...DEFAULT_SUBJECTS];
  if (!subjects.includes(subj)) { subjects.push(subj); localStorage.setItem("ias_subjects", JSON.stringify(subjects)); }

  msg.textContent = `✓ Subject "${subj}" added successfully!`;
  msg.style.color = "#16a34a";
  document.getElementById("newSubject").value = "";
  document.getElementById("newSchedule").value = "";
}

function addStudent() {
  const name = document.getElementById("newStudent").value.trim();
  const msg  = document.getElementById("studentMsg");
  if (!name) { msg.textContent = "⚠ Please enter student username."; msg.style.color = "#dc2626"; return; }

  const students = JSON.parse(localStorage.getItem("ias_enrolled") || "[]");
  if (students.includes(name)) { msg.textContent = `⚠ "${name}" already enrolled.`; msg.style.color = "#dc2626"; return; }
  students.push(name);
  localStorage.setItem("ias_enrolled", JSON.stringify(students));

  msg.textContent = `✓ Student "${name}" enrolled successfully!`;
  msg.style.color = "#16a34a";
  document.getElementById("newStudent").value = "";
  loadFacultyEnrolled();
}

function loadFacultyEnrolled() {
  const students = JSON.parse(localStorage.getItem("ias_enrolled") || "[]");
  const el = document.getElementById("enrolledStudents");
  if (!el) return;
  if (students.length === 0) {
    el.innerHTML = `<p style="font-size:0.82rem;color:var(--text-muted)">No students added yet.</p>`;
  } else {
    el.innerHTML = students.map(s => `
      <div class="enrolled-student-item">
        <i class="fas fa-user-graduate"></i> ${s}
      </div>
    `).join("");
  }
}

function uploadNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const subj  = document.getElementById("noteSubject").value.trim();
  const msg   = document.getElementById("noteMsg");
  if (!title || !subj) { msg.textContent = "⚠ Please fill both fields."; msg.style.color = "#dc2626"; return; }

  const notes = JSON.parse(localStorage.getItem("ias_notes") || "null") || [...DEFAULT_NOTES];
  notes.unshift({ title, subject: subj });
  localStorage.setItem("ias_notes", JSON.stringify(notes));

  msg.textContent = `✓ Note "${title}" uploaded!`;
  msg.style.color = "#16a34a";
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteSubject").value = "";
}

function sendNotif() {
  const message = document.getElementById("notifMessage").value.trim();
  const msg     = document.getElementById("notifMsg");
  if (!message) { msg.textContent = "⚠ Please write a message."; msg.style.color = "#dc2626"; return; }

  const notifs = JSON.parse(localStorage.getItem("ias_notifs") || "null") || [...DEFAULT_NOTIFS];
  notifs.unshift({ msg: message, time: "Just now" });
  localStorage.setItem("ias_notifs", JSON.stringify(notifs));

  msg.textContent = "✓ Notification sent to all students!";
  msg.style.color = "#16a34a";
  document.getElementById("notifMessage").value = "";
}


// ─────────────────────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────────────────────
function submitContactForm(e) {
  e.preventDefault();
  const success = document.getElementById("formSuccess");
  success.style.display = "flex";
  e.target.reset();
  setTimeout(() => { success.style.display = "none"; }, 5000);
}


// ─────────────────────────────────────────────────────────────
// ALUMNI SLIDER CONTROLS
// ─────────────────────────────────────────────────────────────
function initAlumniControls() {
  document.getElementById("alumniPrev")?.addEventListener("click", () => {
    goAlumni((alumniCurrent - 1 + ALUMNI.length) % ALUMNI.length);
  });
  document.getElementById("alumniNext")?.addEventListener("click", () => {
    goAlumni((alumniCurrent + 1) % ALUMNI.length);
  });

  // Auto-advance every 6s
  setInterval(() => {
    goAlumni((alumniCurrent + 1) % ALUMNI.length);
  }, 6000);
}


// ─────────────────────────────────────────────────────────────
// CAROUSEL AUTO-SCROLL
// ─────────────────────────────────────────────────────────────
function initCarouselAutoScroll() {
  const track = document.getElementById("carouselTrack");
  if (!track) return;
  let scrollDir = 1;
  setInterval(() => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll) scrollDir = -1;
    if (track.scrollLeft <= 0) scrollDir = 1;
    track.scrollBy({ left: 220 * scrollDir, behavior: "smooth" });
  }, 2500);
}


// ─────────────────────────────────────────────────────────────
// GALLERY RANDOM COLORS
// ─────────────────────────────────────────────────────────────
// Already handled in render with predefined gradients


// ─────────────────────────────────────────────────────────────
// EXPOSE GLOBAL FUNCTIONS (for inline HTML handlers)
// ─────────────────────────────────────────────────────────────
window.handleLogin     = handleLogin;
window.logout          = logout;
window.togglePass      = togglePass;
window.addSubject      = addSubject;
window.addStudent      = addStudent;
window.uploadNote      = uploadNote;
window.sendNotif       = sendNotif;
window.submitContactForm = submitContactForm;
window.openLightbox    = openLightbox;
window.closeLightbox   = closeLightbox;
window.goAlumni        = goAlumni;


// ─────────────────────────────────────────────────────────────
// INIT – Run everything on DOMContentLoaded
// ─────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Render all sections
  renderCarousel();
  renderCourses();
  renderAlumni();
  renderBenefits();
  renderFaculty();
  renderGallery();
  renderStudy();

  // Interactions
  initMobileNav();
  initSmoothScroll();
  initBackToTop();
  initLoginTabs();
  initAlumniControls();
  initCarouselAutoScroll();

  // Observers
  handleLegacyObserver();

  // Slight delay so DOM renders first, then activate fade observer
  requestAnimationFrame(() => initFadeObserver());
  requestAnimationFrame(() => initScrollSpy());

  // Start typing
  setTimeout(typeEffect, 400);

  // Lightbox close on backdrop click
  document.getElementById("lightbox")?.addEventListener("click", function(e) {
    if (e.target === this) closeLightbox();
  });

  // Enter key for login
  document.getElementById("loginPass")?.addEventListener("keyup", e => {
    if (e.key === "Enter") handleLogin();
  });
});
