import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import RelatedProducts from '../components/RelatedProducts'
import ClientDataForm from '../components/simulator/ClientDataForm'
import OTPVerification from '../components/simulator/OTPVerification'
import Arrendamiento from '../components/simulator/products/Arrendamiento'
import CreditoRevolvente from '../components/simulator/products/CreditoRevolvente'
import CreditoSimple from '../components/simulator/products/CreditoSimple'
import ProfileSelect from '../components/simulator/ProfileSelect'
import RequestDetails from '../components/simulator/RequestDetails'
import { products } from '../lib/data/products'
import { sendOTP } from '../lib/utils/phone'
import { createSolicitud } from '../services/solicitudes'
import { nextStep, prevStep, resetForm, resetSteps, setClientData, setGuaranteeType, setOTPVerified } from '../store/creditSlice'
import type { RootState } from '../store/store'

const CreditWizard = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { step, clientType, amount, term, monthlyPayment, totalPayment, clientData, guaranteeType, creditType } = useSelector(
    (state: RootState) => state.credit
  )
  const [isLoadingOTP, setIsLoadingOTP] = useState(false)
  const [otpError, setOtpError] = useState<string | null>(null)

  const [title, setTitle] = useState('')

  const [Icon, setIcon] = useState<LucideIcon | null>(null)

  useEffect(() => {
    console.log(creditType)
    console.log(products)
    console.log(products.find((product: { id: string }) => product.id === creditType)?.title)

    const { title: productTitle, icon: productIcon } = products.find(({ id }) => id === creditType) || {}

    setTitle(productTitle || '')
    setIcon(productIcon || null)

    if (location.state?.from === 'home') {
      dispatch(resetForm())
    } else {
      dispatch(resetSteps())
    }
    if (location.state?.withGuarantee) {
      dispatch(setGuaranteeType('con-garantia'))
    }
    //dispatch(setCreditType('simple'))
  }, [dispatch, location.state, creditType])

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

  const CreditComponents = {
    simple: CreditoSimple,
    revolvente: CreditoRevolvente,
    arrendamiento: Arrendamiento
  }

  const CreditComponent = CreditComponents[creditType] || CreditoSimple

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div className='space-y-4 py-10 md:py-12 px-4 ' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ProfileSelect />
          </motion.div>
        )

      case 2:
        return (
          <motion.div className='space-y-4' initial={{ x: 100 }} animate={{ x: 0 }} exit={{ opacity: 0 }}>
            <CreditComponent />
          </motion.div>
        )

      case 3:
        return (
          <motion.div className='space-y-4 ' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <ClientDataForm
              clientType={clientType!}
              defaultValues={clientData}
              onSubmit={handleClientDataSubmit}
              onPrevious={() => dispatch(prevStep())}
              otpError={otpError}
            />
          </motion.div>
        )

      case 4:
        return (
          <motion.div className='space-y-4' initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <OTPVerification phone={clientData.phone} onVerified={handleOTPVerified} onBack={() => dispatch(prevStep())} />
          </motion.div>
        )

      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className='space-y-4 '>
            <RequestDetails />
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
              {Icon && <Icon className='h-6 w-6 text-primary' />}
              <h1 className='text-xl font-semibold text-primary'>{title}</h1>
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
