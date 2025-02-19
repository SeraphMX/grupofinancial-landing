import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import HelmetSEO from '../components/HelmetSEO'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Grupo Financial',
    url: 'https://www.grupofinancial.com',
    logo: 'https://www.grupofinancial.com/logo.png',
    description: 'Empresa especializada en crédito empresarial y financiamiento para PYMEs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Principal #123',
      addressLocality: 'Ciudad de México',
      addressCountry: 'MX'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52 55 1234 5678',
      contactType: 'customer service',
      postalCode: '12345'
    }
  }

  return (
    <>
      <HelmetSEO
        title='Grupo Financial | Créditos personales y financiamiento para PYMEs'
        description='Obtén crédito empresarial desde $100,000 hasta más de $50 millones. Soluciones financieras para personas, PYMEs y empresas grandes.'
        keywords='crédito empresarial, financiamiento para PYMEs, préstamos para empresas, arrendamiento financiero, crédito revolvente'
        schemaData={schemaData}
      />
      <Hero />
      {/* <CompanyInfo />
      <Partners /> */}
      <Benefits />
      <Products />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default Home
