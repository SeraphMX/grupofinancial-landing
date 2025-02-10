import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight animate-slide-up">
            Obtén el Crédito que Necesitas de Manera Rápida y Segura
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Soluciones financieras personalizadas para hacer realidad tus proyectos
          </p>
          <Link
            to="/cotizador"
            state={{ from: 'home' }}
            className="btn-primary text-lg animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Calcular Mi Crédito
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;