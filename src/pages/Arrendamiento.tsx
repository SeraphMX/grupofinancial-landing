import { Button, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import BackButton from '../components/BackButton'
import HelmetSEO from '../components/HelmetSEO'
import CallToAction from '../components/products/CallToAction'
import RelatedProducts from '../components/RelatedProducts'
import { ClientType, setCreditType } from '../store/creditSlice'

const Arrendamiento = () => {
  const dispatch = useDispatch()
  dispatch(setCreditType('arrendamiento'))

  const [clientType, setClientType] = useState<ClientType>('personal')

  const getFeatures = (isPersonal: boolean) => {
    const commonFeatures = [
      <>
        <span className='font-semibold'>Arrendamiento puro</span>
        <Popover showArrow>
          <PopoverTrigger>
            <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
              <span className='font-bold text-lg'>?</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2 max-w-[300px]'>
              <div className='text-lg font-bold'>¿Qué significa?</div>
              <div className='text-small'>
                El <strong>arrendamiento puro</strong> es un sistema en el que puedes usar un equipo o bien (como maquinaria, vehículos o
                incluso propiedades) pagando una renta mensual durante un plazo acordado. Al finalizar ese plazo, tienes varias opciones:{' '}
                <strong>comprar el bien, devolverlo o extender el arrendamiento</strong> por más tiempo. De este modo podemos ayudarte a
                financiar el equipo que tu empresa necesita para operar y crecer, sin necesidad de realizar una gran inversión inicial.
              </div>
            </div>
          </PopoverContent>
        </Popover>{' '}
        o{' '}
        <div className='block md:inline-block'>
          <span className='font-semibold'>SL&B</span>{' '}
          <Popover showArrow>
            <PopoverTrigger>
              <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
                <span className='font-bold text-lg'>?</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className='px-1 py-2 max-w-[300px]'>
                <div className='text-lg font-bold'>¿Qué significa?</div>
                <div className='text-small'>
                  El <strong>Sale & Lease Back</strong> (SL&B) es una operación financiera en la que <i>"vendes"</i> tus bienes (como
                  maquinaria, equipos o inmuebles) a una arrendadora, y luego los <i>"rentas"</i> para seguir utilizándolos. De esta forma,
                  la obtienes <strong>liquidez inmediata</strong> la venta. Este mecanismo es ideal si necesitas obtener capital{' '}
                  <strong>sin afectar tus operaciones diarias</strong> ya que les permite seguir utilizando los bienes esenciales para su
                  negocio , solo realizando un pago mensual.
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </>,
      'Plazos desde 12 hasta 48 meses',
      'Sin comisión por anualidad',
      <>
        Seguro de daños
        <Popover showArrow>
          <PopoverTrigger>
            <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
              <span className='font-bold text-lg'>?</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2 max-w-[300px]'>
              <div className='text-lg font-bold'>¿Qué significa?</div>
              <div className='text-small'>
                El bien arrendado está protegido con un seguro que cubre daños, robo e imprevistos, brindándote tranquilidad y continuidad
                operativa. Además, para mayor seguridad y control, se requiere la instalación de un sistema GPS, lo que permite monitorear
                su ubicación en todo momento y reducir riesgos, asegurando la protección de tu inversión.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      <>
        Financiamiento de hasta el 80% del valor del activo
        <Popover showArrow>
          <PopoverTrigger>
            <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
              <span className='font-bold text-lg'>?</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='px-1 py-2 max-w-[300px]'>
              <div className='text-lg font-bold'>¿Bajo que condiciones?</div>
              <div className='text-small'>
                El financiamiento esta <strong>sujeto a una evaluación</strong> y condiciones específicas que dependen de varios factores.
                Además, el activo a financiar puede ser <strong>nuevo</strong> o de lo contrario con una{' '}
                <strong>antigüedad máxima de 5 a 10 años</strong>, dependiendo del tipo de bien y su estado.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>
    ]

    if (isPersonal) {
      return [
        ...commonFeatures,
        <>
          Montos desde <strong>$500,000</strong> hasta <strong>$10,000,000</strong> MXN
        </>,
        <>
          Tasa desde el <strong>3%</strong> mensual
        </>
      ]
    }
    return [
      ...commonFeatures,
      <>
        Montos desde <strong>$500,000</strong> hasta <strong>$50,000,000</strong> MXN
      </>,
      <>
        Tasa desde el <strong>2.5%</strong> mensual
      </>,
      'Mayor monto de financiamiento'
    ]
  }

  const getBenefits = () => {
    const commonBenefits = [
      'No impacta tus estados financieros',
      'Programación presupuestal eficiente',
      'Deducible de impuestos',
      'Minimiza los riesgos de obsolescencia'
    ]
    return commonBenefits
  }

  const getRequirements = (isPersonal: boolean) => {
    const basicRequirements = [
      'Constancia de situación fiscal',
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
                Sin embargo, en arrendamiento, <strong>no es un factor determinante</strong> para la aprobación. Aunque tu historial tenga
                algunas irregularidades, aún puedes calificar, ya que <strong>la garantía es el activo</strong> que respalda el crédito.
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
      </>,
      <>
        Facturas
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
                Si el tipo de bien a adquirir es un vehículo, maquinaria o equipo, necesitamos las facturas de compra para verificar la
                propiedad y el valor del activo. En caso de no contar con ellas, podemos ayudarte a gestionar la documentación necesaria.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      <>
        Opinión de valor
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
                Una opinión de valor es un análisis profesional que estima el valor de un bien de forma rápida y práctica, basándose en
                información de mercado y características generales. Este documento es necesario{' '}
                <strong>solo si el activo no es nuevo</strong> y nos ayuda a determinar su valor y establecer el monto del financiamiento.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      'Declaraciones anuales (últimos 2 ejercicios)',
      'Estados financieros (últimos 2 ejercicios)'
    ]

    if (isPersonal) {
      return [
        'Identificación oficial vigente',
        ...basicRequirements,
        'Acta de matrimonio (si aplica)',
        'Identificación oficial del cónyuge (si aplica)'
      ]
    }

    return [
      'Acta constitutiva',
      ...basicRequirements,
      'Declaracion mensual mas reciente',
      'Identificación oficial del representante legal',
      'Constancia Situación fiscal del representante legal ',
      'Comprobante de domicilio del representante legal'
    ]
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Arrendamiento Financiero',
    url: 'https://www.grupofinancial.com/arrendamiento',
    description: 'Optimiza tu flujo de efectivo con Arrendamiento Financiero. Equipos, vehículos y más con pagos accesibles.',
    provider: {
      '@type': 'Organization',
      name: 'Grupo Financial',
      url: 'https://www.grupofinancial.com'
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué bienes puedo adquirir con Arrendamiento Financiero?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes arrendar maquinaria, equipos tecnológicos, vehículos y más, con opción de compra al final del contrato.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuáles son los beneficios del arrendamiento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Te permite mantener liquidez, acceder a activos sin un desembolso inicial y aprovechar beneficios fiscales.'
          }
        }
      ]
    }
  }

  return (
    <>
      <HelmetSEO
        title='Arrendamiento Financiero - Grupo Financial'
        description='Optimiza tu flujo de efectivo con Arrendamiento Financiero. Equipos, vehículos y más con pagos accesibles.'
        keywords='Arrendamiento Financiero, leasing, renta de equipos, financiamiento para activos'
        canonicalUrl='https://www.grupofinancial.com/arrendamiento'
        openGraph={{ type: 'article', siteName: 'Grupo Financial', locale: 'es_MX' }}
        schemaData={schemaData}
      />
      <div className='pt-20'>
        <div className='container py-10'>
          <BackButton />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-8 mb-4'>
              <h1 className='text-4xl font-bold text-primary mb-4'>Arrendamiento Financiero</h1>
              <p className='text-lg text-gray-600 '>
                Es la opción inteligente para adquirir activos fijos sin afectar tu flujo de efectivo. Con un esquema de pagos fijos y
                flexibles, puedes obtener maquinaria, equipo de transporte, tecnología o cualquier bien necesario para impulsar tu negocio,
                sin necesidad de desembolsar el total de la inversión inicial.
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-8 self-center'>
              <h4 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Para qué lo puedes usar?</h4>
              <p className=' text-gray-600'>
                Para modernizar tu infraestructura, renovar equipos, adquirir vehículos o maquinaria especializada, o incluso para ampliar
                tu capacidad productiva. Al final del contrato, tienes la opción de comprar el activo a un valor residual, renovar el
                arrendamiento o simplemente devolverlo. Ideal para empresas que buscan optimizar sus recursos y mantener su capital de
                trabajo intacto.
              </p>
            </div>
            <div className='bg-gray-50 rounded-xl  p-8 place-self-start w-full'>
              <div>
                <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-6'>Beneficios</h2>
                <ul className='space-y-4'>
                  {getBenefits().map((benefit, index) => (
                    <li key={index} className='flex items-start'>
                      <Check className='h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0' />
                      <span className='text-gray-600'>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-6'>
                <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-6'>Características Principales</h2>
                <ul className='space-y-4'>
                  {getFeatures(clientType === 'personal').map((feature, index) => (
                    <li key={index} className='flex items-start'>
                      <Check className='h-5 w-5 text-secondary mt-1 mr-3 flex-shrink-0' />
                      <span className='text-gray-600'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                <ul className='space-y-4'>
                  {getRequirements(clientType === 'personal').map((requirement, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0' />
                      <span className='text-gray-600'>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='order-6 md:order-5'>
              <RelatedProducts />
            </div>
            <CallToAction />
          </div>
        </div>
      </div>
    </>
  )
}

export default Arrendamiento
