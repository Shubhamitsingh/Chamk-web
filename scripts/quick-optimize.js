#!/usr/bin/env node

/**
 * Quick Image Optimization Script (Simplified)
 * 
 * This is a simpler version that works without sharp dependency.
 * It generates SEO-friendly names and alt text, and provides
 * instructions for manual optimization.
 * 
 * Usage: node scripts/quick-optimize.js
 */

const fs = require('fs')
const path = require('path')

const IMAGES_DIR = path.join(__dirname, '../public/images')
const OUTPUT_FILE = path.join(__dirname, '../public/images/image-optimization-guide.json')

// SEO-friendly name mapping
const IMAGE_MAPPINGS = {
  'logo.png': {
    seoName: 'chamakz-logo-app-icon',
    altText: 'Chamakz live video chat and dating app logo',
    keywords: ['logo', 'app icon', 'brand identity']
  },
  'portrait-girl.png': {
    seoName: 'live-video-chat-interface-chamakz',
    altText: 'People using Chamakz live video chat app for HD video calls with strangers',
    keywords: ['live video chat', 'video call interface', 'mobile app']
  }
}

// Alt text generation rules
function generateAltText(fileName, seoName) {
  // Check mappings first
  if (IMAGE_MAPPINGS[fileName]) {
    return IMAGE_MAPPINGS[fileName].altText
  }
  
  // Generate from filename
  const words = seoName.split('-').filter(w => w !== 'chamakz')
  const description = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return `${description} on Chamakz live video chat and dating platform`
}

// Generate SEO-friendly filename
function generateSEOFileName(originalName) {
  if (IMAGE_MAPPINGS[originalName]) {
    return IMAGE_MAPPINGS[originalName].seoName
  }
  
  const nameWithoutExt = path.parse(originalName).name
  const ext = path.parse(originalName).ext
  
  let seoName = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  
  if (!seoName.includes('chamakz')) {
    seoName = `${seoName}-chamakz`
  }
  
  return seoName
}

// Generate HTML snippet
function generateHTML(seoName, altText, ext = 'jpg') {
  return `<picture>
  <source 
    type="image/webp" 
    srcset="/images/optimized/${seoName}-thumb.webp 300w, /images/optimized/${seoName}-md.webp 800w, /images/optimized/${seoName}-lg.webp 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
  <img 
    src="/images/optimized/${seoName}-md.${ext}"
    srcset="/images/optimized/${seoName}-thumb.${ext} 300w, /images/optimized/${seoName}-md.${ext} 800w, /images/optimized/${seoName}-lg.${ext} 1200w"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    alt="${altText}"
    loading="lazy"
    width="800"
    height="800"
    className="w-full h-auto rounded-lg"
  />
</picture>`
}

// Generate ImageObject schema
function generateSchema(seoName, altText) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": altText,
    "description": altText,
    "url": `https://chamakz.app/images/optimized/${seoName}-lg.webp`,
    "thumbnailUrl": `https://chamakz.app/images/optimized/${seoName}-thumb.webp`,
    "width": 1200,
    "height": 1200,
    "encodingFormat": "image/webp"
  }
}

// Main function
function main() {
  console.log('📸 Image Optimization Guide Generator\n')
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`)
    process.exit(1)
  }
  
  const files = fs.readdirSync(IMAGES_DIR)
    .filter(file => {
      const ext = path.parse(file).ext.toLowerCase()
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext)
    })
    .filter(file => !file.includes('optimized') && file !== 'README.md')
  
  if (files.length === 0) {
    console.log('⚠️  No images found')
    return
  }
  
  console.log(`Found ${files.length} image(s)\n`)
  
  const results = files.map(file => {
    const seoName = generateSEOFileName(file)
    const altText = generateAltText(file, seoName)
    const ext = path.parse(file).ext.toLowerCase().replace('.', '')
    const filePath = path.join(IMAGES_DIR, file)
    const stats = fs.statSync(filePath)
    
    return {
      original: file,
      seoName,
      altText,
      extension: ext,
      originalSize: stats.size,
      originalSizeKB: (stats.size / 1024).toFixed(2),
      html: generateHTML(seoName, altText, ext),
      schema: generateSchema(seoName, altText),
      recommendations: {
        targetSize: '100KB',
        formats: ['WebP (primary)', 'JPG (fallback)'],
        sizes: ['300px (thumbnail)', '800px (medium)', '1200px (large)'],
        tools: [
          'Squoosh (https://squoosh.app)',
          'TinyPNG (https://tinypng.com)',
          'ImageOptim (Mac)',
          'Sharp (Node.js library)'
        ]
      }
    }
  })
  
  // Save results
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({
    generated: new Date().toISOString(),
    images: results,
    instructions: {
      step1: 'Review the SEO names and alt text suggestions',
      step2: 'Use an image optimization tool (Squoosh, TinyPNG, etc.)',
      step3: 'Create optimized versions in these sizes: 300px, 800px, 1200px',
      step4: 'Save as WebP (primary) and JPG (fallback)',
      step5: 'Place optimized images in /public/images/optimized/',
      step6: 'Use the provided HTML snippets in your components'
    }
  }, null, 2))
  
  console.log('✅ Optimization guide generated!\n')
  console.log('📋 Results:')
  results.forEach(result => {
    console.log(`\n  ${result.original}`)
    console.log(`    SEO Name: ${result.seoName}`)
    console.log(`    Alt Text: ${result.altText}`)
    console.log(`    Current Size: ${result.originalSizeKB} KB`)
    console.log(`    Target: <100 KB`)
  })
  
  console.log(`\n📄 Full guide saved to: ${OUTPUT_FILE}`)
  console.log('\n💡 Next Steps:')
  console.log('  1. Install sharp: npm install --save-dev sharp')
  console.log('  2. Run full optimization: npm run optimize-images')
  console.log('  3. Or manually optimize using the recommendations above')
}

if (require.main === module) {
  main()
}

module.exports = { generateSEOFileName, generateAltText, generateHTML }




