# Installation Guide

Complete guide to installing the AiCoN Blog Theme on your Blogger site.

## Prerequisites

- A Blogger/Blogspot account
- Basic understanding of Blogger dashboard
- Access to your blog's theme settings

## Step 1: Backup Your Current Theme

Before installing any new theme, always backup your current one:

1. Log in to [Blogger](https://www.blogger.com)
2. Select your blog from the dashboard
3. Click **Theme** in the left sidebar
4. Click the arrow next to **Customize**
5. Select **Edit HTML**
6. Click **Backup/Restore** (the button with a download icon)
7. Click **Download** to save your current theme

## Step 2: Upload the New Theme

### Option A: Direct Upload

1. Download `theme.xml` from the `blogger/` folder
2. In the Edit HTML page, click **Backup/Restore**
3. Click **Upload** and select the `theme.xml` file
4. Confirm the upload
5. Click **Save**

### Option B: Manual Copy

1. Open `blogger/theme.xml` in a text editor
2. Select all text (Ctrl+A or Cmd+A)
3. Copy to clipboard (Ctrl+C or Cmd+C)
4. In Blogger's Edit HTML page, delete all existing code
5. Paste the new code (Ctrl+V or Cmd+V)
6. Click the save icon

## Step 3: Configure Widgets

After installing the theme, you need to add widgets to the designated sections.

### Header Navigation

1. Go to **Layout** in your Blogger dashboard
2. Find the **Header Nav** section
3. Click "Add a Gadget"
4. Select **Page List**
5. Add your main pages:
   - Home (your blog URL)
   - About
   - Contact
   - Privacy Policy

### Sidebar Widgets

Add widgets to the **Sidebar** section:

#### Profile Widget (About Me)
1. Click "Add a Gadget" in the Sidebar
2. Select **Profile**
3. Configure your profile information
4. Save

#### Labels Widget (Categories)
1. Click "Add a Gadget" in the Sidebar
2. Select **Labels**
3. Configure display settings:
   - Display: Cloud or List
   - Sort by: Alphabetical or By frequency
4. Save

## Step 4: Configure Blog Settings

### Basic Settings

1. Go to **Settings** → **Basic**
2. Set your blog title and description
3. Configure HTTPS redirect

### Posts and Comments

1. Go to **Settings** → **Posts, comments and social replies**
2. Configure:
   - Comment moderation
   - Who can comment
   - Show images in comments

### Search Preferences

1. Go to **Settings** → **Search preferences**
2. Enable **Search description**
3. Add a description for your blog

## Step 5: Add Posts

The theme displays posts automatically. To see the full effect:

1. Create a new post
2. Add a featured image (recommended size: 1200x630px)
3. Add labels/categories
4. Write your content
5. Publish

### Featured Image

The theme uses the first image in your post as the featured image. For best results:
- Use images at least 800px wide
- Maintain 16:10 or 16:9 aspect ratio
- Use high-quality images

## Troubleshooting

### Theme Not Displaying Correctly

1. Clear your browser cache
2. Check if JavaScript is enabled
3. Try a different browser
4. Disable browser extensions temporarily

### Widgets Not Showing

1. Go to **Layout**
2. Check if widgets are in the correct sections
3. Ensure widgets are enabled
4. Save layout changes

### Dark Mode Not Working

1. Check browser console for errors
2. Verify localStorage is enabled
3. Try clearing site data in browser settings

### Mobile Menu Not Opening

1. Ensure JavaScript is working
2. Check for JavaScript errors in console
3. Verify all JS is loading correctly

## Next Steps

- [Customization Guide](CUSTOMIZATION.md) - Customize colors, fonts, and more
- [Deployment Guide](DEPLOYMENT.md) - Deploy updates and maintain your theme

## Support

If you encounter issues:
1. Check the [README.md](../README.md)
2. Search existing [GitHub Issues](https://github.com/ccsalman545/AiCoN/issues)
3. Create a new issue if needed
