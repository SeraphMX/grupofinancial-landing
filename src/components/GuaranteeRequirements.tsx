import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

export const GuaranteeRequirements = [
  <>
    Escrituras de la propiedad
    <Popover showArrow>
      <PopoverTrigger>
        <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
          <span className='font-bold text-lg'>?</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='px-1 py-2 max-w-[300px]'>
          <div className='text-lg font-bold'>¿Por qué es necesario?</div>
          <div className='text-small'>
            Necesitamos las escrituras de la propiedad con el sello del Registro Público de la Propiedad, que demuestre que está libre de
            gravámenes (es decir, que no tiene deudas o cargas pendientes). Este documento, conocido como primer testimonio, es esencial
            para asegurarnos de que la propiedad pueda ser utilizada como garantía en el crédito.
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </>,
  'Boleta Predial',
  'Recibo de agua',
  'Fotos, planos y ubicación de la propiedad',
  <>
    Avalúo comercial
    <Popover showArrow>
      <PopoverTrigger>
        <Button radius='full' size='sm' isIconOnly className='ml-1' variant='ghost' color='secondary'>
          <span className='font-bold text-lg'>?</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='px-1 py-2 max-w-[300px]'>
          <div className='text-lg font-bold'>¿Por qué es necesario?</div>
          <div className='text-small'>
            Requerimos contar con un avalúo comercial actualizado de la propiedad, ya que este nos permite conocer su valor actual en el
            mercado. Este documento asegura de que la propiedad cubra el monto del crédito solicitado y para cumplir con los requisitos
            establecidos por las instituciones financieras.
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </>
]
