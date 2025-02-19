import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { products } from '../lib/data/products'
import type { RootState } from '../store/store'

interface RelatedProductsProps {
  simulators?: boolean
}

const RelatedProducts = ({ simulators = false }: RelatedProductsProps) => {
  const { creditType } = useSelector((state: RootState) => state.credit)

  // Filtrar el producto actual basado en el tipo de crédito
  const relatedProducts = products.filter((product) => product.id !== creditType)

  return (
    <div className='bg-gray-50 rounded-xl p-8'>
      <h2 className={`text-xl md:text-2xl font-semibold text-primary mb-6 ${simulators ? 'text-center' : 'text-left'}`}>
        Otras opciones de financiamiento
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-4'>
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={simulators ? product.simulator : product.path}
            className='bg-white  rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
          >
            <div className='flex flex-col items-start '>
              <header className='flex items-center  gap-2 p-3'>
                <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <product.icon className='h-5 w-5 text-primary' />
                </div>
                <h3 className='text-xl md:text-lg font-semibold text-primary '>{product.title}</h3>
              </header>
              <div>
                <p className='text-gray-600 p-3 pt-0'>{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
