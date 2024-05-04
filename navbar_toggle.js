document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const navbarToggle = navbar.querySelector('#navbar-toggle');
  const navbarMenu = document.querySelector('#navbar-menu');
  const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');
  const navbarHeight = navbar.offsetHeight;

  let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
  let lastScrollTop = 0;

  const toggleNavbarVisibility = () => {
      isNavbarExpanded = !isNavbarExpanded;
      navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
  };

  navbarToggle.addEventListener('click', toggleNavbarVisibility);
  navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
  navbarMenu.addEventListener('click', toggleNavbarVisibility);

  window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scrolling down
          navbar.style.opacity = '0';
      } else {
          // Scrolling up
          navbar.style.opacity = '1';
      }

      lastScrollTop = scrollTop;
  });
});
