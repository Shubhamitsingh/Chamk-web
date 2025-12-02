#!/usr/bin/env node

/**
 * Image Optimization Script for Chamakz
 * 
 * This script:
 * - Renames images to SEO-friendly names
 * - Generates descriptive alt text
 * - Compresses images (target: <100KB)
 * - Converts to WebP format
 * - Generates responsive sizes
 * - Creates optimized versions
 * 
 * Usage: node scripts/optimize-images.js
 */

const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/images'),
  outputDir: path.join(__dirname, '../public/images/optimized'),
  maxFileSize: 100 * 1024, // 100KB in bytes
  quality: 85,
  formats: ['webp', 'jpg'],
  sizes: {
    thumbnail: { width: 300, height: 300, suffix: 'thumb' },
    medium: { width: 800, height: 800, suffix: 'md' },
    large: { width: 1200, height: 1200, suffix: 'lg' },
    original: { suffix: 'orig' }
  }
}

// SEO-friendly name mapping
const IMAGE_NAME_MAP = {
  'logo.png': 'chamakz-logo-app-icon',
  'portrait-girl.png': 'live-video-chat-interface-chamakz',
  'feature-video.png': 'video-call-feature-chamakz',
  'feature-chat.png': 'random-video-chat-feature-chamakz',
  'feature-group.png': 'group-video-rooms-chamakz',
  'feature-streaming.png': 'live-streaming-feature-chamakz',
  'feature-translation.png': 'real-time-translation-chamakz',
  'feature-safety.png': 'safe-video-chat-platform-chamakz',
  'feature-hd.png': 'hd-video-quality-chamakz',
  'feature-gifts.png': 'virtual-gifts-rewards-chamakz',
  'download-ios.png': 'chamakz-ios-app-store',
  'download-android.png': 'chamakz-android-google-play',
  'screenshot-1.png': 'chamakz-app-screenshot-1',
  'screenshot-2.png': 'chamakz-app-screenshot-2',
  'screenshot-3.png': 'chamakz-app-screenshot-3',
  'screenshot-4.png': 'chamakz-app-screenshot-4',
  'screenshot-5.png': 'chamakz-app-screenshot-5',
  'screenshot-6.png': 'chamakz-app-screenshot-6'
}

// Alt text templates based on image name patterns
const ALT_TEXT_TEMPLATES = {
  'logo': 'Chamakz live video chat and dating app logo',
  'live-video-chat': 'People using Chamakz live video chat app for HD video calls',
  'video-call': 'HD video call feature on Chamakz platform',
  'random-chat': 'Random video chat with strangers on Chamakz',
  'group-video': 'Group video rooms feature on Chamakz dating app',
  'live-streaming': 'Live streaming feature on Chamakz platform',
  'translation': 'Real-time translation feature in Chamakz video chat',
  'safety': 'Safe and secure video chat platform Chamakz',
  'hd-quality': 'HD video quality in Chamakz live video calls',
  'virtual-gifts': 'Virtual gifts and rewards on Chamakz platform',
  'download': 'Download Chamakz app from App Store or Google Play',
  'screenshot': 'Chamakz mobile app screenshot showing video chat interface',
  'interface': 'Chamakz app interface for live video chat and dating',
  'mobile': 'Chamakz mobile app for iOS and Android',
  'app': 'Chamakz live video chat and dating application'
}

/**
 * Generate SEO-friendly filename
 */
function generateSEOFileName(originalName) {
  // Check if we have a mapping
  if (IMAGE_NAME_MAP[originalName]) {
    return IMAGE_NAME_MAP[originalName]
  }
  
  // Auto-generate from filename
  const nameWithoutExt = path.parse(originalName).name
  const ext = path.parse(originalName).ext
  
  // Convert to SEO-friendly format
  let seoName = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  
  // Add chamakz suffix if not present
  if (!seoName.includes('chamakz')) {
    seoName = `${seoName}-chamakz`
  }
  
  return seoName
}

/**
 * Generate descriptive alt text
 */
