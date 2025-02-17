import { Button, Radio, RadioGroup } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calculator, MessageCircle as WhatsappIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AmountSelector from '../components/simulator/AmountSelector'
import ClientDataForm from '../components/simulator/ClientDataForm'
import ProfileSelect from '../components/simulator/ProfileSelect'
import { createSolicitud } from '../services/solicitudes'
import type { ClientType } from '../store/creditSlice'

const CotizadorRevolvente = () => {
  const [step, setStep] = useState(1)
  const [clientType, setClientType] = useState<ClientType | null>(null)
  const [amount, setAmount] = useState(500000)
  const [term, setTerm] = useState(12)
  const [clientData, setClientData] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const calculateMonthlyPayment = () => {
    const rate = 0.015 // 1.5% mensual
    const months = term
    const monthlyRate = rate
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, months)
    const denominator = Math.pow(1 + monthlyRate, months) - 1
    const monthlyPayment = amount * (numerator / denominator)
    return Math.round(monthlyPayment)
  }

  const handleClientDataSubmit = async (data: any) => {
    try {
      setIsSubmitting(true)
      await createSolicitud({
        tipo_credito: 'revolvente',
        tipo_cliente: clientType!,
        monto: amount,
        plazo: term,
        pago_mensual: calculateMonthlyPayment(),
        nombre: data.name,
        email: data.email,
        telefono: data.phone,
        rfc: data.rfc,
        nombre_empresa: data.companyName,
        industria: data.industry,
        ingresos_anuales: data.annualRevenue
      })
      setClientData(data)
      setStep(4)
    } catch (error) {
      console.error('Error al enviar la solicitud:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      `¡Hola! Me interesa obtener más información sobre un crédito revolvente con las siguientes características:\n\n` +
        `Monto: ${formatCurrency(amount)}\n` +
        `Plazo: ${term} meses\n` +
        `Pago mensual estimado: ${formatCurrency(calculateMonthlyPayment())}\n\n` +
        `Mi nombre es ${clientData.name}\n` +
        `Mi teléfono es ${clientData.phone}\n` +
        `Mi correo es ${clientData.email}`
    )
    return `https://wa.me/525551234567?text=${message}`
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='space-y-8'>
            <motion.div className='space-y-4 py-10 md:py-12 px-4 ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ProfileSelect />
            </motion.div>
          </div>
        )

      case 2:
        return (
          <div className='space-y-8'>
            <h2 className='text-2xl font-bold text-primary text-center mb-8'>¿Cuánto necesitas?</h2>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <AmountSelector amount={amount} minAmount={100000} maxAmount={2000000} step={50000} onChange={setAmount} />

              <div className='mb-8'>
                <RadioGroup
                  label='Plazo'
                  value={term.toString()}
                  onValueChange={(value) => setTerm(parseInt(value))}
                  orientation='horizontal'
                >
                  <Radio value='12'>12 meses</Radio>
                  <Radio value='24'>24 meses</Radio>
                </RadioGroup>
              </div>

              <div className='grid grid-cols-2 gap-4 mb-8'>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>Pago Mensual Estimado</p>
                  <p className='text-xl font-bold text-primary'>{formatCurrency(calculateMonthlyPayment())}</p>
                </div>
                <div className='bg-gray-50 p-4 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>Plazo</p>
                  <p className='text-xl font-bold text-primary'>{term} meses</p>
                </div>
              </div>

              <div className='flex justify-between'>
                <Button onClick={() => setStep(1)} variant='bordered' startContent={<ArrowLeft className='h-5 w-5' />}>
                  Anterior
                </Button>
                <Button onClick={() => setStep(3)} color='primary'>
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className='space-y-8'>
            <h2 className='text-2xl font-bold text-primary text-center mb-8'>
              Datos del {clientType === 'personal' ? 'Cliente' : 'Negocio'}
            </h2>
            <ClientDataForm
              clientType={clientType!}
              defaultValues={clientData}
              onSubmit={handleClientDataSubmit}
              onPrevious={() => setStep(2)}
            />
          </div>
        )

      case 4:
        return (
          <div className='space-y-8'>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-primary mb-4'>¡Gracias por tu solicitud!</h2>
              <p className='text-gray-600 mb-8'>Hemos recibido tu información y un asesor se pondrá en contacto contigo pronto.</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg space-y-6'>
              <h3 className='text-xl font-semibold text-primary mb-4'>Resumen de tu solicitud</h3>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-600'>Tipo de Crédito</p>
                  <p className='font-semibold'>Revolvente {clientType === 'personal' ? 'Personal' : 'Empresarial'}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Monto Solicitado</p>
                  <p className='font-semibold'>{formatCurrency(amount)}</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Plazo</p>
                  <p className='font-semibold'>{term} meses</p>
                </div>
                <div>
                  <p className='text-sm text-gray-600'>Pago Mensual Estimado</p>
                  <p className='font-semibold'>{formatCurrency(calculateMonthlyPayment())}</p>
                </div>
              </div>

              <div className='border-t pt-6'>
                <h4 className='font-semibold text-primary mb-4'>Datos de Contacto</h4>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <p className='text-sm text-gray-600'>Nombre</p>
                    <p className='font-semibold'>{clientData.name}</p>
                  </div>
                  <div>
                    <p className='text-sm text-gray-600'>Teléfono</p>
                    <p className='font-semibold'>{clientData.phone}</p>
                  </div>
                  <div className='col-span-2'>
                    <p className='text-sm text-gray-600'>Correo Electrónico</p>
                    <p className='font-semibold'>{clientData.email}</p>
                  </div>
                </div>
              </div>

              <div className='mt-8 space-y-4'>
                <p className='text-center text-gray-600'>¿Necesitas ayuda inmediata? Contáctanos por WhatsApp</p>
                <a
                  href={getWhatsappLink()}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-secondary w-full flex items-center justify-center'
                >
                  <WhatsappIcon className='h-5 w-5 mr-2' />
                  Contactar por WhatsApp
                </a>
                <Link to='/' className='btn-primary w-full'>
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='pt-20'>
      <div className='container py-12'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <Link to='/productos/credito-revolvente' className='inline-flex items-center text-primary hover:text-primary/80'>
              <ArrowLeft className='h-5 w-5 mr-2' />
              Volver a Crédito Revolvente
            </Link>
            <div className='flex items-center space-x-2'>
              <Calculator className='h-6 w-6 text-primary' />
              <h1 className='text-xl font-bold text-primary'>Crédito Revolvente</h1>
            </div>
          </div>

          <div className='bg-gray-50 rounded-2xl p-8'>{renderStep()}</div>
        </div>
      </div>
    </div>
  )
}

export default CotizadorRevolvente
