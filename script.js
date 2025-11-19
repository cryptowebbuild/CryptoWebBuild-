document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // --- 1. MOBILE MENU LOGIC (Fixed) ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation(); // Click bubble bondho kora
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Link e click korle menu bondho hobe
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Baire click korle menu bondho hobe
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // --- 2. TYPING EFFECT (Restored) ---
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = ['Crypto & Web3 websites.', 'Fast E-commerce stores.', 'Business websites.'];
    let loopNum = 0;
    let isDeleting = false;
    let txt = '';
    let delta = 100;

    function tick() {
      let i = loopNum % phrases.length;
      let fullTxt = phrases[i];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      typingEl.innerHTML = 'I build ' + txt;

      let typeSpeed = 100;
      if (isDeleting) typeSpeed /= 2;

      if (!isDeleting && txt === fullTxt) {
        typeSpeed = 2000; // Wait at end
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        typeSpeed = 500;
      }

      setTimeout(tick, typeSpeed);
    }
    tick();
  }

  // --- 3. FOOTER YEAR ---
  const yearSpan = document.getElementById('footer-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
```

---

### 3. Check `index.html` (Header Section)
Apnar `index.html` file-er Header ongshota thik nicher moto hote hobe. Jodi onno kichu thake, taile **Header** tuku replace kore din:

```html
<header class="header" role="banner">
  <nav class="navbar container" role="navigation">
    <a href="/" class="nav-logo">CWB</a>

    <!-- Desktop Menu -->
    <ul class="nav-menu">
      <li><a href="/" class="nav-link">Home</a></li>
      <li><a href="/services" class="nav-link">Services</a></li>
      <li><a href="/projects" class="nav-link">Projects</a></li>
      <li><a href="/videos" class="nav-link">Videos</a></li>
      <li><a href="/blog" class="nav-link">Blog</a></li>
      <li><a href="/about" class="nav-link">About</a></li>
      <li><a href="/contact" class="nav-link">Contact</a></li>
    </ul>

    <!-- Mobile Hamburger Button -->
    <button class="hamburger" aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </nav>
</header>