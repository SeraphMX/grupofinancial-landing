import { Slider } from '@nextui-org/react'

interface AmountSelectorProps {
  amount: number
  minAmount: number
  maxAmount: number
  step: number
  onChange: (value: number) => void
}

const AmountSelector = ({ amount, minAmount, maxAmount, step, onChange }: AmountSelectorProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  return (
    <div className='mb-4'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-gray-600'>Monto del crédito</span>
        <span className='text-2xl font-bold text-primary flex items-center'>{formatCurrency(amount)}</span>
      </div>

      <Slider 
        size="lg"
        step={step}
        minValue={minAmount}
        maxValue={maxAmount}
        value={amount}
        onChange={(value) => onChange(Number(value))}
        className="max-w-full"
        color="primary"
        showSteps={true}
        marks={[
          {
            value: minAmount,
            label: formatCurrency(minAmount)
          },
          {
            value: maxAmount,
            label: formatCurrency(maxAmount)
          }
        ]}
        classNames={{
          base: "max-w-full",
          filler: "bg-primary",
          labelWrapper: "mb-2",
          mark: "mt-1",
          markLabel: "text-small text-gray-500"
        }}
      />
    </div>
  )
}

export default AmountSelector