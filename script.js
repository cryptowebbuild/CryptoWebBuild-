// script.js - basic interactivity and accessibility helpers
document.addEventListener('DOMContentLoaded', function () {
  // Year auto
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hamburger nav toggle (mobile)
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('nav.primary');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const shown = nav.classList.toggle('show');
      hamburger.classList.toggle('active', shown);
      hamburger.setAttribute('aria-expanded', String(shown));
      // simple inline style to show nav for mobile
      if (shown) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '84px';
        nav.style.left = '12px';
        nav.style.right = '12px';
        nav.style.background = 'rgba(7,16,36,0.95)';
        nav.style.padding = '12px';
        nav.style.borderRadius = '10px';
      } else {
        nav.style.display = '';
        nav.style.position = '';
      }
    });
    // click outside to close
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('show')) {
        nav.classList.remove('show');
        hamburger.classList.remove('active');
        nav.style.display = '';
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

  // IntersectionObserver for fade-in
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

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Demo contact form handling (replace with real endpoint)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Demo form submitted — replace action with your real endpoint.');
      // Optionally clear form
      // contactForm.reset();
    });
  }
});