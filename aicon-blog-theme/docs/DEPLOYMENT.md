# Deployment Guide

Best practices for deploying and maintaining the AiCoN Blog Theme.

## Overview

This guide covers:
- Making customizations safely
- Version control best practices
- Testing before deployment
- Updating the theme
- Backup strategies

## Development Setup

### Local Development

To test the theme locally:

1. Create a test blog on Blogger
2. Use a code editor (VS Code, Sublime Text)
3. Version control with Git

```bash
# Clone the repository
git clone https://github.com/ccsalman545/AiCoN.git
cd AiCoN/aicon-blog-theme

# Create a feature branch
git checkout -b feature/my-customization

# Make your changes
# Edit theme.xml or CSS files

# Validate XML syntax
npm run validate
```

### Test Blog

Create a separate test blog:

1. Create a new Blogger blog (e.g., "My Theme Test")
2. Set to private during development
3. Upload your customized theme
4. Test all features
5. Once satisfied, apply to production blog

## Making Customizations

### Safe Editing Workflow

1. **Always backup first**
   ```bash
   cp blogger/theme.xml blogger/theme.xml.backup
   ```

2. **Make changes incrementally**
   - Change one thing at a time
   - Test each change
   - Commit working changes

3. **Use version control**
   ```bash
   git add .
   git commit -m "Add custom gradient to buttons"
   ```

### CSS Customization

Add custom CSS in the designated area:

```css
/* In <b:skin> section, before closing ]]> */
:root {
  /* Your overrides here */
}

/* Example: Custom button color */
.btn--primary {
  background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
}
```

### JavaScript Customization

Add custom JavaScript before the closing `</body>`:

```javascript
// Your custom functionality
(function() {
  // Custom code here
})();
```

## Updating the Theme

### Checking for Updates

1. Watch the GitHub repository
2. Check releases periodically
3. Review changelog for breaking changes

### Merging Updates

```bash
# Add upstream remote
git remote add upstream https://github.com/ccsalman545/AiCoN.git

# Fetch updates
git fetch upstream

# Merge into your branch
git checkout main
git merge upstream/main

# Resolve conflicts if any
# Test thoroughly
```

### Applying Updates to Blogger

1. Download the updated `theme.xml`
2. Backup current production theme
3. Test on staging blog first
4. Apply to production

## Performance Optimization

### Image Optimization

Always optimize images before uploading:

| Type | Recommended Size | Format |
|------|------------------|--------|
| Featured Image | 1200x630px | WebP/JPEG |
| Post Images | Max 800px width | WebP/PNG |
| Thumbnails | 300x200px | JPEG |
| Author Avatar | 80x80px | PNG/JPEG |

### Enable Compression

The theme is already optimized, but you can:
- Use Blogger's built-in image compression
- Serve images from CDN if available
- Enable browser caching

## SEO Checklist

Before going live:

- [ ] Blog title and description set
- [ ] Meta description configured
- [ ] HTTPS enabled
- [ ] Custom 404 page (if possible)
- [ ] Sitemap submitted to Google Search Console
- [ ] Open Graph tags configured
- [ ] Twitter Card settings enabled
- [ ] Canonical URLs verified

## Monitoring

### Google Lighthouse

Target scores:
- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

### Core Web Vitals

Target metrics:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Tools to Use

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://webpagetest.org/)
- [Google Search Console](https://search.google.com/search-console)

## Troubleshooting

### Theme Broken After Edit

1. Restore from backup
2. Re-upload original theme
3. Make smaller, tested changes

### Styles Not Applying

1. Clear browser cache (Ctrl+Shift+R)
2. Check for syntax errors in CSS
3. Verify CSS specificity
4. Check for conflicting styles

### JavaScript Errors

1. Open browser DevTools (F12)
2. Go to Console tab
3. Check for error messages
4. Fix syntax errors

## Backup Strategy

### Before Major Changes

```bash
# Create timestamped backup
cp blogger/theme.xml "backup/theme-$(date +%Y%m%d).xml"
```

### Blogger Automatic Backup

Enable automatic backups:
1. Go to Theme settings
2. Enable "Save theme" notifications
3. Download periodic backups

### Cloud Backup

Consider backing up to:
- GitHub repository
- Google Drive
- Dropbox

## Security

### Best Practices

- Keep Blogger account secure with 2FA
- Regularly update recovery email/phone
- Monitor for unauthorized access
- Use strong passwords

### Content Security

- Enable HTTPS
- Review comment moderation settings
- Keep personal information private

## Support Resources

- [Blogger Help Center](https://support.google.com/blogger/)
- [GitHub Issues](https://github.com/ccsalman545/AiCoN/issues)
- [Stack Overflow - Blogger](https://stackoverflow.com/questions/tagged/blogger)

## Maintenance Schedule

| Task | Frequency |
|------|-----------|
| Theme backup | Weekly |
| Check for updates | Monthly |
| Test all features | After any change |
| Review analytics | Monthly |
| Update content | As needed |

---

For additional help, please open an issue on GitHub.
