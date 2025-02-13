import { Building, RefreshCw, Wallet } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { CreditType } from '../store/creditSlice'
import type { RootState } from '../store/store'

const products: Array<{
  id: CreditType
  icon: any
  title: string
  description: string
  path: string
}> = [
  {
    id: 'simple',
    icon: Wallet,
    title: 'Crédito Simple',
    description: 'Financiamiento a medida con tasas competitivas y plazos flexibles.',
    path: '/productos/credito-simple'
  },
  {
    id: 'revolvente',
    icon: RefreshCw,
    title: 'Crédito Revolvente',
    description: 'Línea de crédito renovable que te permite disponer de fondos según tus necesidades.',
    path: '/productos/credito-revolvente'
  },
  {
    id: 'arrendamiento',
    icon: Building,
    title: 'Arrendamiento',
    description: 'Solución ideal para adquirir activos sin comprometer tu capital.',
    path: '/productos/arrendamiento'
  }
]

const RelatedProducts = () => {
  const { creditType } = useSelector((state: RootState) => state.credit)

  // Filtrar el producto actual basado en el tipo de crédito
  const relatedProducts = products.filter((product) => product.id !== creditType)

  return (
    <div className='bg-gray-50 rounded-xl p-8'>
      <h2 className='text-2xl font-semibold text-primary mb-6'>Conoce otras opciones de financiamiento</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            to={product.path}
            className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
          >
            <div className='flex items-start space-x-4'>
              <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                <product.icon className='h-6 w-6 text-primary' />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-primary mb-2'>{product.title}</h3>
                <p className='text-gray-600'>{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
