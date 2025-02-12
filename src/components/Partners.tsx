import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const partners = [
  {
    name: 'Banco Azteca',
    logo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=200&h=100&auto=format&fit=crop'
  },
  {
    name: 'BBVA',
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=200&h=100&auto=format&fit=crop'
  },
  {
    name: 'Santander',
    logo: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=200&h=100&auto=format&fit=crop'
  },
  {
    name: 'Banorte',
    logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=200&h=100&auto=format&fit=crop'
  },
  {
    name: 'HSBC',
    logo: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=200&h=100&auto=format&fit=crop'
  }
]

const Partners = () => {
  return (
    <section className='bg-white py-16'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>Nuestros Socios Comerciales</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Trabajamos con las instituciones financieras más importantes del país para ofrecerte las mejores opciones de financiamiento
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            640: {
              slidesPerView: 3
            },
            1024: {
              slidesPerView: 4
            }
          }}
          className='partners-swiper'
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className='p-4 flex items-center justify-center'>
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className='h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Partners