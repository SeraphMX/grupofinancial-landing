import { Building2, HandshakeIcon, LineChart, ShieldCheck } from 'lucide-react'

const CompanyInfo = () => {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary mb-6'>Respaldo y Solidez Financiera</h2>
            <p className='text-lg text-gray-600'>
              Somos una empresa financiera respaldada por una sólida red de socios comerciales y fondos de inversión, lo que nos permite
              ofrecer soluciones financieras competitivas y flexibles para nuestros clientes.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Building2 className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-primary mb-2'>Fondeo Diversificado</h3>
                  <p className='text-gray-600'>
                    Contamos con líneas de crédito de múltiples instituciones financieras y fondos de inversión nacionales e internacionales.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <HandshakeIcon className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-primary mb-2'>Alianzas Estratégicas</h3>
                  <p className='text-gray-600'>
                    Trabajamos en conjunto con los principales bancos y financieras del país para ofrecer las mejores condiciones del mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <LineChart className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-primary mb-2'>Crecimiento Sostenido</h3>
                  <p className='text-gray-600'>
                    Más de 1,000 clientes satisfechos y una cartera en constante crecimiento respaldan nuestra trayectoria en el mercado.
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'>
              <div className='flex items-start space-x-4'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <ShieldCheck className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-primary mb-2'>Regulación y Cumplimiento</h3>
                  <p className='text-gray-600'>
                    Operamos bajo estrictos estándares regulatorios y las mejores prácticas del sector financiero mexicano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfo