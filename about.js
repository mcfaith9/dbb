/**
 * DBB Industrial Services - About Us / Company Profile
 * Vanilla JavaScript Interactive Timeline Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTimelineAccordions();
  initTimelineCarousel();
  initScrollToTop();
});

/**
 * Mobile Navigation Drawer Toggle
 */
function initNavbar() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.querySelector('.site-header');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });

  const navLinks = document.querySelectorAll('.nav-link, .nav-menu .btn');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !toggleBtn.contains(e.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Interactive Timeline & Sub-Accordion Toggles
 */
function initTimelineAccordions() {
  // Main Card Headers Toggle
  const cardHeaders = document.querySelectorAll('.t-card-header');
  cardHeaders.forEach(header => {
    const toggleCard = () => {
      const card = header.closest('.t-card');
      if (!card) return;
      
      const isOpen = card.classList.contains('is-open');
      card.classList.toggle('is-open', !isOpen);
      
      header.setAttribute('aria-expanded', String(!isOpen));
      const btn = header.querySelector('.t-toggle-btn');
      if (btn) {
        btn.setAttribute('aria-expanded', String(!isOpen));
      }
    };

    header.addEventListener('click', toggleCard);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCard();
      }
    });
  });

  // Client Experience Sub-Box Toggles
  const expHeaders = document.querySelectorAll('.client-exp-header');
  expHeaders.forEach(header => {
    const toggleBox = () => {
      const box = header.closest('.client-exp-box');
      if (box) {
        box.classList.toggle('is-open');
      }
    };

    header.addEventListener('click', toggleBox);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleBox();
      }
    });
  });

  // CTU Drawers Toggle
  const ctuHeaders = document.querySelectorAll('.ctu-drawer-header');
  ctuHeaders.forEach(header => {
    const toggleDrawer = () => {
      const drawer = header.closest('.ctu-drawer');
      if (drawer) {
        drawer.classList.toggle('is-open');
        const icon = header.querySelector('.ctu-arrow');
        if (icon) {
          icon.style.transform = drawer.classList.contains('is-open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
      }
    };

    header.addEventListener('click', toggleDrawer);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDrawer();
      }
    });
  });
}

/**
 * Timeline Section Navigation Carousel (Mobile) & Desktop Scroll Spy
 */
function initTimelineCarousel() {
  const viewport = document.getElementById('timelineViewport');
  const track = document.getElementById('timelineTrack');
  const prevBtn = document.getElementById('timelinePrevBtn');
  const nextBtn = document.getElementById('timelineNextBtn');
  const dotsContainer = document.getElementById('timelineDots');
  const navBtns = document.querySelectorAll('.t-nav-btn');
  const slides = document.querySelectorAll('.timeline-nav-slide');
  const sections = document.querySelectorAll('.timeline-node[id]');

  if (!viewport || !track || !slides.length) return;

  const totalSlides = slides.length;
  let currentIndex = 0;
  let isProgrammaticScroll = false;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function renderDots() {
    if (!dotsContainer) return;
    if (dotsContainer.children.length !== totalSlides) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to section slide ${i + 1} of ${totalSlides}`);
        dot.setAttribute('aria-selected', String(i === currentIndex));
        dot.addEventListener('click', () => {
          goToIndex(i, true);
        });
        dotsContainer.appendChild(dot);
      }
    } else {
      Array.from(dotsContainer.children).forEach((dot, i) => {
        const isActive = i === currentIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });
    }
  }

  function updateCarousel(animate = true) {
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

    // Update active class on all buttons
    navBtns.forEach((btn, idx) => {
      if (idx === currentIndex) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    if (isMobile()) {
      const slideWidth = viewport.getBoundingClientRect().width;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!animate || prefersReducedMotion) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
      }

      const offset = currentIndex * slideWidth;
      track.style.transform = `translateX(-${offset}px)`;

      if (prevBtn) {
        prevBtn.disabled = currentIndex <= 0;
        prevBtn.setAttribute('aria-disabled', String(currentIndex <= 0));
      }
      if (nextBtn) {
        nextBtn.disabled = currentIndex >= totalSlides - 1;
        nextBtn.setAttribute('aria-disabled', String(currentIndex >= totalSlides - 1));
      }

      renderDots();
    } else {
      track.style.transform = '';
      track.style.transition = '';
    }
  }

  function scrollToSection(targetId) {
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    // Auto-open card if collapsed
    const card = targetEl.querySelector('.t-card');
    if (card) {
      card.classList.add('is-open');
      const toggleBtn = card.querySelector('.t-toggle-btn');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      const header = card.querySelector('.t-card-header');
      if (header) header.setAttribute('aria-expanded', 'true');
    }

    const offset = isMobile() ? 170 : 140; // sticky header + controls bar
    const elementPosition = targetEl.getBoundingClientRect().top;
    const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - offset);

    isProgrammaticScroll = true;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isProgrammaticScroll = false;
    }, 600);
  }

  function goToIndex(idx, shouldScroll = false) {
    currentIndex = idx;
    updateCarousel(true);
    if (shouldScroll) {
      const activeBtn = navBtns[currentIndex];
      if (activeBtn) {
        const targetId = activeBtn.getAttribute('href');
        if (targetId) scrollToSection(targetId);
      }
    }
  }

  // Button click handlers
  navBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      goToIndex(idx, true);
    });
  });

  // Previous and Next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        goToIndex(currentIndex - 1, true);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalSlides - 1) {
        goToIndex(currentIndex + 1, true);
      }
    });
  }

  // Touch Swipe Handling (matching Locations carousel)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isTouching = false;
  let isSwiping = false;

  viewport.addEventListener('touchstart', (e) => {
    if (!isMobile() || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isTouching = true;
    isSwiping = false;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (!isTouching || !isMobile()) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartX;
    const diffY = currentY - touchStartY;

    if (!isSwiping) {
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 8) {
        isSwiping = true;
        track.classList.add('is-dragging');
      } else if (Math.abs(diffY) > 8) {
        isTouching = false;
        return;
      }
    }

    if (isSwiping) {
      touchDeltaX = diffX;
      if (e.cancelable) e.preventDefault();

      const slideWidth = viewport.getBoundingClientRect().width;
      const baseOffset = currentIndex * slideWidth;
      const resistance = (currentIndex === 0 && diffX > 0) || (currentIndex === totalSlides - 1 && diffX < 0) ? 0.35 : 1;
      const currentOffset = baseOffset - (diffX * resistance);
      track.style.transform = `translateX(-${currentOffset}px)`;
    }
  }, { passive: false });

  const endSwipe = () => {
    if (!isTouching) return;
    isTouching = false;
    track.classList.remove('is-dragging');

    if (!isSwiping) return;
    isSwiping = false;

    const threshold = 35;
    if (touchDeltaX < -threshold && currentIndex < totalSlides - 1) {
      goToIndex(currentIndex + 1, true);
    } else if (touchDeltaX > threshold && currentIndex > 0) {
      goToIndex(currentIndex - 1, true);
    } else {
      updateCarousel(true);
    }
    touchDeltaX = 0;
  };

  viewport.addEventListener('touchend', endSwipe, { passive: true });
  viewport.addEventListener('touchcancel', endSwipe, { passive: true });

  // Keyboard navigation for viewport
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentIndex > 0) goToIndex(currentIndex - 1, true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentIndex < totalSlides - 1) goToIndex(currentIndex + 1, true);
    }
  });

  // Resize listener
  window.addEventListener('resize', () => {
    updateCarousel(false);
  });

  // Scroll Spy: Synchronize carousel & buttons with section currently visible on screen
  if (sections.length) {
    const observer = new IntersectionObserver((entries) => {
      if (isProgrammaticScroll) return;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navBtns.forEach((btn, idx) => {
            if (btn.getAttribute('href') === `#${id}`) {
              currentIndex = idx;
              updateCarousel(true);
            }
          });
        }
      });
    }, {
      rootMargin: '-30% 0px -55% 0px'
    });

    sections.forEach(sec => observer.observe(sec));
  }

  // Initial render
  updateCarousel(false);
}

/**
 * Scroll to Top Button
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  const footerBackToTop = document.getElementById('footerBackToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn?.classList.add('visible');
    } else {
      scrollBtn?.classList.remove('visible');
    }
  }, { passive: true });

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  scrollBtn?.addEventListener('click', scrollToTop);
  footerBackToTop?.addEventListener('click', scrollToTop);
}
