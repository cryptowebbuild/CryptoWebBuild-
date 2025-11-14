// script.js - nav toggle, typing effect, intersection reveal
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  // NAV TOGGLE: open/close mobile menu, block background pointer events
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const opened = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', opened);
      hamburger.setAttribute('aria-expanded', opened ? 'true' : 'false');
      // prevent background interactions when menu open
      document.body.style.overflow = opened ? 'hidden' : '';
    });

    // close menu on link click
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // TYPING EFFECT (robust, cycles)
  (function typing() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    const list = [
      "Full-Stack Developer",
      "Web3 Website Developer",
      "Meme Coin & Token Sites"
    ];
    let idx = 0, ch = 0, forward = true;
    function tick() {
      const text = list[idx];
      if (forward) {
        if (ch < text.length) {
          el.textContent += text[ch++];
          setTimeout(tick, 70);
        } else {
          forward = false;
          setTimeout(tick, 1200);
        }
      } else {
        if (ch > 0) {
          el.textContent = text.slice(0, --ch);
          setTimeout(tick, 40);
        } else {
          forward = true;
          idx = (idx + 1) % list.length;
          setTimeout(tick, 300);
        }
      }
    }
    tick();
  })();

  // INTERSECTION OBSERVER for fade-in elements + img reveal
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in, .enter').forEach(el => io.observe(el));

  const imgIo = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const img = e.target;
        img.classList.add('img-visible');
        if (img.dataset && img.dataset.src) img.src = img.dataset.src;
        obs.unobserve(img);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('img').forEach(img => {
    img.classList.add('img-hidden');
    imgIo.observe(img);
    // ensure fallback visible after load
    img.addEventListener('load', () => img.classList.add('img-visible'));
  });

  // safety: remove no-js marker if used
  document.documentElement.classList.remove('no-js');
});