import { supabase } from '../lib/supabase'
import type { ClientType, CreditType } from '../store/creditSlice'

export interface SolicitudData {
  tipo_credito: CreditType
  tipo_cliente: ClientType
  credit_conditions: string
  monto: number
  plazo: number
  pago_mensual: number
  nombre: string
  email: string
  telefono: string
  rfc: string
  credit_destination?: string
  clave_ciec?: string
  nombre_empresa?: string
  industria?: string
  ingresos_anuales?: string
  referrer?: string
}

export const createSolicitud = async (data: SolicitudData) => {
  try {
    const { data: solicitud, error } = await supabase.from('solicitudes').insert([
      {
        ...data,
        ip_address: await fetch('https://api.ipify.org?format=json')
          .then((res) => res.json())
          .then((data) => data.ip)
          .catch(() => null),
        user_agent: navigator.userAgent
      }
    ])

    if (error) throw error
    return solicitud
  } catch (error) {
    console.error('Error creating solicitud:', error)
    throw error
  }
}
