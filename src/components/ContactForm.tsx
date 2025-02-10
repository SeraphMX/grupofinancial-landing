import { Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const ContactForm = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/cotizador')
  }

  return (
    <section id='contact' className='section-padding bg-gray-50'>
      <div className='container'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>¿Listo para comenzar?</h2>
            <p className='text-gray-600 mb-8'>Solicita tu crédito en línea en menos de 3 minutos, te responderemos en menos de 24 horas.</p>
            <button onClick={handleClick} className='btn-primary'>
              Solicitar mi crédito
              <Send className='ml-2 h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
