/**
 * DBB Customer Service & Support - Cebu City
 * Vanilla JavaScript Frontend Logic
 * Works natively in any modern browser without frameworks or build tools.
 */

// =========================================================================
// DBB CAREERS DATA (Sample / Demo Data Structure)
// Modify, add, or remove job opportunities in this array.
// Availability/Status can be set to 'open' or 'closed'.
// =========================================================================
const CAREERS_DATA = [
  {
    id: 'csr',
    title: 'Customer Service Representative',
    department: 'Customer Service',
    location: 'Cebu City',
    type: 'Full-time',
    level: 'Entry-level / Experienced',
    status: 'open', // 'open' | 'closed'
    shortDescription: 'Assist customers with inquiries, service concerns, documentation, and follow-ups while providing clear and professional communication.',
    fullDescription: 'As a Customer Service Representative at DBB in Cebu City, you will be the primary voice and touchpoint for customers navigating electric service inquiries, billing questions, and procedural documentation. You will help customers understand their service requirements clearly, coordinate pertinent details, and ensure timely follow-ups.',
    responsibilities: [
      'Assist customers with inquiries, service concerns, documentation, and follow-ups while providing clear and professional communication.',
      'Guide customers on the required documentation for electric meter applications, reconnections, and account updates.',
      'Accurately log customer concerns, inquiry details, and follow-up notes in the support tracking system.',
      'Coordinate with team members to verify utility guidelines and clarify procedures for customers.',
      'Maintain an empathetic, patient, and solutions-oriented approach in all customer interactions.'
    ],
    qualifications: [
      'High School Graduate, Senior High Graduate, College Undergraduate, or Bachelor\'s Degree in any discipline.',
      'Demonstrated verbal and written communication skills in English, Cebuano, and Tagalog.',
      'Strong active listening, problem-solving, and interpersonal communication skills.',
      'Basic computer literacy (email, web browsing, data entry).',
      'Both entry-level candidates and individuals with prior customer service or BPO experience are encouraged to apply.'
    ],
    preferredSkills: [
      'Prior background in customer assistance, front-desk service, or client coordination.',
      'Familiarity with common utility procedures and document preparation in Cebu.',
      'Ability to remain calm, courteous, and constructive during complex inquiries.'
    ],
    // PLACEHOLDER RECRUITMENT EMAIL: Replace with actual recruitment email address
    applicationEmail: 'careers@example.com',
    applicationInstructions: 'To apply, email your updated resume / CV to careers@example.com with the subject line "Application: Customer Service Representative - [Your Full Name]". Please specify your earliest available start date.'
  },
  {
    id: 'it-support',
    title: 'IT Support / Technical Staff',
    department: 'Information Technology',
    location: 'Cebu City',
    type: 'Full-time',
    level: 'Experienced',
    status: 'open', // 'open' | 'closed'
    shortDescription: 'Provide technical assistance, troubleshoot computer and network issues, and support internal systems and employees.',
    fullDescription: 'The IT Support / Technical Staff member is responsible for maintaining reliable digital operations and hardware infrastructure at DBB\'s Cebu office. You will diagnose computer issues, support internal systems, maintain network stability, and assist team members with technical needs.',
    responsibilities: [
      'Provide technical assistance, troubleshoot computer and network issues, and support internal systems and employees.',
      'Set up, configure, and maintain desktop workstations, laptops, printers, and office peripherals.',
      'Monitor local area network (LAN), Wi-Fi connectivity, and internet connection stability.',
      'Manage software installations, security updates, email client setups, and user credentials.',
      'Maintain documentation of IT hardware inventory and recurring troubleshooting procedures.'
    ],
    qualifications: [
      'Bachelor\'s Degree or Associate Degree in Information Technology, Computer Science, Computer Engineering, or related technical field.',
      'At least 1 year of hands-on experience in IT helpdesk, desktop support, or computer maintenance.',
      'Solid troubleshooting knowledge of Windows and macOS operating systems, networking fundamentals (TCP/IP, DNS, routers).',
      'Strong diagnostic skills for hardware and software malfunctions.',
      'Patient and collaborative attitude when helping colleagues resolve technical hurdles.'
    ],
    preferredSkills: [
      'Relevant IT certifications (e.g., CompTIA A+, Network+, or Microsoft Fundamentals).',
      'Experience with helpdesk ticketing systems and remote support tools.',
      'Basic understanding of network security, firewalls, and data backup protocols.'
    ],
    // PLACEHOLDER RECRUITMENT EMAIL: Replace with actual recruitment email address
    applicationEmail: 'careers@example.com',
    applicationInstructions: 'To apply, send your resume and a summary of your technical background to careers@example.com with the subject line "Application: IT Support / Technical Staff - [Your Full Name]". Please include any relevant certifications or technical accomplishments.'
  },
  {
    id: 'admin-staff',
    title: 'Administrative Staff',
    department: 'Administration',
    location: 'Cebu City',
    type: 'Full-time',
    level: 'Entry-level / Experienced',
    status: 'open', // 'open' | 'closed'
    shortDescription: 'Assist with documentation, records, coordination, data entry, and day-to-day administrative activities.',
    fullDescription: 'The Administrative Staff member plays an essential role in keeping DBB\'s daily operations structured and efficient. In this role, you will manage document archives, coordinate paperwork for customer assistance cases, perform accurate data entry, and assist with office scheduling in Cebu City.',
    responsibilities: [
      'Assist with documentation, records, coordination, data entry, and day-to-day administrative activities.',
      'Organize and file physical and digital customer assistance records, forms, and service guides.',
      'Perform data entry and maintain accurate logs of customer inquiries and department reports.',
      'Coordinate office supplies, incoming messages, and administrative appointments.',
      'Prepare summary reports, memos, and routine communications for the management team.'
    ],
    qualifications: [
      'Bachelor\'s Degree or Diploma in Business Administration, Office Administration, Management, or related field.',
      'Proficiency with office software suites (Google Docs/Sheets or Microsoft Office Word/Excel).',
      'Strong attention to detail, organization, and systematic recordkeeping abilities.',
      'Good written and spoken communication skills in English and Filipino/Cebuano.',
      'Open to entry-level graduates with strong organizational skills as well as experienced administrative personnel.'
    ],
    preferredSkills: [
      'Previous experience in an administrative support or clerical role.',
      'Familiarity with spreadsheet functions, document indexing, and records management.',
      'Ability to handle multiple tasks with minimal supervision and adhere to deadlines.'
    ],
    // PLACEHOLDER RECRUITMENT EMAIL: Replace with actual recruitment email address
    applicationEmail: 'careers@example.com',
    applicationInstructions: 'To apply, please email your resume along with a brief cover note to careers@example.com with the subject line "Application: Administrative Staff - [Your Full Name]".'
  }
];

