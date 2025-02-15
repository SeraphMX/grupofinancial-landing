import { useState } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { Input } from '@nextui-org/react'
import { verifyOTP } from '../lib/utils/phone'

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

  const handleChange = (value: string) => {
    setOtp(value)
    setError(null)
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Verificación de teléfono</h2>
        <p className="text-gray-600">
          Hemos enviado un código de verificación al número
          <br />
          <span className="font-semibold">+52 {phone}</span>
        </p>
      </div>

      <div className="space-y-4">
        <Input
          type="text"
          label="Código de verificación"
          placeholder="Ingresa el código de 6 dígitos"
          maxLength={6}
          value={otp}
          onChange={(e) => handleChange(e.target.value)}
          isInvalid={!!error}
          errorMessage={error}
          variant="bordered"
        />

        <div className="flex justify-between">
          <Button
            variant="bordered"
            startContent={<ArrowLeft className="h-5 w-5" />}
            onClick={onBack}
            isDisabled={isVerifying}
          >
            Regresar
          </Button>
          <Button
            color="primary"
            onClick={handleVerify}
            isDisabled={otp.length !== 6 || isVerifying}
            isLoading={isVerifying}
            spinner={<Loader2 className="h-5 w-5 animate-spin" />}
          >
            Verificar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OTPVerification