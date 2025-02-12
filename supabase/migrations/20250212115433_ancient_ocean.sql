/*
  # Crear tabla de solicitudes

  1. Nueva Tabla
    - `solicitudes`
      - `id` (uuid, primary key)
      - `tipo_credito` (text) - Tipo de crédito solicitado (simple, revolvente, arrendamiento)
      - `tipo_cliente` (text) - Tipo de cliente (personal, business)
      - `tipo_garantia` (text) - Tipo de garantía (sin-garantia, con-garantia)
      - `monto` (numeric) - Monto solicitado
      - `plazo` (integer) - Plazo en meses
      - `pago_mensual` (numeric) - Pago mensual calculado
      - `nombre` (text) - Nombre del solicitante
      - `email` (text) - Email del solicitante
      - `telefono` (text) - Teléfono del solicitante
      - `rfc` (text) - RFC del solicitante
      - `nombre_empresa` (text) - Nombre de la empresa (opcional)
      - `industria` (text) - Industria de la empresa (opcional)
      - `ingresos_anuales` (text) - Rango de ingresos anuales (opcional)
      - `status` (text) - Estado de la solicitud
      - `ip_address` (text) - IP del solicitante
      - `user_agent` (text) - User agent del navegador
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Seguridad
    - Habilitar RLS
    - Permitir inserción pública (cualquiera puede crear una solicitud)
    - Solo usuarios autenticados pueden leer las solicitudes
*/

-- Crear la tabla de solicitudes
CREATE TABLE solicitudes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tipo_credito text NOT NULL,
  tipo_cliente text NOT NULL,
  tipo_garantia text,
  monto numeric NOT NULL,
  plazo integer NOT NULL,
  pago_mensual numeric NOT NULL,
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text NOT NULL,
  rfc text NOT NULL,
  nombre_empresa text,
  industria text,
  ingresos_anuales text,
  status text NOT NULL DEFAULT 'nueva',
  ip_address text,
  user_agent text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Crear índices para búsquedas comunes
CREATE INDEX solicitudes_status_idx ON solicitudes(status);
CREATE INDEX solicitudes_created_at_idx ON solicitudes(created_at);
CREATE INDEX solicitudes_tipo_credito_idx ON solicitudes(tipo_credito);
CREATE INDEX solicitudes_email_idx ON solicitudes(email);

-- Habilitar Row Level Security
ALTER TABLE solicitudes ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserción pública
CREATE POLICY "Permitir inserción pública"
  ON solicitudes
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Política para permitir lectura solo a usuarios autenticados
CREATE POLICY "Solo usuarios autenticados pueden leer"
  ON solicitudes
  FOR SELECT
  TO authenticated
  USING (true);

-- Trigger para actualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_solicitudes_updated_at
  BEFORE UPDATE ON solicitudes
  FOR EACH ROW
  EXECUTE PROCEDURE update_updated_at_column();