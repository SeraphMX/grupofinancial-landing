import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  amount: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert('Solicitud enviada con éxito. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Solicita tu Crédito
            </h2>
            <p className="text-gray-600">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  {...register('name', { required: 'Este campo es requerido' })}
                  className="input-field"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Correo electrónico inválido',
                    },
                  })}
                  className="input-field"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  {...register('phone', {
                    required: 'Este campo es requerido',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Teléfono inválido (10 dígitos)',
                    },
                  })}
                  className="input-field"
                  placeholder="1234567890"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monto Solicitado
                </label>
                <input
                  {...register('amount', { required: 'Este campo es requerido' })}
                  className="input-field"
                  placeholder="$25,000"
                />
                {errors.amount && (
                  <p className="mt-1 text-sm text-red-600">{errors.amount.message}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                {...register('message')}
                className="input-field min-h-[100px]"
                placeholder="Cuéntanos más sobre tu necesidad de crédito..."
              />
            </div>

            <button type="submit" className="btn-primary w-full mt-6">
              Enviar Solicitud
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;