document.addEventListener('DOMContentLoaded', function () {
  // NAV TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function (e) {
      const isActive = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', isActive);
      hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // close on outside click
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // close when link clicked (internal)
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (!a.target) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // TYPING (only if present)
  const typingText = document.getElementById('typing-text');
  if (typingText) {
    const texts = ["Full-Stack Developer", "Web3 Website Developer", "Meme Coin & Token Sites"];
    let tIndex = 0, cIndex = 0, forward = true;

    function typeLoop() {
      const current = texts[tIndex];
      if (forward) {
        if (cIndex < current.length) {
          typingText.textContent += current.charAt(cIndex++);
          setTimeout(typeLoop, 90);
        } else {
          forward = false;
          setTimeout(typeLoop, 1800);
        }
      } else {
        if (cIndex > 0) {
          typingText.textContent = current.substring(0, --cIndex);
          setTimeout(typeLoop, 40);
        } else {
          forward = true;
          tIndex = (tIndex + 1) % texts.length;
          setTimeout(typeLoop, 400);
        }
      }
    }
    typeLoop();
  }

  // INTERSECTION OBSERVER: fade-in
  const fadeTargets = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && fadeTargets.length) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          o.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    fadeTargets.forEach(t => obs.observe(t));
  } else {
    // fallback: reveal all
    fadeTargets.forEach(t => t.classList.add('is-visible'));
  }

  // AVATAR loaded animation
  const avatar = document.querySelector('.hero-avatar, .avatar img');
  if (avatar) {
    if (avatar.complete) {
      avatar.parentElement && avatar.parentElement.classList && avatar.parentElement.classList.add('loaded');
    } else {
      avatar.addEventListener('load', () => {
        avatar.parentElement && avatar.parentElement.classList && avatar.parentElement.classList.add('loaded');
      });
    }
  }

  // set no-JS accessible state (optional)
  document.documentElement.classList.remove('no-js');
});