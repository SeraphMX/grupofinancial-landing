import { MessageCircle as WhatsappIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { companyInfo } from '../../lib/data/companyInfo'
import { formatCurrency } from '../../lib/utils/currency'
import { resetForm } from '../../store/creditSlice'
import { RootState } from '../../store/store'

const RequestDetails = () => {
  const dispatch = useDispatch()
  const { clientType, amount, term, monthlyPayment, clientData, creditConditions, creditType } = useSelector(
    (state: RootState) => state.credit
  )

  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      `¡Hola! Mi nombre es ${clientData.name}, he realizado la solicitud en línea para un crédito ${
        creditType.slice(0, 1).toUpperCase() + creditType.slice(1)
      } ${creditConditions ? creditConditions.replace('-', ' ') : ''} ${
        clientType === 'personal' ? 'personal' : 'empresarial'
      } con las siguientes características:\n\n` +
        `Monto: ${formatCurrency(amount)}\n` +
        `Plazo: ${term} meses\n`
    )
    return `https://wa.me/+52${companyInfo.phone}?text=${message}`
  }

  return (
    <>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-primary mb-2'>¡Diste el primer paso!</h2>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-lg space-y-6'>
        <p className='text-gray-600 mb-4'>
          Hemos recibido tu información y uno de nuestros asesores se pondrá en contacto contigo lo más pronto posible, en menos de 24
          horas.
        </p>
        <h3 className='text-xl font-semibold text-primary mb-4'>Resumen de tu solicitud</h3>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-sm text-gray-600'>Tipo de Crédito</p>
            <p className='font-semibold'>
              {creditType.slice(0, 1).toUpperCase() + creditType.slice(1)} {creditConditions ? creditConditions.replace('-', ' ') : ''}
            </p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Monto Solicitado</p>
            <p className='font-semibold'>{formatCurrency(amount)}</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Plazo</p>
            <p className='font-semibold'>{term} meses</p>
          </div>
          <div>
            <p className='text-sm text-gray-600'>Pago Mensual</p>
            <p className='font-semibold'>{formatCurrency(monthlyPayment)}</p>
          </div>
        </div>

        <div className='mt-8 space-y-4'>
          <p className='text-center text-gray-600'>¿Necesitas atención inmediata? Contáctanos por WhatsApp</p>
          <a
            href={getWhatsappLink()}
            target='_blank'
            rel='noopener noreferrer'
            className='btn-secondary w-full flex items-center justify-center'
          >
            <WhatsappIcon className='h-5 w-5 mr-2' />
            Contactar por WhatsApp
          </a>
          <Link to='/' className='btn-primary w-full' onClick={() => dispatch(resetForm())}>
            Volver al Inicio
          </Link>
        </div>
      </div>
    </>
  )
}

export default RequestDetails
