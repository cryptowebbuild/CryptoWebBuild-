/* =========================================================================
   CryptoWebBuild — Final Merged Script (Safe Version)
   ========================================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* --- 1. HAMBURGER & MOBILE MENU (Robust Logic) --- */
    (function initMenu() {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-menu-panel');

      if (!hamburger || !navMenu) return;

      // CRITICAL FIX: Ensure Hamburger has the '.bars' container for the Neon CSS
      if (!hamburger.querySelector('.bars')) {
        hamburger.innerHTML = ''; // Clear existing
        const barsWrap = document.createElement('div');
        barsWrap.className = 'bars'; // Needed for flex alignment
        for (let i = 0; i < 3; i++) {
          const s = document.createElement('span');
          s.className = 'bar';
          barsWrap.appendChild(s);
        }
        hamburger.appendChild(barsWrap);
      }

      // Accessibility
      hamburger.setAttribute('aria-label', 'Toggle menu');
      hamburger.setAttribute('role', 'button');
      
      function toggleMenu(force) {
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', willOpen);
        // Lock body scroll only if opening
        document.body.style.overflow = willOpen ? 'hidden' : '';
      }

      // Click Handler
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      // Close when clicking ANY link inside menu
      navMenu.addEventListener('click', function (e) {
        if (e.target.closest('a')) toggleMenu(false);
      });

      // Close when clicking OUTSIDE
      document.addEventListener('click', function (e) {
        if (!navMenu.classList.contains('active')) return;
        if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-menu-panel') && !e.target.closest('.hamburger')) {
          toggleMenu(false);
        }
      }, { passive: true });

      // Close on Escape Key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) toggleMenu(false);
      });
    })();


    /* --- 2. TYPING EFFECT (Original Logic Preserved) --- */
    (function initTyping() {
      const typingEl = document.getElementById('typing-text');
      if (!typingEl) return;

      const phrases = [
        'I build Crypto & Web3 websites.',
        'I build fast E-commerce stores.',
        'I create Business websites.',
        'I build Static blogs & Portfolios.',
        'SEO-first, Mobile-first, Conversion-focused.'
      ];

      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;
      
      function tick() {
        if (document.hidden) { timer = setTimeout(tick, 500); return; }
        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          charIndex++;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            timer = setTimeout(tick, 1400); // Hold
            return;
          }
        } else {
          charIndex--;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex++;
            timer = setTimeout(tick, 300); // Pause before new
            return;
          }
        }
        const speed = isDeleting ? 45 : 90;
        timer = setTimeout(tick, speed);
      }
      timer = setTimeout(tick, 500);
    })();


    /* --- 3. UI FIXES (CTA & External Links) --- */
    (function uiFixes() {
      // Hide Empty Buttons
      const ctas = document.querySelectorAll('.cta-button, a.cta-button, button.cta-button');
      ctas.forEach(el => {
        if (!el.textContent.trim()) el.style.display = 'none';
      });

      // External Links
      document.querySelectorAll('a[href^="http"]').forEach(a => {
        if (a.origin !== location.origin && !a.hasAttribute('target')) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        }
      });
    })();


    /* --- 4. SMOOTH SCROLL & BACK TO TOP --- */
    (function scrollHelpers() {
      // Smooth Anchor Scroll
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            const headerH = (document.querySelector('.header')?.offsetHeight || 0) + 10;
            window.scrollTo({ top: target.offsetTop - headerH, behavior: 'smooth' });
            // Close menu if open (mobile)
            const ham = document.querySelector('.hamburger');
            if (ham && ham.classList.contains('active')) ham.click();
          }
        });
      });

      // Back To Top Button
      if (!document.querySelector('.back-to-top')) {
        const btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Back to top');
        // Inline critical styles for functionality
        Object.assign(btn.style, {
            position: 'fixed', right: '20px', bottom: '20px', padding: '10px 14px',
            background: 'var(--primary-blue)', color: '#fff', border: 'none', borderRadius: '8px',
            zIndex: '2500', cursor: 'pointer', opacity: '0', transition: '0.3s', pointerEvents: 'none'
        });
        
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
          const show = window.scrollY > 400;
          btn.style.opacity = show ? '1' : '0';
          btn.style.pointerEvents = show ? 'all' : 'none';
          btn.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
        }, { passive: true });
      }
    })();


    /* --- 5. FADE IN ANIMATION --- */
    (function initFade() {
      const nodes = document.querySelectorAll('.fade-in');
      if (!nodes.length) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      nodes.forEach(n => obs.observe(n));
    })();

    /* --- 6. FOOTER HELPERS --- */
    const yr = document.getElementById('footer-year');
    if (yr) yr.textContent = new Date().getFullYear();
    
    const cpy = document.querySelector('.copy-email');
    if (cpy) {
      cpy.addEventListener('click', () => {
        const email = document.getElementById('footer-email')?.getAttribute('href').replace('mailto:', '') || 'hello@cryptowebbuild.com';
        navigator.clipboard.writeText(email);
        const old = cpy.innerHTML;
        cpy.innerHTML = '✓';
        setTimeout(() => cpy.innerHTML = old, 1200);
      });
    }

  });
})();