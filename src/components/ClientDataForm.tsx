import { zodResolver } from '@hookform/resolvers/zod'
import { Autocomplete, AutocompleteItem, Button, Input, Select, SelectItem } from '@nextui-org/react'
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { industries } from '../lib/data/industries'
import { businessFormSchema, personalFormSchema } from '../lib/validations/credit'
import type { ClientType } from '../store/creditSlice'
import { useState, useEffect } from 'react'
import { validatePhoneNumber } from '../lib/utils/phone'

interface ClientDataFormProps {
  clientType: ClientType
  defaultValues?: any
  onSubmit: (data: any) => void
  onPrevious: () => void
}

const ClientDataForm = ({ clientType, defaultValues, onSubmit, onPrevious }: ClientDataFormProps) => {
  const [isValidatingPhone, setIsValidatingPhone] = useState(false)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm({
    resolver: zodResolver(clientType === 'business' ? businessFormSchema : personalFormSchema),
    defaultValues
  })

  const phone = watch('phone')

  // Limpiar el error cuando el teléfono tenga 10 dígitos
  useEffect(() => {
    if (phone?.length === 10) {
      setPhoneError(null)
    }
  }, [phone])

  const handlePhoneValidation = async (phoneNumber: string) => {
    try {
      setIsValidatingPhone(true)
      setPhoneError(null)

      const formattedPhone = phoneNumber.startsWith('+52') ? phoneNumber : `+52${phoneNumber}`
      const result = await validatePhoneNumber(formattedPhone)

      if (!result.isValid) {
        setPhoneError('El número de teléfono no es válido')
        return false
      }

      if (!result.isMobile) {
        setPhoneError('El número debe ser un teléfono móvil')
        return false
      }

      return true
    } catch (error) {
      console.error('Error validating phone:', error)
      setPhoneError('Error al validar el número de teléfono')
      return false
    } finally {
      setIsValidatingPhone(false)
    }
  }

  const handleFormSubmit = async (data: any) => {
    const isValid = await handlePhoneValidation(data.phone)
    if (!isValid) return
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          {...register('name')}
          label='Nombre Completo'
          variant='bordered'
          isInvalid={!!errors.name}
          errorMessage={errors.name?.message?.toString()}
        />
        <Input
          {...register('email')}
          label='Correo Electrónico'
          type='email'
          variant='bordered'
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message?.toString()}
        />
        <Input
          {...register('phone')}
          label='Teléfono'
          type='tel'
          variant='bordered'
          maxLength={10}
          isInvalid={!!errors.phone || !!phoneError}
          errorMessage={(errors.phone?.message?.toString() || phoneError)}
          description="Debe ser un número de teléfono móvil"
          endContent={isValidatingPhone && (
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
          )}
        />
        <Input
          {...register('rfc')}
          label='RFC'
          variant='bordered'
          maxLength={13}
          isInvalid={!!errors.rfc}
          errorMessage={errors.rfc?.message?.toString()}
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.toUpperCase()
            setValue('rfc', e.currentTarget.value, { shouldValidate: true })
          }}
        />

        {clientType === 'business' && (
          <>
            <Input
              {...register('companyName')}
              label='Nombre de la Empresa'
              variant='bordered'
              isInvalid={!!errors.companyName}
              errorMessage={errors.companyName?.message?.toString()}
            />
            <Controller
              name='industry'
              control={control}
              render={({ field }) => (
                <Autocomplete
                  label='Industria'
                  variant='bordered'
                  defaultItems={industries.map((industry) => ({
                    label: industry,
                    value: industry
                  }))}
                  placeholder='Selecciona o escribe la industria'
                  isInvalid={!!errors.industry}
                  errorMessage={errors.industry?.message?.toString()}
                  defaultSelectedKey={field.value}
                  onSelectionChange={(key) => field.onChange(key)}
                  allowsCustomValue={true}
                >
                  {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
              )}
            />
            <div className='md:col-span-2'>
              <Select
                {...register('annualRevenue')}
                label='Ingresos Anuales'
                variant='bordered'
                isInvalid={!!errors.annualRevenue}
                errorMessage={'Debes de seleccionar una opción'}
              >
                <SelectItem key='menos-2m' value='menos-2m'>
                  Menos de 2 millones
                </SelectItem>
                <SelectItem key='2m-10m' value='2m-10m'>
                  De 2 a 10 millones
                </SelectItem>
                <SelectItem key='10m-25m' value='10m-25m'>
                  De 10 a 25 millones
                </SelectItem>
                <SelectItem key='mas-25m' value='mas-25m'>
                  Más de 25 millones
                </SelectItem>
              </Select>
            </div>
          </>
        )}
      </div>

      <div className='flex justify-between mt-8'>
        <Button type='button' onClick={onPrevious} variant='bordered' startContent={<ArrowLeft className='h-5 w-5' />}>
          Anterior
        </Button>
        <Button 
          type='submit' 
          color='primary' 
          endContent={<ArrowRight className='h-5 w-5' />}
          isLoading={isValidatingPhone}
        >
          Continuar
        </Button>
      </div>
    </form>
  )
}

export default ClientDataForm