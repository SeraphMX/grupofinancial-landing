import { ArrowLeft, Check } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const CreditoRevolvente = () => {
  const navigate = useNavigate()

  const features = [
    'Línea de crédito desde $100,000 hasta $2,000,000 MXN',
    'Disponibilidad inmediata una vez aprobado',
    'Plazo de renovación anual',
    'Tasa preferencial para clientes frecuentes',
    'Disposiciones parciales según necesidad',
    'Sin costo por saldo no utilizado',
    'Pagos flexibles',
    'Renovación automática al cumplir condiciones'
  ]

  const requirements = [
    'Identificación oficial vigente',
    'Comprobante de domicilio reciente',
    'Estados de cuenta bancarios (últimos 6 meses)',
    'Declaraciones anuales de impuestos (2 últimos ejercicios)',
    'Estados financieros auditados',
    'Garantías según el monto solicitado',
    'Historial crediticio favorable'
  ]

  const handleCotizarClick = () => {
    navigate('/cotizador-revolvente')
  }

  return (
    <div className='pt-20'>
      <div className='container py-12'>
        <Link to='/' className='inline-flex items-center text-primary hover:text-primary/80 mb-8'>
          <ArrowLeft className='h-5 w-5 mr-2' />
          Volver al inicio
        </Link>

        <h1 className='text-4xl font-bold text-primary mb-6'>Crédito Revolvente</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <p className='text-lg text-gray-600 mb-8'>
              Nuestro Crédito Revolvente te ofrece la flexibilidad que necesitas para manejar tu flujo de efectivo. Dispón de recursos
              cuando los necesites y paga solo por lo que utilizas.
            </p>

            <div className='bg-gray-50 rounded-xl p-8 mb-8'>
              <h2 className='text-2xl font-semibold text-primary mb-6'>Características Principales</h2>
              <ul className='space-y-4'>
                {features.map((feature, index) => (
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
              <ul className='space-y-4'>
                {requirements.map((requirement, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0' />
                    <span className='text-gray-600'>{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='bg-primary/5 rounded-xl p-8'>
              <h2 className='text-2xl font-semibold text-primary mb-4'>¿Listo para comenzar?</h2>
              <p className='text-gray-600 mb-6'>
                Inicia tu solicitud en línea de manera sencilla, te responderemos en menos de 24 horas y te ayudaremos en todas las etapas
                para conseguir el financiamiento que necesitas.
              </p>
              <button onClick={handleCotizarClick} className='btn-primary w-full'>
                Cotizar Crédito Revolvente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditoRevolvente
