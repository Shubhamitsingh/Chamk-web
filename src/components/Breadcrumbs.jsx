import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { useEffect } from 'react'

const Breadcrumbs = ({ items = null }) => {
  const location = useLocation()
  const baseUrl = "https://chamakz.app"

  // Generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = () => {
    if (items) return items

    const pathSegments = location.pathname.split('/').filter(Boolean)
    const breadcrumbs = [
      { name: 'Home', path: '/' }
    ]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      breadcrumbs.push({
        name,
        path: currentPath
      })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  // Add BreadcrumbList Schema
  useEffect(() => {
    const schemaId = 'breadcrumb-schema'
    let schema = document.getElementById(schemaId)
    if (!schema) {
      schema = document.createElement('script')
      schema.type = 'application/ld+json'
      schema.id = schemaId
      document.head.appendChild(schema)
    }

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${baseUrl}${item.path}`
      }))
    })

    return () => {
      const existingSchema = document.getElementById(schemaId)
      if (existingSchema) {
        existingSchema.remove()
      }
    }
  }, [breadcrumbItems, baseUrl])

  if (breadcrumbItems.length <= 1) return null

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1
          return (
            <li
              key={item.path}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index === 0 ? (
                <Link
                  to={item.path}
                  className="flex items-center hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <Home size={16} className="mr-1" />
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <>
                  <ChevronRight size={16} className="mx-2 text-gray-400" />
                  {isLast ? (
                    <span className="text-gray-900 font-medium" itemProp="name">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="hover:text-primary transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.name}</span>
                    </Link>
                  )}
                </>
              )}
              <meta itemProp="position" content={index + 1} />
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs






