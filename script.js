/* =========================================================================
   CryptoWebBuild — Cleaned & Fixed JS (final)
   Paste/replace your current script.js with this file.
   - Vanilla JS, defensive checks, accessible behavior
   ========================================================================= */

(function () {
  'use strict';

  // quick helpers
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from((ctx || document).querySelectorAll(sel));

  // safe DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------
       NAV / HAMBURGER MENU
    ------------------------- */
    (function initMobileMenu() {
      const hamburger = $('.hamburger');
      const navMenu = $('.nav-menu') || $('.nav-menu-panel');

      if (!hamburger || !navMenu) return;

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
       - targets #typing-text and .typing-cursor
    ------------------------- */
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

      const TYPE_SPEED = 90;
      const DELETE_SPEED = 45;
      const HOLD_DELAY = 1400;
      const START_DELAY = 500;
      const BETWEEN_DELAY = 300;
      const JITTER_MAX = 35;

      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;
      let isHidden = document.hidden;

      function jitter() { return Math.floor(Math.random() * JITTER_MAX); }
      function setCursorBlink(on) { if (!cursorEl) return; cursorEl.style.opacity = on ? '1' : '0.6'; }

      function tick() {
        if (document.hidden) { timer = setTimeout(tick, 600); return; }

        const current = phrases[phraseIndex % phrases.length];

        if (!isDeleting) {
          charIndex++;
          typingEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            setCursorBlink(true);
            clearTimeout(timer);
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
            clearTimeout(timer);
            timer = setTimeout(tick, BETWEEN_DELAY);
            return;
          }
        }

        const delay = isDeleting ? DELETE_SPEED : TYPE_SPEED;
        clearTimeout(timer);
        timer = setTimeout(tick, delay + jitter());
      }

      document.addEventListener('visibilitychange', function () {
        if (!document.hidden) {
          clearTimeout(timer);
          timer = setTimeout(tick, 400);
        } else {
          clearTimeout(timer);
        }
      });

      timer = setTimeout(tick, START_DELAY);
    })();


    /* -------------------------
       SMOOTH SCROLL for same-page anchors (adjust for sticky header)
    ------------------------- */
    (function initSmoothAnchors() {
      const header = $('.header');
      const offsetHeight = () => (header ? header.getBoundingClientRect().height : 0) + 12;

      $$('a[href*="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
          const href = a.getAttribute('href') || '';
          if (href === '#' || href.indexOf('#') === -1) return;
          const hash = href.slice(href.indexOf('#'));
          const target = document.querySelector(hash);
          if (!target) return;
          // same-page anchor
          if (location.pathname === a.pathname || !a.pathname) {
            e.preventDefault();
            // close menu if open
            const hamburger = $('.hamburger'), navMenu = $('.nav-menu');
            if (hamburger && navMenu && navMenu.classList.contains('active')) hamburger.click();

            // focus for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });

            const targetY = window.scrollY + target.getBoundingClientRect().top - offsetHeight();
            window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: 'smooth' });
          }
        });
      });
    })();


    /* -------------------------
       FADE-IN Observer for elements with .fade-in
    ------------------------- */
    (function initFadeIn() {
      const nodes = Array.from(document.querySelectorAll('.fade-in'));
      if (!nodes.length) return;

      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        nodes.forEach(n => n.classList.add('is-visible'));
        return;
      }

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });

      nodes.forEach(n => io.observe(n));
    })();


    /* -------------------------
       Back-to-top button (created dynamically)
    ------------------------- */
    (function initBackToTop() {
      if (document.querySelector('.back-to-top')) return;
      const btn = document.createElement('button');
      btn.className = 'back-to-top hidden';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '↑';
      Object.assign(btn.style, {
        position: 'fixed', right: '18px', bottom: '18px',
        padding: '10px 12px', borderRadius: '8px', background: 'var(--primary-blue)',
        color: '#fff', border: 'none', cursor: 'pointer', zIndex: 1000,
        boxShadow: '0 8px 20px rgba(0,191,255,0.12)', transition: 'opacity .28s, transform .28s'
      });
      btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
      document.body.appendChild(btn);

      window.addEventListener('scroll', function () {
        const show = window.scrollY > 400;
        btn.style.opacity = show ? '1' : '0';
        btn.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
        btn.classList.toggle('hidden', !show);
      }, { passive: true });
    })();


    /* -------------------------
       External links autoset target rel (defensive)
    ------------------------- */
    (function externalLinks() {
      $$('a[href]').forEach(a => {
        try {
          const url = new URL(a.href, location.href);
          if (url.origin !== location.origin && !a.hasAttribute('target')) {
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
          }
        } catch (err) { /* ignore bad URLs */ }
      });
    })();


    /* -------------------------
       Footer helpers: year + copy-email
    ------------------------- */
    (function footerHelpers() {
      const fy = document.getElementById('footer-year');
      if (fy) fy.textContent = new Date().getFullYear();

      const copyBtn = document.querySelector('.copy-email');
      const emailLink = document.getElementById('footer-email');
      const email = emailLink ? emailLink.getAttribute('href').replace('mailto:', '') : 'hello@cryptowebbuild.com';

      if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener('click', function () {
          navigator.clipboard.writeText(email).then(function () {
            const old = copyBtn.innerHTML;
            copyBtn.innerHTML = '✓';
            setTimeout(() => { copyBtn.innerHTML = old; }, 1200);
          }).catch(() => { /* ignore */ });
        });
      }
    })();

    /* END DOMContentLoaded */
  });

})();