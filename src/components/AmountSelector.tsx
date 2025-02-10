import React from 'react';
import { DollarSign } from 'lucide-react';

interface AmountSelectorProps {
  amount: number;
  minAmount: number;
  maxAmount: number;
  step: number;
  onChange: (value: number) => void;
}

const AmountSelector = ({ amount, minAmount, maxAmount, step, onChange }: AmountSelectorProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
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
        min={minAmount}
        max={maxAmount}
        step={step}
        value={amount}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
      />

      <div className="flex justify-between mt-2 text-sm text-gray-500">
        <span>{formatCurrency(minAmount)}</span>
        <span>{formatCurrency(maxAmount)}</span>
      </div>
    </div>
  );
};

export default AmountSelector;