function initApp() {
  initNavbar();
  initCareers();
  initLocationsCarousel();
  initFaqAccordion();
  initContactForm();
  initScrollEffects();
  initScrollToTop();
  initSmoothScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

/**
 * 1. Mobile Navigation & Scroll Header
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-menu .btn');

  if (!toggleBtn || !navMenu) return;

  // Toggle mobile drawer
  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('open');
  });

  // Close menu when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && 
        !navMenu.contains(e.target) && 
        !toggleBtn.contains(e.target)) {
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('open');
    }
  });

  // Header elevation shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * 2. Careers & Job Details Modal Logic
 */
let lastFocusedElement = null;

function initCareers() {
  const grid = document.getElementById('careersGrid');
  const modalBackdrop = document.getElementById('jobModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');

  if (!grid) return;

  // Render cards from CAREERS_DATA
  renderCareerCards(CAREERS_DATA, grid);

  // Click delegation for "View Position"
  grid.addEventListener('click', (e) => {
    const viewBtn = e.target.closest('.btn-view-job');
    if (viewBtn) {
      const jobId = viewBtn.getAttribute('data-job-id');
      const job = CAREERS_DATA.find(j => j.id === jobId);
      if (job) {
        openJobModal(job, viewBtn);
      }
    }
  });

  if (!modalBackdrop) return;

  // Close handlers
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeJobModal);
  }
  if (modalDismissBtn) {
    modalDismissBtn.addEventListener('click', closeJobModal);
  }

  // Backdrop click to close
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeJobModal();
    }
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('is-open')) {
      closeJobModal();
    }
  });
}

