import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/branding/logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Esperar a que la navegación se complete antes de hacer scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 400)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const navigation = [
    { name: 'Beneficios', action: () => scrollToSection('services') },
    { name: 'Productos', action: () => scrollToSection('products') },
    { name: 'Contacto', action: () => scrollToSection('contact') }
  ]

  const mobileNavigation = [
    {
      name: 'Nosotros',
      action: () => {
        navigate('/nosotros')
        setIsMenuOpen(false)
      }
    },
    { name: 'Beneficios', action: () => scrollToSection('services') },
    { name: 'Productos', action: () => scrollToSection('products') },
    { name: 'Contacto', action: () => scrollToSection('contact') },
    {
      name: 'Aviso de Privacidad',
      action: () => {
        navigate('/privacidad')
        setIsMenuOpen(false)
      }
    },
    {
      name: 'Términos y Condiciones',
      action: () => {
        navigate('/terminos')
        setIsMenuOpen(false)
      }
    },
    {
      name: 'Intereses y Comisiones',
      action: () => {
        navigate('/comisiones')
        setIsMenuOpen(false)
      }
    }
  ]

  return (
    <header className='fixed w-full bg-white shadow-sm z-50'>
      <nav className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          <Link to='/' className='flex items-center'>
            <img src={logo} alt='Logo' className='w-12 md:w-14' />
            <span className='ml-2 text-xl md:text-2xl font-bold text-primary font-montserrat'>Grupo Financial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {location.pathname !== '/' && (
              <button onClick={() => navigate('/')} className='text-gray-700 hover:text-primary transition-colors duration-200'>
                Inicio
              </button>
            )}
            {navigation.map((item) => (
              <button key={item.name} onClick={item.action} className='text-gray-700 hover:text-primary transition-colors duration-200'>
                {item.name}
              </button>
            ))}
            <Link to='/cotizador' className='btn-primary'>
              Solicitar Crédito
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-gray-700 hover:text-primary'>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
            className='md:hidden overflow-hidden'
          >
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {mobileNavigation.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className='block w-full text-left px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200'
                >
                  {item.name}
                </button>
              ))}
              <Link to='/cotizador' className='block px-3 py-2 btn-primary w-full text-center' onClick={() => setIsMenuOpen(false)}>
                Solicita tu crédito ahora!
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
