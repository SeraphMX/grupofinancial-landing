import { Star } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const testimonials = [
  {
    name: 'Ana García',
    role: 'Emprendedora',
    content: 'El proceso fue increíblemente rápido y el equipo me ayudó en cada paso. Gracias a ellos pude expandir mi negocio.',
    rating: 5
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Profesional Independiente',
    content: 'Las tasas son muy competitivas y el servicio al cliente es excepcional. Definitivamente los recomiendo.',
    rating: 5
  },
  {
    name: 'María López',
    role: 'Pequeña Empresaria',
    content: 'La mejor decisión que tomé para mi empresa. El proceso fue simple y la atención personalizada.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className='section-padding bg-white'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>Lo que dicen nuestros clientes</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>Historias reales de clientes satisfechos que confiaron en nosotros</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className='testimonials-swiper'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='bg-gray-50 p-6 rounded-xl h-full'>
                <div className='flex mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
                  ))}
                </div>
                <p className='text-gray-600 mb-4'>{testimonial.content}</p>
                <div>
                  <p className='font-semibold text-primary'>{testimonial.name}</p>
                  <p className='text-sm text-gray-500'>{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
