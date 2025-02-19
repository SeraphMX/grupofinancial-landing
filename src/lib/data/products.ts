import { Building, LucideIcon, RefreshCw, Wallet } from 'lucide-react'
import { CreditType } from '../../store/creditSlice'

export const products: Array<{
  id: CreditType
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  path: string
  simulator: string
}> = [
  {
    id: 'simple',
    icon: Wallet,
    title: 'Crédito Simple',
    description: 'Financiamiento a medida con tasas competitivas y plazos flexibles para impulsar tu negocio o proyecto personal.',
    features: ['Tasas competitivas', 'Plazos flexibles', 'Sin ningun tipo de  adelanto'],
    path: '/productos/credito-simple',
    simulator: '/solicitud-credito-simple'
  },
  {
    id: 'revolvente',
    icon: RefreshCw,
    title: 'Crédito Revolvente',
    description: 'Línea de crédito renovable que te permite disponer de fondos según tus necesidades de manera continua.',
    features: ['Disponibilidad inmediata', 'Pagos flexibles', 'Renovación automática'],
    path: '/productos/credito-revolvente',
    simulator: '/solicitud-credito-revolvente'
  },
  {
    id: 'arrendamiento',
    icon: Building,
    title: 'Arrendamiento',
    description: 'Solución ideal para adquirir activos sin comprometer tu capital, con beneficios fiscales y financieros.',
    features: ['Beneficios fiscales', 'Sin inversión inicial', 'Opción a compra'],
    path: '/productos/arrendamiento',
    simulator: '/solicitud-arrendamiento'
  }
]
