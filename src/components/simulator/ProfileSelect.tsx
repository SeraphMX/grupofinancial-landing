import { Building2, User } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { ClientType, setClientType } from '../../store/creditSlice'
import type { RootState } from '../../store/store'

const ProfileSelect = () => {
  const dispatch = useDispatch()

  const { clientType } = useSelector((state: RootState) => state.credit)

  const handleClientTypeSelect = (type: ClientType) => {
    dispatch(setClientType(type))
  }

  return (
    <>
      <h2 className='text-2xl font-bold text-primary text-center my-2'>¿Cuál es tu perfil ?</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <button
          onClick={() => handleClientTypeSelect('personal')}
          className={`bg-white p-6 rounded-xl border-2 transition-all ${
            clientType === 'personal' ? 'border-secondary bg-secondary/10' : 'border-gray-200 hover:border-secondary/50'
          }`}
        >
          <User className='w-12 h-12 mx-auto mb-4 text-primary' />
          <h3 className='text-xl font-semibold text-primary mb-2'>Persona Física</h3>
          <p className='text-gray-600'>Créditos personales para cubrir cualquier necesidad </p>
        </button>
        <button
          onClick={() => handleClientTypeSelect('business')}
          className={`bg-white p-6 rounded-xl border-2 transition-all ${
            clientType === 'business' ? 'border-secondary bg-secondary/10' : 'border-gray-200 hover:border-secondary/50'
          }`}
        >
          <Building2 className='w-12 h-12 mx-auto mb-4 text-primary' />
          <h3 className='text-xl font-semibold text-primary mb-2'>Empresa</h3>
          <p className='text-gray-600'>Financiamiento empresarial para impulsar tu negocio</p>
        </button>
      </div>
    </>
  )
}

export default ProfileSelect
