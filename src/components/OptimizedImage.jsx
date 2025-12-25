import React from 'react'

/**
 * OptimizedImage Component
 * 
 * Displays images with proper SEO attributes, responsive srcset, and lazy loading
 * 
 * @param {string} seoName - SEO-friendly image name (e.g., 'live-video-chat-interface-chamakz')
 * @param {string} alt - Alt text for the image
 * @param {string} className - Additional CSS classes
 * @param {string} sizes - Responsive sizes attribute (default: responsive)
 * @param {boolean} lazy - Enable lazy loading (default: true)
 * @param {number} width - Image width (for aspect ratio)
 * @param {number} height - Image height (for aspect ratio)
 */
const OptimizedImage = ({
  seoName,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  lazy = true,
  width,
  height,
  ...props
}) => {
  // Generate image URLs based on SEO name
  const basePath = '/images/optimized'
  
  // WebP sources
  const webpSrcset = [
    `${basePath}/${seoName}-thumb.webp 300w`,
    `${basePath}/${seoName}-md.webp 800w`,
    `${basePath}/${seoName}-lg.webp 1200w`
  ].join(', ')
  
  // JPG fallback sources
  const jpgSrcset = [
    `${basePath}/${seoName}-thumb.jpg 300w`,
    `${basePath}/${seoName}-md.jpg 800w`,
    `${basePath}/${seoName}-lg.jpg 1200w`
  ].join(', ')
  
  // Default src (medium size)
  const defaultSrc = `${basePath}/${seoName}-md.jpg`
  
  return (
    <picture>
      <source 
        type="image/webp" 
        srcSet={webpSrcset}
        sizes={sizes}
      />
      <img 
        src={defaultSrc}
        srcSet={jpgSrcset}
        sizes={sizes}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        width={width || 800}
        height={height || 800}
        className={`w-full h-auto ${className}`}
        {...props}
      />
    </picture>
  )
}

export default OptimizedImage






