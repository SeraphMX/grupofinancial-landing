import { Tab, Tabs } from '@nextui-org/react'
import { ArrowLeft, Check } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CreditoSimple = () => {
  const navigate = useNavigate()
  const [selectedTab, setSelectedTab] = useState('sin-garantia')

  const getFeatures = (withGuarantee: boolean) => {
    if (withGuarantee) {
      return [
        'Montos desde $500,000 hasta $50,000,000 MXN',
        'Plazos desde 12 hasta 180 meses',
        'Tasa de interés preferencial',
        'Pagos fijos mensuales',
        'Aprobación en 72 horas',
        'Sin penalización por pago anticipado',
        'Mayor monto de financiamiento',
        'Mejores condiciones crediticias'
      ]
    }
    return [
      'Montos desde $100,000 hasta $5,000,000 MXN',
      'Plazos desde 12 hasta 60 meses',
      'Tasa de interés fija durante todo el crédito',
      'Pagos fijos mensuales',
      'Aprobación en 48 horas',
      'Sin penalización por pago anticipado',
      'Documentación mínima requerida',
      'Asesoría personalizada'
    ]
  }

  const requirementsBasic = [
    'Identificación oficial vigente',
    'Comprobante de domicilio reciente',
    'Estados de cuenta bancarios (últimos 3 meses)',
    'Declaración anual de impuestos',
    'Estados financieros (para empresas)',
    'Historial crediticio favorable'
  ]

  const requirementsGuarantee = [
    ...requirementsBasic,
    'Escrituras de la propiedad',
    'Certificado de libertad de gravamen',
    'Boletas prediales al corriente',
    'Avalúo comercial reciente',
    'Acta de matrimonio (si aplica)',
    'Identificación oficial del cónyuge (si aplica)'
  ]

  const handleCotizarClick = () => {
    navigate('/cotizador', {
      state: {
        from: 'credito-simple',
        withGuarantee: selectedTab === 'con-garantia'
      }
    })
  }

  return (
    <div className='pt-20'>
      <div className='container py-12'>
        <Link to='/' className='inline-flex items-center text-primary hover:text-primary/80 mb-8'>
          <ArrowLeft className='h-5 w-5 mr-2' />
          Volver al inicio
        </Link>

        <h1 className='text-4xl font-bold text-primary mb-6'>Crédito Simple</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <p className='text-lg text-gray-600 mb-8'>
              El Crédito Simple es la solución ideal para financiar proyectos específicos, capital de trabajo o expandir tu negocio. Con
              términos claros y tasas competitivas, te ayudamos a alcanzar tus objetivos financieros.
            </p>

            <div className='bg-gray-50 rounded-xl p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-primary mb-6'>Características Principales</h2>
              <ul className='space-y-4'>
                {getFeatures(selectedTab === 'con-garantia').map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <Check className='h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0' />
                    <span className='text-gray-600'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className='bg-white shadow-lg rounded-xl p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-primary mb-6'>Requisitos</h2>
              <Tabs
                aria-label='Opciones de crédito'
                color='primary'
                variant='underlined'
                selectedKey={selectedTab}
                onSelectionChange={(key) => setSelectedTab(key.toString())}
                classNames={{
                  tabList: 'gap-6',
                  cursor: 'w-full bg-primary',
                  tab: 'max-w-fit px-0 h-12',
                  tabContent: 'group-data-[selected=true]:text-primary'
                }}
              >
                <Tab
                  key='sin-garantia'
                  title={
                    <div className='flex items-center space-x-2'>
                      <span>Sin Garantía</span>
                    </div>
                  }
                >
                  <div className='mt-4'>
                    <ul className='space-y-4'>
                      {requirementsBasic.map((requirement, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0' />
                          <span className='text-gray-600'>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tab>
                <Tab
                  key='con-garantia'
                  title={
                    <div className='flex items-center space-x-2'>
                      <span>Con Garantía Hipotecaria</span>
                    </div>
                  }
                >
                  <div className='mt-4'>
                    <ul className='space-y-4'>
                      {requirementsGuarantee.map((requirement, index) => (
                        <li key={index} className='flex items-start'>
                          <span className='w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0' />
                          <span className='text-gray-600'>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tab>
              </Tabs>
            </div>

            <div className='bg-primary/5 rounded-xl p-8'>
              <h2 className='text-2xl font-semibold text-primary mb-4'>¿Listo para comenzar?</h2>
              <p className='text-gray-600 mb-6'>
                Inicia tu solicitud en línea de manera sencilla, te responderemos en menos de 24 horas y te ayudaremos en todas las etapas
                para conseguir el financiamiento que necesitas.
              </p>
              <button onClick={handleCotizarClick} className='btn-primary w-full'>
                Solicita un crédito simple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditoSimple
