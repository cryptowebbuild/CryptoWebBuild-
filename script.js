/* =========================================================================
   CryptoWebBuild — Final Merged JS
   (Includes: Mobile Menu, Neon Hamburger Fix, Typing Effect, Smooth Scroll, UI Cleanups)
   ========================================================================= */

(function () {
  'use strict';

  // Helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', function () {

    /* -----------------------------------------------------------
       1. HEADER & HAMBURGER (Merged Logic + 3-Bar Fix)
    ----------------------------------------------------------- */
    (function initMobileMenu() {
      const hamburger = $('.hamburger');
      const navMenu = $('.nav-menu') || $('.nav-menu-panel');

      if (!hamburger || !navMenu) return;

      // FIX: Ensure Hamburger has the '.bars' container for Neon CSS
      // This combines your extra snippets into one check
      if (!hamburger.querySelector('.bars')) {
        hamburger.innerHTML = ''; 
        const barsWrap = document.createElement('span');
        barsWrap.className = 'bars';
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
      if (!hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded', 'false');

      function toggleMenu(force) {
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', willOpen);

        // Lock body scroll on mobile
        document.body.style.overflow = willOpen ? 'hidden' : '';
      }

      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      // Close on link click
      navMenu.addEventListener('click', function (e) {
        if (e.target.closest('a')) toggleMenu(false);
      });

      // Close on click outside
      document.addEventListener('click', function (e) {
        if (!navMenu.classList.contains('active')) return;
        if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-menu-panel') && !e.target.closest('.hamburger')) {
          toggleMenu(false);
        }
      }, { passive: true });

      // Close on Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) toggleMenu(false);
      });
    })();


    /* -----------------------------------------------------------
       2. TYPING EFFECT (Exact Original Variables & Speed)
    ----------------------------------------------------------- */
    (function initTypingEffect() {
      const typingEl = document.getElementById('typing-text');
      const cursorEl = document.querySelector('.typing-cursor');
      if (!typingEl) return;

      const phrases = [
        'I build Crypto & Web3 websites.',
        'I build fast E-commerce stores.',
        'I create Business websites.',
        'I build Static blogs & Portfolios.',
        'SEO-first, Mobile-first, Conversion-focused.'
      ];

      // Your original settings preserved
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
    })();


    /* -----------------------------------------------------------
       3. UI CLEANUP (CTA Buttons & External Links)
    ----------------------------------------------------------- */
    (function uiFixes() {
      // Hide empty CTA buttons (Merged from your fixes)
      $$('.cta-button, a.cta-button, button.cta-button').forEach(el => {
        const txt = (el.textContent || '').trim();
        if (txt.length === 0) {
          el.style.display = 'none'; // Hiding empty buttons safely
        }
      });

      // External links safety
      $$('a[href]').forEach(a => {
        try {
          const url = new URL(a.href, location.href);
          if (url.origin !== location.origin && !a.hasAttribute('target')) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          }
        } catch (err) { /* ignore */ }
      });
    })();


    /* -----------------------------------------------------------
       4. SCROLL & UTILS (Smooth Scroll, Fade In, Back-to-Top)
    ----------------------------------------------------------- */
    (function scrollAndUtils() {
      // Smooth Scroll
      $$('a[href*="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
          const href = a.getAttribute('href');
          if (!href || href === '#' || href.indexOf('#') === -1) return;
          const target = document.querySelector(href.slice(href.indexOf('#')));
          
          if (target && (location.pathname === a.pathname || !a.pathname)) {
            e.preventDefault();
            // Close menu if open
            const ham = $('.hamburger');
            if (ham && ham.classList.contains('active')) ham.click();

            const offset = ($('.header')?.getBoundingClientRect().height || 0) + 12;
            const targetY = window.scrollY + target.getBoundingClientRect().top - offset;
            window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
          }
        });
      });

      // Fade In
      const nodes = $$('.fade-in');
      if (nodes.length) {
        const io = new IntersectionObserver((entries, obs) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('is-visible');
              obs.unobserve(e.target);
            }
          });
        }, { threshold: 0.08 });
        nodes.forEach(n => io.observe(n));
      }

      // Back to Top (Dynamic)
      if (!$('.back-to-top')) {
        const btn = document.createElement('button');
        btn.className = 'back-to-top hidden';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Back to top');
        // Base styles in JS to ensure visibility
        Object.assign(btn.style, {
          position: 'fixed', right: '18px', bottom: '18px', zIndex: 2500,
          padding: '10px 12px', borderRadius: '8px', background: 'var(--primary-blue)',
          color: '#fff', border: 'none', cursor: 'pointer', transition: '0.3s', opacity: '0'
        });
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
          const show = window.scrollY > 400;
          btn.style.opacity = show ? '1' : '0';
          btn.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
          btn.classList.toggle('hidden', !show);
        }, { passive: true });
      }
    })();


    /* -----------------------------------------------------------
       5. FOOTER HELPERS
    ----------------------------------------------------------- */
    (function footerHelpers() {
      const fy = $('#footer-year');
      if (fy) fy.textContent = new Date().getFullYear();

      const copyBtn = $('.copy-email');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          const email = $('#footer-email')?.getAttribute('href').replace('mailto:', '') || 'hello@cryptowebbuild.com';
          navigator.clipboard.writeText(email).then(() => {
            const old = copyBtn.innerHTML;
            copyBtn.innerHTML = '✓';
            setTimeout(() => copyBtn.innerHTML = old, 1200);
          });
        });
      }
    })();

  });
})();