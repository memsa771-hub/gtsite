(function () {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('sidebarClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const submenuToggles = document.querySelectorAll('.nav-toggle');
  const contactForm = document.getElementById('contactForm');

  function openSidebar() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  menuBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeSidebar();
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
    if (e.key === 'Escape') closeSidebar();
  });

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent. We will get back to you soon.');
      contactForm.reset();
    });
  }

  var sections = document.querySelectorAll('section[id]');
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach(function (section) {
    if (!section.classList.contains('hero-section')) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    }
  });
})();