function generateAltText(fileName, seoName) {
  // Check templates first
  for (const [key, template] of Object.entries(ALT_TEXT_TEMPLATES)) {
    if (seoName.includes(key) || fileName.toLowerCase().includes(key)) {
      return template
    }
  }
  
  // Generate from SEO name
  const words = seoName.split('-').filter(w => w !== 'chamakz')
  const description = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return `${description} on Chamakz live video chat and dating platform`
}

/**
 * Compress and optimize image
 */
async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, height, quality = CONFIG.quality, format = 'webp' } = options
  
  try {
    let pipeline = sharp(inputPath)
    
    // Resize if dimensions provided
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
    }
    
    // Format-specific optimization
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality })
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true })
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality, compressionLevel: 9 })
    }
    
    // Compress
    await pipeline.toFile(outputPath)
    
    // Check file size
    const stats = fs.statSync(outputPath)
    return {
      success: true,
      size: stats.size,
      path: outputPath
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message)
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Process a single image
 */
async function processImage(imagePath) {
  const fileName = path.basename(imagePath)
  const ext = path.parse(fileName).ext.toLowerCase()
  const seoName = generateSEOFileName(fileName)
  const altText = generateAltText(fileName, seoName)
  
  console.log(`\nProcessing: ${fileName}`)
  console.log(`  SEO Name: ${seoName}`)
  console.log(`  Alt Text: ${altText}`)
  
  const results = {
    original: fileName,
    seoName,
    altText,
    formats: {},
    sizes: {},
    totalSize: 0,
    originalSize: fs.statSync(imagePath).size
  }
  
  // Create output directory
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true })
  }
  
  // Process each format
  for (const format of CONFIG.formats) {
    results.formats[format] = {}
    
    // Process each size
    for (const [sizeName, sizeConfig] of Object.entries(CONFIG.sizes)) {
      const outputFileName = `${seoName}-${sizeConfig.suffix}.${format === 'webp' ? 'webp' : 'jpg'}`
      const outputPath = path.join(CONFIG.outputDir, outputFileName)
      
      const result = await optimizeImage(imagePath, outputPath, {
        width: sizeConfig.width,
        height: sizeConfig.height,
        quality: CONFIG.quality,
        format
      })
      
      if (result.success) {
        results.formats[format][sizeName] = {
          path: outputPath,
          size: result.size,
          url: `/images/optimized/${outputFileName}`
        }
        results.totalSize += result.size
      }
    }
  }
  
  // Calculate savings
  results.savings = results.originalSize - results.totalSize
  results.savingsPercent = ((results.savings / results.originalSize) * 100).toFixed(2)
  
  console.log(`  Original: ${(results.originalSize / 1024).toFixed(2)} KB`)
  console.log(`  Optimized: ${(results.totalSize / 1024).toFixed(2)} KB`)
  console.log(`  Savings: ${(results.savings / 1024).toFixed(2)} KB (${results.savingsPercent}%)`)
  
  return results
}

/**
 * Generate HTML with srcset and proper attributes
 */
function generateImageHTML(result) {
  const { seoName, altText, formats } = result
  
  // WebP srcset
  const webpSrcset = Object.entries(CONFIG.sizes)
    .filter(([name]) => name !== 'original')
    .map(([name, config]) => {
      const url = formats.webp[name]?.url
      const width = config.width
      return url ? `${url} ${width}w` : null
    })
    .filter(Boolean)
    .join(', ')
  
  // JPG srcset (fallback)
  const jpgSrcset = Object.entries(CONFIG.sizes)
    .filter(([name]) => name !== 'original')
    .map(([name, config]) => {
      const url = formats.jpg[name]?.url
      const width = config.width
      return url ? `${url} ${width}w` : null
    })
    .filter(Boolean)
    .join(', ')
  
  // Default src (medium size JPG for fallback)
  const defaultSrc = formats.jpg.medium?.url || formats.webp.medium?.url || ''
  
  return `
<!-- Optimized Image: ${result.original} -->
<picture>
  <source 
    type="image/webp" 
    srcset="${webpSrcset}"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
  <img 
    src="${defaultSrc}"
    srcset="${jpgSrcset}"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    alt="${altText}"
    loading="lazy"
    width="${CONFIG.sizes.medium.width}"
    height="${CONFIG.sizes.medium.height}"
    className="w-full h-auto rounded-lg"
  />
</picture>
`.trim()
}

