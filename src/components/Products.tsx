import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, RefreshCw, Building } from 'lucide-react';

const products = [
  {
    id: 'credito-simple',
    icon: Wallet,
    title: 'Crédito Simple',
    description: 'Financiamiento a medida con tasas competitivas y plazos flexibles para impulsar tu negocio o proyecto personal.',
    features: ['Tasas competitivas', 'Plazos flexibles', 'Sin comisiones ocultas']
  },
  {
    id: 'credito-revolvente',
    icon: RefreshCw,
    title: 'Crédito Revolvente',
    description: 'Línea de crédito renovable que te permite disponer de fondos según tus necesidades de manera continua.',
    features: ['Disponibilidad inmediata', 'Pagos flexibles', 'Renovación automática']
  },
  {
    id: 'arrendamiento',
    icon: Building,
    title: 'Arrendamiento',
    description: 'Solución ideal para adquirir activos sin comprometer tu capital, con beneficios fiscales y financieros.',
    features: ['Beneficios fiscales', 'Sin inversión inicial', 'Opción a compra']
  }
];

const Products = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Productos Financieros
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones financieras diseñadas para satisfacer tus necesidades específicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/productos/${product.id}`}
                  className="btn-primary w-full"
                >
                  Ver Detalles
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;