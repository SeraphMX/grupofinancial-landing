import { Alert, Button, cn, InputOtp } from '@nextui-org/react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { verifyOTP } from '../../lib/utils/phone'

interface OTPVerificationProps {
  phone: string
  onVerified: () => void
  onBack: () => void
}

const OTPVerification = ({ phone, onVerified, onBack }: OTPVerificationProps) => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isVerifying, setIsVerifying] = useState(false)

  const handleVerify = async () => {
    if (otp.length !== 6) return

    setIsVerifying(true)
    setError(null)

    try {
      const result = await verifyOTP(phone, otp)
      if (result.success) {
        onVerified()
      } else {
        setError('Código incorrecto')
      }
    } catch (error) {
      setError('Error al verificar el código')
    } finally {
      setIsVerifying(false)
    }
  }

  const handleComplete = (value?: string) => {
    if (value) {
      setOtp(value)
      setError(null)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value)
  }

  return (
    <div className='space-y-4 '>
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-primary mb-2'>Verificación</h2>
      </div>

      <div className='mx-auto space-y-4 bg-white p-6 rounded-xl shadow-lg'>
        <div className='text-center'>
          <p className='text-gray-600 mb-2 text-sm' style={{ textWrap: 'balance' }}>
            Para ingresar tu solicitud debemos asegurarnos que tienes acceso al télefono que nos has proporcionado, puedes regresar si
            necesitas cambiarlo. Hemos enviado un código de verificación al número:
          </p>
          <p className='text-primary font-semibold text-2xl'>{phone}</p>
        </div>

        <div className='flex justify-center'>
          <InputOtp
            name='otp'
            length={6}
            value={otp}
            onChange={handleChange}
            onComplete={handleComplete}
            classNames={{
              input: 'w-10 h-10 text-center text-lg'
              //inputWrapper: 'gap-2'
            }}
          />
        </div>

        {error && <p className='text-danger text-center text-sm'>{error} </p>}

        <div>
          <div className='flex items-center justify-center w-full'>
            <Alert
              color='warning'
              description='Nos importa la seguridad de tu información. Así confirmamos que eres tú quien solicita el crédito y evitamos que suplanten tu identidad.'
              title='Por qué realizamos esta validación?'
              variant='faded'
              classNames={{
                title: cn('font-semibold'),
                description: cn('text-tiny')
              }}
            />
          </div>
        </div>

        <div className='flex justify-between pt-4'>
          <Button variant='bordered' startContent={<ArrowLeft className='h-5 w-5' />} onClick={onBack} isDisabled={isVerifying}>
            Regresar
          </Button>
          <Button
            color='primary'
            onClick={handleVerify}
            isDisabled={otp.length !== 6 || isVerifying}
            isLoading={isVerifying}
            spinner={<Loader2 className='h-5 w-5 animate-spin' />}
          >
            Verificar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification
