/* =========================================================================
   CryptoWebBuild — Final Optimized Script (Cleaned)
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* -------------------------
     1. MOBILE MENU (Hamburger)
     ------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('navMenu'); // Target the ul with id="navMenu"

  if (hamburger && navMenu) {
    // Toggle function
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent click from bubbling
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  /* -------------------------
     2. TYPING EFFECT (Hero Section)
     ------------------------- */
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'Crypto & Web3 websites.',
      'Fast E-commerce stores.',
      'Business websites.',
      'SEO-first Portfolios.'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const holdTime = 2000;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        charIndex--;
        typingEl.textContent = "I build " + currentPhrase.substring(0, charIndex);
      } else {
        charIndex++;
        typingEl.textContent = "I build " + currentPhrase.substring(0, charIndex);
      }

      let nextSpeed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        nextSpeed = holdTime;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        nextSpeed = 500;
      }

      setTimeout(type, nextSpeed);
    }
    
    // Start typing
    type();
  }

  /* -------------------------
     3. BACK TO TOP BUTTON
     ------------------------- */
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* -------------------------
     4. FOOTER YEAR AUTO UPDATE
     ------------------------- */
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }
  
  /* -------------------------
     5. FADE IN ANIMATION ON SCROLL
     ------------------------- */
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

});
```

### ৩. 🛠️ `index.html` চেক (শুধু নিশ্চিত হওয়ার জন্য)
আপনার `index.html`-এর মেনু অংশটি নিচের কোডের মতো আছে কিনা দেখে নিন (বিশেষ করে `id="navMenu"` এবং হ্যামবার্গার বাটনটি):

```html
<!-- Header -->
<header class="header" role="banner">
  <nav class="navbar container" role="navigation">
    <a href="/" class="nav-logo">CWB</a>

    <!-- Desktop Menu (id="navMenu" is important for JS) -->
    <ul class="nav-menu" id="navMenu">
      <li class="nav-item"><a href="/" class="nav-link active">Home</a></li>
      <li class="nav-item"><a href="/services" class="nav-link">Services</a></li>
      <li class="nav-item"><a href="/projects" class="nav-link">Projects</a></li>
      <li class="nav-item"><a href="/videos" class="nav-link">Videos</a></li>
      <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
      <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
      <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
    </ul>

    <!-- Hamburger Button -->
    <button id="hamburger" class="hamburger" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </nav>
</header>