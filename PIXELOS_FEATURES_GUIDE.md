# PixelOS Theme Features Guide

## Overview
This guide documents the new PixelOS-inspired features added to the AiCoN Blog Theme.

## 🎨 PixelOS Color Theme

### Light Mode Colors
- **Background**: `#faf6e3` (warm sand-cream)
- **Surface/Panel**: `#fffdf6` (warm off-white)
- **Accent**: `#c4ae5f` (warm sandy-mustard)
- **Secondary Accent**: `#98d9c2` (soft minty sage-green)
- **Warning/Highlight**: `#f3df95` (warm sandy-yellow)

### Dark Mode
- The dark theme uses muted dark colors
- Organic blob shapes in the footer automatically reduce opacity to 0.15 for a clean look

## 🎨 Organic Blob Corner Backgrounds

The footer now features beautiful organic vector-like blob shapes in the bottom corners:

### Bottom-Left Blob
- **Color**: `#c4ae5f` (warm sandy-mustard)
- **Shape**: Organic radial gradient with elliptical border-radius
- **Opacity**: 0.25 (reduces to 0.15 in dark mode)

### Bottom-Right Blob
- **Color**: `#98d9c2` (soft minty sage-green)
- **Shape**: Organic radial gradient with elliptical border-radius
- **Opacity**: 0.25 (reduces to 0.15 in dark mode)

### Implementation
The blobs are created using CSS with:
- `radial-gradient` for the organic shape effect
- Unique `border-radius` values to create irregular, organic shapes
- Smooth transitions for theme switching

## 💰 Support Us Section & Pill Donation Buttons

### Support Us Section
Located after the newsletter section on the homepage, featuring:
- Bold "Support Us" header with Pixel typography
- Descriptive text encouraging donations
- Fully responsive pill-shaped donation buttons

### Pill Donation Buttons

#### PayPal Button
```html
<a class='pill-btn pill-btn--paypal' href='YOUR_PAYPAL_LINK' title='Donate via PayPal'>
  <svg><!-- PayPal SVG Icon --></svg>
  <span>PayPal</span>
</a>
```
- **Background**: `#f3df95` (warm sandy-yellow)
- **Text Color**: `#2c2c2c` (dark gray)
- **Effect**: Fully rounded pill shape with hover animations

#### UPI Button
```html
<a class='pill-btn pill-btn--upi' href='YOUR_UPI_LINK' title='Donate via UPI'>
  <svg><!-- UPI SVG Icon --></svg>
  <span>UPI</span>
</a>
```
- **Background**: `#f3df95` (warm sandy-yellow)
- **Text Color**: `#2c2c2c` (dark gray)
- **Effect**: Fully rounded pill shape with hover animations

### Customization
To update the donation links:
1. Open `blogger/theme.xml`
2. Find the "Support Us Section" (around line 2435)
3. Replace `href='#'` with your actual PayPal and UPI links

## 📦 Premium Native Accordions (Collapsible Panels)

### How to Use
You can now create beautiful, expanding accordion blocks inside your blog posts using standard HTML `<details>` and `<summary>` tags!

### Basic Usage

```html
<details>
  <summary>Platform Changelog</summary>
  <p>Put your platform changelog or device instructions details here. It will expand beautifully!</p>
</details>

<details>
  <summary>Instructions</summary>
  <p>Provide your installation guides and other details in this collapsible panel.</p>
</details>
```

### Features
- ✅ **No JavaScript required!** Pure HTML/CSS solution
- ✅ **Chevron rotate animation** - Smooth 45° to -135° rotation
- ✅ **Clean padding and borders** - PixelOS-inspired design
- ✅ **Hover effects** - Accent color highlights
- ✅ **Smooth slide animation** - Content fades and slides in
- ✅ **Accessible** - Keyboard navigation and focus states
- ✅ **Responsive** - Works on all screen sizes

### Styling Details

#### Closed State
- Background: `var(--color-surface)`
- Border: `1px solid var(--color-border)`
- Border Radius: `var(--radius-lg)` (16px)

#### Open State
- Background: `var(--color-surface-secondary)`
- Border Color: `var(--color-accent)`
- Box Shadow: `var(--shadow-lg)`

#### Summary (Header)
- Font Weight: 600 (semi-bold)
- Font Size: `var(--text-h3)` (1.25rem to 1.5rem)
- Padding: `var(--space-lg)` (24px)
- Chevron: Custom CSS arrow with rotate animation

#### Content
- Padding: 0 24px 24px
- Line Height: `var(--leading-relaxed)` (1.8)
- Animation: `accordionSlide` (0.3s ease-out)

### Advanced Usage

