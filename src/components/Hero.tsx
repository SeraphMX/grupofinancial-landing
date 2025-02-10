import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'

const Hero = () => {
  return (
    <section className='relative h-screen'>
      <ParallaxBanner className='h-full'>
        <ParallaxBannerLayer speed={-30} className='absolute inset-0'>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&auto=format&fit=crop")',
              backgroundSize: 'cover'
            }}
          />
        </ParallaxBannerLayer>

        <ParallaxBannerLayer
          speed={-5}
          className='absolute inset-0'
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 51, 102, 0.9), rgba(0, 51, 102, 0.8))'
          }}
        />

        <ParallaxBannerLayer speed={-10} className='absolute inset-0 flex items-center justify-center'>
          <div className='container'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up'>
                Te ayudamos a conseguir el impulso que necesitas
              </h1>
              <p className='text-lg md:text-xl text-gray-100 mb-8 animate-slide-up' style={{ animationDelay: '0.2s' }}>
                Ofrecemos soluciones financieras personalizadas para hacer realidad tus proyectos sin importar tu historial crediticio.
              </p>
              <Link
                to='/cotizador'
                state={{ from: 'home' }}
                className='btn-secondary text-lg animate-slide-up inline-flex items-center hover:bg-white hover:text-secondary transition-colors'
                style={{ animationDelay: '0.4s' }}
              >
                Quiero un crédito
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </section>
  )
}

export default Hero
