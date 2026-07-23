# Customization Guide

Learn how to customize the AiCoN Blog Theme to match your brand.

## Color Customization

### Primary Colors

Edit the CSS variables in the `<b:skin>` section:

```css
:root {
  /* Light Theme */
  --color-accent: #0066ff;           /* Primary accent color */
  --color-accent-hover: #0052cc;     /* Hover state */
  --color-accent-light: rgba(0, 102, 255, 0.1); /* Light variant */
  --color-accent-gradient: linear-gradient(135deg, #0066ff 0%, #00d4ff 100%);
}
```

### Background Colors

```css
:root {
  --color-background: #fafbfc;       /* Page background */
  --color-surface: #ffffff;          /* Card backgrounds */
  --color-surface-secondary: #f4f5f7; /* Secondary surfaces */
  --color-surface-tertiary: #ebecf0;  /* Tertiary surfaces */
}
```

### Text Colors

```css
:root {
  --color-text-primary: #1a1d21;    /* Main text */
  --color-text-secondary: #5e6368;  /* Secondary text */
  --color-text-tertiary: #80868b;  /* Tertiary/muted text */
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --color-accent: #4d9fff;
  --color-background: #0a0a0f;
  --color-surface: #141419;
  --color-surface-secondary: #1c1c24;
  --color-text-primary: #ffffff;
  --color-text-secondary: #a0a0b0;
}
```

## Typography

### Font Family

Change the main font by updating the Google Fonts import and CSS variable:

```css
/* In <head> section */
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

/* In CSS */
:root {
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Font Sizes

```css
:root {
  --text-hero: clamp(3rem, 8vw, 5rem);
  --text-h1: clamp(2rem, 5vw, 3rem);
  --text-h2: clamp(1.5rem, 3vw, 2rem);
  --text-h3: clamp(1.25rem, 2vw, 1.5rem);
  --text-body: 1rem;
  --text-small: 0.875rem;
  --text-caption: 0.75rem;
}
```

## Layout

### Container Width

```css
:root {
  --container-max: 1280px;    /* Main container */
  --content-max: 720px;      /* Post content width */
  --sidebar-width: 320px;    /* Sidebar width */
  --nav-height: 72px;        /* Navigation height */
}
```

### Spacing

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-section: 120px;
}
```

## Border Radius

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;     /* Pill/circle shape */
}
```

## Shadows

```css
:root {
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.08);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 40px rgba(0, 102, 255, 0.15);
}
```

## Logo Customization

### Text Logo

Find and modify the logo section:

```html
<div class="navbar__logo-icon">A</div>
<span>Your Site Name</span>
```

### Image Logo

Replace with an image:

```html
<a class="navbar__logo" expr:href='data:blog.homepageUrl'>
  <img src="YOUR_LOGO_URL" alt="Logo" class="navbar__logo-icon" style="width: 40px; height: 40px; border-radius: 8px;" />
  <span>Your Site Name</span>
</a>
```

### SVG Logo

```html
<a class="navbar__logo" expr:href='data:blog.homepageUrl'>
  <div class="navbar__logo-icon">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <!-- Your SVG path here -->
    </svg>
  </div>
  <span>Your Site Name</span>
</a>
```

## Navigation Links

Edit the Page List widget content:

```html
<b:loop values='data:links' var='link'>
  <a class='navbar__link' expr:href='data:link.href'>
    <data:link.title/>
  </a>
</b:loop>
```

## Footer Customization

### Update Copyright Year

The year updates automatically via JavaScript, but you can also set a static year:

```html
<span id="current-year">2024</span>
```

### Edit Footer Links

Find and modify the footer sections:

```html
<div>
  <h4 class="footer__heading">Your Section</h4>
  <div class="footer__links">
    <a class="footer__link" href="/your-page-url">Your Link</a>
  </div>
</div>
```

## Social Media Links

Update social media URLs:

```html
<div class="footer__social">
  <a aria-label="Twitter" class="footer__social-link" href="YOUR_TWITTER_URL">
    <!-- Twitter icon -->
  </a>
  <a aria-label="GitHub" class="footer__social-link" href="YOUR_GITHUB_URL">
    <!-- GitHub icon -->
  </a>
  <a aria-label="LinkedIn" class="footer__social-link" href="YOUR_LINKEDIN_URL">
    <!-- LinkedIn icon -->
  </a>
</div>
```

## Animations

### Disable Animations

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Customize Animation Speed

```css
:root {
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
}
```

## Adding Custom CSS

Add your custom styles before the closing `</b:skin>` tag:

```css
/* Your custom styles here */
.custom-class {
  /* Your styles */
}
```

## Advanced: Custom Color Schemes

### Purple Theme

```css
:root {
  --color-accent: #7c3aed;
  --color-accent-hover: #6d28d9;
  --color-accent-light: rgba(124, 58, 237, 0.1);
  --color-accent-gradient: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
}
```

### Green Theme

```css
:root {
  --color-accent: #059669;
  --color-accent-hover: #047857;
  --color-accent-light: rgba(5, 150, 105, 0.1);
  --color-accent-gradient: linear-gradient(135deg, #059669 0%, #10b981 100%);
}
```

### Orange Theme

```css
:root {
  --color-accent: #ea580c;
  --color-accent-hover: #c2410c;
  --color-accent-light: rgba(234, 88, 12, 0.1);
  --color-accent-gradient: linear-gradient(135deg, #ea580c 0%, #f59e0b 100%);
}
```

## Further Customization

For more advanced customizations, consider:
- [Installation Guide](INSTALLATION.md) - Basic setup
- [Deployment Guide](DEPLOYMENT.md) - Deployment tips
- [GitHub Issues](https://github.com/ccsalman545/AiCoN/issues) - Get help