#### Multiple Paragraphs
```html
<details>
  <summary>Installation Guide</summary>
  <p><strong>Step 1:</strong> Download the firmware file from the link below.</p>
  <p><strong>Step 2:</strong> Boot into recovery mode by holding Volume Down + Power.</p>
  <p><strong>Step 3:</strong> Flash the ZIP file using TWRP or custom recovery.</p>
  <p><strong>Step 4:</strong> Reboot and enjoy!</p>
</details>
```

#### With Lists
```html
<details>
  <summary>Changelog - Version 2.0</summary>
  <ul>
    <li>Added new PixelOS features</li>
    <li>Improved battery life by 20%</li>
    <li>Fixed camera focus issue</li>
    <li>Updated security patches</li>
  </ul>
</details>
```

#### Nested Content
```html
<details>
  <summary>Frequently Asked Questions</summary>
  <p><strong>Q: Is this compatible with my device?</strong></p>
  <p>A: Yes, if you have the supported device listed below.</p>
  
  <p><strong>Q: Will I lose my data?</strong></p>
  <p>A: It's recommended to take a backup before proceeding.</p>
</details>
```

## 📝 Blog Post Example

Here's a complete example of how to use accordions in a blog post:

```html
<h2>Download & Installation</h2>

<p>Follow the guide below to install PixelOS on your device.</p>

<details>
  <summary>Prerequisites</summary>
  <ul>
    <li>Unlock bootloader</li>
    <li>Custom recovery (TWRP recommended)</li>
    <li>Backup your data</li>
  </ul>
</details>

<details>
  <summary>Download Links</summary>
  <p><strong>PixelOS Official Build:</strong> <a href="#">Download here</a></p>
  <p><strong>MD5 Checksum:</strong> abc123def456...</p>
</details>

<details>
  <summary>Installation Steps</summary>
  <ol>
    <li>Boot into TWRP recovery</li>
    <li>Wipe data, cache, and system</li>
    <li>Flash the PixelOS ZIP file</li>
    <li>Flash GApps (optional)</li>
    <li>Reboot to system</li>
  </ol>
</details>

<details>
  <summary>Platform Changelog</summary>
  <p><strong>Version 3.0 (2024-01-15):</strong></p>
  <ul>
    <li>January security patch</li>
    <li>Improved UI smoothness</li>
    <li>Added new wallpapers</li>
  </ul>
</details>
```

## 🎯 Tips & Best Practices

### For Accordions
1. **Keep summaries concise** - One line is ideal
2. **Use clear, descriptive titles** - Users should know what's inside
3. **Don't nest accordions** - Avoid putting `<details>` inside `<details>`
4. **Use for long content** - Perfect for changelogs, instructions, FAQs
5. **Test on mobile** - Always preview your post on mobile devices

### For Donation Buttons
1. **Update links** - Replace `#` with your actual PayPal.me or UPI ID
2. **Test links** - Make sure they work before publishing
3. **Add UPI QR code** - Consider adding a QR code image link

### For Colors
1. **Stick to the palette** - Use the defined CSS variables
2. **Test dark mode** - Always check both themes
3. **Maintain contrast** - Ensure text is readable

## 🐛 Troubleshooting

### Accordion not working?
- Make sure you're using proper `<details>` and `<summary>` tags
- The `<summary>` must be the first child of `<details>`
- Check for typos in the HTML

### Colors look wrong?
- Clear your browser cache
- Make sure the CSS file is properly linked
- Check if you're in dark mode (toggle the theme)

### Footer blobs not showing?
- Check if the CSS for `.footer__blob` is loaded
- Make sure the HTML has the blob divs
- Inspect element to see if they're positioned correctly

## 📚 Files Modified

1. **`aicon-blog-theme/assets/css/main.css`**
   - Added PixelOS color theme
   - Added footer blob styles
   - Added Support Us section styles
   - Added pill button styles
   - Added accordion/details/summary styles

2. **`aicon-blog-theme/blogger/theme.xml`**
   - Updated CSS section with all new styles
   - Added footer blob HTML
   - Added Support Us section HTML
   - Updated color variables

## 🚀 Next Steps

1. **Test the theme** - Apply it to your Blogger blog
2. **Customize links** - Update PayPal and UPI donation links
3. **Create a test post** - Try the accordion feature
4. **Check mobile view** - Test responsive design
5. **Toggle dark mode** - Verify the theme switching works

## 💡 Inspiration

These features were inspired by:
- **PixelOS** - For the warm, cozy color palette
- **Google's Material Design 3** - For the design system
- **Modern editorial websites** - For the premium feel

Enjoy your new PixelOS-inspired blog theme! 🎉
