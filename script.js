(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {

    /* --- 1. HEADER & HAMBURGER (Merged: Neon Style + Accessibility + Auto-fix) --- */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu') || document.querySelector('.nav-menu-panel');

    if (hamburger && navMenu) {
      // Fix: Ensure 3 bars exist for the Neon animation
      if (!hamburger.querySelector('.bar')) {
        hamburger.innerHTML = ''; 
        const barsWrap = document.createElement('div');
        barsWrap.className = 'bars'; // Wrapper for alignment
        for (let i = 0; i < 3; i++) {
          const s = document.createElement('span');
          s.className = 'bar';
          barsWrap.appendChild(s);
        }
        hamburger.appendChild(barsWrap);
      }

      // Accessibility Attributes
      hamburger.setAttribute('aria-label', 'Toggle menu');
      hamburger.setAttribute('role', 'button');
      hamburger.setAttribute('aria-expanded', 'false');

      // Toggle Function
      function toggleMenu(force) {
        const willOpen = (typeof force === 'boolean') ? force : !navMenu.classList.contains('active');
        navMenu.classList.toggle('active', willOpen);
        hamburger.classList.toggle('active', willOpen);
        hamburger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        document.documentElement.classList.toggle('nav-open', willOpen);
        
        // Prevent body scroll on mobile when open
        document.body.style.overflow = willOpen ? 'hidden' : '';
      }

      // Event Listeners
      hamburger.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
      
      // Close when clicking a link
      navMenu.addEventListener('click', (e) => {
        if (e.target.closest('a')) toggleMenu(false);
      });

      // Close when clicking outside
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.nav-menu-panel') && 
            !e.target.closest('.hamburger')) {
          toggleMenu(false);
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleMenu(false);
      });
    }

    /* --- 2. TYPING EFFECT (Original Logic Preserved) --- */
    const typingEl = document.getElementById('typing-text');
    if (typingEl) {
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
          typingEl.textContent = current.slice(0, ++charIndex);
          if (charIndex >= current.length) {
            isDeleting = true;
            timer = setTimeout(tick, 1400); // Pause at end
          } else {
            timer = setTimeout(tick, 90); // Typing speed
          }
        } else {
          typingEl.textContent = current.slice(0, --charIndex);
          if (charIndex === 0) {
            isDeleting = false;
            phraseIndex++;
            timer = setTimeout(tick, 300);
          } else {
            timer = setTimeout(tick, 45); // Deleting speed
          }
        }
      }
      timer = setTimeout(tick, 500);
    }

    /* --- 3. CTA BUTTON FIXES (Hide empty buttons) --- */
    const ctas = document.querySelectorAll('.cta-button, a.cta-button, button.cta-button');
    ctas.forEach(el => {
      const txt = (el.textContent || '').trim();
      if (txt.length === 0) {
        // Safety: If button is empty, add default text OR hide it. 
        // Based on your code, hiding is safer, or adding "View"
        el.style.display = 'none'; 
      }
    });

    /* --- 4. SMOOTH SCROLL & BACK TO TOP --- */
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const headerOffset = (document.querySelector('.header')?.offsetHeight || 0) + 10;
          window.scrollTo({ top: target.offsetTop - headerOffset, behavior: 'smooth' });
          // Close menu if open
          if (hamburger && hamburger.classList.contains('active')) toggleMenu(false);
        }
      });
    });

    // Back to Top Button
    const btnTop = document.createElement('button');
    btnTop.className = 'back-to-top hidden';
    btnTop.innerHTML = '↑';
    btnTop.setAttribute('aria-label', 'Back to top');
    btnTop.style.cssText = "position:fixed; right:20px; bottom:20px; padding:10px 14px; background:var(--primary-blue); color:#fff; border:none; border-radius:8px; cursor:pointer; z-index:2500; transition:0.3s; opacity:0; pointer-events:none;";
    
    btnTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btnTop);

    window.addEventListener('scroll', () => {
      const show = window.scrollY > 400;
      btnTop.style.opacity = show ? '1' : '0';
      btnTop.style.transform = show ? 'translateY(0)' : 'translateY(10px)';
      btnTop.style.pointerEvents = show ? 'all' : 'none';
    }, { passive: true });

    /* --- 5. UTILS: External Links & Fade In --- */
    // External links safety
    document.querySelectorAll('a[href^="http"]').forEach(a => {
      if (a.origin !== location.origin) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });

    // Fade In Observer
    const faders = document.querySelectorAll('.fade-in');
    if (faders.length) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      faders.forEach(n => observer.observe(n));
    }

    // Footer Year
    const fy = document.getElementById('footer-year');
    if (fy) fy.textContent = new Date().getFullYear();
    
    // Copy Email
    const copyBtn = document.querySelector('.copy-email');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const email = document.getElementById('footer-email')?.getAttribute('href').replace('mailto:', '') || 'hello@cryptowebbuild.com';
        navigator.clipboard.writeText(email);
        const old = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓';
        setTimeout(() => copyBtn.innerHTML = old, 1200);
      });
    }

  });
})();