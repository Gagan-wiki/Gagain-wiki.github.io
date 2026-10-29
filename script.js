// PERSONALIZE THESE VALUES BEFORE PUBLISHING.
const portfolioConfig = {
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_PROFILE/",
  projects: {
    loanApproval: "https://github.com/YOUR_USERNAME/loan-approval-prediction",
    sentiment: "https://github.com/YOUR_USERNAME/movie-review-sentiment-analyzer",
    netflix: "https://github.com/YOUR_USERNAME/netflix-eda",
    salaryDashboard: "https://github.com/YOUR_USERNAME/salary-dashboard"
  }
};

document.getElementById("year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
emailLink.href = `mailto:${portfolioConfig.email}`;
githubLink.href = portfolioConfig.github;
linkedinLink.href = portfolioConfig.linkedin;

const projectLinks = document.querySelectorAll(".project-link");
const projectUrls = Object.values(portfolioConfig.projects);
projectLinks.forEach((link, index) => {
  if (projectUrls[index]) link.href = projectUrls[index];
});

// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport; show content if reduced motion is preferred.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Friendly local-preview warning for placeholder links.
document.querySelectorAll('a[href*="YOUR_USERNAME"], a[href*="YOUR_PROFILE"], a[href*="YOUR_EMAIL"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = link.getAttribute("href") || "";
    if (target.includes("YOUR_USERNAME") || target.includes("YOUR_PROFILE") || target.includes("YOUR_EMAIL")) {
      event.preventDefault();
      alert("Before publishing, update your personal links in script.js.");
    }
  });
});
