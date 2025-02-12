import { supabase } from '../lib/supabase';
import type { ClientType, CreditType, GuaranteeType } from '../store/creditSlice';

interface SolicitudData {
  tipo_credito: CreditType;
  tipo_cliente: ClientType;
  tipo_garantia?: GuaranteeType;
  monto: number;
  plazo: number;
  pago_mensual: number;
  nombre: string;
  email: string;
  telefono: string;
  rfc: string;
  nombre_empresa?: string;
  industria?: string;
  ingresos_anuales?: string;
}

export const createSolicitud = async (data: SolicitudData) => {
  try {
    const { data: solicitud, error } = await supabase
      .from('solicitudes')
      .insert([
        {
          ...data,
          ip_address: await fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => data.ip)
            .catch(() => null),
          user_agent: navigator.userAgent
        }
      ])

    if (error) throw error;
    return solicitud;
  } catch (error) {
    console.error('Error creating solicitud:', error);
    throw error;
  }
};