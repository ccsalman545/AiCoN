/**
 * AiCoN Blog Theme - Main JavaScript
 * Premium Modern UI inspired by PixelOS, Material Design 3, and Linear.app
 * Version: 1.0.0
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

const utils = {
  /**
   * Debounce function
   */
  debounce(fn, delay = 100) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  /**
   * Throttle function
   */
  throttle(fn, limit = 100) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Check if element is in viewport
   */
  isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
      rect.bottom >= 0
    );
  },

  /**
   * Create ripple effect
   */
  createRipple(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = document.createElement('span');
    ripple.className = 'btn__ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    element.appendChild(ripple);
    
    ripple.addEventListener('animationend', () => ripple.remove());
  }
};

// ============================================
// THEME MANAGEMENT
// ============================================

const ThemeManager = {
  storageKey: 'aicon-theme',
  
  init() {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
    } else {
      this.setTheme(prefersDark);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.storageKey)) {
        this.setTheme(e.matches);
      }
    });
    
    // Bind toggle button
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }
  },
  
  setTheme(isDark) {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  },
  
  toggle() {
    const currentTheme = document.body.getAttribute('data-theme');
    this.setTheme(currentTheme !== 'dark');
  }
};

// ============================================
// NAVIGATION
// ============================================

const Navigation = {
  navbar: null,
  menuOverlay: null,
  menuToggle: null,
  isMenuOpen: false,
  
  init() {
    this.navbar = document.querySelector('.navbar');
    this.menuOverlay = document.querySelector('.menu-overlay');
    this.menuToggle = document.querySelector('.menu-toggle');
    
    if (!this.navbar) return;
    
    // Scroll behavior
    this.handleScroll = utils.throttle(() => this.onScroll(), 10);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
    // Menu toggle
    if (this.menuToggle && this.menuOverlay) {
      this.menuToggle.addEventListener('click', () => this.toggleMenu());
      
      // Close menu on link click
      const menuLinks = this.menuOverlay.querySelectorAll('.menu-overlay__link');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });
      
      // Close on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isMenuOpen) {
          this.closeMenu();
        }
      });
    }
    
    // Active link highlighting
    this.highlightActiveLink();
    
    // Close menu on resize
    window.addEventListener('resize', utils.debounce(() => {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.closeMenu();
      }
    }, 100));
  },
  
  onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Navbar shadow on scroll
    if (scrollY > 50) {
      this.navbar.classList.add('scrolled');
    } else {
      this.navbar.classList.remove('scrolled');
    }
  },
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggle.classList.toggle('active', this.isMenuOpen);
    this.menuOverlay.classList.toggle('active', this.isMenuOpen);
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    this.menuToggle.setAttribute('aria-expanded', this.isMenuOpen);
  },
  
  closeMenu() {
    this.isMenuOpen = false;
    this.menuToggle?.classList.remove('active');
    this.menuOverlay?.classList.remove('active');
    document.body.style.overflow = '';
    this.menuToggle?.setAttribute('aria-expanded', 'false');
  },
  
  highlightActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar__link, .menu-overlay__link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '/' || href === currentPath || currentPath.startsWith(href)) {
        link.classList.add('active');
      }
    });
  }
};

// ============================================
// SCROLL ANIMATIONS
// ============================================

const ScrollAnimations = {
  observer: null,
  
  init() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.revealAll();
      return;
    }
    
    // Create intersection observer
    const options = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optionally unobserve after reveal
          // this.observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');
    revealElements.forEach(el => this.observer.observe(el));
  },
  
  revealAll() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');
    revealElements.forEach(el => el.classList.add('revealed'));
  }
};

// ============================================
// SCROLL PROGRESS
// ============================================

const ScrollProgress = {
  bar: null,
  
  init() {
    this.bar = document.querySelector('.scroll-progress');
    if (!this.bar) return;
    
    window.addEventListener('scroll', utils.throttle(() => this.update(), 10), { passive: true });
  },
  
  update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    
    this.bar.style.transform = `scaleX(${progress})`;
  }
};

// ============================================
// BACK TO TOP
// ============================================

const BackToTop = {
  button: null,
  
  init() {
    this.button = document.querySelector('.back-to-top');
    if (!this.button) return;
    
    // Click handler
    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Keyboard handler
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    
    // Show/hide on scroll
    window.addEventListener('scroll', utils.throttle(() => this.toggle(), 100), { passive: true });
  },
  
  toggle() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    if (scrollY > 500) {
      this.button.classList.add('visible');
    } else {
      this.button.classList.remove('visible');
    }
  }
};

// ============================================
// SEARCH OVERLAY
// ============================================

