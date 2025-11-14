/* =========================
   CryptoWebBuild - script.js
   Small JS: nav toggle, fade-in, avatar, smooth scroll
   ========================= */

document.addEventListener('DOMContentLoaded', function () {
  // Year insertion if any element with id 'year'
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav.primary');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isShown = nav.classList.toggle('show');
      hamburger.classList.toggle('active', isShown);
      // simple ARIA toggle
      hamburger.setAttribute('aria-expanded', String(isShown));
    });
    // close nav on click outside (mobile)
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('show')) {
        nav.classList.remove('show');
        hamburger.classList.remove('active');
      }
    });
  }

  // Avatar load animation
  const avatarImg = document.querySelector('.avatar img');
  if (avatarImg) {
    function markLoaded() {
      const container = document.querySelector('.avatar');
      if (container) container.classList.add('loaded');
    }
    if (avatarImg.complete) markLoaded();
    avatarImg.addEventListener('load', markLoaded);
  }

  // IntersectionObserver for fade-in and cards
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in, .service-card, .project-card, .blog-card').forEach(el => {
    observer.observe(el);
  });

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile nav after click
          if (nav && nav.classList.contains('show')) {
            nav.classList.remove('show');
            if (hamburger) hamburger.classList.remove('active');
          }
        }
      }
    });
  });

  // Basic contact form prevention (if action not set)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm && (!contactForm.getAttribute('action') || contactForm.getAttribute('action').includes('contact-form-endpoint'))) {
    contactForm.addEventListener('submit', function (e) {
      // placeholder - remove when real endpoint is connected
      e.preventDefault();
      alert('Form submitted (demo). Replace the form action with your backend endpoint to send messages.');
    });
  }

  // lazyload images (modern browsers)
  if ('loading' in HTMLImageElement.prototype) {
    // native lazy loading — already set by adding loading="lazy" in markup
  } else {
    // fallback simple lazyload
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    const li = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    lazyImgs.forEach(img => li.observe(img));
  }
});