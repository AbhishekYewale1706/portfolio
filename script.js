const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

const themeToggle = document.getElementById("theme-toggle");

function setThemeIcon() {
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
}


const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 3000) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateIconsForTheme() {
  const isDark = document.body.classList.contains("dark-mode");

  const iconMap = {
    "arrow-icon": isDark ? "./assets/arrowlight.png" : "./assets/arrowdark.png",
    "arrow-icon1": isDark ? "./assets/arrowlight.png" : "./assets/arrowdark.png",
    "arrow-icon2": isDark ? "./assets/arrowlight.png" : "./assets/arrowdark.png",
    "checkmark-icon": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon1": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon2": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon3": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon4": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon5": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon6": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "checkmark-icon7": isDark ? "./assets/checkmarklight.png" : "./assets/checkmarkdarks.png",
    "email-icon": isDark ? "./assets/emailight.png" : "./assets/emaildark.png",
    "github-icon": isDark ? "./assets/githublight.png" : "./assets/githubdark.png",
    "instagram-icon": isDark ? "./assets/instagramLight.png" : "./assets/instagramdark.png",
    "linkedin-icon": isDark ? "./assets/linkdinlight.png" : "./assets/linkedindark.png",
    "Phone-icon": isDark ? "./assets/phone-calllight.png" : "./assets/phone-calldark.png",
  };

  for (const [id, src] of Object.entries(iconMap)) {
    const el = document.getElementById(id);
    if (el) el.src = src;
  }
}


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  setThemeIcon();
  updateIconsForTheme(); // <-- Add this
});

setThemeIcon();
updateIconsForTheme();

