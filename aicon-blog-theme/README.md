# AiCoN Blog Theme

A premium, modern Blogger theme inspired by PixelOS, Material Design 3, and Linear.app. Built with clean code, smooth animations, and an exceptional user experience.

![Theme Preview](https://via.placeholder.com/1200x630/0066ff/ffffff?text=AiCoN+Blog+Theme)

## ✨ Features

### Design
- 🎨 **Material Design 3 Inspired** - Soft rounded corners, modern shadows, and premium aesthetics
- 🌙 **Dark Mode** - Automatic theme switching with system preference detection
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- ⚡ **Smooth Animations** - Staggered reveals, hover effects, and microinteractions
- 🎯 **PixelOS Inspired UI** - Clean, minimal, and premium feel

### Functionality
- 🔍 **Live Search** - Quick post search with overlay interface
- 📰 **Featured Posts** - Highlight your best content
- 🏷️ **Categories** - Organized post categorization with labels
- 📧 **Newsletter** - Built-in newsletter subscription section
- 💬 **Comments** - Full Blogger comment system support
- ⬆️ **Back to Top** - Smooth scroll back to navigation

### Performance
- 🚀 **95+ Lighthouse Score** - Optimized for performance
- 📦 **Lazy Loading** - Images load on demand
- 🎯 **CLS < 0.05** - No layout shifts
- ⚡ **LCP < 2s** - Fast Largest Contentful Paint
- 📱 **Touch Optimized** - Works great on mobile devices

### Accessibility
- ♿ **WCAG Compliant** - Follows accessibility best practices
- 🔤 **Semantic HTML** - Proper use of HTML5 elements
- ⌨️ **Keyboard Navigation** - Full keyboard support
- 👁️ **Reduced Motion** - Respects user preferences

## 📦 Installation

### Quick Start

1. **Backup Your Current Theme**
   - Go to Blogger Dashboard → Theme → Backup/Restore
   - Download your current theme XML

2. **Upload the Theme**
   - Go to Blogger Dashboard → Theme → Customize → Edit HTML
   - Select all (Ctrl+A) and delete existing code
   - Copy the contents of `blogger/theme.xml`
   - Paste and Save

3. **Configure Widgets**
   - Add required widgets to their sections:
     - **Header Navigation**: Add a Page List widget
     - **Sidebar**: Add Profile, Labels, and other widgets

### Manual Installation

1. Download `theme.xml` from the `blogger/` folder
2. Go to Blogger Dashboard → Theme
3. Click the arrow next to "Customize" → Edit HTML
4. Click "Restore" and upload the theme file

## 🎨 Customization

### Colors

Edit the CSS variables in the `<b:skin>` section:

```css
:root {
  /* Primary Accent */
  --color-accent: #0066ff;
  --color-accent-hover: #0052cc;
  --color-accent-light: rgba(0, 102, 255, 0.1);
  
  /* Background */
  --color-background: #fafbfc;
  --color-surface: #ffffff;
  
  /* Text */
  --color-text-primary: #1a1d21;
  --color-text-secondary: #5e6368;
}

/* Dark Theme */
[data-theme="dark"] {
  --color-accent: #4d9fff;
  --color-background: #0a0a0f;
  --color-surface: #141419;
}
```

### Typography

Change fonts by updating the Google Fonts link and CSS variables:

```css
--font-family: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Layout

Adjust spacing and container widths:

```css
:root {
  --container-max: 1280px;
  --content-max: 720px;
  --nav-height: 72px;
  --space-section: 120px;
}
```

### Logo

Replace the icon text "A" with your logo image or SVG:

```html
<div class="navbar__logo-icon">
  <img src="YOUR_LOGO_URL" alt="Logo" />
</div>
```

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 480px | Single column, stacked |
| Tablet | 481-768px | Single column |
| Desktop | 769-1024px | Two column grid |
| Large | 1025px+ | Full layout |

## 🛠️ Widget Configuration

### Header Navigation (PageList)

Add links to your main pages:
- Home
- About
- Contact
- Privacy Policy

### Sidebar Widgets

Recommended widgets for the sidebar:
- **Profile Widget** - About section with avatar
- **Labels Widget** - Categories display
- **Archive Widget** - Post archives
- **Text Widget** - Custom content

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+
- ✅ iOS Safari 14+
- ✅ Chrome for Android 90+

## 📂 Project Structure

```
aicon-blog-theme/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── .gitignore
├── package.json
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── fonts/
├── components/
│   └── (modular components)
├── layouts/
│   └── (template layouts)
├── blogger/
│   └── theme.xml
└── docs/
    ├── INSTALLATION.md
    ├── CUSTOMIZATION.md
    └── DEPLOYMENT.md
```

## 🔄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📧 Support

For support, please open an issue on GitHub or contact the theme developer.

## 🙏 Acknowledgments

- Design inspired by [PixelOS](https://pixelos.net)
- Icons from [Heroicons](https://heroicons.com)
- Typography by [Google Fonts](https://fonts.google.com)
- Built with ❤️ for the Blogger community

---

Made with ❤️ by zahooka
