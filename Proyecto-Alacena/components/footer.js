/**
 * Footer Component - Alacena Mágica
 * Módulo reutilizable para el footer del sitio
 */

const Footer = {
  logoPath: 'assets/logos/Alacena_Magica_Logo_White.png',
  
  render() {
    const currentYear = new Date().getFullYear();
    
    return `
      <footer class="footer" role="contentinfo">
        <div class="container footer__container">
          <!-- Brand Column -->
          <div class="footer__brand-column">
            <a href="index.html" class="footer__brand" aria-label="Alacena Mágica - Inicio">
              <img src="${this.logoPath}" alt="Logo Alacena Mágica" width="200" height="50" loading="lazy">
              <span>Alacena Mágica</span>
            </a>
            <p class="footer__description">
              Descubre recetas deliciosas y saludables preparadas con amor. 
              Tu alacena llena de inspiración culinaria para cada día.
            </p>
            <div class="footer__social" role="navigation" aria-label="Redes sociales">
              <a href="#" class="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>
              </a>
              <a href="#" class="footer__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
          
          <!-- Quick Links Column -->
          <div class="footer__column">
            <h3 class="footer__title">Enlaces Rápidos</h3>
            <ul class="footer__links">
              <li><a href="index.html#recetas" class="footer__link">Todas las Recetas</a></li>
              <li><a href="index.html#beneficios" class="footer__link">Beneficios</a></li>
              <li><a href="index.html#newsletter" class="footer__link">Suscribirse</a></li>
              <li><a href="#" class="footer__link">Sobre Nosotros</a></li>
              <li><a href="#" class="footer__link">Contacto</a></li>
            </ul>
          </div>
          
          <!-- Categories Column -->
          <div class="footer__column">
            <h3 class="footer__title">Categorías</h3>
            <ul class="footer__links">
              <li><a href="#" class="footer__link" data-category="desayunos">Desayunos</a></li>
              <li><a href="#" class="footer__link" data-category="almuerzos">Almuerzos</a></li>
              <li><a href="#" class="footer__link" data-category="cenas">Cenas</a></li>
              <li><a href="#" class="footer__link" data-category="postres">Postres</a></li>
              <li><a href="#" class="footer__link" data-category="vegetariano">Vegetariano</a></li>
            </ul>
          </div>
          
          <!-- Legal Column -->
          <div class="footer__column">
            <h3 class="footer__title">Legal</h3>
            <ul class="footer__links">
              <li><a href="privacy.html" class="footer__link">Política de Privacidad</a></li>
              <li><a href="terms.html" class="footer__link">Términos de Uso</a></li>
              <li><a href="unsubscribe.html" class="footer__link">Darse de Baja</a></li>
              <li><a href="gracias.html" class="footer__link">Página de Gracias</a></li>
            </ul>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="container footer__bottom">
          <p>&copy; ${currentYear} Alacena Mágica. Todos los derechos reservados.</p>
          <div class="footer__bottom-links">
            <a href="privacy.html" class="footer__bottom-link">Privacidad</a>
            <a href="terms.html" class="footer__bottom-link">Términos</a>
            <a href="#" class="footer__bottom-link">Cookies</a>
          </div>
        </div>
      </footer>
    `;
  },
  
  init() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    
    // Add smooth scroll to anchor links
    footer.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Category filter links
    footer.querySelectorAll('[data-category]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        
        // If on homepage, filter recipes
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
          if (typeof RecipeFilter !== 'undefined') {
            RecipeFilter.filterByCategory(category);
          }
        } else {
          // Redirect to homepage with filter
          window.location.href = `index.html?category=${category}`;
        }
      });
    });
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Footer;
}
