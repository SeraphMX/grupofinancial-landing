import React from 'react';
import { Clock, Shield, Users, Percent } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Proceso Rápido',
    description: 'Aprobación en menos de 24 horas con documentación mínima',
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Tus datos están protegidos con los más altos estándares de seguridad',
  },
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Asesores expertos disponibles para guiarte en cada paso',
  },
  {
    icon: Percent,
    title: 'Tasas Competitivas',
    description: 'Las mejores tasas del mercado adaptadas a tu perfil',
  },
];

const Benefits = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos destacamos por ofrecer soluciones financieras que se adaptan a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;