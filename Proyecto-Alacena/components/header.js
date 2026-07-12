/**
 * Header Component - Alacena Mágica
 * Módulo reutilizable para el header del sitio
 */

const Header = {
  logoPath: 'assets/logos/Alacena_Magica_Logo.svg',
  
  render() {
    return `
      <header class="header" role="banner">
        <div class="header__container">
          <a href="index.html" class="header__logo" aria-label="Alacena Mágica - Inicio">
            <img src="${this.logoPath}" alt="Logo Alacena Mágica" width="200" height="50" loading="eager">
            <span>Alacena Mágica</span>
          </a>
          
          <nav class="header__nav" role="navigation" aria-label="Menú principal">
            <ul class="header__menu">
              <li><a href="index.html" class="header__link header__link--active">Inicio</a></li>
              <li><a href="#recetas" class="header__link">Recetas</a></li>
              <li><a href="#beneficios" class="header__link">Beneficios</a></li>
              <li><a href="#newsletter" class="header__link">Newsletter</a></li>
            </ul>
            <a href="#newsletter" class="header__cta">Suscribirse</a>
            
            <button 
              class="header__toggle" 
              aria-label="Abrir menú"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>
    `;
  },
  
  init() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const toggle = header.querySelector('.header__toggle');
    const nav = header.querySelector('.header__nav');
    
    // Mobile menu toggle
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        toggle.setAttribute('aria-expanded', !isExpanded);
        toggle.classList.toggle('header__toggle--active');
        nav.classList.toggle('header__nav--active');
        
        // Update aria-label
        toggle.setAttribute('aria-label', isExpanded ? 'Abrir menú' : 'Cerrar menú');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isExpanded ? '' : 'hidden';
      });
      
      // Close menu on link click (mobile)
      nav.querySelectorAll('.header__link, .header__cta').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('header__toggle--active');
            nav.classList.remove('header__nav--active');
            document.body.style.overflow = '';
          }
        });
      });
      
      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('header__nav--active')) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('header__toggle--active');
          nav.classList.remove('header__nav--active');
          document.body.style.overflow = '';
          toggle.focus();
        }
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            nav.classList.contains('header__nav--active') && 
            !nav.contains(e.target) && 
            !toggle.contains(e.target)) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.classList.remove('header__toggle--active');
          nav.classList.remove('header__nav--active');
          document.body.style.overflow = '';
        }
      });
    }
    
    // Active link based on current page
    this.setActiveLink();
    
    // Header scroll effect
    this.handleScroll();
  },
  
  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.header__link');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === 'index.html' && href === 'index.html')) {
        link.classList.add('header__link--active');
      } else {
        link.classList.remove('header__link--active');
      }
    });
  },
  
  handleScroll() {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    
    if (!header) return;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Header;
}
