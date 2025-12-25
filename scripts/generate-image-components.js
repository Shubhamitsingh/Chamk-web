#!/usr/bin/env node

/**
 * Generate React Image Components from optimized images
 * Creates reusable Image components with proper SEO attributes
 */

const fs = require('fs')
const path = require('path')

const OPTIMIZED_DIR = path.join(__dirname, '../public/images/optimized')
const COMPONENTS_DIR = path.join(__dirname, '../src/components/images')

/**
 * Generate React component for an image
 */
function generateImageComponent(imageData) {
  const { seoName, altText, formats } = imageData
  
  // Generate srcset strings
  const webpSrcset = Object.entries(formats.webp || {})
    .filter(([name]) => name !== 'original')
    .map(([name, data]) => {
      const width = name === 'thumbnail' ? 300 : name === 'medium' ? 800 : 1200
      return `${data.url} ${width}w`
    })
    .join(', ')
  
  const jpgSrcset = Object.entries(formats.jpg || {})
    .filter(([name]) => name !== 'original')
    .map(([name, data]) => {
      const width = name === 'thumbnail' ? 300 : name === 'medium' ? 800 : 1200
      return `${data.url} ${width}w`
    })
    .join(', ')
  
  const defaultSrc = formats.jpg?.medium?.url || formats.webp?.medium?.url || ''
  
  const componentName = seoName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/Chamakz/g, '') + 'Image'
  
  return `import React from 'react'

/**
 * Optimized Image Component: ${imageData.original}
 * SEO Name: ${seoName}
 * Alt Text: ${altText}
 */
const ${componentName} = ({ className = '', ...props }) => {
  return (
    <picture>
      <source 
        type="image/webp" 
        srcSet="${webpSrcset}"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <img 
        src="${defaultSrc}"
        srcSet="${jpgSrcset}"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt="${altText}"
        loading="lazy"
        width="800"
        height="800"
        className={\`w-full h-auto \${className}\`}
        {...props}
      />
    </picture>
  )
}

export default ${componentName}
`
}

/**
 * Generate index file exporting all components
 */
function generateIndexFile(components) {
  const imports = components.map(comp => {
    const componentName = comp.seoName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/Chamakz/g, '') + 'Image'
    return `import ${componentName} from './${comp.seoName}'`
  }).join('\n')
  
  const exports = components.map(comp => {
    const componentName = comp.seoName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/Chamakz/g, '') + 'Image'
    return `export { default as ${componentName} } from './${comp.seoName}'`
  }).join('\n')
  
  return `${imports}

${exports}
`
}

/**
 * Main function
 */
function main() {
  const reportPath = path.join(OPTIMIZED_DIR, 'optimization-report.json')
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ Optimization report not found. Run optimize-images.js first.')
    process.exit(1)
  }
  
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
  
  // Create components directory
  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true })
  }
  
  console.log('📦 Generating React Image Components...\n')
  
  // Generate component for each image
  report.images.forEach(imageData => {
    const componentCode = generateImageComponent(imageData)
    const componentName = imageData.seoName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
      .replace(/Chamakz/g, '') + 'Image'
    
    const componentPath = path.join(COMPONENTS_DIR, `${imageData.seoName}.jsx`)
    fs.writeFileSync(componentPath, componentCode)
    console.log(`✅ Generated: ${componentName}`)
  })
  
  // Generate index file
  const indexCode = generateIndexFile(report.images)
  fs.writeFileSync(path.join(COMPONENTS_DIR, 'index.js'), indexCode)
  console.log(`\n✅ Generated index file`)
  
  console.log('\n✨ Component generation complete!')
}

if (require.main === module) {
  main()
}

module.exports = { generateImageComponent }






