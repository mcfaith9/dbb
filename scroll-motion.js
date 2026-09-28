/**
 * DBB Customer Service & Support
 * Smooth Continuous Bidirectional Scroll-Linked Parallax & Depth
 * Lightweight Vanilla JavaScript - Zero external dependencies
 */

export function initScrollMotion() {
  // 1. Accessibility: Check for prefers-reduced-motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    return;
  }

  // 2. Query target elements
  const elements = document.querySelectorAll('.parallax-element:not(.scroll-reveal), .chat-bubble');
  if (!elements.length) return;

  // 3. Register tracked items
  const items = [];

  elements.forEach((el) => {
    // Determine speed: positive moves with subtle parallax lag, negative moves counter
    let defaultSpeed = 0.05;
    if (el.classList.contains('chat-bubble')) defaultSpeed = 0.08;
    if (el.classList.contains('floating-bg-shape')) defaultSpeed = 0.12;

    const speed = parseFloat(el.dataset.speed || String(defaultSpeed));
    const maxOffset = parseFloat(el.dataset.max || (el.classList.contains('hero-headline') || el.classList.contains('section-header') ? '12' : '22'));
    const isCustomProp = el.classList.contains('chat-bubble') || el.classList.contains('floating-bg-shape');

    items.push({
      el,
      speed,
      maxOffset,
      currentY: 0,
      targetY: 0,
      isCustomProp,
    });
  });

  let isTicking = false;
  let rafId = null;

  /**
   * Continuous bidirectional target calculation
   * Based on viewport center relative to element position
   */
  function calculateTargets() {
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    const viewportCenter = vh / 2;
    const isMobile = window.innerWidth < 768;
    const mobileScale = isMobile ? 0.5 : 1.0;
    const maxLimitScale = isMobile ? 0.5 : 1.0;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const rect = item.el.getBoundingClientRect();

      // Only calculate for elements within or close to the viewport bounds
      if (rect.bottom < -120 || rect.top > vh + 120) {
        continue;
      }

      const elementCenter = rect.top + rect.height / 2;
      const distFromCenter = elementCenter - viewportCenter;

      // Calculate continuous offset proportional to scroll position
      let rawOffset = distFromCenter * item.speed * mobileScale;
      const limit = item.maxOffset * maxLimitScale;

      // Clamp movement within safety bounds
      if (rawOffset > limit) rawOffset = limit;
      if (rawOffset < -limit) rawOffset = -limit;

      item.targetY = rawOffset;
    }
  }

  /**
   * RAF interpolation update loop
   * Lerps smoothly to target to avoid micro-stuttering on scroll wheel or swipe
   */
  function update() {
    let hasMovement = false;
    const lerpFactor = 0.14;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const diff = item.targetY - item.currentY;

      if (Math.abs(diff) > 0.04) {
        item.currentY += diff * lerpFactor;
        hasMovement = true;
      } else {
        item.currentY = item.targetY;
      }

      // Apply transform or CSS variable
      if (item.isCustomProp) {
        item.el.style.setProperty('--parallax-y', `${item.currentY.toFixed(2)}px`);
      } else {
        item.el.style.transform = `translate3d(0, ${item.currentY.toFixed(2)}px, 0)`;
      }
    }

    if (hasMovement) {
      rafId = requestAnimationFrame(update);
    } else {
      isTicking = false;
      rafId = null;
    }
  }

  /**
   * Passive scroll handler
   */
  function onScroll() {
    calculateTargets();
    if (!isTicking) {
      isTicking = true;
      rafId = requestAnimationFrame(update);
    }
  }

  // Bind passive listeners for performance
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial calculation upon mount
  calculateTargets();
  update();

  // Handle dynamic changes in user accessibility preference
  motionQuery.addEventListener('change', (e) => {
    if (e.matches) {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      items.forEach((item) => {
        if (item.isCustomProp) {
          item.el.style.removeProperty('--parallax-y');
        } else {
          item.el.style.transform = '';
        }
      });
    } else {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      onScroll();
    }
  });
}
