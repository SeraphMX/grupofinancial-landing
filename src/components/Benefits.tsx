import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { Clock, Percent, Shield, Users } from 'lucide-react'
import { useState } from 'react'

const benefits = [
  {
    icon: Clock,
    title: 'Proceso Rápido',
    description: 'Precalificación en menos de 24 horas con documentación mínima',
    details: `Sabemos lo importante que es para ti obtener los recursos rápidamente por ello nuestro proceso de evaluación está optimizado para brindarte una respuesta rápida:
    
    • Evaluación inicial en menos de 24 horas
    • Documentación mínima requerida
    • Proceso 100% digital
    • Aprobación en menos de 72 horas una vez que completamos tu expediente
    • Desembolso en 48-72 horas después de la aprobación
    
    Utilizamos tecnología avanzada y procesos automatizados para agilizar la evaluación sin comprometer la seguridad.`
  },
  {
    icon: Shield,
    title: 'Datos Seguros',
    description: 'Tus datos están protegidos con los más altos estándares de seguridad',
    details: `Tu seguridad es nuestra prioridad. Implementamos múltiples capas de protección:

    • Encriptación de datos de extremo a extremo
    • Cumplimiento con regulaciones de protección de datos
    • Monitoreo 24/7 de actividades sospechosas
    • Acceso restringido a información sensible
    • Tus documentos no se envian por mensajes o canales inseguros
    
    Trabajamos con los más altos estándares de la industria financiera para proteger tu información.`
  },
  {
    icon: Users,
    title: 'Atención Personal',
    description: 'Nuestros asesores expertos disponibles para guiarte en cada paso',
    details: `Contamos con un equipo de asesores altamente capacitados:

    • Más de 15 años de experiencia en el sector financiero
    • Atención personalizada y seguimiento continuo
    • Disponibilidad en horario extendido
    • Asesoría especializada por industria
    • Soporte multicanal (teléfono, email, WhatsApp)
    
    Nuestros asesores te ayudarán a encontrar la mejor solución financiera para tus necesidades.`
  },
  {
    icon: Percent,
    title: 'Tasas Competitivas',
    description: 'Tasas de interes desde el 2% mensual, las más bajas del mercado',
    details: `Ofrecemos condiciones financieras adaptadas a tu perfil:

    • Tasas desde 1.5% mensual
    • Pagos mensuales fijos
    • No solicitamos pagos adelantados
    • Plazos flexibles desde 12 a 120 meses
    • Beneficios por buen historial crediticio
    
    Nuestras tasas y comisiones son transparentes y competitivas, diseñadas para ayudarte a crecer.`
  }
]

const Benefits = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedBenefit, setSelectedBenefit] = useState<(typeof benefits)[0] | null>(null)

  const handleBenefitClick = (benefit: (typeof benefits)[0]) => {
    setSelectedBenefit(benefit)
    onOpen()
  }

  return (
    <section id='services' className='section-padding bg-gray-50'>
      <div className='container'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary mb-4'>¿Por qué elegirnos?</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Nos destacamos por ofrecer soluciones financieras que se adaptan a tus necesidades, <strong>sin ningun anticipo</strong> y con
            beneficios exclusivos para nuestros clientes.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => handleBenefitClick(benefit)}
              className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-left w-full'
            >
              <div className='w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4'>
                <benefit.icon className='h-6 w-6 text-secondary' />
              </div>
              <h3 className='text-xl font-semibold text-primary mb-2 text-center'>{benefit.title}</h3>
              <p className='text-gray-600 text-center'>{benefit.description}</p>
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='lg'
        classNames={{
          body: 'py-4',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40'
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <div className='flex items-center gap-2'>
                  {selectedBenefit && <selectedBenefit.icon className='h-6 w-6 text-primary' />}
                  <span className='text-primary'>{selectedBenefit?.title}</span>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className='whitespace-pre-line text-gray-600'>{selectedBenefit?.details}</div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  )
}

export default Benefits
