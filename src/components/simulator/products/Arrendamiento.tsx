import { Button, cn, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Slider } from '@nextui-org/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { formatCurrency } from '../../../lib/utils/currency'
import { nextStep, prevStep, setAmount, setTerm } from '../../../store/creditSlice'
import { RootState } from '../../../store/store'
import AmountSelector from '../AmountSelector'

const Arrendamiento = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { step, clientType, amount, term, monthlyPayment, totalPayment, clientData, guaranteeType, isOTPVerified } = useSelector(
    (state: RootState) => state.credit
  )

  const getAmountLimits = () => {
    if (clientType === 'personal') {
      return { min: 500000, max: 10000000, step: 50000 }
    }
    return { min: 500000, max: 50000000, step: 50000 }
  }

  const { min, max, step: stepAmount } = getAmountLimits()

  const [maxLoan, setMaxLoan] = useState(amount * 0.8)
  const [monthRate, setMonthRate] = useState(amount * 0.03)
  const [leasingType, setLeasingType] = useState('pure')

  useEffect(() => {
    if (leasingType === 'pure') {
      setMaxLoan(amount * 0.8)
    } else {
      setMaxLoan(amount * 0.7)
    }

    if (clientType === 'personal') {
      setMonthRate(0.03)
    } else {
      setMonthRate(0.025)
    }
  }, [amount, leasingType, clientType])

  function calcularPagoMensual(monto, tasaInteresMensual, plazoMeses) {
    // Fórmula de amortización
    const pagoMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazoMeses))
    return pagoMensual.toFixed(2) // Redondeamos a 2 decimales
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-primary text-center mb-4'>¿Cuánto vale el activo?</h2>
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
            maxValue={48}
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
                Tipo de Arrendamiento
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
                      <div className='text-tiny'>
                        El <strong>arrendamiento puro</strong> es un contrato en el que puedes utilizar un bien{' '}
                        <strong>sin asumir todo su costo</strong> de inmediato, con la opción de adquirirlo al final del contrato si así lo
                        deseas. En cambio, el <strong>Sale and Leaseback (SLB)</strong> es una operación en la que{' '}
                        <strong>vendes un bien</strong> , obtienes liquidez de la venta y luego lo "rentas" para seguir utilizándolo, con la
                        posibilidad de recuperarlo al final del contrato, extender el plazo, cambiarlo por otro bien o dejar de usarlo.
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            }
            value={leasingType}
            onValueChange={(value) => setLeasingType(value)}
            orientation='horizontal'
            classNames={{
              label: cn('text-primary', 'text-sm', 'font-semibold', 'font-montserrat', 'mb-2', 'text-xl')
            }}
          >
            <Radio value='pure'>Arrendamiento puro</Radio>
            <Radio value='slb'>Sale & Lease back</Radio>
          </RadioGroup>
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div className='bg-gray-50 p-4 rounded-lg text-center'>
            <p className='text-sm text-gray-600 mb-1'>Tu pago mensual*</p>
            <p className='text-3xl font-bold text-primary'>
              {formatCurrency(Number(calcularPagoMensual(maxLoan, monthRate, Number(term))))}
            </p>
            <small className='text-gray-400'>*Calcúlo aproximado</small>
          </div>
          <div className='bg-gray-50 p-4 rounded-lg text-center'>
            <p className='text-sm text-gray-600 mb-1'>Financiamiento</p>
            <p className='text-3xl font-bold text-primary'>{formatCurrency(maxLoan)}</p>
            <small className='text-gray-400'>*Máximo a disponer</small>
          </div>
        </div>

        <div className='flex justify-between mt-4'>
          <Button onClick={() => dispatch(prevStep())} variant='ghost' color='secondary' startContent={<ArrowLeft className='h-5 w-5' />}>
            Regresar
          </Button>
          <Button onClick={() => dispatch(nextStep())} variant='ghost' color='primary' endContent={<ArrowRight className='h-5 w-5' />}>
            Continuar
          </Button>
        </div>
      </div>
    </>
  )
}

export default Arrendamiento
