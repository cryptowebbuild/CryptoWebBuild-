// script.js — Complete site script (vanilla JS)
// Features:
// - Accessible hamburger menu (toggle, close on link/outside click)
// - Typing effect for hero subtitle (configurable phrases, smooth & readable)
// - Smooth internal anchor scrolling
// - Fade-in IntersectionObserver for elements with .fade-in
// - Back-to-top button
// - Defensive checks (no errors if an element is missing)
// - Respect prefers-reduced-motion and document visibility
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------
       Helpers
    ------------------------- */
    const $ = (selector, ctx = document) => ctx.querySelector(selector);
    const $$ = (selector, ctx = document) => Array.from((ctx || document).querySelectorAll(selector));
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    /* -------------------------
       Hamburger / Mobile menu
    ------------------------- */
    (function initMobileMenu() {
      const hamburger = $('.hamburger');
      const navMenu = $('.nav-menu');

      if (!hamburger || !navMenu) return;

      // Toggle function
      function toggleMenu(force) {
        const expanded = typeof force === 'boolean' ? force : !hamburger.classList.contains('active');
        hamburger.classList.toggle('active', expanded);
        navMenu.classList.toggle('active', expanded);
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', expanded);
      }

      // Click hamburger
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        toggleMenu();
      });

      // Close menu when clicking a nav link
      navMenu.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;
        // If link is a regular nav link, close menu
        toggleMenu(false);
      });

      // Close when clicking outside the menu
      document.addEventListener('click', function (e) {
        if (!navMenu.classList.contains('active')) return;
        const target = e.target;
        if (!target.closest('.nav-menu') && !target.closest('.hamburger')) {
          toggleMenu(false);
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
          toggleMenu(false);
        }
      });

      // Ensure aria-expanded initial state
      if (!hamburger.hasAttribute('aria-expanded')) {
        hamburger.setAttribute('aria-expanded', 'false');
      }
    })();


    /* -------------------------
       Typing effect (hero subtitle) - improved and robust
       - targets #typing-text and .typing-cursor (cursor optional)
       - uses setTimeout with human-like jitter
       - pauses/resumes on document visibility change
    ------------------------- */
    (function initTypingEffect() {
      const typingEl = document.getElementById('typing-text');
      const cursorEl = document.querySelector('.typing-cursor');

      if (!typingEl) return; // nothing to do

      // Editable phrases — adjust as needed
      const phrases = [
        'I build Crypto & Web3 websites.',
        'I build fast E-commerce stores.',
        'I create Business websites.',
        'I build Static blogs & Portfolios.',
        'SEO-first, Mobile-first, Conversion-focused.'
      ];

      // Config (tweak for speed)
      const TYPE_SPEED = 90;       // ms per char typing
      const DELETE_SPEED = 45;     // ms per char deleting
      const HOLD_DELAY = 1400;     // pause after a phrase fully typed
      const START_DELAY = 500;     // initial delay
      const BETWEEN_DELAY = 300;   // pause between phrases before typing
      const JITTER_MAX = 35;       // ms random jitter for human-like timing
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingTimer = null;
      let isHidden = document.hidden;

      function randomJitter() {
        return Math.floor(Math.random() * JITTER_MAX);
      }

      function setCursorBlink(enabled) {
        if (!cursorEl) return;
        cursorEl.classList.toggle('typing-blink', enabled);
      }

      function tick() {
        if (isHidden) {
          // Do not progress while hidden; schedule a quick retry
          clearTimeout(typingTimer);
          typingTimer = setTimeout(tick, 500);
          return;
        }

        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          // typing
          charIndex++;
          typingEl.textContent = current.slice(0, charIndex);

          if (charIndex >= current.length) {
            // finished typing
            setCursorBlink(true);
            isDeleting = true;
            clearTimeout(typingTimer);
            typingTimer = setTimeout(tick, HOLD_DELAY);
            return;
          }
        } else {
          // deleting
          charIndex--;
          typingEl.textContent = current.slice(0, charIndex);

          if (charIndex <= 0) {
            isDeleting = false;
            setCursorBlink(false);
            phraseIndex = (phraseIndex + 1) % phrases.length;
            clearTimeout(typingTimer);
            typingTimer = setTimeout(tick, BETWEEN_DELAY);
            return;
          }
        }

        const delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;
        clearTimeout(typingTimer);
        typingTimer = setTimeout(tick, delay + randomJitter());
      }

      // Pause/resume on visibilitychange to avoid jumps & CPU waste
      document.addEventListener('visibilitychange', function () {
        isHidden = document.hidden;
        if (!isHidden) {
          // resume after short delay to avoid instant jump
          clearTimeout(typingTimer);
          typingTimer = setTimeout(tick, 400);
        } else {
          clearTimeout(typingTimer);
        }
      });

      // Start with small delay to allow layout paint
      typingTimer = setTimeout(tick, START_DELAY);

      // expose for debugging (optional)
      // window._typingControl = { start: () => (typingTimer = setTimeout(tick, 100)), stop: () => clearTimeout(typingTimer) };
    })();


    /* -------------------------
       Smooth internal anchor scrolling
    ------------------------- */
    (function initSmoothScroll() {
      // select same-page anchors only
      const links = $$('a[href*="#"]');

      links.forEach(link => {
        // ignore links that are full external or don't have hash target
        link.addEventListener('click', function (e) {
          const href = link.getAttribute('href') || '';
          // if it's only a hash or page anchor
          if (href === '#' || href.indexOf('#') === -1) return;

          // compute hash part
          const hash = href.slice(href.indexOf('#'));
          const target = document.querySelector(hash);
          if (!target) return; // let default happen if no anchor

          // if anchor exists on same page, intercept
          e.preventDefault();

          // close mobile menu if open
          const hamburger = document.querySelector('.hamburger');
          const navMenu = document.querySelector('.nav-menu');
          if (hamburger && navMenu && navMenu.classList.contains('active')) {
            hamburger.click();
          }

          // focus target for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });

          // adjust for sticky header height
          const header = document.querySelector('.header');
          const headerHeight = header ? header.getBoundingClientRect().height : 0;
          const targetY = window.scrollY + target.getBoundingClientRect().top - headerHeight - 12;

          window.scrollTo({
            top: Math.max(0, Math.round(targetY)),
            behavior: 'smooth'
          });
        });
      });
    })();


    /* -------------------------
       IntersectionObserver fade-in (for .fade-in)
    ------------------------- */
    (function initFadeInObserver() {
      const elements = Array.from(document.querySelectorAll('.fade-in'));
      if (!elements.length) return;

      // respect reduced motion
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        elements.forEach(el => el.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08
      });

      elements.forEach(el => observer.observe(el));
    })();


    /* -------------------------
       Small UI niceties: reduced motion, external links, back-to-top
    ------------------------- */
    (function miscUI() {
      // Reduce motion preference respect
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        document.documentElement.classList.add('reduce-motion');
      }

      // Make external links open in new tab by default (if not set)
      $$('a[href]').forEach(a => {
        try {
          const url = new URL(a.href, location.href);
          if (url.origin !== location.origin && !a.hasAttribute('target')) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          }
        } catch (err) {
          // ignore invalid URLs
        }
      });

      // back-to-top button: add if not present
      if (!document.querySelector('.back-to-top')) {
        const btn = document.createElement('button');
        btn.className = 'back-to-top hidden';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML = '↑';
        btn.style.cssText = [
          'position:fixed',
          'right:18px',
          'bottom:18px',
          'padding:10px 12px',
          'border-radius:8px',
          'background:var(--primary-blue)',
          'color:#fff',
          'border:none',
          'cursor:pointer',
          'z-index:1000',
          'box-shadow:0 8px 20px rgba(0,191,255,0.12)',
          'transition:opacity .28s ease, transform .28s ease'
        ].join(';');
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        document.body.appendChild(btn);

        // show/hide logic
        let lastKnownScroll = 0;
        window.addEventListener('scroll', () => {
          lastKnownScroll = window.scrollY;
          const show = lastKnownScroll > 400;
          btn.classList.toggle('hidden', !show);
          btn.style.opacity = show ? '1' : '0';
          btn.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
        }, { passive: true });
      }
    })();

    // End of DOMContentLoaded
  });

})();
// footer helpers
document.addEventListener('DOMContentLoaded', function () {
  // year
  var fy = document.getElementById('footer-year');
  if (fy) fy.textContent = new Date().getFullYear();

  // copy email button
  var copyBtn = document.querySelector('.copy-email');
  var emailLink = document.getElementById('footer-email');
  var email = emailLink ? emailLink.getAttribute('href').replace('mailto:','') : 'hello@cryptowebbuild.com';
  if (copyBtn && navigator.clipboard) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(email).then(function () {
        var old = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓';
        setTimeout(function () { copyBtn.innerHTML = old; }, 1200);
      });
    });
  }
});