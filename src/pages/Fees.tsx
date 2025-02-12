import React from 'react';
import { Calculator } from 'lucide-react';

const Fees = () => {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-primary mb-6">
              Intereses y Comisiones
            </h1>
            <p className="text-lg text-gray-600">
              Conoce los detalles sobre nuestras tasas de interés, comisiones y costos asociados
              a nuestros productos financieros.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-3xl mx-auto prose">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Tasas de Interés
            </h2>
            <p className="text-gray-600 mb-4">
              Nuestras tasas de interés son competitivas y se determinan con base en:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Historial crediticio del cliente</li>
              <li>Tipo de crédito solicitado</li>
              <li>Plazo del financiamiento</li>
              <li>Garantías ofrecidas</li>
            </ul>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <h3 className="text-xl font-semibold text-primary mb-3">Tasas por Producto</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Crédito Simple</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Sin garantía: desde 24% hasta 36% anual</li>
                    <li>Con garantía hipotecaria: desde 12% hasta 18% anual</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Crédito Revolvente</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Tasa base: desde 18% hasta 30% anual</li>
                    <li>Tasa preferencial para clientes recurrentes: desde 15% anual</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Arrendamiento</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Tasa fija: desde 16% hasta 24% anual</li>
                    <li>Opción a compra: 1% del valor original</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Comisiones
            </h2>
            <p className="text-gray-600 mb-4">
              Las siguientes comisiones aplican a nuestros productos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-700">Comisión por Apertura</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Crédito Simple: 2% sobre el monto autorizado</li>
                    <li>Crédito Revolvente: 2% sobre la línea autorizada</li>
                    <li>Arrendamiento: 1.5% sobre el valor del activo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Gastos de Investigación</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Personas físicas: $1,500 MXN + IVA</li>
                    <li>Personas morales: $2,500 MXN + IVA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Comisiones Adicionales</h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Pago tardío: 5% sobre el monto vencido</li>
                    <li>Gastos de cobranza: según el caso</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. CAT (Costo Anual Total)
            </h2>
            <p className="text-gray-600">
              El CAT varía según el producto y las condiciones específicas de cada crédito:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <ul className="list-disc pl-6 text-gray-600">
                <li>Crédito Simple sin garantía: CAT promedio 32% sin IVA</li>
                <li>Crédito Simple con garantía: CAT promedio 20% sin IVA</li>
                <li>Crédito Revolvente: CAT promedio 28% sin IVA</li>
                <li>Arrendamiento: CAT promedio 25% sin IVA</li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                *CAT: El Costo Anual Total de financiamiento expresado en términos porcentuales anuales que, para fines informativos
                y de comparación, incorpora la totalidad de los costos y gastos inherentes a los créditos.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Notas Importantes
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Todas las tasas y comisiones están sujetas a cambios sin previo aviso</li>
              <li>Los montos no incluyen IVA a menos que se especifique lo contrario</li>
              <li>Las tasas preferenciales están sujetas a aprobación de crédito</li>
              <li>Se pueden aplicar condiciones especiales según el perfil del cliente</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Fees;