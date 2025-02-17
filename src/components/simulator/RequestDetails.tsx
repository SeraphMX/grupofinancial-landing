import { MessageCircle as WhatsappIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { formatCurrency } from '../../lib/utils/currency'
import { resetForm } from '../../store/creditSlice'
import { RootState } from '../../store/store'

const RequestDetails = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { step, clientType, amount, term, monthlyPayment, totalPayment, clientData, guaranteeType, isOTPVerified } = useSelector(
    (state: RootState) => state.credit
  )

  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      `¡Hola! He realizado la solicitud en lina para un crédito ${clientType === 'personal' ? 'personal' : 'empresarial'} ${
        guaranteeType === 'con-garantia' ? 'con garantía hipotecaria ' : ''
      }con las siguientes características:\n\n` +
        `Monto: ${formatCurrency(amount)}\n` +
        `Plazo: ${term} meses\n` +
        `Mi nombre es ${clientData.name} y quisiera más información.`
    )
    return `https://wa.me/525551234567?text=${message}`
  }

  return (
    <>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-primary mb-2'>¡Diste el primer paso!</h2>
      </div>

      <div className='bg-white p-6 rounded-xl shadow-lg space-y-6'>
        <p className='text-gray-600 mb-4'>Hemos recibido tu información y un asesor se pondrá en contacto contigo pronto.</p>
        <h3 className='text-xl font-semibold text-primary mb-4'>Resumen de tu solicitud</h3>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-sm text-gray-600'>Tipo de Crédito</p>
            <p className='font-semibold'>
              {clientType === 'personal' ? 'Personal' : 'Empresarial'} {guaranteeType === 'con-garantia' ? 'con garantía' : 'sin garantía'}
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
          <p className='text-center text-gray-600'>¿Necesitas ayuda inmediata? Contáctanos por WhatsApp</p>
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
