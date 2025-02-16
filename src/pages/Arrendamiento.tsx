import { Button, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup } from '@nextui-org/react'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import RelatedProducts from '../components/RelatedProducts'
import { ClientType, setCreditType } from '../store/creditSlice'

const Arrendamiento = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  dispatch(setCreditType('arrendamiento'))

  const [clientType, setClientType] = useState<ClientType>('personal')

  const getFeatures = (isPersonal: boolean) => {
    if (isPersonal) {
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
