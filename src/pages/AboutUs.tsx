import { Accordion, AccordionItem } from '@nextui-org/react'
import { Blocks, HelpCircle } from 'lucide-react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const AboutUs = () => {
  const processSteps = [
    {
      title: 'Solicitud en Línea',
      description: 'Completa nuestra solicitud digital en menos de 3 minutos.'
    },
    {
      title: 'Evaluación Rápida',
      description: 'Analizamos tu solicitud en menos de 24 horas y nos ponemos en contacto contigo.'
    },
    {
      title: 'Documentación',
      description: 'Recopilamos la documentación necesaria de manera digital.'
    },
    {
      title: 'Aprobación',
      description: 'Te notificamos la aprobación y los términos del crédito.'
    },
    {
      title: 'Firma de Contrato',
      description: 'Firmamos el contrato de manera electrónica.'
    },
    {
      title: 'Desembolso',
      description: 'Transferimos el dinero a tu cuenta en 24-48 horas.'
    }
  ]

  const faqs = [
    {
      question: '¿Cuáles son los requisitos mínimos para solicitar un crédito?',
      answer:
        'Los requisitos básicos incluyen: ser mayor de edad, tener identificación oficial vigente, comprobante de domicilio, historial crediticio favorable y comprobantes de ingresos.'
    },
    {
      question: '¿Cuánto tiempo toma el proceso de aprobación?',
      answer:
        'El proceso de aprobación inicial toma menos de 24 horas. Una vez aprobado, el desembolso puede realizarse en 24-48 horas adicionales.'
    },
    {
      question: '¿Qué tasas de interés manejan?',
      answer:
        'Nuestras tasas son competitivas y personalizadas, comenzando desde el 2% mensual. La tasa exacta dependerá de tu perfil crediticio y el tipo de crédito.'
    },
    {
      question: '¿Puedo pagar mi crédito anticipadamente?',
      answer: 'Sí, puedes realizar pagos anticipados sin penalización. Esto te ayudará a reducir los intereses generados.'
    },
    {
      question: '¿Qué documentación necesito presentar?',
      answer:
        'La documentación básica incluye: identificación oficial, comprobante de domicilio, estados de cuenta bancarios y comprobantes de ingresos. Para empresas, se requiere documentación adicional.'
    }
  ]

  return (
    <div className='pt-20'>
      <div className='bg-primary/5 py-16'>
        <div className='container'>
          <div className='max-w-3xl mx-auto text-center'>
            <h1 className='text-4xl font-bold text-primary mb-6'>Conoce más sobre nosotros</h1>
            <p className='text-lg text-gray-600'>
              Somos una empresa financiera comprometida con el crecimiento de personas y empresas, ofreciendo soluciones crediticias
              innovadoras y accesibles. Nuestros asesores tienen mas de 20 años de experiencia en el sector financiero y están listos para
              ayudarte en todo momento.
            </p>
          </div>
        </div>
      </div>

      <section className='bg-primary/5  py-16'>
        <div className='container'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-primary mb-8 text-center'>Nuestro Proceso</h2>
            <div>
              <p className='text-lg text-gray-600 mb-8'>
                Nuestro proceso de solicitud es rápido y sencillo, diseñado para que obtengas tu crédito en pocos pasos. Aquí te explicamos
                cómo funciona:
              </p>
            </div>

            <VerticalTimeline>
              {processSteps.map((step, index) => (
                <VerticalTimelineElement
                  key={index}
                  className='vertical-timeline-element--work'
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<Blocks />}
                >
                  <h3 className='text-secondary text-xl font-semibold'>
                    {index + 1} {step.title}
                  </h3>

                  <p>{step.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>

            <div className='space-y-6'>
              <div className='flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm'>
                <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0'>
                  <span className='text-primary font-semibold'>A</span>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-primary mb-2'>Estas listo para iniciar con nosotros?</h3>
                  <p className='text-gray-600'>Solicita tu credito ahora </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gray-50 py-16'>
        <div className='container'>
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-3xl font-bold text-primary mb-8 text-center'>Preguntas Frecuentes</h2>
            <Accordion variant='bordered'>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  indicator={<HelpCircle className='text-primary' />}
                >
                  <p className='text-gray-600'>{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
