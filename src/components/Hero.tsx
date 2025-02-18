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
              backgroundImage: 'url("assets/backgrounds/hero-bg.webp")',
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
              <h1
                className='text-4xl md:text-6xl md:leading-[4.1rem]  font-bold text-white mb-6 animate-slide-up drop-shadow-2xl'
                style={{ animationDelay: '0s' }}
              >
                Te ayudamos a conseguir el impulso que necesitas
              </h1>
              <p className='text-lg md:text-2xl text-gray-100 mb-8 animate-slide-up text-balance ' style={{ animationDelay: '0.2s' }}>
                Ofrecemos <strong className='text-xl md:text-3xl '>soluciones financieras</strong> personalizadas para hacer realidad tus
                proyectos <strong className='text-xl md:text-3xl'>sin importar tu historial crediticio.</strong>
              </p>
              <Link
                to='/solicitud'
                state={{ from: 'home' }}
                className='btn-secondary text-xl animate-slide-up inline-flex items-center hover:bg-white hover:text-secondary transition-colors'
                style={{ animationDelay: '0.4s' }}
              >
                ¡Quiero un crédito!
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