function renderCareerCards(jobs, container) {
  if (!container || !Array.isArray(jobs)) return;

  container.innerHTML = jobs.map(job => {
    const isOpen = job.status === 'open';
    const statusLabel = isOpen ? 'Open Position' : 'Closed';
    const statusClass = isOpen ? 'status-open' : 'status-closed';

    return `
      <article class="job-card" data-job-id="${escapeHtml(job.id)}">
        <div class="job-card-top">
          <span class="badge badge-dept">${escapeHtml(job.department)}</span>
          <span class="badge badge-status ${statusClass}">
            <span class="status-dot" aria-hidden="true"></span>
            ${statusLabel}
          </span>
        </div>

        <h3 class="job-title">${escapeHtml(job.title)}</h3>

        <div class="job-meta-list">
          <div class="job-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${escapeHtml(job.location)}</span>
          </div>

          <div class="job-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span>${escapeHtml(job.type)}</span>
          </div>

          ${job.level ? `
            <div class="job-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
              <span>${escapeHtml(job.level)}</span>
            </div>
          ` : ''}
        </div>

        <p class="job-desc">${escapeHtml(job.shortDescription)}</p>

        <div class="job-card-footer">
          <button 
            type="button" 
            class="btn btn-view-job" 
            data-job-id="${escapeHtml(job.id)}"
            aria-label="View position details for ${escapeHtml(job.title)}"
          >
            <span>View Position</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function openJobModal(job, triggerEl) {
  const modalBackdrop = document.getElementById('jobModalBackdrop');
  if (!modalBackdrop) return;

  lastFocusedElement = triggerEl || document.activeElement;

  // Populate fields
  const titleEl = document.getElementById('modalJobTitle');
  const deptEl = document.getElementById('modalJobDept');
  const statusEl = document.getElementById('modalJobStatus');
  const locEl = document.getElementById('modalJobLocation');
  const typeEl = document.getElementById('modalJobType');
  const levelEl = document.getElementById('modalJobLevel');
  const descEl = document.getElementById('modalJobDesc');
  const respEl = document.getElementById('modalJobResponsibilities');
  const qualEl = document.getElementById('modalJobQualifications');
  const skillsContainer = document.getElementById('modalJobSkillsSection');
  const skillsEl = document.getElementById('modalJobSkills');
  const instrEl = document.getElementById('modalJobInstructions');
  const emailEl = document.getElementById('modalEmailDisplay');
  const applyBtn = document.getElementById('modalApplyBtn');
  const closedNotice = document.getElementById('modalClosedNotice');

  if (titleEl) titleEl.textContent = job.title;
  if (deptEl) deptEl.textContent = job.department;
  if (locEl) locEl.textContent = job.location;
  if (typeEl) typeEl.textContent = job.type;
  if (levelEl) levelEl.textContent = job.level || 'Full-time';
  if (descEl) descEl.textContent = job.fullDescription || job.shortDescription;
  if (instrEl) instrEl.textContent = job.applicationInstructions;
  if (emailEl) emailEl.textContent = job.applicationEmail;

  // Status badge update
  const isOpen = job.status === 'open';
  if (statusEl) {
    statusEl.className = 'badge badge-status ' + (isOpen ? 'status-open' : 'status-closed');
    statusEl.innerHTML = `
      <span class="status-dot" aria-hidden="true"></span>
      ${isOpen ? 'Open Position' : 'Closed'}
    `;
  }

  // Responsibilities list
  if (respEl) {
    respEl.innerHTML = (job.responsibilities || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
  }

  // Qualifications list
  if (qualEl) {
    qualEl.innerHTML = (job.qualifications || []).map(q => `<li>${escapeHtml(q)}</li>`).join('');
  }

  // Preferred skills
  if (skillsEl && skillsContainer) {
    if (job.preferredSkills && job.preferredSkills.length) {
      skillsContainer.style.display = 'block';
      skillsEl.innerHTML = job.preferredSkills.map(s => `<li>${escapeHtml(s)}</li>`).join('');
    } else {
      skillsContainer.style.display = 'none';
    }
  }

  // Apply button & Closed Notice
  if (applyBtn) {
    if (isOpen) {
      applyBtn.style.display = 'inline-flex';
      const subject = `Application for ${job.title} - DBB Careers`;
      const body = `Dear DBB Hiring Team,%0D%0A%0D%0AI am writing to submit my application for the ${encodeURIComponent(job.title)} position in Cebu City.%0D%0A%0D%0AFull Name: %0D%0AContact Number: %0D%0AEarliest Available Start Date: %0D%0A%0D%0APlease find attached my updated resume / CV.%0D%0A%0D%0AThank you!`;
      applyBtn.href = `mailto:${encodeURIComponent(job.applicationEmail)}?subject=${encodeURIComponent(subject)}&body=${body}`;
      if (closedNotice) closedNotice.style.display = 'none';
    } else {
      applyBtn.style.display = 'none';
      if (closedNotice) closedNotice.style.display = 'block';
    }
  }

  // Show modal
  modalBackdrop.classList.add('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Set focus into modal for accessibility
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) {
    setTimeout(() => closeBtn.focus(), 50);
  }
}

function closeJobModal() {
  const modalBackdrop = document.getElementById('jobModalBackdrop');
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove('is-open');
  modalBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  // Restore focus
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

/**
 * 3. FAQ Accordion Logic
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open') || item.classList.contains('active');

      // Close other active items for clean single-open accordion
      faqItems.forEach(otherItem => {
        if (otherItem !== item && (otherItem.classList.contains('is-open') || otherItem.classList.contains('active'))) {
          otherItem.classList.remove('is-open', 'active');
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle clicked item
      item.classList.toggle('is-open', !isOpen);
      item.classList.toggle('active', !isOpen);
      questionBtn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}

/**
 * 3. Contact Form Handler (Client-side interactive feedback)
 */
function initContactForm() {
  const form = document.getElementById('assistanceForm');
  const feedbackBox = document.getElementById('formFeedback');

  if (!form || !feedbackBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('customerName');
    const contactInput = document.getElementById('customerContact');
    const concernSelect = document.getElementById('concernCategory');
    const detailsInput = document.getElementById('concernDetails');

    // Simple validation
    if (!nameInput?.value.trim() || !contactInput?.value.trim()) {
      alert('Please provide your name and contact information.');
      return;
    }

    // Generate demo inquiry reference number
    const refCode = 'DBB-' + Math.floor(100000 + Math.random() * 900000);

    feedbackBox.innerHTML = `
      <strong>Thank you, ${escapeHtml(nameInput.value.trim())}!</strong><br>
      Your inquiry regarding <em>${escapeHtml(concernSelect?.value || 'Electric Service Concern')}</em> has been logged locally.<br>
      Reference ID: <span style="font-family: monospace; font-weight: bold; color: #0284c7;">#${refCode}</span>.<br>
      <small style="display:inline-block; margin-top: 4px; color: #047857;">Our team will review your concern and help you organize the appropriate next steps.</small>
    `;
    feedbackBox.classList.add('success');

    // Reset form fields
    form.reset();

    // Scroll to feedback message smoothly
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

/**
 * 4. Active Nav Highlighting on Scroll
 */
function initScrollEffects() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const setHomeActive = () => {
    navLinks.forEach(link => {
      if (link.getAttribute('href') === '#home') {
        link.classList.add('active');
      } else if (link.getAttribute('href')?.startsWith('#')) {
        link.classList.remove('active');
      }
    });
  };

  // Keep Home active when near top of page
  window.addEventListener('scroll', () => {
    if (window.scrollY < 150) {
      setHomeActive();
    }
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    if (window.scrollY < 150) {
      setHomeActive();
      return;
    }

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * 5. Floating Scroll to Top Button
 */
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (!scrollBtn) return;

  const getScrollTop = () => {
    return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  };

  const toggleScrollBtn = () => {
    // Show button after user scrolls approximately 200–300px down (threshold 250px)
    if (getScrollTop() > 250) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  };

  // Listen to window scroll events with passive listener
  window.addEventListener('scroll', toggleScrollBtn, { passive: true });
  toggleScrollBtn();

  // Smooth scroll back to top upon click
  scrollBtn.addEventListener('click', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  });
}

/**
 * 6. Smooth Scrolling for Internal Navigation Links
 */
function initSmoothScroll() {
  // If the user arrived with #home, scroll to top cleanly
  if (window.location.hash === '#home') {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Special handling for Home / Top of page navigation
      if (targetId === '#home' || targetId === '#top') {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        // Set Home active in navbar
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
          } else if (link.getAttribute('href')?.startsWith('#')) {
            link.classList.remove('active');
          }
        });

        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', window.location.pathname);
        }
        return;
      }

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });

        // Update history URL if supported without jumping
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', targetId);
        }
      }
    });
  });
}

// Utility function to escape user input
function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

/**
 * 7. Responsive Locations Carousel (5 cards gallery)
 * Supports desktop (3 cards), tablet (2 cards), mobile (1 card with touch swipe)
 */
function initLocationsCarousel() {
  const wrapper = document.querySelector('.locations-carousel-wrapper');
  const viewport = document.getElementById('locationsViewport');
  const track = document.getElementById('locationsTrack');
  const prevBtn = document.getElementById('locationsPrevBtn');
  const nextBtn = document.getElementById('locationsNextBtn');
  const dotsContainer = document.getElementById('locationsDots');

  if (!viewport || !track) return;

  const cards = Array.from(track.querySelectorAll('.location-card'));
  const totalCards = cards.length;
  if (totalCards === 0) return;

  let currentIndex = 0;

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width > 1024) return 3;
    if (width > 640) return 2;
    return 1;
  }

  function getMaxIndex() {
    const visibleCount = getVisibleCount();
    return Math.max(0, totalCards - visibleCount);
  }

  function renderDots() {
    if (!dotsContainer) return;
    const maxIndex = getMaxIndex();
    const numDots = maxIndex + 1;

    if (dotsContainer.children.length !== numDots) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to location slide ${i + 1} of ${numDots}`);
        dot.setAttribute('aria-selected', String(i === currentIndex));
        dot.addEventListener('click', () => {
          currentIndex = i;
          updateCarousel();
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
    const maxIndex = getMaxIndex();
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    if (currentIndex < 0) currentIndex = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!animate || prefersReducedMotion) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
    }

    const firstCard = cards[0];
    if (firstCard) {
      const cardRect = firstCard.getBoundingClientRect();
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.gap) || 24;
      const step = cardRect.width + gap;
      const offset = currentIndex * step;
      track.style.transform = `translateX(-${offset}px)`;
    }

    if (prevBtn) {
      prevBtn.disabled = currentIndex <= 0;
      prevBtn.setAttribute('aria-disabled', String(currentIndex <= 0));
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex >= maxIndex;
      nextBtn.setAttribute('aria-disabled', String(currentIndex >= maxIndex));
    }

    renderDots();
  }

  // Button navigation
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < getMaxIndex()) {
        currentIndex++;
        updateCarousel();
      }
    });
  }

  // Touch / Mobile Swiping
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isTouching = false;
  let isSwiping = false;

  viewport.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchDeltaX = 0;
    isTouching = true;
    isSwiping = false;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
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

      const firstCard = cards[0];
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 300;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
      const baseOffset = currentIndex * (cardWidth + gap);

      let dragX = diffX;
      const maxIndex = getMaxIndex();
      if ((currentIndex === 0 && diffX > 0) || (currentIndex === maxIndex && diffX < 0)) {
        dragX = diffX * 0.3;
      }

      track.style.transition = 'none';
      track.style.transform = `translateX(-${baseOffset - dragX}px)`;
    }
  }, { passive: false });

  function endTouch() {
    if (!isTouching) return;
    isTouching = false;
    track.classList.remove('is-dragging');

    if (isSwiping) {
      const threshold = 40;
      const maxIndex = getMaxIndex();
      if (touchDeltaX < -threshold && currentIndex < maxIndex) {
        currentIndex++;
      } else if (touchDeltaX > threshold && currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    }
    isSwiping = false;
  }

  viewport.addEventListener('touchend', endTouch, { passive: true });
  viewport.addEventListener('touchcancel', endTouch, { passive: true });

  // Desktop Mouse Drag
  let isMouseDown = false;
  let mouseStartX = 0;
  let mouseDeltaX = 0;
  let hasDragged = false;

  viewport.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isMouseDown = true;
    hasDragged = false;
    mouseStartX = e.clientX;
    mouseDeltaX = 0;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const diffX = e.clientX - mouseStartX;
    if (!hasDragged && Math.abs(diffX) > 6) {
      hasDragged = true;
      track.classList.add('is-dragging');
    }

    if (hasDragged) {
      mouseDeltaX = diffX;
      const firstCard = cards[0];
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 300;
      const gap = parseFloat(window.getComputedStyle(track).gap) || 24;
      const baseOffset = currentIndex * (cardWidth + gap);

      let dragX = diffX;
      const maxIndex = getMaxIndex();
      if ((currentIndex === 0 && diffX > 0) || (currentIndex === maxIndex && diffX < 0)) {
        dragX = diffX * 0.3;
      }

      track.style.transition = 'none';
      track.style.transform = `translateX(-${baseOffset - dragX}px)`;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isMouseDown) return;
    isMouseDown = false;
    track.classList.remove('is-dragging');

    if (hasDragged) {
      const threshold = 50;
      const maxIndex = getMaxIndex();
      if (mouseDeltaX < -threshold && currentIndex < maxIndex) {
        currentIndex++;
      } else if (mouseDeltaX > threshold && currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    }
  });

  viewport.addEventListener('click', (e) => {
    if (hasDragged) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged = false;
    }
  }, true);

  // Keyboard Navigation
  viewport.addEventListener('keydown', (e) => {
    const maxIndex = getMaxIndex();
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
      }
    }
  });

  // Window Resize
  let resizeTimeout = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateCarousel(false);
    }, 100);
  }, { passive: true });

  // Prevent navigation when placeholder link is clicked
  track.querySelectorAll('a[href*="INSERT"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

  // Initial display setup
  updateCarousel(false);
}
