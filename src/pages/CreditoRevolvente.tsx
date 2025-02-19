import { Alert, Button, cn, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react'
import { Check, MessageCircleQuestion } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import BackButton from '../components/BackButton'
import { GuaranteeRequirements } from '../components/GuaranteeRequirements'
import HelmetSEO from '../components/HelmetSEO'
import CallToAction from '../components/products/CallToAction'
import RelatedProducts from '../components/RelatedProducts'
import { ClientType, setCreditType } from '../store/creditSlice'

const CreditoRevolvente = () => {
  const dispatch = useDispatch()
  dispatch(setCreditType('revolvente'))

  const [clientType, setClientType] = useState<ClientType>('personal')

  const getFeatures = (isPersonal: boolean) => {
    const commonFeatures = [
      'Plazos desde 12 hasta 36 meses',
      'Tasa preferencial para clientes frecuentes',
      'Pagos flexibles',
      'Aprobación en 72 horas',
      'Disposiciones parciales según tus necesidades',
      <>
        Sin costo por saldo no usado
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
                No pagas intereses ni comisiones por la parte del crédito que no gastas. Los intereses solo se generan sobre el monto que
                dispongas y <strong>únicamente por el tiempo que lo utilices</strong>. Una vez que pagas el saldo utilizado, dejas de
                generar intereses.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      <>
        Renovación automática
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
                <p className='mb-2 text-medium'>Si cumples con ciertos criterios, como:</p>
                <ul className='text-small mb-2'>
                  <li>• Un historial de pago puntual. </li>
                  <li>• Un nivel de uso adecuado dentro del límite aprobado.</li>
                  <li>• Una evaluación periódica que confirme tu capacidad de pago y solvencia financiera.</li>
                </ul>
                <p className='mt-1 text-tiny/3'>
                  Si es así, además de la renovación, puedes solicitar un <strong>aumento en tu línea de crédito</strong> si lo requieres
                  para disponer de un mayor monto cuando lo necesites. Así, sigues contando con liquidez sin necesidad de solicitar un nuevo
                  crédito cada vez.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>
    ]

    if (!isPersonal) {
      return ['Montos desde $500,000 hasta $50,000,000 MXN', ...commonFeatures, 'Mayor monto de financiamiento']
    }
    return ['Montos desde $100,000 hasta $10,000,000 MXN', ...commonFeatures]
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
      </>,
      'Declaraciones anuales (últimos 2 ejercicios)',
      'Estados financieros (últimos 2 ejercicios)',
      ...GuaranteeRequirements
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

  // Función para abrir WhatsApp en una nueva pestaña
  const handleWhatsAppClick = () => {
    const phoneNumber = '521234567890'
    const message = encodeURIComponent('Hola, busco un crédito revolvente mayor a 10 millones.')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    window.open(whatsappUrl, '_blank')
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Crédito Revolvente',
    url: 'https://www.grupofinancial.com/credito-revolvente',
    description: 'Accede a un Crédito Revolvente para disponer de capital cuando lo necesites. Montos desde $100,000 hasta $10 millones.',
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
          name: '¿Cómo funciona el Crédito Revolvente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Te otorgamos una línea de crédito y puedes disponer del capital cuando lo necesites, pagando solo por lo que uses.'
          }
        },
        {
          '@type': 'Question',
          name: '¿Cuál es el monto máximo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes acceder a montos desde $100,000 hasta $10 millones, dependiendo de tu perfil financiero.'
          }
        }
      ]
    }
  }
  return (
    <>
      <HelmetSEO
        title='Crédito Revolvente - Grupo Financial'
        description='Obtén un Crédito Revolvente y accede a capital cuando lo necesites. Montos desde $100,000 hasta $10 millones.'
        keywords='Crédito Revolvente, línea de crédito, financiamiento flexible, capital de trabajo'
        canonicalUrl='https://www.grupofinancial.com/credito-revolvente'
        openGraph={{ type: 'article', siteName: 'Grupo Financial', locale: 'es_MX' }}
        schemaData={schemaData}
      />
      <div className='pt-20'>
        <div className='container py-10'>
          <BackButton />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='p-8 mb-4'>
              <h1 className='text-4xl font-bold text-primary mb-4'>Crédito Revolvente</h1>
              <p className='text-lg text-gray-600 '>
                Te ofrece la flexibilidad que necesitas para manejar tu flujo de efectivo. Con los recursos disponibles de inmediato cuando
                los necesites y pagando solo por lo que utilizas.
              </p>
            </div>
            <div className='bg-blue-50 rounded-xl p-8 self-center'>
              <h4 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Para qué lo puedes usar?</h4>
              <p className=' text-gray-600'>
                Para gestionar flujos de efectivo, cubrir gastos imprevistos, comprar inventario, pagar nóminas o aprovechar
                <strong> oportunidades de negocio.</strong> Al ser renovable conforme lo vas pagando, es ideal para mantener{' '}
                <strong>liquidez constante</strong> y financiar tus operaciones de manera recurrente sin necesidad de solicitar un nuevo
                crédito cada vez.
              </p>
            </div>
            <div>
              <div className='mb-4'>
                <div className='bg-gray-50 rounded-xl  p-8 place-self-start w-full'>
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
              {clientType === 'personal' && (
                <Alert
                  color='primary'
                  title='Necesitas un monto mayor?'
                  variant='faded'
                  classNames={{
                    base: cn([
                      'bg-white dark:bg-background shadow-sm',
                      'border-1 border-default-200 dark:border-default-100',
                      "relative before:content-[''] before:absolute before:z-10",
                      'before:left-0 before:top-[-1px] before:bottom-[-1px] before:w-1',
                      'rounded-l-none border-l-0',
                      'before:bg-primary'
                    ]),
                    title: cn('text-primary', 'font-semibold', 'font-montserrat'),
                    description: cn('text-default-500', 'font-medium'),
                    iconWrapper: cn('dark:bg-transparent')
                    // mainWrapper: cn('pt-1', classNames.mainWrapper),
                  }}
                >
                  <div className='flex flex-col md:flex-row items-start gap-1 mt-1'>
                    <p className='text-sm'>Envíanos un mensaje y te ayudaremos a encontrar una solución a tu medida.</p>
                    <Button
                      color='primary'
                      size='sm'
                      variant='ghost'
                      title=''
                      className='bg-background text-default-700 font-medium border-1 shadow-small'
                      endContent={<MessageCircleQuestion className='w-5' />}
                      onClick={handleWhatsAppClick}
                    >
                      Enviar mensaje
                    </Button>
                  </div>
                </Alert>
              )}
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

export default CreditoRevolvente