/**
 * Generate ImageObject schema
 */
function generateImageSchema(result) {
  const { seoName, altText, formats } = result
  
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": altText,
    "description": altText,
    "url": formats.webp.large?.url || formats.jpg.large?.url,
    "thumbnailUrl": formats.webp.thumbnail?.url || formats.jpg.thumbnail?.url,
    "width": CONFIG.sizes.large.width,
    "height": CONFIG.sizes.large.height,
    "encodingFormat": "image/webp",
    "contentUrl": formats.webp.original?.url || formats.jpg.original?.url
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting Image Optimization...\n')
  console.log(`Input Directory: ${CONFIG.inputDir}`)
  console.log(`Output Directory: ${CONFIG.outputDir}\n`)
  
  // Check if input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`❌ Input directory not found: ${CONFIG.inputDir}`)
    process.exit(1)
  }
  
  // Get all image files
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif']
  const files = fs.readdirSync(CONFIG.inputDir)
    .filter(file => {
      const ext = path.parse(file).ext.toLowerCase()
      return imageExtensions.includes(ext) && !file.includes('optimized')
    })
  
  if (files.length === 0) {
    console.log('⚠️  No images found to optimize')
    return
  }
  
  console.log(`Found ${files.length} image(s) to process\n`)
  
  const results = []
  let totalOriginalSize = 0
  let totalOptimizedSize = 0
  
  // Process each image
  for (const file of files) {
    const imagePath = path.join(CONFIG.inputDir, file)
    const result = await processImage(imagePath)
    results.push(result)
    totalOriginalSize += result.originalSize
    totalOptimizedSize += result.totalSize
  }
  
  // Generate report
  console.log('\n' + '='.repeat(60))
  console.log('📊 OPTIMIZATION REPORT')
  console.log('='.repeat(60))
  console.log(`Total Images: ${results.length}`)
  console.log(`Original Size: ${(totalOriginalSize / 1024).toFixed(2)} KB`)
  console.log(`Optimized Size: ${(totalOptimizedSize / 1024).toFixed(2)} KB`)
  console.log(`Total Savings: ${((totalOriginalSize - totalOptimizedSize) / 1024).toFixed(2)} KB`)
  console.log(`Savings: ${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(2)}%`)
  
  // Generate HTML snippets
  console.log('\n' + '='.repeat(60))
  console.log('📝 GENERATED HTML SNIPPETS')
  console.log('='.repeat(60))
  
  const htmlSnippets = results.map(result => ({
    original: result.original,
    html: generateImageHTML(result),
    schema: generateImageSchema(result)
  }))
  
  // Save HTML snippets to file
  const snippetsPath = path.join(__dirname, '../public/images/optimized/image-snippets.json')
  fs.writeFileSync(snippetsPath, JSON.stringify(htmlSnippets, null, 2))
  console.log(`\n✅ HTML snippets saved to: ${snippetsPath}`)
  
  // Save optimization report
  const reportPath = path.join(__dirname, '../public/images/optimized/optimization-report.json')
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      totalImages: results.length,
      originalSize: totalOriginalSize,
      optimizedSize: totalOptimizedSize,
      savings: totalOriginalSize - totalOptimizedSize,
      savingsPercent: ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2)
    },
    images: results
  }, null, 2))
  console.log(`✅ Optimization report saved to: ${reportPath}`)
  
  console.log('\n✨ Image optimization complete!')
}

// Run the script
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error)
    process.exit(1)
  })
}

module.exports = { processImage, generateSEOFileName, generateAltText }




