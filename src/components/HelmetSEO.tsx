import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  url?: string
  canonicalUrl?: string
  image?: string
  robots?: string
  openGraph?: {
    type?: string
    siteName?: string
    locale?: string
  }
  twitterCard?: string
  schemaData?: Record<string, unknown>
  extraMetaTags?: { name: string; content: string }[]
}

const HelmetSEO = ({
  title,
  description,
  keywords = '',
  url = 'https://www.grupofinancial.com',
  canonicalUrl,
  image = 'https://www.grupofinancial.com/logo.png',
  robots = 'index, follow',
  openGraph = { type: 'website', siteName: 'Grupo Financial', locale: 'es_MX' },
  twitterCard = 'summary_large_image',
  schemaData,
  extraMetaTags = []
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name='robots' content={robots} />

      {/* URL Canónica */}
      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={openGraph.type} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      {openGraph.siteName && <meta property='og:site_name' content={openGraph.siteName} />}
      {openGraph.locale && <meta property='og:locale' content={openGraph.locale} />}

      {/* Twitter Card */}
      <meta name='twitter:card' content={twitterCard} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      {/* Meta tags adicionales */}
      {extraMetaTags.map((meta, index) => (
        <meta key={index} name={meta.name} content={meta.content} />
      ))}

      {/* JSON-LD Schema */}
      {schemaData && <script type='application/ld+json'>{JSON.stringify(schemaData)}</script>}
    </Helmet>
  )
}

export default HelmetSEO
