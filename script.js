// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle")
const body = document.body

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
if (currentTheme === "dark") {
  body.classList.add("dark")
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")

  // Save theme preference
  const theme = body.classList.contains("dark") ? "dark" : "light"
  localStorage.setItem("theme", theme)
})

// Navigation active state and smooth scrolling
const navLinks = document.querySelectorAll(".nav-link")
const sections = document.querySelectorAll("section")

// Function to update active navigation link
function updateActiveNavLink() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("data-section") === sectionId) {
          link.classList.add("active")
        }
      })
    }
  })
}

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("data-section")
    const targetSection = document.getElementById(targetId)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Function to scroll to a specific section (used by buttons)
function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId)
  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Experience tabs functionality
const tabButtons = document.querySelectorAll(".tab-button")
const tabPanels = document.querySelectorAll(".tab-panel")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabPanels.forEach((panel) => panel.classList.remove("active"))

    // Add active class to clicked button and corresponding panel
    button.classList.add("active")
    document.getElementById(targetTab).classList.add("active")
  })
})

// Scroll event listener for navigation updates
window.addEventListener("scroll", updateActiveNavLink)

// Initialize navigation on page load
document.addEventListener("DOMContentLoaded", () => {
  updateActiveNavLink()
})

// Add scroll effect to navigation
let lastScrollTop = 0
const nav = document.querySelector(".nav")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    nav.style.transform = "translateY(-100%)"
  } else {
    // Scrolling up
    nav.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all sections for animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("section")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})
