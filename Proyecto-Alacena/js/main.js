/**
 * Main JavaScript - Alacena Mágica
 * Funcionalidad principal de la aplicación
 */

// Import components (loaded via script tags in HTML)
// Header and Footer components are available globally

/**
 * Recipe Filter Module
 * Maneja el filtrado de recetas por categoría
 */
const RecipeFilter = {
  recipes: [],
  activeFilter: 'todas',
  
  init() {
    this.cacheRecipes();
    this.bindEvents();
    this.checkURLParams();
  },
  
  cacheRecipes() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    this.recipes = Array.from(recipeCards);
  },
  
  bindEvents() {
    const filterButtons = document.querySelectorAll('.filters__btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const category = button.getAttribute('data-filter');
        this.filterByCategory(category);
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('filters__btn--active'));
        button.classList.add('filters__btn--active');
      });
    });
  },
  
  checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category) {
      this.filterByCategory(category);
      
      // Update active button
      const filterButtons = document.querySelectorAll('.filters__btn');
      filterButtons.forEach(btn => {
        btn.classList.toggle('filters__btn--active', btn.getAttribute('data-filter') === category);
      });
    }
  },
  
  filterByCategory(category) {
    this.activeFilter = category;
    
    this.recipes.forEach(recipe => {
      const recipeCategory = recipe.getAttribute('data-category');
      const shouldShow = category === 'todas' || recipeCategory === category;
      
      if (shouldShow) {
        recipe.style.display = 'flex';
        recipe.setAttribute('aria-hidden', 'false');
      } else {
        recipe.style.display = 'none';
        recipe.setAttribute('aria-hidden', 'true');
      }
    });
    
    // Announce to screen readers
    this.announceFilter(category);
  },
  
  announceFilter(category) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    
    const count = this.recipes.filter(r => r.style.display !== 'none').length;
    const categoryName = category === 'todas' ? 'todas' : category;
    announcement.textContent = `Mostrando ${count} recetas de ${categoryName}`;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      announcement.remove();
    }, 3000);
  }
};

/**
 * Newsletter Form Handler
 * Maneja el envío del formulario de newsletter
 */
const NewsletterForm = {
  init() {
    const form = document.querySelector('.newsletter__form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => this.handleSubmit(e));
  },
  
  handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = form.querySelector('.newsletter__input');
    const submitBtn = form.querySelector('.newsletter__submit');
    const email = emailInput.value.trim();
    
    // Validate email
    if (!this.isValidEmail(email)) {
      this.showError(emailInput, 'Por favor, ingresa un correo electrónico válido');
      return;
    }
    
    // Simulate API call
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    // Simulate network request
    setTimeout(() => {
      // Store subscription (in real app, this would be an API call)
      this.saveSubscription(email);
      
      // Show success
      submitBtn.textContent = '¡Suscrito!';
      submitBtn.style.backgroundColor = 'var(--color-verde-marca)';
      
      // Redirect to thank you page
      setTimeout(() => {
        window.location.href = 'gracias.html';
      }, 1000);
    }, 1500);
  },
  
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  showError(input, message) {
    // Remove existing error
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) existingError.remove();
    
    // Add error styling
    input.style.borderColor = '#e74c3c';
    input.setAttribute('aria-invalid', 'true');
    
    // Add error message
    const error = document.createElement('span');
    error.className = 'error-message';
    error.style.color = '#e74c3c';
    error.style.fontSize = '0.85rem';
    error.style.marginTop = '0.5rem';
    error.textContent = message;
    
    input.parentElement.appendChild(error);
    
    // Remove error on input
    input.addEventListener('input', () => {
      input.style.borderColor = '';
      input.removeAttribute('aria-invalid');
      error.remove();
    }, { once: true });
  },
  
  saveSubscription(email) {
    // In a real application, this would send to a backend
    // For now, we'll store in localStorage for demo purposes
    const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
    subscriptions.push({ email, date: new Date().toISOString() });
    localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
  }
};

/**
 * Smooth Scroll for Anchor Links
 */
const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Update URL without scrolling
            history.pushState(null, null, href);
          }
        }
      });
    });
  }
};

/**
 * Lazy Loading Images
 * Implementa lazy loading nativo con fallback para navegadores antiguos
 */
const LazyLoadImages = {
  init() {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
    } else {
      // Fallback for older browsers
      this.loadScript('https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js');
    }
  },
  
  loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }
};

/**
 * Initialize All Modules
 */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize components if they exist
  if (typeof Header !== 'undefined') {
    Header.init();
  }
  
  if (typeof Footer !== 'undefined') {
    Footer.init();
  }
  
  // Initialize modules
  RecipeFilter.init();
  NewsletterForm.init();
  SmoothScroll.init();
  LazyLoadImages.init();
  
  // Add loaded class to body for CSS transitions
  document.body.classList.add('is-loaded');
});

// Service Worker Registration (for PWA support in future)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment when service-worker.js is created
    // navigator.serviceWorker.register('/service-worker.js');
  });
}
