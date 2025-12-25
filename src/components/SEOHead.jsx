import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEOHead = ({
  title = "Live Video Chat & Dating App | Chamakz - Meet New People",
  description = "Join Chamakz for live video chat, random calls, and dating. Meet new people worldwide with HD video quality. Download free now - Chat with strangers safely!",
  image = "https://chamakz.app/images/logopink.png",
  keywords = "live video chat, random video call, meet new people, dating app, video chat online, live streaming, chat with strangers",
  noindex = false,
  canonical = null
}) => {
  const location = useLocation()
  const baseUrl = "https://chamakz.app"
  const currentUrl = canonical || `${baseUrl}${location.pathname}`
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Primary Meta Tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow')
    updateMetaTag('author', 'Chamakz')
    updateMetaTag('theme-color', '#FF1B7C')

    // Open Graph Tags
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:url', currentUrl, true)
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', fullImageUrl, true)
    updateMetaTag('og:site_name', 'Chamakz', true)
    updateMetaTag('og:locale', 'en_US', true)

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:url', currentUrl)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', fullImageUrl)
    updateMetaTag('twitter:site', '@chamakz')

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', currentUrl)

    // Add Organization Schema (Global)
    const orgSchemaId = 'global-org-schema'
    let orgSchema = document.getElementById(orgSchemaId)
    if (!orgSchema) {
      orgSchema = document.createElement('script')
      orgSchema.type = 'application/ld+json'
      orgSchema.id = orgSchemaId
      document.head.appendChild(orgSchema)
    }
    orgSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Chamakz",
      "url": "https://chamakz.app",
      "logo": "https://chamakz.app/images/logopink.png",
      "sameAs": [
        "https://facebook.com/chamakz",
        "https://twitter.com/chamakz",
        "https://instagram.com/chamakz"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": "info@chamakz.app",
        "availableLanguage": ["English", "Hindi", "Tamil", "Telugu"]
      }
    })

  }, [title, description, image, keywords, noindex, currentUrl, fullImageUrl])

  return null
}

export default SEOHead


