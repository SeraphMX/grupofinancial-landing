import { Button, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import RelatedProducts from '../components/RelatedProducts'
import { ClientType, setCreditType } from '../store/creditSlice'
import { GuaranteeRequirements } from './GuaranteeRequirements'

const Arrendamiento = () => {
  const navigate = useNavigate()
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
        o <span className='font-semibold'>SL&B</span>{' '}
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
                maquinaria, equipos o inmuebles) a una arrendadora, y luego los <i>"rentas"</i> para seguir utilizándolos. De esta forma, la
                obtienes <strong>liquidez inmediata</strong> la venta. Este mecanismo es ideal si necesitas obtener capital{' '}
                <strong>sin afectar tus operaciones diarias</strong> ya que les permite seguir utilizando los bienes esenciales para su
                negocio , solo realizando un pago mensual.
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </>,
      'Plazos desde 12 hasta 48 meses',
      'Sin comisión por anualidad',
      <>
        Seguro de daños sobre el Activo
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
        Financiamos hasta el 80% del valor del activo
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

    if (isPersonal) {
      return [
        ...commonFeatures,
        <>
          Montos desde <strong>$500,000</strong> hasta <strong>$10,000,000</strong> MXN
        </>,
        <>
          Tasa desde el <strong>3%</strong> anual
        </>
      ]
    }
    return [
      ...commonFeatures,
      <>
        Montos desde <strong>$500,000</strong> hasta <strong>$20,000,000</strong> MXN
      </>,
      <>
        Tasa desde el <strong>2.5%</strong> anual
      </>,
      'Mayor monto de financiamiento'
    ]
  }

  const getBenefits = () => {
    const commonBenefits = [
      'No impacta tus estados financieros',
      'Programación presupuestal eficiente',
      'Conserva líneas de crédito',
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
      'Declaraciones anuales (últimos 2 ejercicios)',
      'Estados financieros (últimos 2 ejercicios)',
      'Identificación oficial del representante legal',
      'Constancia Situación fiscal del representante legal ',
      'Comprobante de domicilio del representante legal'
    ]
  }

  const handleCotizarClick = () => {
    navigate('/cotizador-arrendamiento')
  }

  return (
    <div className='pt-20'>
      <div className='container py-12'>
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
              Para modernizar tu infraestructura, renovar equipos, adquirir vehículos o maquinaria especializada, o incluso para ampliar tu
              capacidad productiva. Al final del contrato, tienes la opción de comprar el activo a un valor residual, renovar el
              arrendamiento o simplemente devolverlo. Ideal para empresas que buscan optimizar sus recursos y mantener su capital de trabajo
              intacto.
            </p>
          </div>

          <div className='bg-gray-50 rounded-xl  p-8 place-self-start w-full'>
            <div className='mb-6'>
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

          <div className='bg-primary/5 rounded-xl p-8  order-5 md:order-6 self-start'>
            <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Listo para comenzar?</h2>
            <p className='text-gray-600 mb-6 text-lg'>
              Inicia tu solicitud en línea de manera sencilla, te responderemos en menos de 24 horas y te ayudaremos en todas las etapas
              para conseguir el financiamiento que necesitas.
            </p>
            <button onClick={handleCotizarClick} className='btn-primary w-full'>
              Solicita arrendamiento financiero
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrendamiento
