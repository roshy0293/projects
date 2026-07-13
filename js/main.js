/**
 * ═══════════════════════════════════════════════════
 * ALACENA MÁGICA - JavaScript Principal
 * ═══════════════════════════════════════════════════
 * Funcionalidades:
 * - Menú móvil hamburguesa
 * - Scroll suave a secciones
 * - Animaciones on-scroll (Intersection Observer)
 * - Header con efecto scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // ═══════════════════════════════════════════════════
  // MENÚ MÓVIL
  // ═══════════════════════════════════════════════════
  
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Accesibilidad: actualizar aria-expanded
      const isExpanded = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // ═══════════════════════════════════════════════════
  // HEADER CON EFECTO SCROLL
  // ═══════════════════════════════════════════════════
  
  const header = document.querySelector('.header');
  
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Verificar estado inicial
  }
  
  // ═══════════════════════════════════════════════════
  // ANIMACIONES ON-SCROLL (INTERSECTION OBSERVER)
  // ═══════════════════════════════════════════════════
  
  const fadeElements = document.querySelectorAll('.fade-in');
  
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Dejar de observar una vez animado
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    
    fadeElements.forEach(el => fadeObserver.observe(el));
  } else {
    // Fallback para navegadores sin Intersection Observer
    fadeElements.forEach(el => el.classList.add('visible'));
  }
  
  // ═══════════════════════════════════════════════════
  // SCROLL SUAVE A SECCIONES (para enlaces internos)
  // ═══════════════════════════════════════════════════
  
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Ignorar enlaces "#" vacíos
      if (href === '#') return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calcular offset considerando el header fijo
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ═══════════════════════════════════════════════════
  // INTERACTIVIDAD DE FILTROS (DEMO)
  // ═══════════════════════════════════════════════════
  
  // Filtros de dieta en mockup
  const filterChips = document.querySelectorAll('.filter-chip');
  
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      // Remover clase active de todos los chips
      filterChips.forEach(c => c.classList.remove('active'));
      // Añadir clase active al chip clickeado
      chip.classList.add('active');
    });
  });
  
  // Chips de ingredientes en mockup
  const ingredientChips = document.querySelectorAll('.chip:not(.chip-add)');
  
  ingredientChips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });
  
  // Items de categoría en generador de recetas
  const categoryItems = document.querySelectorAll('.category-item');
  
  categoryItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('selected');
    });
  });
  
  // ═══════════════════════════════════════════════════
  // FORMULARIO DE DESUSCRIPCIÓN (si existe)
  // ═══════════════════════════════════════════════════
  
  const unsubscribeForm = document.getElementById('unsubscribe-form');
  
  if (unsubscribeForm) {
    unsubscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = document.getElementById('email');
      const email = emailInput ? emailInput.value : '';
      
      if (email) {
        // Simular envío exitoso
        const formContainer = unsubscribeForm.closest('.form-container');
        if (formContainer) {
          formContainer.innerHTML = `
            <div class="success-message">
              <div class="success-icon">✅</div>
              <h1>¡Desuscripción completada!</h1>
              <p>Hemos eliminado <strong>${email}</strong> de nuestra lista de correo.</p>
              <p>Lamentamos verte partir. ¡Esperamos que vuelvas a crear magia con nosotros pronto!</p>
              <a href="index.html" class="back-link">← Volver al inicio</a>
            </div>
          `;
        }
      }
    });
  }
  
  // ═══════════════════════════════════════════════════
  // FORMULARIO DE CONTACTO / NEWSLETTER (si existe)
  // ═══════════════════════════════════════════════════
  
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : '';
      
      if (email) {
        // Redirigir a página de gracias
        window.location.href = 'gracias.html';
      }
    });
  }
  
  // ═══════════════════════════════════════════════════
  // ACCESIBILIDAD: NAVEGACIÓN POR TECLADO
  // ═══════════════════════════════════════════════════
  
  // Mejorar foco visible para navegación por teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-navigation');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
  });
  
  // ═══════════════════════════════════════════════════
  // LAZY LOADING PARA IMÁGENES (si se añaden)
  // ═══════════════════════════════════════════════════
  
  if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta loading="lazy" nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  } else {
    // Fallback para navegadores sin soporte nativo
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }
  
  // ═══════════════════════════════════════════════════
  // LOG DE INICIALIZACIÓN
  // ═══════════════════════════════════════════════════
  
  console.log('✨ Alacena Mágica - Sitio web inicializado correctamente');
  console.log('🪄 Creando magia culinaria...');
});

/**
 * ═══════════════════════════════════════════════════
 * UTILIDADES GLOBALES
 * ═══════════════════════════════════════════════════
 */

// Debounce para eventos de scroll/resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle para limitar frecuencia de ejecución
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Detectar si un elemento está en viewport
function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
