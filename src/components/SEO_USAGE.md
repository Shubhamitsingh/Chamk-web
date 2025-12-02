# SEO Components Usage Guide

## SEOHead Component

Use the `SEOHead` component in any page to dynamically update meta tags, Open Graph tags, Twitter Cards, and structured data.

### Basic Usage

```jsx
import SEOHead from '../components/SEOHead'

const MyPage = () => {
  return (
    <>
      <SEOHead
        title="Page Title | Chamakz"
        description="Page description for SEO"
        image="/images/logo.png"
        keywords="keyword1, keyword2, keyword3"
      />
      {/* Your page content */}
    </>
  )
}
```

### Props

- `title` (string, required): Page title for meta tags
- `description` (string, required): Meta description
- `image` (string, optional): OG/Twitter image URL (defaults to logo)
- `keywords` (string, optional): Meta keywords
- `noindex` (boolean, optional): Set to true to prevent indexing
- `canonical` (string, optional): Custom canonical URL

### Features

- Automatically updates document title
- Sets all Open Graph tags
- Sets all Twitter Card tags
- Adds canonical URL
- Includes Organization schema markup
- Updates meta description and keywords

## Breadcrumbs Component

Use the `Breadcrumbs` component to add navigation breadcrumbs with Schema.org markup.

### Automatic Usage (Recommended)

```jsx
import Breadcrumbs from '../components/Breadcrumbs'

const MyPage = () => {
  return (
    <div>
      <Breadcrumbs />
      {/* Page content */}
    </div>
  )
}
```

The component automatically generates breadcrumbs from the current route.

### Manual Usage

```jsx
<Breadcrumbs 
  items={[
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Video Chat', path: '/features/video-chat' }
  ]} 
/>
```

### Features

- Automatic breadcrumb generation from route
- Schema.org BreadcrumbList markup
- Accessible navigation
- Styled with Tailwind CSS

## Header Component

The Header component includes:
- Logo with proper alt text
- Navigation menu with ARIA labels
- Mobile responsive menu
- Download CTA button
- Accessibility features

## Footer Component

The Footer component includes:
- Company information
- Quick links (Features, Download, Safety, etc.)
- Social media icons with aria-labels
- App store badges
- Legal links
- Copyright notice

## Global SEO Elements

### index.html includes:
- Charset UTF-8
- Viewport meta tag
- Theme color
- Apple touch icon
- Favicon links
- Preconnect for fonts
- Hreflang tags (for multi-language)

### manifest.json
- PWA manifest for mobile app installation
- Theme colors
- Icons

### Performance Optimizations
- Font display swap
- Image lazy loading
- CSS minification
- Preconnect to external domains




