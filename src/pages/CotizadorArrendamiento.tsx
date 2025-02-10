import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, User, Send, Calculator } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from '@nextui-org/react';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  phone: z.string().regex(/^[0-9]{10}$/, 'El teléfono debe tener 10 dígitos'),
  companyName: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const CotizadorArrendamiento = () => {
  const [step, setStep] = useState(1);
  const [clientType, setClientType] = useState<'personal' | 'business' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log('Datos del formulario:', { clientType, ...data });
    setStep(3);
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
                  onClick={() => setStep(1)}
                  startContent={<ArrowLeft className="h-5 w-5" />}
                >
                  Anterior
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  endContent={<Send className="h-5 w-5" />}
                >
                  Enviar Solicitud
                </Button>
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Send className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-primary">
              ¡Gracias por tu interés!
            </h2>
            <p className="text-gray-600">
              Hemos recibido tu solicitud. Un asesor especializado se pondrá en contacto
              contigo en las próximas 24 horas para discutir las opciones de arrendamiento
              que mejor se adapten a tus necesidades.
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