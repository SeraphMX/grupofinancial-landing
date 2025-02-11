import { Button, Radio, RadioGroup } from '@nextui-org/react'
import { ArrowLeft, ArrowRight, Building2, Calculator, User, MessageCircle as WhatsappIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import AmountSelector from '../components/AmountSelector'
import ClientDataForm from '../components/ClientDataForm'
import {
  nextStep,
  prevStep,
  resetForm,
  setAmount,
  setClientData,
  setClientType,
  setGuaranteeType,
  setTerm,
  type ClientType,
  type GuaranteeType
} from '../store/creditSlice'
import type { RootState } from '../store/store'

const CreditWizard = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { step, clientType, amount, term, monthlyPayment, totalPayment, clientData, guaranteeType } = useSelector(
    (state: RootState) => state.credit
  )

  useEffect(() => {
    if (location.state?.from === 'home') {
      dispatch(resetForm())
    }
    if (location.state?.withGuarantee) {
      dispatch(setGuaranteeType('con-garantia'))
    }
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
    return `https://wa.me/529996408077?text=${message}`
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='space-y-4 py-10 px-4 '>
            <h2 className='text-2xl font-bold text-primary text-center my-2'>¿Qué tipo de cliente eres?</h2>
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
          </div>
        )

      case 2:
        return (
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-primary text-center my-2'>¿Cuánto necesitas?</h2>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <AmountSelector
                amount={amount}
                minAmount={min}
                maxAmount={max}
                step={stepAmount}
                onChange={(value) => dispatch(setAmount(value))}
              />

              <div className='mb-8'>
                <div className='flex justify-between items-center mb-4'>
                  <span className='text-gray-600'>Plazo</span>
                  <span className='text-2xl font-bold text-primary'>{term} meses</span>
                </div>
                <input
                  type='range'
                  min={12}
                  max={guaranteeType === 'con-garantia' ? 180 : 60}
                  step={12}
                  value={term}
                  onChange={(e) => dispatch(setTerm(Number(e.target.value)))}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary'
                />
                <div className='flex justify-between mt-2 text-sm text-gray-500'>
                  <span>12 meses</span>
                  <span>{guaranteeType === 'con-garantia' ? '180' : '60'} meses</span>
                </div>
              </div>

              <div className='mb-8'>
                <RadioGroup
                  label='Tipo de Crédito'
                  value={guaranteeType}
                  onValueChange={(value) => dispatch(setGuaranteeType(value as GuaranteeType))}
                  orientation='horizontal'
                  classNames={{
                    wrapper: 'gap-4'
                  }}
                >
                  <Radio value='sin-garantia'>Sin Garantía</Radio>
                  <Radio value='con-garantia'>Con Garantía Hipotecaria</Radio>
                </RadioGroup>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                <div className='bg-gray-50 p-4 rounded-lg text-center'>
                  <p className='text-sm text-gray-600 mb-1'>Pago Mensual</p>
                  <p className='text-xl font-bold text-primary'>{formatCurrency(monthlyPayment)}</p>
                </div>
                {/* <div className='bg-gray-50 p-4 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>Pago Total</p>
                  <p className='text-xl font-bold text-primary'>{formatCurrency(totalPayment)}</p>
                </div> */}
              </div>

              <div className='flex justify-between mt-8'>
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
          </div>
        )

      case 3:
        return (
          <div className='space-y-4 '>
            <h2 className='text-2xl font-bold text-primary text-center my-4'>
              Datos del {clientType === 'personal' ? 'Cliente' : 'Negocio'}
            </h2>
            <div className='bg-white p-6 rounded-xl shadow-lg'>
              <ClientDataForm
                clientType={clientType!}
                defaultValues={clientData}
                onSubmit={(data) => {
                  dispatch(setClientData(data))
                  dispatch(nextStep())
                }}
                onPrevious={() => dispatch(prevStep())}
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className='space-y-8 '>
            <div className='text-center'>
              <h2 className='text-2xl font-bold text-primary mb-4'>¡Gracias por tu solicitud!</h2>
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
                  <p className='text-sm text-gray-600'>Pago Mensual Estimado</p>
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
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className='pt-20'>
      <div className='container py-5'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-between items-center mb-5 '>
            <Link to='/' className='inline-flex items-center text-primary hover:text-primary/80' onClick={() => dispatch(resetForm())}>
              <ArrowLeft className='h-5 w-5 mr-2' />
              Regresar
            </Link>
            <div className='flex items-center space-x-2 '>
              <Calculator className='h-6 w-6 text-primary' />
              <h1 className='text-xl font-bold text-primary'>Crédito Simple</h1>
            </div>
          </div>

          <div className='bg-gray-50 rounded-2xl p-2 lg:min-h-[420px]'>{renderStep()}</div>
        </div>
      </div>
    </div>
  )
}

export default CreditWizard
