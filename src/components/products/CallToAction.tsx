import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CreditType } from '../../store/creditSlice'
import { RootState } from '../../store/store'

const CallToAction = () => {
  const navigate = useNavigate()
  const creditType = useSelector((state: RootState) => state.credit.creditType) // Obtener el estado global

  // Mapeo de rutas según el tipo de crédito

  const paths: Record<CreditType, string> = {
    simple: '/cotizador',
    revolvente: '/cotizador',
    arrendamiento: '/cotizador'
  }

  const handleCotizarClick = () => {
    console.log(paths[creditType])

    const selectedPath = paths[creditType] || '/cotizador' // Ruta por defecto si no coincide
    navigate(selectedPath, {
      state: {
        from: 'credito-simple'
      }
    })
  }

  return (
    <div className='bg-primary/5 rounded-xl p-8  order-5 md:order-6 self-start'>
      <h2 className='text-xl mb:text-2xl font-semibold text-primary mb-4'>¿Listo para comenzar?</h2>
      <p className='text-gray-600 mb-6 text-lg'>
        Inicia tu solicitud en línea de manera sencilla, te responderemos en menos de 24 horas y te ayudaremos en todas las etapas para
        conseguir el financiamiento que necesitas.
      </p>
      <button onClick={handleCotizarClick} className='btn-primary w-full'>
        ¡Solicitalo en minutos!
      </button>
    </div>
  )
}

export default CallToAction
