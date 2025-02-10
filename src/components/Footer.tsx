import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/branding/logo-full-white.svg'

const Footer = () => {
  return (
    <footer className='bg-primary text-white'>
      <div className='container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <img src={logo} alt='Logo' className='w-40' />
            </div>
            {/* <p className='text-gray-300'>Soluciones financieras innovadoras para impulsar tus proyectos y hacer realidad tus sueños.</p> */}
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-300 hover:text-white transition-colors'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to='/nosotros' className='text-gray-300 hover:text-white transition-colors'>
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to='/cotizador' className='text-gray-300 hover:text-white transition-colors'>
                  Cotizador
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/privacidad' className='text-gray-300 hover:text-white transition-colors'>
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link to='/terminos' className='text-gray-300 hover:text-white transition-colors'>
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to='/comisiones' className='text-gray-300 hover:text-white transition-colors'>
                  Intereses y comisiones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Contacto</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 mr-2' />
                <span className='text-gray-300'>+52 (555) 123-4567</span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 mr-2' />
                <span className='text-gray-300'>contacto@financeflow.mx</span>
              </li>
              <li className='flex items-center'>
                <MapPin className='h-5 w-5 mr-2' />
                <span className='text-gray-300'>Av. Reforma 222, CDMX</span>
              </li>
            </ul>

            {/* <div className='mt-6'>
              <h3 className='text-lg font-semibold mb-4'>Síguenos</h3>
              <div className='flex space-x-4'>
                <a href='#' className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'>
                  <Facebook className='h-5 w-5' />
                </a>
                <a href='#' className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'>
                  <Twitter className='h-5 w-5' />
                </a>
                <a href='#' className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'>
                  <Instagram className='h-5 w-5' />
                </a>
              </div>
            </div> */}
          </div>
        </div>

        <div className='border-t border-white/10 mt-12 pt-8 text-center'>
          <p className='text-gray-300'>© {new Date().getFullYear()} Grupo Financial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
