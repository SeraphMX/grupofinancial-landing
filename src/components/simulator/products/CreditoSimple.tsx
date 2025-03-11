import { Button, cn, Popover, PopoverContent, PopoverTrigger, Radio, RadioGroup, Slider } from '@nextui-org/react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatCurrency } from '../../../lib/utils/currency'
import { CreditConditions, nextStep, prevStep, setAmount, setCreditConditions, setTerm } from '../../../store/creditSlice'
import { RootState } from '../../../store/store'
import AmountSelector from '../AmountSelector'

const CreditoSimple = () => {
  const dispatch = useDispatch()

  const { amount, term, monthlyPayment, creditConditions } = useSelector((state: RootState) => state.credit)

  const getAmountLimits = () => {
    if (creditConditions === 'con-garantia') {
      return { min: 500000, max: 50000000, step: 500000 }
    }
    return { min: 100000, max: 5000000, step: 50000 }
  }

  const { min, max, step: stepAmount } = getAmountLimits()

  useEffect(() => {
    dispatch(setCreditConditions('sin-garantia'))
  }, [dispatch])

  return (
    <>
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
            maxValue={creditConditions === 'con-garantia' ? 120 : 60}
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
                        Si tienes buen historial crediticio, accede a un crédito sin garantía de hasta 5 millones. Para montos mayores o con
                        historial irregular, una garantía hipotecaria facilita la aprobación.
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            }
            value={creditConditions}
            onValueChange={(value) => dispatch(setCreditConditions(value as CreditConditions))}
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
            <p className='text-sm text-gray-600 mb-1'>Tu pago mensual*</p>
            <p className='text-3xl font-bold text-primary'>{formatCurrency(monthlyPayment)}</p>
            <small className='text-gray-400'>*Calcúlo aproximado</small>
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

export default CreditoSimple
