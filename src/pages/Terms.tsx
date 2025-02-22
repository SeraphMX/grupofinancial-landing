import { FileText } from 'lucide-react'
import HelmetSEO from '../components/HelmetSEO'
import { companyInfo } from '../lib/data/companyInfo'

const Terms = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Términos y Condiciones - Grupo Financial',
    url: 'https://www.grupofinancial.com/terminos-y-condiciones',
    description: 'Revisa nuestros términos y condiciones de uso en Grupo Financial.',
    publisher: {
      '@type': 'Organization',
      name: 'Grupo Financial',
      logo: 'https://www.grupofinancial.com/logo.png'
    }
  }

  return (
    <>
      <HelmetSEO
        title='Términos y Condiciones - Grupo Financial'
        description='Revisa nuestros términos y condiciones de uso en Grupo Financial.'
        keywords='términos y condiciones, reglas de uso, Grupo Financial'
        canonicalUrl='https://www.grupofinancial.com/terminos-y-condiciones'
        openGraph={{ type: 'website', siteName: 'Grupo Financial', locale: 'es_MX' }}
        schemaData={schemaData}
      />
      <div className='pt-20'>
        <div className='bg-primary/5 py-16'>
          <div className='container'>
            <div className='max-w-3xl mx-auto text-center'>
              <FileText className='h-16 w-16 text-primary mx-auto mb-6' />
              <h1 className='text-4xl font-bold text-primary mb-6'>Términos y Condiciones</h1>
              <p className='text-lg text-gray-600'>
                Por favor, lee detenidamente estos términos y condiciones antes de usar nuestros servicios.
              </p>
            </div>
          </div>
        </div>
        <div className='container py-16'>
          <div className='max-w-3xl mx-auto prose'>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>1. Aceptación de los Términos</h2>
              <p className='text-gray-600'>
                Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con
                alguna parte de estos términos, no podrás acceder a nuestros servicios.
              </p>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>2. Elegibilidad</h2>
              <p className='text-gray-600 mb-4'>Para utilizar nuestros servicios, debes:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Ser mayor de edad (18 años o más)</li>
                <li>Tener capacidad legal para contratar</li>
                <li>Proporcionar información verdadera y precisa</li>
                <li>Mantener actualizada tu información</li>
              </ul>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>3. Servicios Financieros</h2>
              <p className='text-gray-600 mb-4'>Nuestros servicios incluyen:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Evaluación de solicitudes de crédito</li>
                <li>Otorgamiento de créditos</li>
                <li>Gestión de pagos</li>
                <li>Asesoría financiera</li>
              </ul>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>4. Responsabilidades del Usuario</h2>
              <p className='text-gray-600 mb-4'>Como usuario, te comprometes a:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Proporcionar información verdadera y actualizada</li>
                <li>Mantener la confidencialidad de tus credenciales</li>
                <li>Notificar cualquier uso no autorizado de tu cuenta</li>
                <li>Cumplir con los pagos acordados</li>
                <li>No usar nuestros servicios para actividades ilegales</li>
              </ul>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>5. Modificaciones</h2>
              <p className='text-gray-600'>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente
                después de su publicación. El uso continuado de nuestros servicios después de dichos cambios constituye tu aceptación de los
                nuevos términos.
              </p>
            </section>
            <section>
              <h2 className='text-2xl font-bold text-primary mb-4'>6. Contacto</h2>
              <p className='text-gray-600'>
                Si tienes preguntas sobre estos términos, contáctanos en{' '}
                <a href={`mailto:${companyInfo.email}`} className='text-primary'>
                  {companyInfo.email}
                </a>{' '}
                o llama al{' '}
                <a href={`tel:${companyInfo.phone}`} className='text-primary'>
                  {companyInfo.phone}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Terms
