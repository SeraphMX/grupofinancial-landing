import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  // Obtén el índice actual del historial
  const historyIndex = window.history.state?.idx || 0

  // Verifica si hay historial
  const hasHistory = historyIndex > 0

  const handleGoBack = () => {
    console.log(historyIndex)

    if (hasHistory) {
      navigate(-1) // Navega hacia atrás en el historial

      // Usa setTimeout para resetear el scroll después de navegar
      setTimeout(() => {
        if (historyIndex > 1) {
          console.log('Scrolling...')
          // Solo resetea el scroll si hay más de dos páginas en el historial

          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100) // Ajusta el tiempo según sea necesario
    } else {
      // Cuando regresamos a la raíz desde un producto, desplazarnos a la sección de productos
      navigate('/') // Navega a la raíz si no hay historial
      setTimeout(() => {
        // Desplazarse suavemente a la sección de productos
        const section = document.getElementById('products')
        if (section) {
          //section.scrollIntoView({ behavior: 'smooth' })
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <button onClick={handleGoBack} className='inline-flex items-center text-primary hover:text-primary/80 '>
      <ArrowLeft className='h-5 w-5 mr-2' />
      {hasHistory ? 'Volver atrás' : 'Página principal'}
    </button>
  )
}

export default BackButton
