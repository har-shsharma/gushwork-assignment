# Responsive Figma to HTML Website

This is a fully responsive website built from a given Figma design. The implementation focuses on clean structure, interactivity, and accessibility using semantic HTML5, CSS, and vanilla JavaScript — without any external libraries or animation frameworks.

---

## 🌟 Features

- **Responsive Design**  
  Built entirely using CSS media queries to ensure compatibility across all screen sizes.

- **Header Reveal/Hide**  
  The header intelligently reveals on scroll-up and hides on scroll-down using a lightweight JavaScript solution.

- **Interactive Carousel with Zoom**  
  A custom carousel where hovering over any image triggers a zoomed preview.  
  By default the hero-section is zoomable.
  Just add the class `.zoomable` to any `<img>` tag and it becomes zoom-enabled automatically.

- **Magnifier Preview (Glass Effect)**  
  A glass preview with a "+" icon appears when hovering on zoomable images, enhancing the user experience.

- **Semantic HTML**  
  All layout and content are structured using proper semantic tags like `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, and more for better accessibility and SEO.

- **No External Libraries**  
  All functionality, including transitions and interactivity, is handled using **vanilla JavaScript and CSS** — as per the project constraints. No GSAP or animation libraries used.

---

## 🔧 How to Use

1. Clone the repository or download the project files.
2. Open `index.html` in a browser.
3. To make any image zoomable, just add the `zoomable` class:
   ```html
   <img src="path/to/image.jpg" alt="..." class="zoomable" />

📦 project-root
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── images/
└── README.md
