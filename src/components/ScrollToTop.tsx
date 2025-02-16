import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    // Si la ruta es la raíz ("/")
    if (pathname === '/') {
      console.log('Venimos a raiz')
      const referrer = document.referrer // Obtener la URL de la página anterior
      // Verificamos si venimos desde una de las páginas de productos
      if (
        referrer.includes('/productos/credito-simple') ||
        referrer.includes('/productos/credito-revolvente') ||
        referrer.includes('/productos/arrendamiento')
      ) {
        scrollToSection('products') // Desplazarse a la sección de productos
      } else {
        window.scrollTo(0, 0) // Si no venimos de productos, ir a la parte superior
      }
    } else {
      // Si estamos en una página de productos, aseguramos el scroll suave al principio
      if (
        pathname === '/productos/credito-simple' ||
        pathname === '/productos/credito-revolvente' ||
        pathname === '/productos/arrendamiento'
      ) {
        window.scrollTo(0, 0) // Resetear el scroll suavemente entre productos
      }
    }
  }, [pathname])

  return null
}

export default ScrollToTop
