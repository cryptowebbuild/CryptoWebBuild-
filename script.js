/* CryptoWebBuild — Consolidated, defensive script.js
   Paste/replace your current script.js with this file.
*/
(function(){
  'use strict';

  // helpers
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from((ctx||document).querySelectorAll(sel));

  document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------
       HAMBURGER / MOBILE NAV
    ------------------------ */
    (function mobileMenu() {
      let hamburger = document.querySelector('.hamburger');
      let navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-menu-panel');

      if (!hamburger) return;

      // ensure bars container exists
      if (!hamburger.querySelector('.bars')) {
        hamburger.innerHTML = '';
        const wrap = document.createElement('span'); wrap.className = 'bars';
        for (let i=0;i<3;i++){ const s = document.createElement('span'); s.className='bar'; wrap.appendChild(s); }
        hamburger.appendChild(wrap);
      }

      // ensure ARIA & role
      if (!hamburger.hasAttribute('aria-label')) hamburger.setAttribute('aria-label','Toggle menu');
      if (!hamburger.hasAttribute('role')) hamburger.setAttribute('role','button');
      if (!hamburger.hasAttribute('tabindex')) hamburger.setAttribute('tabindex','0');
      if (!hamburger.hasAttribute('aria-expanded')) hamburger.setAttribute('aria-expanded','false');

      if (!navMenu) {
        // fallback: create a simple panel if none exists (prevents crashes)
        navMenu = document.createElement('nav');
        navMenu.className = 'nav-menu-panel';
        document.body.appendChild(navMenu);
      }

      function setOpen(open) {
        navMenu.classList.toggle('active', !!open);
        hamburger.classList.toggle('active', !!open);
        hamburger.setAttribute('aria-expanded', !!open ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', !!open);
        document.body.style.overflow = !!open ? 'hidden' : '';
      }

      function toggleMenu(force) { setOpen(typeof force === 'boolean' ? force : !navMenu.classList.contains('active')); }

      // single click handler
      hamburger.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });

      // keyboard support (Enter / Space)
      hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); toggleMenu(); }
        if (e.key === 'Escape' && navMenu.classList.contains('active')) toggleMenu(false);
      });

      // close when clicking a nav link (mobile)
      navMenu.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) toggleMenu(false);
      });

      // close on outside click or escape
      document.addEventListener('click', (e) => {
        if (!navMenu.classList.contains('active')) return;
        if (!e.target.closest('.nav-menu') && !e.target.closest('.nav-menu-panel') && !e.target.closest('.hamburger')) {
          toggleMenu(false);
        }
      }, { passive:true });

      document.addEventListener('keydown', (e) => {
        if ((e.key === 'Escape' || e.key === 'Esc') && navMenu.classList.contains('active')) toggleMenu(false);
      });
    })();


    /* ------------------------
       TYPING EFFECT (hero)
    ------------------------ */
    (function typingEffect(){
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
      const TYPE_SPEED = 90, DELETE_SPEED = 45, HOLD_DELAY = 1400, START_DELAY = 500, JITTER_MAX = 35;
      let phraseIndex = 0, charIndex = 0, isDeleting = false, timer = null;

      function jitter(){ return Math.floor(Math.random()*JITTER_MAX); }
      function setCursor(op){ if(cursorEl) cursorEl.style.opacity = op ? '1' : '0.6'; }

      function tick(){
        if (document.hidden) { timer = setTimeout(tick, 600); return; }
        const current = phrases[phraseIndex % phrases.length];
        if (!isDeleting) {
          charIndex++; typingEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) { isDeleting = true; setCursor(true); clearTimeout(timer); timer = setTimeout(tick, HOLD_DELAY); return; }
        } else {
          charIndex--; typingEl.textContent = current.slice(0, charIndex);
          if (charIndex <= 0) { isDeleting = false; setCursor(false); phraseIndex = (phraseIndex+1)%phrases.length; clearTimeout(timer); timer = setTimeout(tick, 300); return; }
        }
        const delay = (isDeleting ? DELETE_SPEED : TYPE_SPEED) + jitter();
        clearTimeout(timer); timer = setTimeout(tick, delay);
      }

      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) { clearTimeout(timer); timer = setTimeout(tick, 400); }
        else clearTimeout(timer);
      });

      timer = setTimeout(tick, START_DELAY);
    })();


    /* ------------------------
       SMOOTH ANCHORS (adjust for sticky header)
    ------------------------ */
    (function smoothAnchors(){
      const header = document.querySelector('.header');
      const offset = () => (header ? header.getBoundingClientRect().height : 0) + 12;
      $$('a[href*="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href') || '';
          if (href === '#' || href.indexOf('#') === -1) return;
          const hash = href.slice(href.indexOf('#'));
          const target = document.querySelector(hash);
          if (!target) return;
          if (location.pathname === a.pathname || !a.pathname) {
            e.preventDefault();
            // close menu if open
            const hamburger = document.querySelector('.hamburger'), navMenu = document.querySelector('.nav-menu');
            if (hamburger && navMenu && navMenu.classList.contains('active')) hamburger.click();
            target.setAttribute('tabindex','-1'); target.focus({preventScroll:true});
            const targetY = window.scrollY + target.getBoundingClientRect().top - offset();
            window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: 'smooth' });
          }
        });
      });
    })();


    /* ------------------------
       FADE-IN (intersection observer)
    ------------------------ */
    (function fadeIn(){
      const nodes = Array.from(document.querySelectorAll('.fade-in'));
      if (!nodes.length) return;
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) { nodes.forEach(n => n.classList.add('is-visible')); return; }
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); }});
      }, { threshold: 0.08 });
      nodes.forEach(n => io.observe(n));
    })();


    /* ------------------------
       BACK TO TOP (dynamic)
    ------------------------ */
    (function backToTop(){
      if (document.querySelector('.back-to-top')) return;
      const btn = document.createElement('button');
      btn.className = 'back-to-top hidden';
      btn.setAttribute('aria-label','Back to top');
      btn.innerHTML = '↑';
      Object.assign(btn.style, {
        position:'fixed', right:'18px', bottom:'18px',
        padding:'10px 12px', borderRadius:'8px', background:'var(--primary-blue)',
        color:'#fff', border:'none', cursor:'pointer', zIndex:1000,
        boxShadow:'0 8px 20px rgba(0,191,255,0.12)', transition:'opacity .28s, transform .28s'
      });
      btn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
      document.body.appendChild(btn);
      window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        btn.style.opacity = show ? '1' : '0';
        btn.style.transform = show ? 'translateY(0)' : 'translateY(12px)';
        btn.classList.toggle('hidden', !show);
      }, { passive:true });
    })();


    /* ------------------------
       EXTERNAL LINKS target/_blank
    ------------------------ */
    (function externalLinks(){
      $$('a[href]').forEach(a => {
        try {
          const url = new URL(a.href, location.href);
          if (url.origin !== location.origin && !a.hasAttribute('target')) {
            a.setAttribute('target','_blank'); a.setAttribute('rel','noopener noreferrer');
          }
        } catch(e){ /* ignore */ }
      });
    })();


    /* ------------------------
       FOOTER HELPERS: year + copy email
    ------------------------ */
    (function footerHelpers(){
      const fy = document.getElementById('footer-year'); if (fy) fy.textContent = new Date().getFullYear();
      const copyBtn = document.querySelector('.copy-email');
      const emailLink = document.getElementById('footer-email');
      const email = emailLink ? (emailLink.getAttribute('href') || '').replace('mailto:','') : 'hello@cryptowebbuild.com';
      if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(email).then(() => {
            const old = copyBtn.innerHTML; copyBtn.innerHTML = '✓';
            setTimeout(()=> copyBtn.innerHTML = old, 1200);
          }).catch(()=>{/* ignore */});
        });
      }
    })();

  }); // DOMContentLoaded end

})();