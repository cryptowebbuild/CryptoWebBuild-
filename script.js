/* =========================================================================
   CryptoWebBuild — Final Optimized Script
   ========================================================================= */

(function () {
  'use strict';

  // quick helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));

  // safe DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------
       NAV / HAMBURGER MENU (Fixed & Cleaned)
    ------------------------- */
    (function initMobileMenu() {
      const hamburger = $('.hamburger');
      const navMenu = $('.nav-menu') || $('.nav-menu-panel');

      if (!hamburger || !navMenu) return;

      // Ensure bars exist inside hamburger
      if (!hamburger.querySelector('.bar')) {
          hamburger.innerHTML = ''; 
          for (let i = 0; i < 3; i++) {
              let s = document.createElement('span');
              s.className = 'bar';
              hamburger.appendChild(s);
          }
      }

      function setAria(open) {
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      function toggleMenu(force) {
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        setAria(willOpen);
        document.documentElement.classList.toggle('nav-open', willOpen);

        // prevent body scroll when open on mobile
        if (willOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
      }

      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      // close on click link inside
      navMenu.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;
        toggleMenu(false);
      });

      // close when clicking outside
      document.addEventListener('click', function (e) {
        if (!navMenu.classList.contains('active')) return;
        const target = e.target;
        if (!target.closest('.nav-menu') && !target.closest('.nav-menu-panel') && !target.closest('.hamburger')) {
          toggleMenu(false);
        }
      }, { passive: true });

      // close on Escape
      document.addEventListener('keydown', function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && navMenu.classList.contains('active')) toggleMenu(false);
      });

      if (!hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded', 'false');
    })();


    /* -------------------------
       TYPING EFFECT (hero)
    ------------------------- */
    (function initTypingEffect() {
      const typingEl = document.getElementById('typing-text');
      const cursorEl = document.querySelector('.typing-cursor');

      if (!typingEl) return;

      const phrases = [
        'Crypto & Web3 websites.',
        'Fast E-commerce stores.',
        'Business websites.',
        'SEO-first Portfolios.'
      ];

      const TYPE_SPEED = 90;
      const DELETE_SPEED = 45;
      const HOLD_DELAY = 1400;
      const START_DELAY = 500;
      const BETWEEN_DELAY = 300;

      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;

      function tick() {
        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          charIndex++;
          typingEl.textContent = "I build " + current.slice(0, charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            timer = setTimeout(tick, HOLD_DELAY);
            return;
          }
        } else {
          charIndex--;
          typingEl.textContent = "I build " + current.slice(0, charIndex);
          if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            timer = setTimeout(tick, BETWEEN_DELAY);
            return;
          }
        }
        timer = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
      }

      timer = setTimeout(tick, START_DELAY);
    })();


    /* -------------------------
       SMOOTH SCROLL
    ------------------------- */
    (function initSmoothAnchors() {
      $$('a[href*="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
          const href = a.getAttribute('href');
          if (!href || href === '#' || href.startsWith('/')) return; // Ignore actual page links
          
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            // Close mobile menu if open
            const navMenu = $('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) $('.hamburger').click();
          }
        });
      });
    })();


    /* -------------------------
       FADE-IN OBSERVER
    ------------------------- */
    (function initFadeIn() {
      const nodes = $$('.fade-in');
      if (!nodes.length) return;

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      nodes.forEach(n => io.observe(n));
    })();


    /* -------------------------
       BACK TO TOP BUTTON
    ------------------------- */
    (function initBackToTop() {
      const btn = document.createElement('button');
      btn.innerHTML = '↑';
      btn.className = 'back-to-top';
      Object.assign(btn.style, {
        position: 'fixed', right: '20px', bottom: '20px',
        padding: '10px 15px', borderRadius: '50%', background: '#00d1ff',
        color: '#000', border: 'none', cursor: 'pointer', zIndex: 999,
        opacity: '0', transition: 'opacity 0.3s', pointerEvents: 'none', fontWeight: 'bold'
      });
      
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      document.body.appendChild(btn);

      window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
          btn.style.opacity = '1';
          btn.style.pointerEvents = 'all';
        } else {
          btn.style.opacity = '0';
          btn.style.pointerEvents = 'none';
        }
      });
    })();

    /* -------------------------
       FOOTER YEAR AUTO-UPDATE
    ------------------------- */
    (function footerYear() {
      const fy = document.getElementById('footer-year');
      if (fy) fy.textContent = new Date().getFullYear();
    })();

  });
})();