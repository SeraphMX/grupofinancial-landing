import React from 'react';
import { Briefcase, CheckCircle2, HelpCircle } from 'lucide-react';
import { Accordion, AccordionItem } from '@nextui-org/react';

const AboutUs = () => {
  const processSteps = [
    {
      title: 'Solicitud en Línea',
      description: 'Completa nuestra solicitud digital en menos de 10 minutos.',
    },
    {
      title: 'Evaluación Rápida',
      description: 'Analizamos tu solicitud en menos de 24 horas.',
    },
    {
      title: 'Aprobación',
      description: 'Te notificamos la aprobación y los términos del crédito.',
    },
    {
      title: 'Documentación',
      description: 'Recopilamos la documentación necesaria de manera digital.',
    },
    {
      title: 'Firma de Contrato',
      description: 'Firmamos el contrato de manera electrónica.',
    },
    {
      title: 'Desembolso',
      description: 'Transferimos el dinero a tu cuenta en 24-48 horas.',
    },
  ];

  const faqs = [
    {
      question: '¿Cuáles son los requisitos mínimos para solicitar un crédito?',
      answer: 'Los requisitos básicos incluyen: ser mayor de edad, tener identificación oficial vigente, comprobante de domicilio, historial crediticio favorable y comprobantes de ingresos.',
    },
    {
      question: '¿Cuánto tiempo toma el proceso de aprobación?',
      answer: 'El proceso de aprobación inicial toma menos de 24 horas. Una vez aprobado, el desembolso puede realizarse en 24-48 horas adicionales.',
    },
    {
      question: '¿Qué tasas de interés manejan?',
      answer: 'Nuestras tasas son competitivas y personalizadas, comenzando desde el 2% mensual. La tasa exacta dependerá de tu perfil crediticio y el tipo de crédito.',
    },
    {
      question: '¿Puedo pagar mi crédito anticipadamente?',
      answer: 'Sí, puedes realizar pagos anticipados sin penalización. Esto te ayudará a reducir los intereses generados.',
    },
    {
      question: '¿Qué documentación necesito presentar?',
      answer: 'La documentación básica incluye: identificación oficial, comprobante de domicilio, estados de cuenta bancarios y comprobantes de ingresos. Para empresas, se requiere documentación adicional.',
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Sobre FinanceFlow
            </h1>
            <p className="text-lg text-gray-600">
              Somos una empresa financiera comprometida con el crecimiento de personas y empresas,
              ofreciendo soluciones crediticias innovadoras y accesibles.
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Nuestro Proceso
            </h2>
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Preguntas Frecuentes
            </h2>
            <Accordion variant="bordered">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  aria-label={faq.question}
                  title={faq.question}
                  indicator={<HelpCircle className="text-primary" />}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;