const SearchOverlay = {
  overlay: null,
  input: null,
  closeBtn: null,
  isOpen: false,
  
  init() {
    this.overlay = document.querySelector('.search-overlay');
    this.input = document.querySelector('.search-overlay__input');
    this.closeBtn = document.querySelector('.search-overlay__close');
    
    if (!this.overlay) return;
    
    // Search toggle button
    const searchBtns = document.querySelectorAll('[data-search-toggle]');
    searchBtns.forEach(btn => {
      btn.addEventListener('click', () => this.open());
    });
    
    // Close button
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    
    // Click outside to close
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });
    
    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
      
      // Cmd/Ctrl + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        this.isOpen ? this.close() : this.open();
      }
    });
    
    // Live search
    if (this.input) {
      this.input.addEventListener('input', utils.debounce((e) => this.search(e.target.value), 300));
    }
  },
  
  open() {
    this.isOpen = true;
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      this.input?.focus();
    }, 100);
  },
  
  close() {
    this.isOpen = false;
    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    if (this.input) {
      this.input.value = '';
    }
  },
  
  search(query) {
    // Implement live search functionality here
    // This would typically filter posts or make an API call
    console.log('Searching for:', query);
  }
};

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

const ButtonRipple = {
  init() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (btn.querySelector('.btn__ripple')) return;
        utils.createRipple(e, btn);
      });
    });
  }
};

// ============================================
// HERO ANIMATIONS
// ============================================

const HeroAnimations = {
  init() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Parallax effect on mouse move
    hero.addEventListener('mousemove', utils.throttle((e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;
      
      const heroInner = hero.querySelector('.hero__inner');
      if (heroInner) {
        heroInner.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
      }
    }, 16));
    
    // Reset on mouse leave
    hero.addEventListener('mouseleave', () => {
      const heroInner = hero.querySelector('.hero__inner');
      if (heroInner) {
        heroInner.style.transform = 'translate(0, 0)';
      }
    });
  }
};

// ============================================
// LAZY LOADING IMAGES
// ============================================

const LazyLoad = {
  observer: null,
  
  init() {
    if (!('IntersectionObserver' in window)) {
      this.loadAll();
      return;
    }
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => this.observer.observe(img));
  },
  
  loadImage(img) {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
  },
  
  loadAll() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => this.loadImage(img));
  }
};

// ============================================
// DATE/TIME DISPLAY
// ============================================

const DateTimeDisplay = {
  init() {
    const dateEl = document.getElementById('current-date');
    if (!dateEl) return;
    
    const updateDate = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      dateEl.textContent = now.toLocaleDateString('en-US', options);
    };
    
    updateDate();
  }
};

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

const SmoothScroll = {
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
};

// ============================================
// CARD HOVER EFFECTS
// ============================================

const CardEffects = {
  init() {
    const cards = document.querySelectorAll('.card, .featured-card, .category-card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.setProperty('--card-scale', '1.02');
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--card-scale', '1');
      });
    });
  }
};

// ============================================
// MOBILE TOUCH OPTIMIZATIONS
// ============================================

const MobileOptimizations = {
  init() {
    // Disable hover effects on touch devices
    if ('ontouchstart' in window) {
      document.body.classList.add('touch-device');
      
      // Remove hover states on touch
      const removeHoverOnTouch = () => {
        document.body.classList.add('touch-active');
        setTimeout(() => {
          document.body.classList.remove('touch-active');
        }, 500);
      };
      
      document.addEventListener('touchstart', removeHoverOnTouch, { passive: true });
    }
    
    // Fix iOS viewport height issues
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', utils.debounce(setVH, 100));
  }
};

// ============================================
// PRELOAD CRITICAL RESOURCES
// ============================================

const Preloader = {
  init() {
    // Preload critical fonts
    const fonts = [
      'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
    ];
    
    fonts.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => link.rel = 'stylesheet';
      document.head.appendChild(link);
    });
  }
};

// ============================================
// INITIALIZE ALL MODULES
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize modules in order
  Preloader.init();
  ThemeManager.init();
  Navigation.init();
  ScrollAnimations.init();
  ScrollProgress.init();
  BackToTop.init();
  SearchOverlay.init();
  ButtonRipple.init();
  HeroAnimations.init();
  LazyLoad.init();
  DateTimeDisplay.init();
  SmoothScroll.init();
  CardEffects.init();
  MobileOptimizations.init();
  
  // Add loaded class to body after all scripts initialize
  document.body.classList.add('loaded');
});

// Export for Blogger integration
if (typeof window !== 'undefined') {
  window.AiCoNTheme = {
    ThemeManager,
    Navigation,
    ScrollAnimations,
    ScrollProgress,
    BackToTop,
    SearchOverlay,
    utils
  };
}
