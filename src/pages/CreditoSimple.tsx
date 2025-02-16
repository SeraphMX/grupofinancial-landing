import { Button, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Tab, Tabs } from '@nextui-org/react'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import RelatedProducts from '../components/RelatedProducts'
import { setCreditType, type ClientType } from '../store/creditSlice'

const CreditoSimple = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  dispatch(setCreditType('simple'))
  const [selectedTab, setSelectedTab] = useState('sin-garantia')
  const [clientType, setClientType] = useState<ClientType>('personal')

  const getFeatures = (withGuarantee: boolean) => {
    if (withGuarantee) {
      return [
        'Montos desde $500,000 hasta $50,000,000 MXN',
        'Plazos desde 12 hasta 120 meses',
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
      'Tasa de interés preferencial',
      'Pagos fijos mensuales',
      'Aprobación en 72 horas',
      'Sin penalización por pago anticipado',
      'Documentación mínima requerida',
      'Asesoría personalizada'
    ]
  }

  const getRequirements = (isPersonal: boolean) => {
    const basicRequirements = [
      'Comprobante de domicilio',
      'Estados de cuenta bancarios (últimos 6 meses)',
      <>
        Reporte de Historial crediticio
        <Popover showArrow>
          <PopoverTrigger>
            <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
              <span className='font-bold text-lg'>?</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2 max-w-[300px]'>
              <div className='text-lg font-bold'>¿Por qué es necesario?</div>
              <div className='text-small'>
                El reporte de historial crediticio es un requisito para cualquier trámite, ya que nos permite conocer tu perfil financiero.
                Sin embargo, en créditos con garantía, no es un factor determinante para la aprobación. Aunque tu historial tenga algunas
                irregularidades, aún puedes calificar, ya que la garantía respalda el crédito.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      <>
        Clave CIEC
        <Popover showArrow>
          <PopoverTrigger>
            <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
              <span className='font-bold text-lg'>?</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2 max-w-[300px]'>
              <div className='text-lg font-bold'>¿Por qué es necesario?</div>
              <div className='text-small'>
                Para gestionar tu solicitud, necesitamos contar con tu clave CIEC, ya que nos permite acceder a tu información fiscal de
                manera segura y verificar tu situación ante el SAT. Únicamente consultamos los datos necesarios para agilizar el trámite de
                tu crédito.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>
    ]

    if (isPersonal) {
      return [
        'Identificación oficial vigente',
        'Constancia de situación fiscal',
        ...basicRequirements,
        'Acta de matrimonio (si aplica)',
        'Identificación oficial del cónyuge (si aplica)'
      ]
    }

    return [
      'Acta constitutiva',
      'Constancia de situación fiscal',
      ...basicRequirements,
      'Declaracion mensual mas reciente',
      'Declaraciones anuales (últimos 2 ejercicios)',
      'Estados financieros (últimos 2 ejercicios)',
      'Identificación oficial del representante legal',
      'Constancia Situación fiscal del representante legal ',
      'Comprobante de domicilio del representante legal'
    ]
  }

  const handleCotizarClick = () => {
    navigate('/cotizador', {
      state: {
        from: 'credito-simple',
        withGuarantee: selectedTab === 'con-garantia',
        clientType
      }
    })
  }

  return (
    <div className='pt-20'>
      <div className='container py-12'>
        <BackButton />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-8 mb-4'>
            <h1 className='text-4xl font-bold text-primary mb-4'>Crédito Simple</h1>
            <p className='text-lg text-gray-600 '>
              Es la solución ideal para financiar proyectos específicos, capital de trabajo o expandir tu negocio. Con términos claros y
              tasas competitivas, te ayudamos a alcanzar tus objetivos financieros.
            </p>
          </div>

          <div className='bg-blue-50 rounded-xl p-8 self-center'>
            <h4 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Para qué lo puedes usar?</h4>
            <p className=' text-gray-600'>
              Para capital de trabajo, compra de inventario, expansión de negocio, adquisición de equipo, pago a proveedores o consolidación
              de deudas. Ideal para impulsar tu empresa o financiar proyectos específicos.
            </p>
          </div>

          <div className='bg-gray-50 rounded-xl  p-8 place-self-start w-full'>
            <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-6'>Características Principales</h2>
            <ul className='space-y-4'>
              {getFeatures(selectedTab === 'con-garantia').map((feature, index) => (
                <li key={index} className='flex items-start'>
                  <Check className='h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0' />
                  <span className='text-gray-600'>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className='bg-white shadow-lg rounded-xl p-8  border border-gray-200'>
              <div className='md:flex items-center justify-between mb-6'>
                <h2 className='mb-4 md:mb-0 text-xl mb:text-2xl font-semibold text-primary '>Requisitos</h2>
                <RadioGroup
                  value={clientType}
                  onValueChange={(value) => setClientType(value as ClientType)}
                  orientation='horizontal'
                  classNames={{
                    label: 'text-primary font-semibold mb-2'
                  }}
                >
                  <Radio value='personal'>Persona Física</Radio>
                  <Radio value='business'>Empresa</Radio>
                </RadioGroup>
              </div>

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
                      {getRequirements(clientType === 'personal').map((requirement, index) => (
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
                      {[
                        ...getRequirements(clientType === 'personal'),
                        <>
                          Escrituras de la propiedad
                          <Popover showArrow>
                            <PopoverTrigger>
                              <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
                                <span className='font-bold text-lg'>?</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <div className='px-1 py-2 max-w-[300px]'>
                                <div className='text-lg font-bold'>¿Por qué es necesario?</div>
                                <div className='text-small'>
                                  Necesitamos las escrituras de la propiedad con el sello del Registro Público de la Propiedad, que
                                  demuestre que está libre de gravámenes (es decir, que no tiene deudas o cargas pendientes). Este
                                  documento, conocido como primer testimonio, es esencial para asegurarnos de que la propiedad pueda ser
                                  utilizada como garantía en el crédito.
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </>,
                        'Boleta Predial',
                        'Recibo de agua',
                        'Fotos, planos y ubicación de la propiedad',
                        <>
                          Avalúo comercial
                          <Popover showArrow>
                            <PopoverTrigger>
                              <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
                                <span className='font-bold text-lg'>?</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <div className='px-1 py-2 max-w-[300px]'>
                                <div className='text-lg font-bold'>¿Por qué es necesario?</div>
                                <div className='text-small'>
                                  Requerimos contar con un avalúo comercial actualizado de la propiedad, ya que este nos permite conocer su
                                  valor actual en el mercado. Este documento asegura de que la propiedad cubra el monto del crédito
                                  solicitado y para cumplir con los requisitos establecidos por las instituciones financieras.
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </>
                      ].map((requirement, index) => (
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
          </div>

          <div className='order-6 md:order-5'>
            <RelatedProducts />
          </div>

          <div className='bg-primary/5 rounded-xl p-8  order-5 md:order-6 self-start'>
            <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Listo para comenzar?</h2>
            <p className='text-gray-600 mb-6 text-lg'>
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
  )
}

export default CreditoSimple
