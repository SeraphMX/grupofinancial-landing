import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

const CreditCalculator = () => {
  const [amount, setAmount] = useState(25000);
  const min = 1000;
  const max = 50000;
  const step = 1000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Calcula tu Crédito
            </h2>
            <p className="text-gray-600">
              Desliza el control para seleccionar el monto que necesitas
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Monto del Crédito</span>
                <span className="text-2xl font-bold text-primary flex items-center">
                  <DollarSign className="h-6 w-6" />
                  {formatCurrency(amount)}
                </span>
              </div>

              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={amount}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
              />

              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{formatCurrency(min)}</span>
                <span>{formatCurrency(max)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Pago Mensual Estimado</p>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(amount / 12)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Plazo</p>
                <p className="text-xl font-bold text-primary">12 meses</p>
              </div>
            </div>

            <a href="#contact" className="btn-secondary w-full">
              Solicitar Este Monto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCalculator;