document.addEventListener('DOMContentLoaded', function () {
  // NAV TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const active = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', active);
      hamburger.setAttribute('aria-expanded', active ? 'true' : 'false');
    });
    // close on link click
    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navMenu.classList.remove('active'); hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded','false');
    }));
  }

  // TYPING EFFECT (robust)
  (function typing() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const items = ["Full-Stack Developer", "Web3 Website Developer", "Meme Coin & Token Sites"];
    let i = 0, j = 0, forward = true;
    function step() {
      const txt = items[i];
      if (forward) {
        if (j < txt.length) { el.textContent += txt[j++]; setTimeout(step, 80); }
        else { forward = false; setTimeout(step, 1500); }
      } else {
        if (j > 0) { el.textContent = txt.slice(0, --j); setTimeout(step, 40); }
        else { forward = true; i = (i + 1) % items.length; setTimeout(step, 350); }
      }
    }
    step();
  })();

  // INTERSECTION OBSERVER: fade-in & image reveal
  const appearOpts = { threshold: 0.12, rootMargin: '0px 0px -10px 0px' };
  const appearOnScroll = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, appearOpts);

  document.querySelectorAll('.fade-in').forEach(el => appearOnScroll.observe(el));

  // Image lazy reveal
  const imgObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.classList.add('img-visible');
        // if data-src used for lazy-load, swap:
        if (img.dataset && img.dataset.src) img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('img').forEach(img => {
    // give initial hidden class for reveal animation
    img.classList.add('img-hidden');
    // observe
    imgObserver.observe(img);
    // safe onload animation
    img.addEventListener('load', () => img.classList.add('img-visible'));
    // ensure object-fit for non-CSS-friendly environments
    img.style.objectFit = img.style.objectFit || 'cover';
  });

  // HERO entrance (make text appear)
  const heroTargets = document.querySelectorAll('.hero .enter, .hero .fade-in');
  heroTargets.forEach(t => {
    // if already visible, add immediately
    if (t.getBoundingClientRect().top < window.innerHeight) t.classList.add('visible');
    else {
      // else observe
      const hObs = new IntersectionObserver((entries, o) => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('visible');
            o.unobserve(en.target);
          }
        });
      }, { threshold: 0.08 });
      hObs.observe(t);
    }
  });

  // AVATAR loaded fancy
  const avatar = document.querySelector('.hero-avatar');
  if (avatar) {
    if (avatar.complete) avatar.classList.add('img-visible');
    else avatar.addEventListener('load', () => avatar.classList.add('img-visible'));
  }

  // remove no-js class if present
  document.documentElement.classList.remove('no-js');
});