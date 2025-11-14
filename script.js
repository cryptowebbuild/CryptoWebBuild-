// script.js — Complete site script (vanilla JS)
// Features:
// - Accessible hamburger menu (toggle, close on link/outside click)
// - Typing effect for hero subtitle (configurable phrases)
// - Smooth internal anchor scrolling
// - Fade-in IntersectionObserver for elements with .fade-in
// - Defensive checks (no errors if an element is missing)

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* -------------------------
       Helpers
    ------------------------- */
    const $ = (selector, ctx = document) => ctx.querySelector(selector);
    const $$ = (selector, ctx = document) => Array.from(ctx.querySelectorAll(selector));
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
        // keep aria state correct
        hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        // prevent body scroll when open on mobile
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
        // If the link is an internal anchor or page link, close
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
       Typing effect (hero subtitle)
       - Targets element with id="typing-text"
       - Cursor is element with class .typing-cursor (optional)
    ------------------------- */
    (function initTypingEffect() {
      const typingEl = document.getElementById('typing-text');
      const cursorEl = document.querySelector('.typing-cursor');

      if (!typingEl) return;

      const phrases = [
        'Landing pages for token launches',
        'SEO-first websites for meme coins',
        'Fast, secure Web3 site builds',
        'Token docs, presales & dashboards'
      ];

      // config
      const typeSpeed = 60;      // ms per char
      const deleteSpeed = 35;    // ms per char when deleting
      const holdDelay = 1600;    // ms to hold a full phrase
      const loop = true;

      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function tick() {
        const current = phrases[phraseIndex % phrases.length];
        if (!isDeleting) {
          // typing
          typingEl.textContent = current.slice(0, charIndex + 1);
          charIndex++;
          if (charIndex >= current.length) {
            isDeleting = true;
            setTimeout(tick, holdDelay);
            setCursorBlink(true);
            return;
          }
        } else {
          // deleting
          typingEl.textContent = current.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex <= 0) {
            isDeleting = false;
            phraseIndex++;
            setCursorBlink(false);
          }
        }
        const delay = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(tick, delay + randomJitter());
      }

      function randomJitter() {
        return Math.floor(Math.random() * 40); // small human-like variance
      }

      function setCursorBlink(enabled) {
        if (!cursorEl) return;
        if (enabled) {
          cursorEl.classList.add('typing-blink');
        } else {
          cursorEl.classList.remove('typing-blink');
        }
      }

      // start after a small delay so page can render
      setTimeout(tick, 400);
    })();


    /* -------------------------
       Smooth internal anchor scrolling
    ------------------------- */
    (function initSmoothScroll() {
      // only intercept same-page anchor links
      const links = $$('a[href^="#"], a[href^="/#"]');

      links.forEach(link => {
        link.addEventListener('click', function (e) {
          // allow external or full-page reloads to proceed
          const href = link.getAttribute('href');
          if (!href || href === '#' || href.startsWith('/#') === false && !href.startsWith('#')) return;

          // if it's a same-page anchor
          const hash = href.indexOf('#') >= 0 ? href.slice(href.indexOf('#')) : null;
          if (!hash) return;

          const target = document.querySelector(hash);
          if (!target) return;

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

          // smooth scroll with offset for sticky header
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
       Small UI niceties
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

      // back-to-top shortcut: add if not present
      if (!document.querySelector('.back-to-top')) {
        const btn = document.createElement('button');
        btn.className = 'back-to-top hidden';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML = '↑';
        btn.style.cssText = 'position:fixed;right:18px;bottom:18px;padding:10px 12px;border-radius:8px;background:var(--primary-blue);color:#fff;border:none;cursor:pointer;z-index:1000;box-shadow:0 8px 20px rgba(0,191,255,0.12);';
        btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        document.body.appendChild(btn);

        // show/hide logic
        window.addEventListener('scroll', () => {
          const show = window.scrollY > 400;
          btn.classList.toggle('hidden', !show);
          btn.style.opacity = show ? '1' : '0';
          btn.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
        }, { passive: true });
      }
    })();

    // End of DOMContentLoaded
  });

})();