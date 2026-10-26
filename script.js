
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after selecting a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Animated role text
const typingText = document.getElementById("typing-text");
const roles = [
  "Web Developer",
  "UI Designer",
  "Creative Thinker"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const role = roles[roleIndex];

  typingText.textContent = role.substring(0, charIndex);

  if (!deleting && charIndex < role.length) {
    charIndex++;
    setTimeout(typeRole, 100);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeRole, 1200);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 45);
  } else {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 250);
  }
}

typeRole();

// Automatically update the footer year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form demonstration
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const message = formData.get("message").trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  formStatus.textContent =
    "Thanks! The demo form works, but a backend is needed to deliver your message.";

  // Connect this form to a backend or form service
  // to send messages to your email address.
});
