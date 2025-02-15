import { Button, cn, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Slider } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Building2, CircleDollarSign, User, MessageCircle as WhatsappIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import AmountSelector from '../components/AmountSelector'
import ClientDataForm from '../components/ClientDataForm'
import OTPVerification from '../components/OTPVerification'
import RelatedProducts from '../components/RelatedProducts'
import { createSolicitud } from '../services/solicitudes'
import { sendOTP } from '../lib/utils/phone'
import {
  nextStep,
  prevStep,
  resetForm,
  setAmount,
  setClientData,
  setClientType,
  setCreditType,
  setGuaranteeType,
  setOTPVerified,
  setTerm,
  type ClientType,
  type GuaranteeType
} from '../store/creditSlice'
import type { RootState } from '../store/store'

const CreditWizard = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { step, clientType, amount, term, monthlyPayment, totalPayment, clientData, guaranteeType, isOTPVerified } = useSelector(
    (state: RootState) => state.credit
  )
  const [isLoadingOTP, setIsLoadingOTP] = useState(false)
  const [otpError, setOtpError] = useState<string | null>(null)

  useEffect(() => {
    if (location.state?.from === 'home') {
      dispatch(resetForm())
    }
    if (location.state?.withGuarantee) {
      dispatch(setGuaranteeType('con-garantia'))
    }
    dispatch(setCreditType('simple'))
  }, [dispatch, location.state])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const handleClientTypeSelect = (type: ClientType) => {
    dispatch(setClientType(type))
  }

  const handleClientDataSubmit = async (data: any) => {
    dispatch(setClientData(data))
    setIsLoadingOTP(true)
    try {
      const result = await sendOTP(data.phone)
      if (result.success) {
        dispatch(nextStep())
      } else {
        setOtpError('Error al enviar el código de verificación')
      }
    } catch (error) {
      console.error('Error sending OTP:', error)
      setOtpError('Error al enviar el código de verificación')
    } finally {
      setIsLoadingOTP(false)
    }
  }

  const handleOTPVerified = async () => {
    dispatch(setOTPVerified(true))
    try {
      await createSolicitud({
        tipo_credito: 'simple',
        tipo_cliente: clientType!,
        tipo_garantia: guaranteeType,
        monto: amount,
        plazo: term,
        pago_mensual: monthlyPayment,
        nombre: clientData.name,
        email: clientData.email,
        telefono: clientData.phone,
        rfc: clientData.rfc,
        nombre_empresa: clientData.companyName,
        industria: clientData.industry,
        ingresos_anuales: clientData.annualRevenue
      })
      dispatch(nextStep())
    } catch (error) {
      console.error('Error creating solicitud:', error)
    }
  }

  const getAmountLimits = () => {
    if (guaranteeType === 'con-garantia') {
      return { min: 500000, max: 50000000, step: 500000 }
    }
    return { min: 100000, max: 5000000, step: 50000 }
  }

  const { min, max, step: stepAmount } = getAmountLimits()

  const getWhatsappLink = () => {
    const message = encodeURIComponent(
      `¡Hola! He realizado la solicitud en lina para un crédito ${clientType === 'personal' ? 'personal' : 'empresarial'} ${
        guaranteeType === 'con-garantia' ? 'con garantía hipotecaria ' : ''
      }con las siguientes características:\n\n` +
        `Monto: ${formatCurrency(amount)}\n` +
        `Plazo: ${term} meses\n` +
        `Mi nombre es ${clientData.name} y quisiera más información.`
    )
    return `https://wa.me/525551234567?text=${message}`
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div className='space-y-4 py-10 md:py-12 px-4 ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h2 className='text-2xl font-bold text-primary text-center my-2'>¿Cuál es tu perfil ?</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <button
                onClick={() => handleClientTypeSelect('personal')}
                className={`bg-white p-6 rounded-xl border-2 transition-all ${
                  clientType === 'personal' ? 'border-secondary bg-secondary/10' : 'border-gray-200 hover:border-secondary/50'
                }`}
              >
                <User className='w-12 h-12 mx-auto mb-4 text-primary' />
                <h3 className='text-xl font-semibold text-primary mb-2'>Persona Física</h3>
                <p className='text-gray-600'>Créditos personales para cubrir cualquier necesidad </p>
              </button>
              <button
                onClick={() => handleClientTypeSelect('business')}
                className={`bg-white p-6 rounded-xl border-2 transition-all ${
                  clientType === 'business' ? 'border-secondary bg-secondary/10' : 'border-gray-200 hover:border-secondary/50'
                }`}
              >
                <Building2 className='w-12 h-12 mx-auto mb-4 text-primary' />
                <h3 className='text-xl font-semibold text-primary mb-2'>Empresa</h3>
                <p className='text-gray-600'>Financiamiento empresarial para impulsar tu negocio</p>
              </button>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div className='space-y-4' initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
            <h2 className='text-2xl font-bold text-primary text-center mb-4'>¿Cuánto necesitas?</h2>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <AmountSelector
                amount={amount}
                minAmount={min}
                maxAmount={max}
                step={stepAmount}
                onChange={(value) => dispatch(setAmount(value))}
              />

              <div className='mb-8'>
                <div className='flex justify-between items-center mb-1'>
                  <span className='text-gray-600'>Plazo</span>
                  <span className='text-2xl font-bold text-primary'>{term} meses</span>
                </div>
                <Slider
                  size='md'
                  step={12}
                  minValue={12}
                  maxValue={guaranteeType === 'con-garantia' ? 180 : 60}
                  value={term}
                  onChange={(value) => dispatch(setTerm(Number(value)))}
                  className='max-w-full'
                  color='primary'
                  showSteps={true}
                  classNames={{
                    base: 'max-w-full',
                    labelWrapper: 'mb-2',
                    mark: 'mt-1'
                  }}
                />
              </div>

              <div className='mb-4'>
                <RadioGroup
                  label={
                    <div className='flex items-center gap-2 mb-1'>
                      Tipo de Crédito
                      <Popover showArrow>
                        <PopoverTrigger>
                          <Button
                            radius='full'
                            size='sm'
                            isIconOnly
                            aria-label='¿Para qué necesito una garantia?'
                            variant='ghost'
                            color='secondary'
                          >
                            <span className='font-bold text-lg'>?</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className='px-1 py-2 max-w-[300px]'>
                            <div className='text-lg font-bold'>¿Cúal es la diferencia?</div>
                            <div className='text-small'>
                              Si tienes buen historial crediticio, accede a un crédito sin garantía de hasta 5 millones. Para montos mayores
                              o con historial irregular, una garantía hipotecaria facilita la aprobación.
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  }
                  value={guaranteeType}
                  onValueChange={(value) => dispatch(setGuaranteeType(value as GuaranteeType))}
                  orientation='horizontal'
                  classNames={{
                    label: cn('text-primary', 'text-sm', 'font-semibold', 'font-montserrat', 'mb-2', 'text-xl')
                  }}
                >
                  <Radio value='sin-garantia'>Sin Garantía</Radio>
                  <Radio value='con-garantia'>Con Garantía Hipotecaria</Radio>
                </RadioGroup>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                <div className='bg-gray-50 p-4 rounded-lg text-center'>
                  <p className='text-sm text-gray-600 mb-1'>Tu pago mensual (aproximado)</p>
                  <p className='text-3xl font-bold text-primary'>{formatCurrency(monthlyPayment)}</p>
                </div>
              </div>

              <div className='flex justify-between mt-4'>
                <Button
                  onClick={() => dispatch(prevStep())}
                  variant='ghost'
                  color='secondary'
                  startContent={<ArrowLeft className='h-5 w-5' />}
                >
                  Regresar
                </Button>
                <Button
                  onClick={() => dispatch(nextStep())}
                  variant='ghost'
                  color='primary'
                  endContent={<ArrowRight className='h-5 w-5' />}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div className='space-y-4 ' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <h2 className='text-2xl font-bold text-primary text-center mb-4'>
              {clientType === 'personal' ? 'Completa tus datos' : 'Datos del negocio'}
            </h2>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <ClientDataForm
                clientType={clientType!}
                defaultValues={clientData}
                onSubmit={handleClientDataSubmit}
                onPrevious={() => dispatch(prevStep())}
              />
              {otpError && (
                <div className="mt-4 text-red-500 text-center">
                  {otpError}
                </div>
              )}
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div className='space-y-4' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <OTPVerification
              phone={clientData.phone}
              onVerified={handleOTPVerified}
              onBack={() => dispatch(prevStep())}
            />
          </motion.div>
        )

      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className='space-y-8 '>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-primary mb-4'>¡Diste el primer paso!</h2>
              <p className='text-gray-600 mb-8'>Hemos recibido tu información y un asesor se pondrá en contacto contigo pronto.</p>
            </div>

            <div className='bg-white p-6 rounded-xl shadow-lg space-y-6'>
              <h3 className='text-xl font-semibold text-primary mb-4'>Resumen de tu solicitud</h3>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='text-sm text-gray-600'>Tipo de Crédito</p>
                  <p className='font-semibold'>
                    {clientType === 'personal' ? 'Personal' : 'Empresarial'}{' '}
                    {guaranteeType === 'con-garantia' ? 'con Garantía' : 'sin Garantía'}
                  </p>
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
                  <p className='text-sm text-gray-600'>Pago Mensual</p>
                  <p className='font-semibold'>{formatCurrency(monthlyPayment)}</p>
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
                <Link to='/' className='btn-primary w-full' onClick={() => dispatch(resetForm())}>
                  Volver al Inicio
                </Link>
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className='pt-20 min-h-screen'>
      <div className='container pt-5'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='inline-flex items-center text-primary hover:text-primary/80' onClick={() => dispatch(resetForm())}>
              <ArrowLeft className='h-5 w-5 mr-2' />
              Regresar
            </Link>
            <div className='flex items-center space-x-2'>
              <CircleDollarSign className='h-6 w-6 text-primary' />
              <h1 className='text-xl font-semibold text-primary'>Crédito Simple</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-between items-center mb-5'></div>

          <AnimatePresence mode='wait'>
            <motion.div
              className='bg-gray-50 rounded-2xl py-6 md:px-24 md:py-10 lg:min-h-[420px]'
              key={step}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.1 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
          <div className='bg-gray-50 hidden 2xl:block'>
            <RelatedProducts />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditWizard