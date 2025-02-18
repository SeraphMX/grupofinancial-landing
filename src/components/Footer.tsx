import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/branding/logo-full-white.svg'

const Footer = () => {
  const { scrollYProgress } = useScroll()
  const footerY = useTransform(scrollYProgress, [0.9, 1], [-100, 0])
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1])

  return (
    <footer className='bg-primary text-white sticky bottom-0 left-0 w-full z-0 '>
      <motion.div className='container py-12' style={{ y: footerY, opacity: opacity }}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4 justify-center md:justify-start'>
              <img src={logo} alt='Logo' className='w-40' />
            </div>
          </div>

          <div className='hidden md:block'>
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
                <Link to='/solicitud' className='text-gray-300 hover:text-white transition-colors'>
                  Cotizador
                </Link>
              </li>
            </ul>
          </div>

          <div className='hidden md:block'>
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

          <div className='text-center md:block flex flex-col md:text-left items-center md:justify-start'>
            <h3 className='text-lg font-semibold mb-4'>Contacto</h3>
            <ul className='space-y-2'>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 mr-2' />
                <a href='tel:555555555' className='text-gray-300'>
                  +52 (555) 123-4567
                </a>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 mr-2' />
                <a href='mailto:hola@grupofinancial.online' className='text-gray-300'>
                  hola@grupofinancial.online
                </a>
              </li>
              <li className='flex items-center'>
                <MapPin className='h-5 w-5 mr-2' />
                <span className='text-gray-300'>Av. Reforma 222, CDMX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 mt-12 pt-8 text-center'>
          <p className='text-gray-300'>© {new Date().getFullYear()} Grupo Financial. Todos los derechos reservados.</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
