(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', function () {

    /* --- 1. MOBILE MENU (Consolidated & Robust) --- */
    const hamburger = $('.hamburger');
    const navMenu = $('.nav-menu') || $('.nav-menu-panel');

    if (hamburger && navMenu) {
      // Ensure bars exist
      if (!hamburger.querySelector('.bar')) {
        hamburger.innerHTML = '<div class="bars"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>';
      }
      // Accessibility
      hamburger.setAttribute('aria-label', 'Toggle menu');
      hamburger.setAttribute('aria-expanded', 'false');

      const toggleMenu = (force) => {
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        hamburger.setAttribute('aria-expanded', willOpen);
        document.documentElement.classList.toggle('nav-open', willOpen);
        document.body.style.overflow = willOpen ? 'hidden' : ''; // Prevent scroll
      };

      hamburger.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
      
      // Close on link click or click outside
      document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) return;
        if (e.target.closest('a') || (!e.target.closest('.nav-menu') && !e.target.closest('.hamburger'))) {
          toggleMenu(false);
        }
      }, { passive: true });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) toggleMenu(false);
      });
    }

    /* --- 2. TYPING EFFECT --- */
    const typingEl = document.getElementById('typing-text');
    if (typingEl) {
      const phrases = [
        'I build Crypto & Web3 websites.',
        'I build fast E-commerce stores.',
        'I create Business websites.',
        'I build Static blogs & Portfolios.',
        'SEO-first, Mobile-first, Conversion-focused.'
      ];
      let phraseIdx = 0, charIdx = 0, isDeleting = false, timer = null;
      
      const tick = () => {
        if (document.hidden) { timer = setTimeout(tick, 500); return; }
        const current = phrases[phraseIdx % phrases.length];
        
        if (!isDeleting) {
          typingEl.textContent = current.slice(0, ++charIdx);
          if (charIdx >= current.length) {
            isDeleting = true;
            timer = setTimeout(tick, 1400); // Hold
          } else {
            timer = setTimeout(tick, 90); // Type speed
          }
        } else {
          typingEl.textContent = current.slice(0, --charIdx);
          if (charIdx === 0) {
            isDeleting = false;
            phraseIdx++;
            timer = setTimeout(tick, 300); // Pause before new
          } else {
            timer = setTimeout(tick, 45); // Delete speed
          }
        }
      };
      timer = setTimeout(tick, 500);
    }

    /* --- 3. UI HELPERS (Fade In, Smooth Scroll, BackToTop) --- */
    // Fade In
    const faders = $$('.fade-in');
    if (faders.length) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      faders.forEach(n => observer.observe(n));
    }

    // Smooth Scroll for Anchors
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const target = $(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const headerH = ($('.header')?.offsetHeight || 0) + 12;
          window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
        }
      });
    });

    // Back To Top
    const btnTop = document.createElement('button');
    btnTop.className = 'back-to-top hidden';
    btnTop.innerHTML = '↑';
    btnTop.setAttribute('aria-label', 'Back to top');
    btnTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btnTop);
    
    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      btnTop.style.opacity = show ? '1' : '0';
      btnTop.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
      btnTop.style.pointerEvents = show ? 'all' : 'none';
    }, { passive: true });

    /* --- 4. CLEANUP & DEFENSIVE --- */
    // External Links
    $$('a[href^="http"]').forEach(a => {
      if (a.origin !== location.origin) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener noreferrer'); }
    });

    // CTA Cleanups (Hide empty buttons or add default text)
    $$('.cta-button').forEach(btn => {
      if (!btn.textContent.trim()) {
        // Either hide: btn.style.display = 'none';
        // Or add default:
        btn.textContent = "View Details";
      }
    });

    // Footer Year & Copy Email
    const yearEl = $('#footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    const copyBtn = $('.copy-email');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const email = ($('#footer-email')?.href || '').replace('mailto:', '') || 'hello@cryptowebbuild.com';
        navigator.clipboard.writeText(email);
        const old = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓';
        setTimeout(() => copyBtn.innerHTML = old, 1200);
      });
    }

  });
})();