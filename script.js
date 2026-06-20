(function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('sidebarClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const submenuToggles = document.querySelectorAll('.nav-toggle');
  const contactForm = document.getElementById('contactForm');

  const projectModalOverlay = document.getElementById('projectModalOverlay');
  const projectModal = document.getElementById('projectModal');
  const projectModalClose = document.getElementById('projectModalClose');
  const projectModalContact = document.getElementById('projectModalContact');

  const projects = {
    'apex-commerce': {
      title: 'Apex Commerce Platform',
      client: 'Retail & E-Commerce',
      tag: 'Web Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=560&fit=crop&q=80',
      featured: true,
      summary: 'A full-stack e-commerce marketplace built for vendors who need real-time inventory, secure checkout, and centralized order management.',
      benefits: [
        'Boosts online sales with a fast, mobile-friendly shopping experience.',
        'Reduces manual work through automated inventory and order tracking.',
        'Gives vendors a clear dashboard to manage products and revenue.',
        'Builds customer trust with secure payments and order notifications.'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    'finvault': {
      title: 'FinVault Mobile Banking',
      client: 'Financial Services',
      tag: 'Mobile Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&q=80',
      summary: 'A secure mobile banking application designed for everyday transactions, account insights, and on-the-go financial control.',
      benefits: [
        'Lets customers bank anytime with biometric login and instant transfers.',
        'Improves financial awareness through spending insights and alerts.',
        'Cuts branch visits by enabling digital payments and bill management.',
        'Strengthens security with encrypted data and session protection.'
      ],
      tech: ['Flutter', 'Firebase', 'REST API']
    },
    'medcore': {
      title: 'MedCore Health Portal',
      client: 'Healthcare',
      tag: 'Web Development',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80',
      summary: 'A healthcare management portal connecting clinics, staff, and patients through digital records and appointment workflows.',
      benefits: [
        'Organizes patient records digitally for faster, safer access.',
        'Reduces appointment no-shows with online scheduling reminders.',
        'Helps clinics track performance through built-in analytics.',
        'Improves patient experience with shorter wait times and clarity.'
      ],
      tech: ['Vue.js', 'Django', 'MySQL']
    },
    'cloudshift': {
      title: 'CloudShift Enterprise',
      client: 'Logistics & Supply Chain',
      tag: 'Cloud Solutions',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80',
      summary: 'An enterprise cloud migration project moving legacy systems to AWS with high availability and optimized infrastructure costs.',
      benefits: [
        'Eliminates downtime risk during migration with phased rollout.',
        'Scales automatically during peak demand without manual intervention.',
        'Lowers infrastructure costs through right-sized cloud resources.',
        'Improves disaster recovery and business continuity readiness.'
      ],
      tech: ['AWS', 'Docker', 'Terraform']
    },
    'retail-pos': {
      title: 'Retail POS Pro',
      client: 'Retail & Hospitality',
      tag: 'Web Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop&q=80',
      summary: 'A modern point-of-sale system for retail stores with inventory sync, receipt printing, and live sales dashboards.',
      benefits: [
        'Speeds up checkout and reduces errors at the counter.',
        'Keeps stock accurate across branches in real time.',
        'Gives owners daily sales reports without manual spreadsheets.',
        'Simplifies staff training with an intuitive POS interface.'
      ],
      tech: ['Python', 'Gunicorn', 'PostgreSQL']
    },
    'brandpulse': {
      title: 'BrandPulse Growth Campaign',
      client: 'Consumer Brands',
      tag: 'Digital Marketing',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      summary: 'A data-driven digital marketing campaign combining SEO, paid ads, and analytics to grow brand reach and conversions.',
      benefits: [
        'Increases brand visibility on search and social platforms.',
        'Targets the right audience to improve ad return on investment.',
        'Tracks every lead and conversion with clear analytics.',
        'Builds long-term organic traffic through SEO optimization.'
      ],
      tech: ['SEO', 'Google Ads', 'Analytics']
    },
    'netguard': {
      title: 'NetGuard Corporate Network',
      client: 'Corporate Offices',
      tag: 'Network Infrastructure',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80',
      summary: 'Enterprise network design and deployment with secure VPN access, firewall policies, and 24/7 monitoring.',
      benefits: [
        'Keeps teams connected securely across offices and remote sites.',
        'Protects company data with firewall rules and VPN encryption.',
        'Prevents outages through proactive network monitoring.',
        'Supports business growth with scalable network architecture.'
      ],
      tech: ['Cisco', 'VPN', 'Monitoring']
    },
    'nestopia': {
      title: 'Nestopia Hotel Booking System',
      client: 'Nestopia Hotels & Resorts — Skardu',
      tag: 'Web Development',
      year: '2025',
      image: 'assets/images/nestopia-skardu.png',
      summary: 'An online booking platform for Nestopia Skardu — letting guests browse rooms, check availability, and reserve stays instantly.',
      benefits: [
        'Increases direct bookings without relying only on third-party platforms.',
        'Shows live room availability so guests book confidently.',
        'Reduces front-desk workload with automated reservation handling.',
        'Improves guest experience before arrival with clear packages and pricing.'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    'edulearn': {
      title: 'EduLearn LMS Platform',
      client: 'Education',
      tag: 'Web Development',
      year: '2023',
      image: 'assets/images/edulearn-lms.jpg',
      summary: 'A learning management system for schools and training centers with courses, quizzes, and progress tracking.',
      benefits: [
        'Centralizes courses and materials in one easy-to-use platform.',
        'Tracks student progress automatically with quizzes and reports.',
        'Lets instructors manage classes without paperwork.',
        'Enables remote learning with accessible online education tools.'
      ],
      tech: ['Next.js', 'Node.js', 'MongoDB']
    }
  };

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    if (!projectModalOverlay.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  function openProjectModal(projectId) {
    const project = projects[projectId];
    if (!project || !projectModalOverlay) return;

    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectImage').alt = project.title;
    document.getElementById('modalProjectTag').textContent = project.tag;
    document.getElementById('modalProjectYear').textContent = project.year;
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectClient').textContent = project.client;
    document.getElementById('modalProjectSummary').textContent = project.summary;

    const benefitsList = document.getElementById('modalProjectBenefits');
    benefitsList.innerHTML = '';
    project.benefits.forEach(function (benefit) {
      const li = document.createElement('li');
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    document.getElementById('modalProjectTech').textContent = project.tech.join(' · ');

    projectModalOverlay.classList.add('active');
    projectModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModalOverlay) return;
    projectModalOverlay.classList.remove('active');
    projectModalOverlay.setAttribute('aria-hidden', 'true');
    if (!sidebar.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  menuBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeSidebar();
      closeProjectModal();
    });
  });

  submenuToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const parent = toggle.parentElement;
      const isOpen = parent.classList.contains('open');

      document.querySelectorAll('.has-submenu.open').forEach(function (item) {
        item.classList.remove('open');
        item.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (projectModalOverlay && projectModalOverlay.classList.contains('active')) {
        closeProjectModal();
      } else {
        closeSidebar();
      }
    }
  });

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent. We will get back to you soon.');
      contactForm.reset();
    });
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }

  if (projectModalOverlay) {
    projectModalOverlay.addEventListener('click', function (e) {
      if (e.target === projectModalOverlay) closeProjectModal();
    });
  }

  if (projectModalContact) {
    projectModalContact.addEventListener('click', closeProjectModal);
  }

  document.querySelectorAll('.portfolio-view-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.portfolio-card');
      if (card) openProjectModal(card.getAttribute('data-project-id'));
    });
  });

  var filterBtns = document.querySelectorAll('.filter-btn');
  var portfolioCards = document.querySelectorAll('.portfolio-card');
  var portfolioEmpty = document.getElementById('portfolioEmpty');

  if (filterBtns.length && portfolioCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');
        var visibleCount = 0;

        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        portfolioCards.forEach(function (card) {
          var category = card.getAttribute('data-category');
          var show = filter === 'all' || category === filter;
          card.classList.toggle('hidden', !show);
          if (show) visibleCount++;
        });

        if (portfolioEmpty) {
          portfolioEmpty.hidden = visibleCount > 0;
        }
      });
    });
  }
})();
