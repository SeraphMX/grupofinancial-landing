import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, User, Send, Calculator } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button, RadioGroup, Radio } from '@nextui-org/react';
import { z } from 'zod';
import AmountSelector from '../components/AmountSelector';
import { createSolicitud } from '../services/solicitudes';

const formSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().regex(/^[0-9]{10}$/, 'El teléfono debe tener 10 dígitos'),
  rfc: z.string().min(12, 'RFC inválido'),
  companyName: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CotizadorArrendamiento = () => {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState<'personal' | 'business' | null>(null);
  const [arrendamientoType, setArrendamientoType] = useState<'liquidez' | 'compra' | null>(null);
  const [assetValue, setAssetValue] = useState(1000000);
  const [term, setTerm] = useState(12);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateMonthlyPayment = () => {
    const rate = 0.02; // 2% mensual
    const months = term;
    const loanAmount = arrendamientoType === 'liquidez' ? assetValue * 0.8 : assetValue;
    
    const monthlyRate = rate;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, months);
    const denominator = Math.pow(1 + monthlyRate, months) - 1;
    const monthlyPayment = loanAmount * (numerator / denominator);
    
    return Math.round(monthlyPayment);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      await createSolicitud({
        tipo_credito: 'arrendamiento',
        tipo_cliente: clientType!,
        monto: arrendamientoType === 'liquidez' ? assetValue * 0.8 : assetValue,
        plazo: term,
        pago_mensual: calculateMonthlyPayment(),
        nombre: data.name,
        email: data.email,
        telefono: data.phone,
        rfc: data.rfc,
        nombre_empresa: data.companyName
      });
      setStep(4);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              ¿Qué tipo de cliente eres?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => {
                  setClientType('personal');
                  setStep(2);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  clientType === 'personal'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
              >
                <User className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-primary mb-2">Persona Física</h3>
                <p className="text-gray-600">
                  Arrendamiento para profesionistas y personas físicas con actividad empresarial
                </p>
              </button>
              <button
                onClick={() => {
                  setClientType('business');
                  setStep(2);
                }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  clientType === 'business'
                    ? 'border-secondary bg-secondary/10'
                    : 'border-gray-200 hover:border-secondary/50'
                }`}
              >
                <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-primary mb-2">Empresa</h3>
                <p className="text-gray-600">
                  Soluciones de arrendamiento para empresas de cualquier tamaño
                </p>
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              ¿Qué tipo de arrendamiento necesitas?
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <RadioGroup
                value={arrendamientoType || ''}
                onValueChange={(value) => setArrendamientoType(value as 'liquidez' | 'compra')}
                className="mb-8"
              >
                <Radio value="liquidez">Obtener Liquidez</Radio>
                <Radio value="compra">Compra de Equipo</Radio>
              </RadioGroup>

              {arrendamientoType && (
                <>
                  <div className="mb-8">
                    <AmountSelector
                      amount={assetValue}
                      minAmount={1000000}
                      maxAmount={20000000}
                      step={100000}
                      onChange={setAssetValue}
                    />
                    {arrendamientoType === 'liquidez' && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-1">Monto del préstamo (80% del valor)</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(assetValue * 0.8)}</p>
                      </div>
                    )}
                  </div>

                  <div className="mb-8">
                    <RadioGroup
                      label="Plazo"
                      value={term.toString()}
                      onValueChange={(value) => setTerm(parseInt(value))}
                      orientation="horizontal"
                    >
                      <Radio value="12">12 meses</Radio>
                      <Radio value="24">24 meses</Radio>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-600 mb-1">Pago Mensual Estimado</p>
                      <p className="text-xl font-bold text-primary">
                        {formatCurrency(calculateMonthlyPayment())}
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <Button
                  onClick={() => setStep(1)}
                  variant="bordered"
                  startContent={<ArrowLeft className="h-5 w-5" />}
                >
                  Anterior
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  color="primary"
                  isDisabled={!arrendamientoType}
                  endContent={<Send className="h-5 w-5" />}
                >
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Datos de Contacto
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                {...register('name')}
                label="Nombre Completo"
                variant="bordered"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
              />
              <Input
                {...register('email')}
                label="Correo Electrónico"
                type="email"
                variant="bordered"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
              />
              <Input
                {...register('phone')}
                label="Teléfono"
                type="tel"
                variant="bordered"
                isInvalid={!!errors.phone}
                errorMessage={errors.phone?.message}
              />
              <Input
                {...register('rfc')}
                label="RFC"
                variant="bordered"
                isInvalid={!!errors.rfc}
                errorMessage={errors.rfc?.message}
              />
              {clientType === 'business' && (
                <Input
                  {...register('companyName')}
                  label="Nombre de la Empresa"
                  variant="bordered"
                  isInvalid={!!errors.companyName}
                  errorMessage={errors.companyName?.message}
                />
              )}
              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="bordered"
                  onClick={() => setStep(2)}
                  startContent={<ArrowLeft className="h-5 w-5" />}
                >
                  Anterior
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  isLoading={isSubmitting}
                  endContent={<Send className="h-5 w-5" />}
                >
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Send className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-primary">
              ¡Gracias por tu interés!
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg space-y-4 text-left">
              <h3 className="font-semibold text-primary">Resumen de tu solicitud:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Tipo de Arrendamiento</p>
                  <p className="font-semibold">
                    {arrendamientoType === 'liquidez' ? 'Obtener Liquidez' : 'Compra de Equipo'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Valor del Activo</p>
                  <p className="font-semibold">{formatCurrency(assetValue)}</p>
                </div>
                {arrendamientoType === 'liquidez' && (
                  <div>
                    <p className="text-sm text-gray-600">Monto del Préstamo</p>
                    <p className="font-semibold">{formatCurrency(assetValue * 0.8)}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600">Plazo</p>
                  <p className="font-semibold">{term} meses</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Pago Mensual Estimado</p>
                  <p className="font-semibold">{formatCurrency(calculateMonthlyPayment())}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              Un asesor especializado se pondrá en contacto contigo en las próximas 24 horas
              para discutir las opciones de arrendamiento que mejor se adapten a tus necesidades.
            </p>
            <Button
              color="primary"
              onClick={() => setStep(1)}
              className="mt-6"
            >
              Realizar otra consulta
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-20">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/productos/arrendamiento"
              className="inline-flex items-center text-primary hover:text-primary/80"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Volver a Arrendamiento
            </Link>
            <div className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold text-primary">Cotizador de Arrendamiento</h1>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CotizadorArrendamiento;