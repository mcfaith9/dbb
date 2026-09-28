/**
 * DBB Customer Service & Support
 * Two-Way Continuous Scroll-Triggered Animation Controller
 * Native Vanilla JS with IntersectionObserver & RAF bidirectional state tracking
 */

export function initScrollTrigger() {
  // Check for prefers-reduced-motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const elements = document.querySelectorAll('.scroll-reveal');
  if (!elements.length) return;

  // Set stagger delay from data-delay attribute if present
  elements.forEach((el) => {
    if (el.dataset.delay) {
      el.style.setProperty('--reveal-delay', `${el.dataset.delay}ms`);
    }
  });

  const vh = window.innerHeight || document.documentElement.clientHeight || 800;

  // Immediate first pass: determine initial position (in-view, below, or above)
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      // Already in viewport on page load
      el.classList.add('is-visible');
    } else if (rect.top >= vh) {
      // Below viewport
      el.classList.add('is-below');
    } else {
      // Above viewport
      el.classList.add('is-above');
    }
  });

  // Use IntersectionObserver with bidirectional detection
  // rootMargin gives a small buffer for smooth entrance before hitting viewport edge
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const rect = entry.boundingClientRect;
        const currentVh = window.innerHeight || document.documentElement.clientHeight || 800;

        if (entry.isIntersecting) {
          // Element is entering the viewport
          el.classList.remove('is-below', 'is-above');
          el.classList.add('is-visible');
        } else {
          // Element is exiting the viewport
          el.classList.remove('is-visible');
          if (rect.bottom <= 0 || rect.top < 0) {
            // Exited through the top
            el.classList.remove('is-below');
            el.classList.add('is-above');
          } else {
            // Exited through the bottom
            el.classList.remove('is-above');
            el.classList.add('is-below');
          }
        }
      });
    },
    {
      root: null,
      rootMargin: '20px 0px 20px 0px',
      threshold: [0, 0.08],
    }
  );

  elements.forEach((el) => observer.observe(el));

  // Add scroll listener with RAF to ensure state stays in sync during very fast scrolls
  let ticking = false;
  function checkVisible() {
    const currentVh = window.innerHeight || document.documentElement.clientHeight || 800;
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < currentVh && rect.bottom > 0;
      if (inView && !el.classList.contains('is-visible')) {
        el.classList.remove('is-below', 'is-above');
        el.classList.add('is-visible');
      } else if (!inView && el.classList.contains('is-visible')) {
        el.classList.remove('is-visible');
        if (rect.bottom <= 0 || rect.top < 0) {
          el.classList.remove('is-below');
          el.classList.add('is-above');
        } else {
          el.classList.remove('is-above');
          el.classList.add('is-below');
        }
      }
    });
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(checkVisible);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Handle accessibility preference change dynamically
  motionQuery.addEventListener('change', (e) => {
    if (e.matches) {
      elements.forEach((el) => {
        el.classList.remove('is-below', 'is-above');
        el.classList.add('is-visible');
      });
    }
  });
}
