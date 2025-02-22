import { Alert } from '@nextui-org/react'
import { Calculator } from 'lucide-react'
import HelmetSEO from '../components/HelmetSEO'

const Fees = () => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Intereses y Comisiones - Grupo Financial',
    url: 'https://www.grupofinancial.com/intereses-y-comisiones',
    description: 'Consulta las tasas de interés y comisiones aplicables en nuestros productos financieros.',
    publisher: {
      '@type': 'Organization',
      name: 'Grupo Financial',
      logo: 'https://www.grupofinancial.com/logo.png'
    }
  }
  return (
    <>
      <HelmetSEO
        title='Intereses y Comisiones - Grupo Financial'
        description='Consulta las tasas de interés y comisiones aplicables en nuestros productos financieros.'
        keywords='tasas de interés, comisiones, Grupo Financial'
        canonicalUrl='https://www.grupofinancial.com/intereses-y-comisiones'
        openGraph={{ type: 'website', siteName: 'Grupo Financial', locale: 'es_MX' }}
        schemaData={schemaData}
      />
      <div className='pt-20'>
        <div className='bg-primary/5 py-16'>
          <div className='container'>
            <div className='max-w-3xl mx-auto text-center'>
              <Calculator className='h-16 w-16 text-primary mx-auto mb-6' />
              <h1 className='text-4xl font-bold text-primary mb-6'>Intereses y Comisiones</h1>
              <p className='text-lg text-gray-600'>
                Conoce los detalles sobre nuestras tasas de interés, comisiones y costos asociados a nuestros productos financieros.
              </p>
            </div>
          </div>
        </div>
        <div className='container py-16'>
          <div className='max-w-3xl mx-auto prose'>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>1. Tasas de Interés</h2>
              <p className='text-gray-600 mb-4'>Nuestras tasas de interés son competitivas y se determinan con base en:</p>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Historial crediticio del cliente</li>
                <li>Tipo de crédito solicitado</li>
                <li>Plazo del financiamiento</li>
                <li>Garantías ofrecidas</li>
              </ul>
              <div className='bg-gray-50 p-6 rounded-lg mt-4'>
                <h3 className='text-xl font-semibold text-primary mb-3'>Tasas por Producto</h3>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-gray-700'>Crédito Simple</h4>
                    <ul className='list-disc pl-6 text-gray-600'>
                      <li>
                        Sin garantía: <strong>desde 24% hasta 36% anual</strong>
                      </li>
                      <li>
                        Con garantía hipotecaria: <strong>desde 18% hasta 33% anual</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-700'>Crédito Revolvente</h4>
                    <ul className='list-disc pl-6 text-gray-600'>
                      <li>
                        Tasa base: <strong>desde 18% hasta 33% anual</strong>
                      </li>
                      <li>
                        Tasa preferencial para clientes recurrentes: <strong>desde 16% anual</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-700'>Arrendamiento</h4>
                    <ul className='list-disc pl-6 text-gray-600'>
                      <li>
                        Tasa fija: <strong>desde 18% hasta 30% anual</strong>
                      </li>
                      <li>
                        Opción a compra: <strong>desde 1% del valor original</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>2. Comisiones</h2>
              <p className='text-gray-600 mb-4'>
                En nuestros servicios, <strong>solo generamos un tipo de comisión por cada operación autorizada.</strong> Esta comisión se
                define únicamente después de que tu trámite haya sido aprobado y autorizado. Nuestro compromiso es ofrecerte transparencia
                total, para que sepas exactamente cuánto pagarás una vez que tu solicitud haya sido autorizada. Las comisiones se calculan
                sobre el monto total del crédito o la línea de financiamiento de acuerdo a las siguientes tarifas:
              </p>
              <div className='bg-gray-50 p-6 rounded-lg'>
                <div className='space-y-6'>
                  <div>
                    <h4 className='font-semibold text-gray-700 mb-2'>Comisión por Apertura</h4>
                    <ul className='list-disc pl-6 text-gray-600 mb-4'>
                      <li>
                        <strong>Crédito Simple</strong>: 4% a 6% sobre el monto autorizado
                      </li>
                      <li>
                        <strong>Crédito Revolvente</strong>: 4% a 6% sobre la línea autorizada
                      </li>
                      <li>
                        <strong>Arrendamiento</strong>: 2% a 4% sobre el valor del activo
                      </li>
                    </ul>
                    <Alert
                      color='warning'
                      description='Nuestro objetivo es facilitarte el financiamiento sin cargos ocultos ni pagos iniciales, la comisión puede ser pagada una vez que recibes tu crédito. Si te piden un pago previo, ¡denúncialo!'
                      title='No solicitamos ninguna comisión por adelantado.'
                      variant='faded'
                      classNames={{
                        title: 'font-semibold'
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-primary mb-4'>3. CAT (Costo Anual Total)</h2>
              <p className='text-gray-600'>El CAT varía según el producto y las condiciones específicas de cada crédito:</p>
              <div className='bg-gray-50 p-6 rounded-lg mt-4'>
                <ul className='list-disc pl-6 text-gray-600'>
                  <li>
                    <strong>Crédito Simple sin garantía</strong>: CAT promedio 30% sin IVA
                  </li>
                  <li>
                    <strong>Crédito Simple con garantía</strong>: CAT promedio 25% sin IVA
                  </li>
                  <li>
                    <strong>Crédito Revolvente</strong>: CAT promedio 28% sin IVA
                  </li>
                  <li>
                    <strong>Arrendamiento</strong>: CAT promedio 25% sin IVA
                  </li>
                </ul>
                <p className='text-sm text-gray-500 mt-4'>
                  *CAT: El Costo Anual Total de financiamiento expresado en términos porcentuales anuales que, para fines informativos y de
                  comparación, incorpora la totalidad de los costos y gastos inherentes a los créditos.
                </p>
              </div>
            </section>
            <section>
              <h2 className='text-2xl font-bold text-primary mb-4'>4. Notas Importantes</h2>
              <ul className='list-disc pl-6 text-gray-600'>
                <li>Todas las tasas y comisiones están sujetas a cambios sin previo aviso</li>
                <li>Los montos no incluyen IVA a menos que se especifique lo contrario</li>
                <li>Las tasas preferenciales están sujetas a aprobación de crédito</li>
                <li>Se pueden aplicar condiciones especiales según el perfil del cliente</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fees
