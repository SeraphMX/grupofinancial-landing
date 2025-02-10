import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-6">
              Aviso de Privacidad
            </h1>
            <p className="text-lg text-gray-600">
              Tu privacidad es importante para nosotros. Este aviso describe cómo recopilamos,
              usamos y protegemos tu información personal.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-3xl mx-auto prose">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Información que Recopilamos
            </h2>
            <p className="text-gray-600 mb-4">
              Recopilamos información personal que tú nos proporcionas directamente:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Nombre completo</li>
              <li>Información de contacto (correo electrónico, teléfono)</li>
              <li>Dirección</li>
              <li>RFC</li>
              <li>Información financiera</li>
              <li>Documentos de identificación</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Uso de la Información
            </h2>
            <p className="text-gray-600 mb-4">
              Utilizamos tu información personal para:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Procesar tus solicitudes de crédito</li>
              <li>Verificar tu identidad</li>
              <li>Comunicarnos contigo sobre nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
              <li>Mejorar nuestros servicios</li>
              <li>Prevenir fraudes</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. Protección de Datos
            </h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas, administrativas y físicas para
              proteger tu información personal contra acceso no autorizado, pérdida,
              alteración o destrucción.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Derechos ARCO
            </h2>
            <p className="text-gray-600">
              Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento
              de tus datos personales. Puedes ejercer estos derechos enviando una
              solicitud a privacy@financeflow.mx
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Cambios al Aviso de Privacidad
            </h2>
            <p className="text-gray-600">
              Nos reservamos el derecho de actualizar este aviso de privacidad en
              cualquier momento. Los cambios serán publicados en nuestro sitio web
              y te notificaremos por correo electrónico si hay cambios significativos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;