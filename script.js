/* =========================================================================
   CryptoWebBuild — Final Script (Strict Merge)
   This file contains the Logic + The Fixes combined exactly as requested.
   ========================================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    // --- PART 1: INITIAL SETUP & HELPERS ---
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    /* --- PART 2: TYPING EFFECT (Exact Original Settings) --- */
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
      // Original Timing Variables
      const TYPE_SPEED = 90;
      const DELETE_SPEED = 45;
      const HOLD_DELAY = 1400;
      const START_DELAY = 500;
      const BETWEEN_DELAY = 300;
      const JITTER = 35;

      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;

      function tick() {
        if (document.hidden) { timer = setTimeout(tick, 500); return; }
        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          charIndex++;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            if(cursorEl) cursorEl.style.opacity = '1';
            timer = setTimeout(tick, HOLD_DELAY);
          } else {
            timer = setTimeout(tick, TYPE_SPEED + Math.random() * JITTER);
          }
        } else {
          charIndex--;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex++;
            if(cursorEl) cursorEl.style.opacity = '0.6';
            timer = setTimeout(tick, BETWEEN_DELAY);
          } else {
            timer = setTimeout(tick, DELETE_SPEED);
          }
        }
      }
      setTimeout(tick, START_DELAY);
    }

    /* --- PART 3: MOBILE MENU & HAMBURGER (The Critical Fix) --- */
    // This section includes the specific logic to create the '.bars' inside hamburger
    // which is required for your Neon CSS to work.
    const hamburger = $('.hamburger');
    const navMenu = $('.nav-menu') || $('.nav-menu-panel');

    if (hamburger) {
      // 1. Check if bars exist, if not, create them (The Fix)
      if (!hamburger.querySelector('.bars')) {
        hamburger.innerHTML = ''; // Clear text/icons
        const barsWrap = document.createElement('div'); // div or span
        barsWrap.className = 'bars';
        for (let i = 0; i < 3; i++) {
          const s = document.createElement('span');
          s.className = 'bar';
          barsWrap.appendChild(s);
        }
        hamburger.appendChild(barsWrap);
      }

      // 2. Attributes
      hamburger.setAttribute('role', 'button');
      hamburger.setAttribute('aria-label', 'Toggle menu');

      // 3. Toggle Logic
      const toggleMenu = (force) => {
        if (!navMenu) return;
        const isActive = typeof force === 'boolean' ? force : !navMenu.classList.contains('active');
        
        navMenu.classList.toggle('active', isActive);
        hamburger.classList.toggle('active', isActive);
        hamburger.setAttribute('aria-expanded', isActive);
        document.documentElement.classList.toggle('nav-open', isActive);
        
        // Lock body scroll
        document.body.style.overflow = isActive ? 'hidden' : '';
      };

      hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
      });

      // Close on Link Click
      if (navMenu) {
        navMenu.addEventListener('click', (e) => {
          if (e.target.closest('a')) toggleMenu(false);
        });
      }

      // Close on Click Outside
      document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active')) {
          if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-menu-panel') && !e.target.closest('.hamburger')) {
            toggleMenu(false);
          }
        }
      }, { passive: true });
    }

    /* --- PART 4: UI FIXES (CTA & External Links) --- */
    // Hide Empty CTA Buttons
    $$('.cta-button, a.cta-button, button.cta-button').forEach(btn => {
      const text = (btn.textContent || '').trim();
      if (text.length === 0) {
        btn.style.display = 'none'; // Hide empty buttons safely
      }
    });

    // External Links
    $$('a[href^="http"]').forEach(link => {
      if (link.origin !== window.location.origin) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });

    /* --- PART 5: SCROLL & FADE UTILS --- */
    // Back to Top
    const btt = document.createElement('button');
    btt.className = 'back-to-top';
    btt.innerHTML = '↑';
    btt.setAttribute('aria-label', 'Scroll to top');
    // Apply critical styles inline to ensure it works immediately
    Object.assign(btt.style, {
      position: 'fixed', right: '20px', bottom: '20px', zIndex: '9999',
      padding: '10px 14px', background: 'var(--primary-blue, #00BFFF)', color: '#fff',
      border: 'none', borderRadius: '8px', cursor: 'pointer', opacity: '0', 
      pointerEvents: 'none', transition: 'opacity 0.3s'
    });
    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btt);

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 300;
      btt.style.opacity = show ? '1' : '0';
      btt.style.pointerEvents = show ? 'all' : 'none';
    }, { passive: true });

    // Smooth Scroll for Anchors
    $$('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = $(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const hHeight = ($('.header')?.offsetHeight || 0) + 10;
          window.scrollTo({ top: target.offsetTop - hHeight, behavior: 'smooth' });
          // Close menu if open
          if(hamburger && hamburger.classList.contains('active')) hamburger.click();
        }
      });
    });

    // Fade In Observer
    const faders = $$('.fade-in');
    if (faders.length) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      faders.forEach(f => obs.observe(f));
    }

    // Footer Year & Copy
    const yr = $('#footer-year');
    if (yr) yr.textContent = new Date().getFullYear();

    const cpy = $('.copy-email');
    if (cpy) {
      cpy.addEventListener('click', () => {
        const mail = $('#footer-email')?.getAttribute('href').replace('mailto:', '') || 'hello@cryptowebbuild.com';
        navigator.clipboard.writeText(mail);
        const orig = cpy.innerHTML;
        cpy.innerHTML = '✓';
        setTimeout(() => cpy.innerHTML = orig, 1200);
      });
    }

  });
})();