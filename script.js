// Fade-in Hero Text
const heroText = document.getElementById("hero-text");
heroText.style.opacity = 0;

window.addEventListener("load", () => {
  setTimeout(() => {
    heroText.style.transition = "opacity 2s ease";
    heroText.style.opacity = 1;
  }, 500);
});

// Project Data (easy to edit)
const projects = [
  {
    title: "Swiggy Clone",
    img: "assets/swiggy.png",
    desc: "Food ordering clone with cart, filters, and localStorage.",
    demo: "#",
    github: "#"
  },
  {
    title: "Netflix Clone",
    img: "assets/netflix.png",
    desc: "Movie streaming UI with TMDB API and carousels.",
    demo: "#",
    github: "#"
  },
  {
    title: "E-commerce App",
    img: "assets/ecommerce.png",
    desc: "Product listing, filters, and cart with checkout form.",
    demo: "#",
    github: "#"
  }
];

// Render Project Cards
const projectList = document.getElementById("project-list");
projects.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.demo}" target="_blank" class="btn">Live Demo</a>
    <a href="${p.github}" target="_blank" class="btn-outline">GitHub</a>
  `;
  projectList.appendChild(card);
});


// contact

// Smooth scroll for nav links (works for About link too)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 70, // offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});

// Simple reveal when About section enters viewport
const aboutSection = document.getElementById('about');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
    }
  });
}, { threshold: 0.15 });

if (aboutSection) revealObserver.observe(aboutSection);


//