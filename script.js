(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       1. HAMBURGER & MOBILE MENU (NEON FIX LOGIC INCLUDED)
    ============================================================ */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-menu-panel');

    if (hamburger) {
      // CRITICAL FIX: Ensure the 3 bars exist for Neon CSS
      if (!hamburger.querySelector('.bars')) {
        hamburger.innerHTML = ''; 
        const barsContainer = document.createElement('div');
        barsContainer.className = 'bars'; // Wrapper for alignment
        
        for (let i = 0; i < 3; i++) {
          const s = document.createElement('span');
          s.className = 'bar';
          barsContainer.appendChild(s);
        }
        hamburger.appendChild(barsContainer);
      }

      // Attributes
      hamburger.setAttribute('aria-label', 'Toggle menu');
      hamburger.setAttribute('role', 'button');
      if (!hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded', 'false');

      // Toggle Function
      function toggleMenu(force) {
        if (!navMenu) return;
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', willOpen);
        
        // Prevent scrolling when menu is open
        if (willOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
      }

      // Events
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      // Close when clicking links
      if (navMenu) {
        navMenu.addEventListener('click', function (e) {
          if (e.target.closest('a')) {
            toggleMenu(false);
          }
        });
      }

      // Close when clicking outside
      document.addEventListener('click', function (e) {
        if (navMenu && navMenu.classList.contains('active')) {
          const target = e.target;
          if (!target.closest('.nav-menu') && !target.closest('.nav-menu-panel') && !target.closest('.hamburger')) {
            toggleMenu(false);
          }
        }
      }, { passive: true });

      // Close on Escape
      document.addEventListener('keydown', function (e) {
        if ((e.key === 'Escape' || e.key === 'Esc') && navMenu.classList.contains('active')) {
          toggleMenu(false);
        }
      });
    }

    /* ============================================================
       2. TYPING EFFECT (ORIGINAL VARIABLES)
    ============================================================ */
    const typingEl = document.getElementById('typing-text');
    const cursorEl = document.querySelector('.typing-cursor');

    if (typingEl) {
      const phrases = [
        'I build Crypto & Web3 websites.',
        'I build fast E-commerce stores.',
        'I create Business websites.',
        'I build Static blogs & Portfolios.',
        'SEO-first, Mobile-first, Conversion-focused.'
      ];

      // Your exact timings
      const TYPE_SPEED = 90;
      const DELETE_SPEED = 45;
      const HOLD_DELAY = 1400;
      const START_DELAY = 500;
      const BETWEEN_DELAY = 300;
      const JITTER_MAX = 35;

      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;

      function jitter() { return Math.floor(Math.random() * JITTER_MAX); }
      function setCursorBlink(on) { if (cursorEl) cursorEl.style.opacity = on ? '1' : '0.6'; }

      function tick() {
        if (document.hidden) { timer = setTimeout(tick, 600); return; }

        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          charIndex++;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            setCursorBlink(true);
            timer = setTimeout(tick, HOLD_DELAY);
            return;
          }
        } else {
          charIndex--;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex <= 0) {
            isDeleting = false;
            setCursorBlink(false);
            phraseIndex = (phraseIndex + 1) % phrases.length;
            timer = setTimeout(tick, BETWEEN_DELAY);
            return;
          }
        }

        const delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;
        timer = setTimeout(tick, delay + jitter());
      }
      setTimeout(tick, START_DELAY);
    }

    /* ============================================================
       3. UI HELPERS (CTA, LINKS, FADE)
    ============================================================ */
    
    // Hide Empty Buttons
    const ctas = document.querySelectorAll('.cta-button, a.cta-button, button.cta-button');
    ctas.forEach(function(el){
      const txt = (el.textContent || '').trim();
      if (txt.length === 0) {
        el.style.display = 'none';
      }
    });

    // External Links Safety
    const links = document.querySelectorAll('a[href]');
    links.forEach(a => {
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin && !a.hasAttribute('target')) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        }
      } catch (err) {}
    });

    // Fade In Animation
    const fadeNodes = document.querySelectorAll('.fade-in');
    if (fadeNodes.length > 0) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      fadeNodes.forEach(n => io.observe(n));
    }

    /* ============================================================
       4. SCROLLING & FOOTER
    ============================================================ */

    // Smooth Scroll for Anchors
    const header = document.querySelector('.header');
    const offsetHeight = () => (header ? header.getBoundingClientRect().height : 0) + 12;

    document.querySelectorAll('a[href*="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const href = a.getAttribute('href') || '';
        if (href === '#' || href.indexOf('#') === -1) return;
        
        // Only if on same page
        if (location.pathname === a.pathname || !a.pathname) {
          const target = document.querySelector(href.slice(href.indexOf('#')));
          if (target) {
            e.preventDefault();
            // Close menu if open
            if (hamburger && hamburger.classList.contains('active')) toggleMenu(false);
            
            const targetY = window.scrollY + target.getBoundingClientRect().top - offsetHeight();
            window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: 'smooth' });
          }
        }
      });
    });

    // Back to Top Button
    if (!document.querySelector('.back-to-top')) {
      const btn = document.createElement('button');
      btn.className = 'back-to-top'; // CSS handles hiding via opacity usually
      btn.innerHTML = '↑';
      btn.setAttribute('aria-label', 'Back to top');
      // Critical inline styles to ensure it works even if CSS misses it
      Object.assign(btn.style, {
        position: 'fixed', right: '18px', bottom: '18px',
        padding: '10px 12px', borderRadius: '8px', background: 'var(--primary-blue, #00BFFF)',
        color: '#fff', border: 'none', cursor: 'pointer', zIndex: 2500,
        transition: 'opacity .3s, transform .3s', opacity: '0', pointerEvents: 'none'
      });
      
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      document.body.appendChild(btn);

      window.addEventListener('scroll', function () {
        const show = window.scrollY > 400;
        btn.style.opacity = show ? '1' : '0';
        btn.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
        btn.style.pointerEvents = show ? 'all' : 'none';
      }, { passive: true });
    }

    // Footer Year & Copy
    const fy = document.getElementById('footer-year');
    if (fy) fy.textContent = new Date().getFullYear();

    const copyBtn = document.querySelector('.copy-email');
    const emailLink = document.getElementById('footer-email');
    if (copyBtn && emailLink) {
      copyBtn.addEventListener('click', function () {
        const email = emailLink.getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email).then(function () {
          const old = copyBtn.innerHTML;
          copyBtn.innerHTML = '✓';
          setTimeout(() => { copyBtn.innerHTML = old; }, 1200);
        }).catch(() => {});
      });
    }

  });
})();