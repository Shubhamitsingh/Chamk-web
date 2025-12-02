# Image Optimization Scripts

## Overview
Automated image optimization scripts for chamakz.app that handle SEO-friendly naming, compression, format conversion, and responsive image generation.

## Installation

First, install the required dependency:
```bash
npm install --save-dev sharp
```

## Usage

### 1. Optimize Images
Run the main optimization script:
```bash
npm run optimize-images
```

This will:
- Rename images to SEO-friendly names
- Generate descriptive alt text
- Compress images to <100KB (when possible)
- Convert to WebP format
- Generate multiple sizes (thumbnail, medium, large)
- Create optimization report

### 2. Generate React Components (Optional)
After optimization, generate React components:
```bash
npm run generate-image-components
```

## Output

### Optimized Images
All optimized images are saved to: `public/images/optimized/`

### Generated Files
- `optimization-report.json` - Detailed report of all optimizations
- `image-snippets.json` - HTML snippets with proper attributes
- React components in `src/components/images/` (if using component generator)

## Configuration

Edit `scripts/image-optimizer-config.json` to:
- Add custom image name mappings
- Configure compression settings
- Customize alt text templates

## Features

### SEO-Friendly Naming
- Auto-renames: `logo.png` → `chamakz-logo-app-icon.jpg`
- Format: `feature-description-chamakz.jpg`
- Includes keywords naturally

### Alt Text Generation
- Descriptive alt text for all images
- Includes relevant keywords
- Examples:
  - "People using Chamakz live video chat app for HD video calls"
  - "Group video rooms feature on Chamakz dating app"

### Image Compression
- Target: <100KB per image
- Quality: 85% (maintains visual quality)
- Formats: WebP (primary) + JPG (fallback)

### Responsive Images
- Multiple sizes: thumbnail (300px), medium (800px), large (1200px)
- Proper srcset attributes
- Lazy loading enabled

### Schema Markup
- ImageObject schema for each image
- Includes width, height, URL
- Ready for structured data

## Example Output

### HTML Snippet
```html
<picture>
  <source 
    type="image/webp" 
    srcset="/images/optimized/live-video-chat-md.webp 800w, /images/optimized/live-video-chat-lg.webp 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
  <img 
    src="/images/optimized/live-video-chat-md.jpg"
    srcset="/images/optimized/live-video-chat-md.jpg 800w, /images/optimized/live-video-chat-lg.jpg 1200w"
    alt="People using Chamakz live video chat app for HD video calls"
    loading="lazy"
    width="800"
    height="800"
  />
</picture>
```

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "name": "People using Chamakz live video chat app for HD video calls",
  "url": "/images/optimized/live-video-chat-lg.webp",
  "width": 1200,
  "height": 1200
}
```

## Notes

- Original images are preserved
- Optimized versions are saved separately
- Script is non-destructive
- Can be run multiple times safely




